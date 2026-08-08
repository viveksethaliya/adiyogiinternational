import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API);

async function verifyRecaptchaV3(token: string): Promise<boolean> {
  // Skip verification in development so localhost testing works without domain whitelisting
  if (process.env.NODE_ENV === 'development') {
    console.log('[reCAPTCHA] Skipping verification in development mode');
    return true;
  }

  const secretKey = process.env.SECRETY_KEY;
  const res = await fetch('https://www.google.com/recaptcha/api/siteverify', {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: `secret=${secretKey}&response=${token}`,
  });
  const data = await res.json();
  // v3 returns a score 0.0 (bot) → 1.0 (human). Threshold: 0.5
  return data.success === true && data.score >= 0.5;
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const {
      fullName,
      company,
      email,
      phone,
      country,
      product,
      quantity,
      packaging,
      incoterms,
      message,
      recaptchaToken,
    } = body;

    // 1. Validate required fields
    if (!fullName || !email || !recaptchaToken) {
      return NextResponse.json({ error: 'Missing required fields.' }, { status: 400 });
    }

    // 2. Verify reCAPTCHA v3
    const isHuman = await verifyRecaptchaV3(recaptchaToken);
    if (!isHuman) {
      return NextResponse.json(
        { error: 'reCAPTCHA verification failed. Please try again.' },
        { status: 400 }
      );
    }

    // 3. Send email via Resend
    const { error } = await resend.emails.send({
      from: 'Adiyogi International <inquiry@adiyogi-international.com>',
      to: ['adiyogi9016716062@outlook.com'],
      replyTo: email,
      subject: `New B2B Inquiry from ${fullName} — ${company || 'Individual'}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; background: #f8fafc; padding: 32px; border-radius: 12px;">
          <div style="background: #001B29; padding: 24px 32px; border-radius: 8px 8px 0 0;">
            <h1 style="color: #FC8430; margin: 0; font-size: 22px; font-weight: bold;">New B2B Export Inquiry</h1>
            <p style="color: #94a3b8; margin: 6px 0 0; font-size: 13px;">Adiyogi International — Website Contact Form</p>
          </div>

          <div style="background: #ffffff; padding: 28px 32px; border: 1px solid #e2e8f0; border-top: none;">
            <table style="width: 100%; border-collapse: collapse;">
              <tr style="border-bottom: 1px solid #f1f5f9;">
                <td style="padding: 10px 0; color: #64748b; font-size: 13px; width: 40%;">Full Name</td>
                <td style="padding: 10px 0; color: #0f172a; font-weight: 600; font-size: 14px;">${fullName}</td>
              </tr>
              <tr style="border-bottom: 1px solid #f1f5f9;">
                <td style="padding: 10px 0; color: #64748b; font-size: 13px;">Company / Organization</td>
                <td style="padding: 10px 0; color: #0f172a; font-weight: 600; font-size: 14px;">${company || '—'}</td>
              </tr>
              <tr style="border-bottom: 1px solid #f1f5f9;">
                <td style="padding: 10px 0; color: #64748b; font-size: 13px;">Email Address</td>
                <td style="padding: 10px 0; font-size: 14px;"><a href="mailto:${email}" style="color: #FC8430;">${email}</a></td>
              </tr>
              <tr style="border-bottom: 1px solid #f1f5f9;">
                <td style="padding: 10px 0; color: #64748b; font-size: 13px;">Phone / WhatsApp</td>
                <td style="padding: 10px 0; color: #0f172a; font-size: 14px;">${phone || '—'}</td>
              </tr>
              <tr style="border-bottom: 1px solid #f1f5f9;">
                <td style="padding: 10px 0; color: #64748b; font-size: 13px;">Country of Destination</td>
                <td style="padding: 10px 0; color: #0f172a; font-size: 14px;">${country || '—'}</td>
              </tr>
              <tr style="border-bottom: 1px solid #f1f5f9;">
                <td style="padding: 10px 0; color: #64748b; font-size: 13px;">Product Required</td>
                <td style="padding: 10px 0; color: #0f172a; font-size: 14px; font-weight: 600;">${product || '—'}</td>
              </tr>
              <tr style="border-bottom: 1px solid #f1f5f9;">
                <td style="padding: 10px 0; color: #64748b; font-size: 13px;">Required Quantity (MT)</td>
                <td style="padding: 10px 0; color: #0f172a; font-size: 14px;">${quantity || '—'}</td>
              </tr>
              <tr style="border-bottom: 1px solid #f1f5f9;">
                <td style="padding: 10px 0; color: #64748b; font-size: 13px;">Preferred Packaging</td>
                <td style="padding: 10px 0; color: #0f172a; font-size: 14px;">${packaging || '—'}</td>
              </tr>
              <tr style="border-bottom: 1px solid #f1f5f9;">
                <td style="padding: 10px 0; color: #64748b; font-size: 13px;">Incoterms Preference</td>
                <td style="padding: 10px 0; color: #0f172a; font-size: 14px;">${incoterms || '—'}</td>
              </tr>
            </table>

            ${message ? `
            <div style="margin-top: 20px; background: #f8fafc; border-left: 4px solid #FC8430; padding: 16px; border-radius: 4px;">
              <p style="color: #64748b; font-size: 12px; text-transform: uppercase; font-weight: 600; margin: 0 0 8px;">Message / Specific Requirements</p>
              <p style="color: #0f172a; font-size: 14px; line-height: 1.6; margin: 0;">${message}</p>
            </div>` : ''}
          </div>

          <div style="background: #f8fafc; padding: 16px 32px; border: 1px solid #e2e8f0; border-top: none; border-radius: 0 0 8px 8px; text-align: center;">
            <p style="color: #94a3b8; font-size: 12px; margin: 0;">Submitted via adiyogiinternational.com contact form.</p>
          </div>
        </div>
      `,
    });

    if (error) {
      console.error('[Resend Error]', error);
      return NextResponse.json(
        { error: 'Failed to send email. Please try again later.' },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (err) {
    console.error('[Contact API Error]', err);
    return NextResponse.json({ error: 'Internal server error.' }, { status: 500 });
  }
}
