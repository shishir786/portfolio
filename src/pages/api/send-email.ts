import FormData from 'form-data';
import Mailgun from 'mailgun.js';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  try {
    const { name, email, message } = await req.json();

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Missing required fields: name, email, and message are required.' },
        { status: 400 }
      );
    }

    const apiKey = process.env.MAILGUN_API_KEY;
    const domain = process.env.MAILGUN_DOMAIN;

    if (!apiKey || !domain) {
      return NextResponse.json(
        { error: 'Mailgun configuration is missing. Please set MAILGUN_API_KEY and MAILGUN_DOMAIN environment variables.' },
        { status: 501 }
      );
    }

    const mailgun = new Mailgun(FormData);
    const client = mailgun.client({ username: 'api', key: apiKey });

    const messageData = {
      from: `Portfolio Contact <noreply@${domain}>`,
      to: 'abdullahshishir786@gmail.com',
      subject: `New Portfolio Message from ${name}`,
      html: `
        <div style="font-family: system-ui, -apple-system, sans-serif; max-width: 600px; margin: 0 auto; padding: 24px; border: 1px solid #e2e8f0; border-radius: 12px; background-color: #ffffff; color: #1e293b;">
          <h2 style="color: #3b82f6; border-bottom: 2px solid #f1f5f9; padding-bottom: 12px; margin-top: 0;">New Inquiry</h2>
          <p style="margin: 16px 0;"><strong>Name:</strong> ${name}</p>
          <p style="margin: 16px 0;"><strong>Email:</strong> ${email}</p>
          <div style="background-color: #f8fafc; padding: 20px; border-radius: 8px; margin-top: 20px; border-left: 4px solid #3b82f6; font-size: 14px; line-height: 1.6;">
            <strong style="display: block; margin-bottom: 8px; color: #0f172a;">Message:</strong>
            <p style="margin: 0; white-space: pre-wrap; color: #334155;">${message}</p>
          </div>
          <footer style="margin-top: 24px; font-size: 11px; color: #64748b; border-top: 1px solid #f1f5f9; padding-top: 12px; text-align: center;">
            Sent from your portfolio website contact form.
          </footer>
        </div>
      `,
      'h:Reply-To': email,
    };

    const data = await client.messages.create(domain, messageData);

    return NextResponse.json({ success: true, id: data.id });
  } catch (error: any) {
    console.error('Error sending email through Mailgun:', error);
    return NextResponse.json(
      { error: error.message || 'Failed to send message.' },
      { status: 500 }
    );
  }
}
