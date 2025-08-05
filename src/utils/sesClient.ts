/**
 * AWS SES Client Configuration
 * Handles email sending through Amazon Simple Email Service
 */

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
    const htmlContent = `
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <title>RuleRev - New Contact Form Submission</title>
    <style>
        body {
            font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', system-ui, sans-serif;
            line-height: 1.6;
            color: #f8fafc;
            background: linear-gradient(180deg, #0f172a 0%, #1e293b 30%, #334155 100%);
            margin: 0;
            padding: 20px;
        }
        .container {
            max-width: 600px;
            margin: 0 auto;
            background: rgba(255, 255, 255, 0.05);
            backdrop-filter: blur(16px);
            border-radius: 16px;
            border: 1px solid rgba(255, 255, 255, 0.1);
            overflow: hidden;
        }
        .header {
            background: linear-gradient(135deg, #00f5ff 0%, #1e90ff 50%, #20b2aa 100%);
            padding: 30px;
            text-align: center;
        }
        .header h1 {
            margin: 0;
            color: #1e293b;
            font-size: 24px;
            font-weight: 700;
        }
        .content {
            padding: 30px;
        }
        .contact-info {
            background: rgba(0, 245, 255, 0.1);
            border: 1px solid rgba(0, 245, 255, 0.2);
            border-radius: 12px;
            padding: 20px;
            margin-bottom: 20px;
        }
        .info-row {
            display: flex;
            margin-bottom: 15px;
        }
        .info-label {
            font-weight: 600;
            color: #00f5ff;
            min-width: 80px;
            margin-right: 15px;
        }
        .info-value {
            color: #f8fafc;
        }
        .message-section {
            background: rgba(255, 255, 255, 0.03);
            border-radius: 8px;
            padding: 20px;
            border-left: 4px solid #1e90ff;
        }
        .message-title {
            color: #cbd5e1;
            font-size: 16px;
            font-weight: 600;
            margin-bottom: 10px;
        }
        .message-content {
            color: #f8fafc;
            line-height: 1.6;
            white-space: pre-wrap;
        }
        .footer {
            background: rgba(0, 0, 0, 0.2);
            padding: 20px;
            text-align: center;
            color: #94a3b8;
            font-size: 14px;
        }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <h1>RuleRev - New Contact Form Submission</h1>
        </div>
        
        <div class="content">
            <div class="contact-info">
                <div class="info-row">
                    <div class="info-label">Name:</div>
                    <div class="info-value">${data.name}</div>
                </div>
                <div class="info-row">
                    <div class="info-label">Email:</div>
                    <div class="info-value">${data.email}</div>
                </div>
                <div class="info-row">
                    <div class="info-label">Company:</div>
                    <div class="info-value">${data.company}</div>
                </div>
                ${data.phone ? `
                <div class="info-row">
                    <div class="info-label">Phone:</div>
                    <div class="info-value">${data.phone}</div>
                </div>
                ` : ''}
            </div>
            
            <div class="message-section">
                <div class="message-title">Message:</div>
                <div class="message-content">${data.message}</div>
            </div>
        </div>
        
        <div class="footer">
            <p>This message was sent through the RuleRev contact form.</p>
            <p>Submitted: ${new Date().toLocaleString()}</p>
        </div>
    </div>
</body>
</html>
    `;

    const textContent = `
RuleRev - New Contact Form Submission

Contact Information:
Name: ${data.name}
Email: ${data.email}
Company: ${data.company}
${data.phone ? `Phone: ${data.phone}` : ''}

Message:
${data.message}

Submitted: ${new Date().toLocaleString()}
    `;

    const command = new SendEmailCommand({
      Source: import.meta.env.VITE_SES_FROM_EMAIL || 'noreply@rulerev.com',
      Destination: {
        ToAddresses: [import.meta.env.VITE_SES_TO_EMAIL || 'hello@rulerev.com'],
      },
      Message: {
        Subject: {
          Data: `New Contact Form Submission from ${data.name}`,
          Charset: 'UTF-8',
        },
        Body: {
          Html: {
            Data: htmlContent,
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
    console.error('Error sending contact email:', error);
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