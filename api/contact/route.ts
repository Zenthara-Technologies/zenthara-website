import { NextResponse } from 'next/server';
import { SESClient, SendEmailCommand } from '@aws-sdk/client-ses';

type ContactPayload = {
  name: string;
  email: string;
  message: string;
  company?: string;
  phone?: string;
};

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function parsePayload(body: unknown): ContactPayload | null {
  if (typeof body !== 'object' || body === null) return null;
  const raw = body as Record<string, unknown>;
  const payload: ContactPayload = {
    name: String(raw?.name ?? '').trim(),
    email: String(raw?.email ?? '').trim(),
    message: String(raw?.message ?? '').trim(),
  };

  const company = String(raw?.company ?? '').trim();
  if (company) payload.company = company;

  const phone = String(raw?.phone ?? '').trim();
  if (phone) payload.phone = phone;

  if (!payload.name || !payload.email || !payload.message) return null;
  if (!isValidEmail(payload.email)) return null;

  return payload;
}

function buildMessage({ name, email, message, company, phone }: ContactPayload) {
  const lines = [
    `Name: ${name}`,
    `Email: ${email}`,
    company ? `Company: ${company}` : null,
    phone ? `Phone: ${phone}` : null,
    '',
    'Message:',
    message,
  ].filter(Boolean);

  return lines.join('\n');
}

export async function POST(req: Request) {
  try {
    const payload = parsePayload(await req.json());
    if (!payload) {
      return NextResponse.json({ error: 'Invalid payload' }, { status: 400 });
    }

    const {
      SES_REGION,
      DEFAULT_REGION,
      SES_ACCESS_KEY_ID,
      SES_SECRET_ACCESS_KEY,
      SES_SESSION_TOKEN,
      CONTACT_RECIPIENT,
      CONTACT_FROM,
    } = process.env;

    if (!CONTACT_RECIPIENT) {
      console.error('Missing CONTACT_RECIPIENT for contact form');
      return NextResponse.json({ error: 'Server configuration error' }, { status: 500 });
    }

    const to = CONTACT_RECIPIENT.split(',').map((email) => email.trim()).filter(Boolean);
    if (to.length === 0) {
      console.error('CONTACT_RECIPIENT must contain at least one email');
      return NextResponse.json({ error: 'Server configuration error' }, { status: 500 });
    }

    const region = SES_REGION ?? DEFAULT_REGION;
    if (!region) {
      console.error('Missing AWS region for SES');
      return NextResponse.json({ error: 'Server configuration error' }, { status: 500 });
    }

    const from = CONTACT_FROM ?? to[0];
    if (!from) {
      console.error('CONTACT_FROM or CONTACT_RECIPIENT required for SES source address');
      return NextResponse.json({ error: 'Server configuration error' }, { status: 500 });
    }

    const sesClient = new SESClient({
      region,
      credentials:
        SES_ACCESS_KEY_ID && SES_SECRET_ACCESS_KEY
          ? {
              accessKeyId: SES_ACCESS_KEY_ID,
              secretAccessKey: SES_SECRET_ACCESS_KEY,
              sessionToken: SES_SESSION_TOKEN,
            }
          : undefined,
    });

    const messageText = buildMessage(payload);
    const command = new SendEmailCommand({
      Destination: { ToAddresses: to },
      Source: from,
      ReplyToAddresses: [payload.email],
      Message: {
        Subject: { Data: `New contact request from ${payload.name}` },
        Body: {
          Text: { Data: messageText },
          Html: { Data: messageText.replace(/\n/g, '<br />') },
        },
      },
    });

    await sesClient.send(command);

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error('Failed to send contact email', error);
    return NextResponse.json({ error: 'Failed to send message' }, { status: 500 });
  }
}
