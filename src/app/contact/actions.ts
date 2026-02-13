'use server';

import { SESClient, SendEmailCommand } from '@aws-sdk/client-ses';

type ContactState = {
    success?: boolean;
    error?: string;
};

function isValidEmail(email: string) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export async function sendContactEmail(prevState: ContactState, formData: FormData): Promise<ContactState> {
    const name = String(formData.get('name') ?? '').trim();
    const email = String(formData.get('email') ?? '').trim();
    const message = String(formData.get('message') ?? '').trim();
    const company = String(formData.get('company') ?? '').trim();
    const phone = String(formData.get('phone') ?? '').trim();

    if (!name || !email || !message) {
        return { error: 'Name, email, and message are required.' };
    }

    if (!isValidEmail(email)) {
        return { error: 'Invalid email address.' };
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
        console.error('Missing CONTACT_RECIPIENT');
        return { error: 'Server configuration error.' };
    }

    const to = CONTACT_RECIPIENT.split(',').map((e) => e.trim()).filter(Boolean);
    const region = SES_REGION ?? DEFAULT_REGION;
    const from = CONTACT_FROM ?? to[0];

    if (!region || !from) {
        console.error('Missing SES configuration');
        return { error: 'Server configuration error.' };
    }

    try {
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

        const lines = [
            `Name: ${name}`,
            `Email: ${email}`,
            company ? `Company: ${company}` : null,
            phone ? `Phone: ${phone}` : null,
            '',
            'Message:',
            message,
        ].filter(Boolean);

        const messageText = lines.join('\n');

        const command = new SendEmailCommand({
            Destination: { ToAddresses: to },
            Source: from,
            ReplyToAddresses: [email],
            Message: {
                Subject: { Data: `New contact request from ${name}` },
                Body: {
                    Text: { Data: messageText },
                    Html: { Data: messageText.replace(/\n/g, '<br />') },
                },
            },
        });

        await sesClient.send(command);
        return { success: true };
    } catch (error) {
        console.error('Failed to send contact email:', error);
        return { error: 'Failed to send message. Please try again later.' };
    }
}
