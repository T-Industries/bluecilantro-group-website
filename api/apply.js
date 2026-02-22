export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { fullName, email, phone, position, restaurant, coverLetter, resumeBase64, resumeFilename, resumeMimetype } = req.body;

  // Graceful fallback for local dev without credentials
  if (!process.env.SMTP2GO_API_KEY) {
    console.log('No SMTP2GO_API_KEY set — console fallback:');
    console.log({ fullName, email, phone, position, restaurant, coverLetter, resumeFilename });
    return res.status(200).json({ success: true });
  }

  const subject = `New Career Application: ${position}${restaurant ? ` — ${restaurant}` : ''}`;

  const textBody = [
    `New Career Application`,
    ``,
    `Name: ${fullName}`,
    `Email: ${email}`,
    `Phone: ${phone || 'Not provided'}`,
    `Position: ${position}`,
    `Preferred Restaurant: ${restaurant || 'Any location'}`,
    ``,
    coverLetter ? `Cover Letter:\n${coverLetter}` : 'Cover Letter: Not provided',
    ``,
    `Resume attached: ${resumeFilename}`,
    `Submitted via BlueCilantro Group Website`,
  ].join('\n');

  const htmlBody = `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8" />
  <style>
    body { margin: 0; padding: 0; font-family: Georgia, serif; background: #f5f0eb; }
    .wrapper { max-width: 600px; margin: 0 auto; background: #ffffff; }
    .header { background: #1a1f3c; padding: 32px 40px; text-align: center; }
    .header h1 { margin: 0; color: #c17f59; font-size: 22px; letter-spacing: 2px; text-transform: uppercase; }
    .header p { margin: 8px 0 0; color: #a0a8cc; font-size: 13px; }
    .badge { display: inline-block; background: #c17f59; color: #ffffff; padding: 6px 16px; border-radius: 20px; font-size: 13px; font-family: Arial, sans-serif; font-weight: bold; margin: 24px 40px 0; }
    .body { padding: 24px 40px 32px; }
    .info-table { width: 100%; border-collapse: collapse; margin-top: 8px; }
    .info-table td { padding: 10px 0; border-bottom: 1px solid #ede8e3; font-size: 14px; font-family: Arial, sans-serif; color: #2c2c2c; }
    .info-table td:first-child { color: #888; width: 140px; font-size: 12px; text-transform: uppercase; letter-spacing: 0.5px; }
    .section-title { font-size: 11px; text-transform: uppercase; letter-spacing: 1px; color: #c17f59; margin: 28px 0 8px; font-family: Arial, sans-serif; }
    .cover-letter { background: #f9f6f3; border-left: 3px solid #c17f59; padding: 16px 20px; font-size: 14px; font-family: Arial, sans-serif; color: #2c2c2c; line-height: 1.7; white-space: pre-wrap; }
    .footer { background: #f5f0eb; padding: 16px 40px; font-size: 11px; color: #999; font-family: Arial, sans-serif; text-align: center; }
  </style>
</head>
<body>
  <div class="wrapper">
    <div class="header">
      <h1>BlueCilantro Hospitality Group</h1>
      <p>New Career Application Received</p>
    </div>
    <div class="badge">
      ${position}${restaurant ? ` &mdash; ${restaurant}` : ''}
    </div>
    <div class="body">
      <p class="section-title">Applicant Details</p>
      <table class="info-table">
        <tr><td>Full Name</td><td>${fullName}</td></tr>
        <tr><td>Email</td><td><a href="mailto:${email}" style="color:#1a1f3c;">${email}</a></td></tr>
        <tr><td>Phone</td><td>${phone || '<em style="color:#bbb;">Not provided</em>'}</td></tr>
        <tr><td>Position</td><td>${position}</td></tr>
        <tr><td>Restaurant</td><td>${restaurant || 'Any location'}</td></tr>
      </table>

      ${coverLetter ? `
      <p class="section-title">Cover Letter</p>
      <div class="cover-letter">${coverLetter.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')}</div>
      ` : ''}
    </div>
    <div class="footer">
      Resume attached: ${resumeFilename} &nbsp;|&nbsp; Submitted via BlueCilantro Group Website
    </div>
  </div>
</body>
</html>
`.trim();

  const payload = {
    api_key: process.env.SMTP2GO_API_KEY,
    to: ['gpwc@bluecilantro.ca'],
    sender: process.env.SMTP2GO_SENDER_EMAIL || 'careers@bluecilantro.ca',
    reply_to: [email],
    subject,
    text_body: textBody,
    html_body: htmlBody,
    attachments: [
      {
        filename: resumeFilename,
        fileblob: resumeBase64,
        mimetype: resumeMimetype || 'application/octet-stream',
      },
    ],
  };

  try {
    const response = await fetch('https://api.smtp2go.com/v3/email/send', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    });

    const data = await response.json();
    console.log('SMTP2Go response:', JSON.stringify(data));

    if (!response.ok || data.data?.error) {
      return res.status(500).json({ error: 'Failed to send email', detail: data });
    }

    return res.status(200).json({ success: true });
  } catch (err) {
    console.error('SMTP2Go fetch error:', err);
    return res.status(500).json({ error: 'Failed to send email' });
  }
}
