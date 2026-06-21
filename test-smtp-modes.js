const dotenv = require('dotenv');
dotenv.config({ path: '.env.local' });
const nodemailer = require('nodemailer');

const configs = [
  { name: '465 implicit TLS', port: 465, secure: true },
  { name: '587 STARTTLS', port: 587, secure: false, requireTLS: true },
  { name: '25 plain', port: 25, secure: false },
];

async function tryConfig(cfg) {
  const options = {
    host: process.env.SMTP_HOST,
    port: cfg.port,
    secure: cfg.secure,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASSWORD,
    },
    tls: { rejectUnauthorized: false },
  };

  if (cfg.requireTLS) options.requireTLS = true;
  // Try forcing LOGIN auth method as an alternative to PLAIN
  const authMethods = [undefined, 'LOGIN'];

  for (const authMethod of authMethods) {
    if (authMethod) options.authMethod = authMethod;
    console.log('\n--- Trying:', cfg.name, 'authMethod=', options.authMethod || 'default', '---');
    const transporter = nodemailer.createTransport(options);
    try {
      await transporter.verify();
      console.log('SUCCESS for', cfg.name, 'authMethod=', options.authMethod || 'default');
      return { ok: true, cfg: cfg.name, authMethod: options.authMethod || 'default' };
    } catch (err) {
      console.error('FAILED for', cfg.name, 'authMethod=', options.authMethod || 'default');
      console.error(err && err.response ? err.response : err);
    }
  }
  return { ok: false, cfg: cfg.name };
}

(async () => {
  for (const cfg of configs) {
    const res = await tryConfig(cfg);
    if (res.ok) break;
  }
})();
