/**
 * AWS SES Client Configuration
 * Handles email sending through Amazon Simple Email Service
 */

// Deprecated in favor of server-side Nodemailer for contact form
// Keeping SES utilities for discovery flow if still used elsewhere
import { SESClient, SendEmailCommand } from '@aws-sdk/client-ses';

// SES Client Configuration
const sesClient = new SESClient({
  region: import.meta.env.VITE_AWS_REGION || 'us-east-1',
  credentials: {
    accessKeyId: import.meta.env.VITE_AWS_ACCESS_KEY_ID || '',
    secretAccessKey: import.meta.env.VITE_AWS_SECRET_ACCESS_KEY || '',
  },
});

export interface EmailData {
  name: string;
  email: string;
  company: string;
  message: string;
  phone?: string;
}

export interface DiscoveryEmailData {
  contactInfo: {
    name: string;
    email: string;
    company: string;
    phone: string;
  };
  responses: Array<{
    questionId: string;
    answer: string | string[] | number;
    timestamp: Date;
  }>;
  emailContent: string;
}

/**
 * Send contact form email via AWS SES
 */
export const sendContactEmail = async (data: EmailData): Promise<boolean> => {
  try {
    const response = await fetch('/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    });
    if (!response.ok) return false;
    const json = await response.json();
    return Boolean(json?.ok);
  } catch (error) {
    console.error('Error sending contact email via API:', error);
    return false;
  }
};

/**
 * Send discovery form email via AWS SES
 */
export const sendDiscoveryEmail = async (data: DiscoveryEmailData): Promise<boolean> => {
  try {
    const textContent = `
RuleRev - New Discovery Submission

Contact Information:
Name: ${data.contactInfo.name}
Email: ${data.contactInfo.email}
Company: ${data.contactInfo.company}
Phone: ${data.contactInfo.phone || 'Not provided'}

Discovery responses have been submitted. Please see the HTML version for detailed formatting.

Submitted: ${new Date().toLocaleString()}
    `;

    const command = new SendEmailCommand({
      Source: import.meta.env.VITE_SES_FROM_EMAIL || 'noreply@rulerev.com',
      Destination: {
        ToAddresses: [import.meta.env.VITE_SES_TO_EMAIL || 'hello@rulerev.com'],
      },
      Message: {
        Subject: {
          Data: `New Discovery Submission from ${data.contactInfo.name} - ${data.contactInfo.company}`,
          Charset: 'UTF-8',
        },
        Body: {
          Html: {
            Data: data.emailContent,
            Charset: 'UTF-8',
          },
          Text: {
            Data: textContent,
            Charset: 'UTF-8',
          },
        },
      },
    });

    await sesClient.send(command);
    return true;
  } catch (error) {
    console.error('Error sending discovery email:', error);
    return false;
  }
};