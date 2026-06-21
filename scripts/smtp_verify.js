// Simple SMTP verification script
// Usage: node scripts/smtp_verify.js

const nodemailer = require('nodemailer');
const path = require('path');
const envPath = path.join(__dirname, '..', '.env.local');
console.log('Loading env from', envPath);
require('dotenv').config({ path: envPath });

const host = process.env.SMTP_HOST;
const user = process.env.SMTP_USER;
const pass = process.env.SMTP_PASSWORD;
const portEnv = process.env.SMTP_PORT;

if (!host || !user || !pass) {
  console.error('Missing SMTP env values. Check .env.local for SMTP_HOST, SMTP_USER, SMTP_PASSWORD');
  process.exit(2);
}

const configs = [
  { name: 'SMTPS (465)', port: Number(portEnv) || 465, secure: true },
  { name: 'STARTTLS (587)', port: 587, secure: false },
  { name: 'Plain (25)', port: 25, secure: false },
];

async function testConfig(cfg) {
  console.log('\nTesting', cfg.name, `host=${host} port=${cfg.port} secure=${cfg.secure}`);
  const transporter = nodemailer.createTransport({
    host,
    port: cfg.port,
    secure: cfg.secure,
    auth: { user, pass },
    tls: { rejectUnauthorized: false },
    // increase greeting timeout
    greetingTimeout: 60000,
    connectionTimeout: 60000,
  });

  try {
    await transporter.verify();
    console.log('VERIFIED: Authentication and connection succeeded for', cfg.name);
  } catch (err) {
    console.error('ERROR:', err && err.message ? err.message : err);
    if (err && err.response) console.error('SMTP Response:', err.response);
  }
}

(async () => {
  for (const cfg of configs) {
    await testConfig(cfg);
  }
})();
