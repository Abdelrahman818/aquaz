const dotenv = require('dotenv');
dotenv.config({ path: '.env.local' });

const nodemailer = require('nodemailer');

(async () => {
  try {
    const port = Number(process.env.SMTP_PORT || 465);
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port,
      secure: port === 465,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASSWORD,
      },
      tls: { rejectUnauthorized: false },
    });

    console.log('Attempting SMTP verify with', {
      host: process.env.SMTP_HOST,
      port,
      user: process.env.SMTP_USER,
      secure: port === 465,
    });

    await transporter.verify();
    console.log('SMTP connection verified — authentication succeeded.');
  } catch (err) {
    console.error('SMTP verify failed:');
    console.error(err);
    process.exitCode = 1;
  }
})();
