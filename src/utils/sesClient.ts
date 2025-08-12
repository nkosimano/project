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

// Base URL for API. On Netlify set VITE_API_BASE_URL to your server origin.
const API_BASE: string = import.meta.env.VITE_API_BASE_URL || '';

/**
 * Send contact form email via backend API
 */
export const sendContactEmail = async (data: EmailData): Promise<boolean> => {
  try {
    const response = await fetch(`${API_BASE}/api/contact`, {
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
 * Send discovery form email via backend API
 */
export const sendDiscoveryEmail = async (data: DiscoveryEmailData): Promise<boolean> => {
  try {
    const response = await fetch(`${API_BASE}/api/discovery`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    });
    if (!response.ok) return false;
    const json = await response.json();
    return Boolean(json?.ok);
  } catch (error) {
    console.error('Error sending discovery email via API:', error);
    return false;
  }
};