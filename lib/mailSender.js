import nodemailer from 'nodemailer';

const requiredEnv = ['SMTP_HOST', 'SMTP_USER', 'SMTP_PASSWORD', 'SMTP_PORT'];

function ensureEnv() {
  const missing = requiredEnv.filter((key) => !process.env[key]);
  if (missing.length) {
    throw new Error(`Missing SMTP environment variables: ${missing.join(', ')}`);
  }
}

export async function sendMail(data) {
  ensureEnv();

  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: parseInt(process.env.SMTP_PORT, 10),
    secure: parseInt(process.env.SMTP_PORT, 10) === 465,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASSWORD,
    },
  });

  const fromAddress = process.env.SMTP_USER || 'contact@aquaz-eng.com';
  const toAddress = process.env.NEXT_PUBLIC_MAIL || 'contact@aquaz-eng.com';

  await transporter.sendMail({
    from: fromAddress,
    to: toAddress,
    subject: `New contact form submission from ${data.name || 'Anonymous'}`,
    text: `New message from ${data.name || 'Anonymous'}\n\n` +
      `Country/Region: ${data.country || 'Not provided'}\n` +
      `Phone: ${data.phone || 'Not provided'}\n` +
      `Email: ${data.mail || 'Not provided'}\n` +
      `Company: ${data.company || 'Not provided'}\n` +
      `Project Type: ${data.projType || 'Not provided'}\n\n` +
      `Message:\n${data.msgContent || 'No message provided.'}`,
    html: `
      <h2>New message from ${data.name || 'Anonymous'}</h2>
      <hr />
      <h3>Infos:</h3>
      <ul>
        <li><strong>Country/Region:</strong> ${data.country || 'Not provided'}</li>
        <li><strong>Phone:</strong> ${data.phone || 'Not provided'}</li>
        <li><strong>Email:</strong> ${data.mail || 'Not provided'}</li>
        <li><strong>Company:</strong> ${data.company || 'Not provided'}</li>
        <li><strong>Project Type:</strong> ${data.projType || 'Not provided'}</li>
      </ul>
      <hr />
      <p><strong>Message:</strong></p>
      <p>${data.msgContent || 'No message provided.'}</p>
    `,
  });
}
