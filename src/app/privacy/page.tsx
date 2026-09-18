import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'How Zenthara collects, uses, and protects the information you share with us.',
  alternates: { canonical: '/privacy' },
};

const EFFECTIVE_DATE = 'September 8, 2026';

export default function PrivacyPolicyPage() {
  return (
    <div className="container section-pad max-w-3xl">
      <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 dark:text-white">Privacy Policy</h1>
      <p className="mt-2 text-sm text-gray-500 dark:text-slate-400">Effective date: {EFFECTIVE_DATE}</p>

      <div className="mt-8 space-y-8 text-gray-700 dark:text-slate-300 leading-relaxed">
        <section>
          <p>
            Zenthara (&quot;Zenthara&quot;, &quot;we&quot;, &quot;us&quot;, or &quot;our&quot;) provides product engineering, cloud, and software development
            services. This policy explains what information we collect through zentharatechnologies.com (the &quot;Site&quot;), how we use it, and the choices
            you have.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-slate-900 dark:text-white">Information we collect</h2>
          <ul className="mt-3 list-disc space-y-2 pl-5">
            <li>
              <span className="font-medium text-slate-900 dark:text-white">Information you provide.</span> When you submit our contact form we collect your
              name, email address, and any company, phone number, or project details you choose to include. We use this solely to respond to your inquiry.
            </li>
            <li>
              <span className="font-medium text-slate-900 dark:text-white">Automatically collected information.</span> Like most websites, our hosting and
              content-delivery infrastructure may log standard technical data (such as IP address, browser type, and pages visited) for security and
              reliability purposes.
            </li>
            <li>
              <span className="font-medium text-slate-900 dark:text-white">Cookies.</span> We use a minimal, functional cookie to remember your theme
              preference (light or dark) and whether you have acknowledged our cookie notice. We do not currently use advertising or third-party tracking
              cookies. See our cookie notice for details.
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-slate-900 dark:text-white">How we use information</h2>
          <p className="mt-3">We use the information described above to:</p>
          <ul className="mt-3 list-disc space-y-2 pl-5">
            <li>Respond to messages sent through our contact form;</li>
            <li>Operate, maintain, and secure the Site; and</li>
            <li>Comply with legal obligations.</li>
          </ul>
          <p className="mt-3">We do not sell your personal information.</p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-slate-900 dark:text-white">How we share information</h2>
          <p className="mt-3">
            We share contact-form submissions with a small number of service providers strictly to deliver our services — for example, our email-delivery
            provider (Amazon SES) used to route inquiries to our team. We do not share your information with third parties for their own marketing purposes.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-slate-900 dark:text-white">Data retention</h2>
          <p className="mt-3">
            We retain contact-form submissions only as long as needed to respond to your inquiry and maintain reasonable business records, after which they
            are deleted.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-slate-900 dark:text-white">Your choices</h2>
          <p className="mt-3">
            You may ask us to access, correct, or delete personal information you have submitted to us at any time by emailing{' '}
            <a className="text-brand hover:underline dark:text-brand-light" href="mailto:info@zentharatechnologies.com">info@zentharatechnologies.com</a>.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-slate-900 dark:text-white">Changes to this policy</h2>
          <p className="mt-3">
            We may update this policy from time to time. We will update the effective date above when we do, and material changes will be reflected on this
            page.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-slate-900 dark:text-white">Contact us</h2>
          <p className="mt-3">
            Questions about this policy can be sent to{' '}
            <a className="text-brand hover:underline dark:text-brand-light" href="mailto:info@zentharatechnologies.com">info@zentharatechnologies.com</a>.
          </p>
        </section>
      </div>
    </div>
  );
}
