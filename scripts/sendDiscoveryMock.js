// Sends a mock discovery email to the local server
const html = `<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8" />
  <title>RuleRev - New Discovery Submission</title>
  <style>
    body { font-family: Inter, Segoe UI, Arial, sans-serif; background: #fff; color: #0f172a; margin: 0 }
    .wrap { max-width: 800px; margin: 0 auto; padding: 24px }
    .card { border: 1px solid #e2e8f0; border-radius: 12px; background: #fff; overflow: hidden }
    .hdr { display:flex; align-items:center; gap:12px; background: linear-gradient(135deg, #00f5ff 0%, #1e90ff 50%, #20b2aa 100%); padding: 20px 24px }
    .logo { height: 28px }
    .hdr h1 { margin: 0; color: #0b1220; font-size: 22px }
    .content { padding: 24px }
    .grid { display: grid; grid-template-columns: 160px 1fr; gap: 12px 16px; margin: 0 0 16px }
    .label { color: #0ea5e9; font-weight: 600 }
    .section { margin: 24px 0 }
    .section h2 { margin: 0 0 12px; font-size: 18px; color: #0b1220; border-bottom: 2px solid #e2e8f0; display: inline-block; padding-bottom: 6px }
    .q { border-left: 4px solid #1e90ff; background: #f8fafc; border-radius: 8px; padding: 12px 16px; margin: 8px 0 }
    .qtitle { font-weight: 600; margin: 0 0 6px }
    .tag { display:inline-block; background:#e0f2fe; color:#0369a1; border:1px solid #bae6fd; border-radius:999px; padding:4px 10px; margin:2px 6px 0 0 }
    .foot { padding: 16px 24px; color: #475569; border-top: 1px solid #e2e8f0; font-size: 12px }
  </style>
  </head>
<body>
  <div class="wrap">
    <div class="card">
      <div class="hdr">
        <img class="logo" src="https://rulerev.com/rulerev-logo.svg" alt="RuleRev" />
        <h1>RuleRev - New Project Inquiry</h1>
      </div>
      <div class="content">
        <div class="grid">
          <div class="label">Name</div><div>Sample Client</div>
          <div class="label">Email</div><div>client@example.com</div>
          <div class="label">Company</div><div>Sample Co</div>
          <div class="label">Phone</div><div>+27 61 450 9800</div>
        </div>
        <div class="section">
          <h2>Project Goals</h2>
          <div class="q"><div class="qtitle">Primary goals</div><div>Redesign, improve conversions, enable self‑serve onboarding</div></div>
          <div class="q"><div class="qtitle">Launch timeline</div><div>Q2 2026</div></div>
        </div>
        <div class="section">
          <h2>Scope</h2>
          <div class="q"><div class="qtitle">Required features</div><div><span class="tag">E‑commerce</span><span class="tag">Blog</span><span class="tag">Analytics</span></div></div>
          <div class="q"><div class="qtitle">Integrations</div><div><span class="tag">Stripe</span><span class="tag">HubSpot</span><span class="tag">GA4</span></div></div>
        </div>
        <div class="section">
          <h2>Design & Content</h2>
          <div class="q"><div class="qtitle">Brand guidelines available?</div><div>Yes (link provided)</div></div>
          <div class="q"><div class="qtitle">Content readiness</div><div>Copy 60% ready; images to be provided</div></div>
        </div>
        <div class="section">
          <h2>Technical</h2>
          <div class="q"><div class="qtitle">Tech stack preferences</div><div><span class="tag">React</span><span class="tag">Vite</span><span class="tag">Node</span></div></div>
          <div class="q"><div class="qtitle">Hosting</div><div>Netlify (frontend), Node API on Render</div></div>
        </div>
        <div class="section">
          <h2>Additional Notes</h2>
          <div class="q"><div class="qtitle">Notes</div><div class="message">Please prioritize mobile performance and accessibility.\nMVP should support guest checkout.</div></div>
        </div>
      </div>
      <div class="foot">Submitted: ${new Date().toLocaleString()}</div>
    </div>
  </div>
</body>
</html>`;

const payload = {
  contactInfo: {
    name: 'Sample Client',
    email: 'client@example.com',
    company: 'Sample Co',
    phone: '+27 61 450 9800',
  },
  responses: [],
  emailContent: html,
};

fetch('http://localhost:3001/api/discovery', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify(payload),
})
  .then(async (r) => {
    console.log('status', r.status);
    console.log(await r.text());
  })
  .catch((e) => {
    console.error(e);
    process.exit(1);
  });


