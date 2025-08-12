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
  });
  return transporter;
}

app.post('/api/contact', async (req, res) => {
  const { name, email, company, message, phone } = req.body || {};
  if (!name || !email || !message) {
    return res.status(400).json({ ok: false, error: 'Missing required fields' });
  }
  try {
    const transporter = await getTransporter();
    const html = `
      <h2>New Contact Form Submission</h2>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      ${company ? `<p><strong>Company:</strong> ${company}</p>` : ''}
      ${phone ? `<p><strong>Phone:</strong> ${phone}</p>` : ''}
      <hr/>
      <p style="white-space: pre-wrap">${message}</p>
      <p>Submitted: ${new Date().toLocaleString()}</p>
    `;
    const info = await transporter.sendMail({
      from: process.env.MAIL_FROM || 'support@rulerev.com',
      to: 'support@rulerev.com',
      subject: `New contact from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\n${company ? `Company: ${company}\n` : ''}${phone ? `Phone: ${phone}\n` : ''}\n\n${message}`,
      html,
      replyTo: email,
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

app.get('/api/health', (_req, res) => res.json({ ok: true }));

app.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log(`Server listening on http://localhost:${port}`);
});


