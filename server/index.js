import express from 'express';
import cors from 'cors';
import nodemailer from 'nodemailer';
import dotenv from 'dotenv';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

// Load environment from server/env.local if present
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
dotenv.config({ path: path.resolve(__dirname, 'env.local') });

const app = express();
const port = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

async function getTransporter() {
  if (process.env.SMTP_HOST) {
    return nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT || 587),
      secure: String(process.env.SMTP_SECURE).toLowerCase() === 'true',
      auth: process.env.SMTP_USER && process.env.SMTP_PASS ? {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      } : undefined,
      logger: true,
      debug: true,
    });
  }
  // Fallback to Ethereal for local dev if SMTP not provided
  const testAccount = await nodemailer.createTestAccount();
  const transporter = nodemailer.createTransport({
    host: 'smtp.ethereal.email',
    port: 587,
    secure: false,
    auth: {
      user: testAccount.user,
      pass: testAccount.pass,
    },
    logger: true,
    debug: true,
  });
  return transporter;
}

function escapeHtml(value) {
  if (value == null) return '';
  return String(value)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

function buildContactHtml({ name, email, company, phone, message }) {
  const safe = {
    name: escapeHtml(name),
    email: escapeHtml(email),
    company: escapeHtml(company || ''),
    phone: escapeHtml(phone || ''),
    message: escapeHtml(message || ''),
  };
  return `<!DOCTYPE html>
  <html>
  <head>
    <meta charset="utf-8" />
    <title>RuleRev - New Contact Form Submission</title>
    <style>
      html, body { margin:0; padding:0; }
      body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Inter, Arial, sans-serif; background: #ffffff; color: #0f172a; }
      .container { max-width: 640px; margin: 0 auto; padding: 24px; }
      .card { background: #ffffff; border: 1px solid #e2e8f0; border-radius: 12px; overflow: hidden; }
      .header { background: linear-gradient(135deg, #00f5ff 0%, #1e90ff 50%, #20b2aa 100%); padding: 20px 24px; }
      .header h1 { margin:0; color: #0b1220; font-size: 20px; }
      .content { padding: 24px; }
      .info { display: grid; grid-template-columns: 140px 1fr; row-gap: 12px; column-gap: 16px; margin-bottom: 16px; }
      .label { color: #0ea5e9; font-weight: 600; }
      .value { color: #0f172a; }
      .message { border-left: 4px solid #1e40af; padding: 12px 16px; background: #f8fafc; border-radius: 8px; white-space: pre-wrap; color: #0f172a; }
      .footer { padding: 16px 24px; color: #475569; font-size: 12px; border-top: 1px solid #e2e8f0 }
      a { color: #1d4ed8; text-decoration: underline; }
    </style>
  </head>
  <body>
    <div class="container">
      <div class="card">
        <div class="header"><h1>RuleRev - New Contact Form Submission</h1></div>
        <div class="content">
          <div class="info">
            <div class="label">Name</div><div class="value">${safe.name}</div>
            <div class="label">Email</div><div class="value"><a href="mailto:${safe.email}">${safe.email}</a></div>
            ${safe.company ? `<div class="label">Company</div><div class="value">${safe.company}</div>` : ''}
            ${safe.phone ? `<div class="label">Phone</div><div class="value">${safe.phone}</div>` : ''}
          </div>
          <div class="message">${safe.message}</div>
        </div>
        <div class="footer">Submitted: ${escapeHtml(new Date().toLocaleString())}</div>
      </div>
    </div>
  </body>
  </html>`;
}

function buildContactText({ name, email, company, phone, message }) {
  return [
    'RuleRev - New Contact Form Submission',
    '',
    `Name: ${name}`,
    `Email: ${email}`,
    company ? `Company: ${company}` : undefined,
    phone ? `Phone: ${phone}` : undefined,
    '',
    'Message:',
    message || '',
    '',
    `Submitted: ${new Date().toLocaleString()}`,
  ].filter(Boolean).join('\n');
}

app.post('/api/contact', async (req, res) => {
  const { name, email, company, message, phone } = req.body || {};
  if (!name || !email || !message) {
    return res.status(400).json({ ok: false, error: 'Missing required fields' });
  }
  try {
    const transporter = await getTransporter();
    // Log current SMTP settings (non-sensitive)
    console.log('[SMTP] Config', {
      host: process.env.SMTP_HOST || 'ethereal',
      port: Number(process.env.SMTP_PORT || 587),
      secure: String(process.env.SMTP_SECURE).toLowerCase() === 'true',
      user: process.env.SMTP_USER ? 'configured' : 'not set',
    });
    try {
      const ok = await transporter.verify();
      console.log('[SMTP] verify:', ok);
    } catch (e) {
      console.error('[SMTP] verify failed:', e);
    }
    const html = buildContactHtml({ name, email, company, phone, message });
    const text = buildContactText({ name, email, company, phone, message });
    const info = await transporter.sendMail({
      from: process.env.MAIL_FROM || 'support@rulerev.com',
      to: 'support@rulerev.com',
      subject: `RuleRev – New contact from ${name}`,
      text,
      html,
      replyTo: email,
    });
    console.log('[SMTP] sendMail info', {
      messageId: info && info.messageId,
      response: info && info.response,
      accepted: info && info.accepted,
      rejected: info && info.rejected,
      envelope: info && info.envelope,
    });
    const response = { ok: true };
    if (nodemailer.getTestMessageUrl && info) {
      const url = nodemailer.getTestMessageUrl(info);
      if (url) response.previewUrl = url;
    }
    res.json(response);
  } catch (err) {
    console.error('Nodemailer send error', err);
    res.status(500).json({ ok: false, error: 'Failed to send email' });
  }
});

app.post('/api/discovery', async (req, res) => {
  const { contactInfo, responses, emailContent } = req.body || {};
  if (!contactInfo || !contactInfo.name || !contactInfo.email || !emailContent) {
    return res.status(400).json({ ok: false, error: 'Missing required fields' });
  }
  try {
    const transporter = await getTransporter();
    console.log('[SMTP] Discovery send for', contactInfo.email);
    try {
      const ok = await transporter.verify();
      console.log('[SMTP] verify:', ok);
    } catch (e) {
      console.error('[SMTP] verify failed:', e);
    }

    const plainText = `RuleRev - New Discovery Submission\n\n` +
      `Name: ${contactInfo.name}\nEmail: ${contactInfo.email}\n` +
      `Company: ${contactInfo.company || ''}\nPhone: ${contactInfo.phone || ''}\n\n` +
      `A formatted HTML report is attached in the email body.`;

    const info = await transporter.sendMail({
      from: process.env.MAIL_FROM || 'support@rulerev.com',
      to: 'support@rulerev.com',
      subject: `RuleRev – Discovery from ${contactInfo.name} - ${contactInfo.company || ''}`.trim(),
      text: plainText,
      html: emailContent,
      replyTo: contactInfo.email,
    });
    console.log('[SMTP] sendMail info (discovery)', {
      messageId: info && info.messageId,
      response: info && info.response,
      accepted: info && info.accepted,
      rejected: info && info.rejected,
      envelope: info && info.envelope,
    });
    const response = { ok: true };
    if (nodemailer.getTestMessageUrl && info) {
      const url = nodemailer.getTestMessageUrl(info);
      if (url) response.previewUrl = url;
    }
    res.json(response);
  } catch (err) {
    console.error('Nodemailer discovery send error', err);
    res.status(500).json({ ok: false, error: 'Failed to send discovery email' });
  }
});

app.get('/api/health', (_req, res) => res.json({ ok: true }));

app.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log(`Server listening on http://localhost:${port}`);
});


