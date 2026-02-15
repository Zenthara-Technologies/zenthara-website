'use server';

import { SESClient, SendEmailCommand } from '@aws-sdk/client-ses';

type ContactState = {
    success?: boolean;
    error?: string;
};

function pickEnv(...values: Array<string | undefined>) {
    return values.find((value) => Boolean(value && value.trim()))?.trim();
}

function isValidEmail(email: string) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export async function sendContactEmail(_prevState: ContactState, formData: FormData): Promise<ContactState> {
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

    const recipientValue = pickEnv(process.env.CONTACT_RECIPIENT, process.env.CONTACT_TO);
    if (!recipientValue) {
        console.error('Missing contact recipient configuration. Set CONTACT_RECIPIENT or CONTACT_TO.');
        return { error: 'Server configuration error.' };
    }

    const to = recipientValue.split(',').map((entry) => entry.trim()).filter(Boolean);
    if (to.length === 0) {
        console.error('Contact recipient configuration is empty after parsing.');
        return { error: 'Server configuration error.' };
    }

    const region = pickEnv(
        process.env.SES_REGION,
        process.env.AWS_REGION,
        process.env.AWS_DEFAULT_REGION,
        process.env.DEFAULT_REGION,
    );
    if (!region) {
        console.error('Missing SES region. Set SES_REGION, AWS_REGION, AWS_DEFAULT_REGION, or DEFAULT_REGION.');
        return { error: 'Server configuration error.' };
    }

    const from = pickEnv(process.env.CONTACT_FROM, process.env.SES_FROM_EMAIL, to[0]);
    if (!from) {
        console.error('Missing contact sender configuration. Set CONTACT_FROM or SES_FROM_EMAIL.');
        return { error: 'Server configuration error.' };
    }

    const accessKeyId = pickEnv(process.env.SES_ACCESS_KEY_ID, process.env.AWS_ACCESS_KEY_ID);
    const secretAccessKey = pickEnv(process.env.SES_SECRET_ACCESS_KEY, process.env.AWS_SECRET_ACCESS_KEY);
    const sessionToken = pickEnv(process.env.SES_SESSION_TOKEN, process.env.AWS_SESSION_TOKEN);

    try {
        const sesClient = new SESClient({
            region,
            credentials:
                accessKeyId && secretAccessKey
                    ? {
                        accessKeyId,
                        secretAccessKey,
                        sessionToken,
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
