Zenthara - Next.js + Tailwind Site

Getting started

- Install deps: `npm install`
- Dev server: `npm run dev`
- Build: `npm run build && npm start`

Stack

- Next.js (App Router, TypeScript)
- Tailwind CSS (utility styles)
- AWS SES-powered contact API endpoint

Structure

- `src/app` - routes and layout
- `src/components` - shared UI components
- `src/content` - simple data sources for services, cases, posts

Environment variables

Configure these values to enable outbound contact emails via AWS SES:

- `SES_REGION` (or `DEFAULT_REGION`) - SES region (e.g. `us-east-1`)
- `SES_ACCESS_KEY_ID` / `SES_SECRET_ACCESS_KEY` - IAM user credentials with `ses:SendEmail`
- `SES_SESSION_TOKEN` - optional session token when using temporary creds
- `CONTACT_RECIPIENT` - comma-separated recipient email addresses
- `CONTACT_FROM` - verified SES identity used as the sender (defaults to the first recipient if omitted)
