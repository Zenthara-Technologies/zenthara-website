import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terms & Conditions',
  description: 'The terms that govern your use of the Zenthara website and our engagement with clients.',
  alternates: { canonical: '/terms' },
};

const EFFECTIVE_DATE = 'September 8, 2026';

export default function TermsPage() {
  return (
    <div className="container section-pad max-w-3xl">
      <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 dark:text-white">Terms &amp; Conditions</h1>
      <p className="mt-2 text-sm text-gray-500 dark:text-slate-400">Effective date: {EFFECTIVE_DATE}</p>

      <div className="mt-8 space-y-8 text-gray-700 dark:text-slate-300 leading-relaxed">
        <section>
          <p>
            These terms govern your use of zentharatechnologies.com (the &quot;Site&quot;), operated by Zenthara (&quot;Zenthara&quot;, &quot;we&quot;,
            &quot;us&quot;, or &quot;our&quot;). By accessing the Site, you agree to these terms. If you do not agree, please do not use the Site.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-slate-900 dark:text-white">Use of the Site</h2>
          <p className="mt-3">
            The Site and its content — including text, graphics, logos, and case-study material — are provided for informational purposes about Zenthara&apos;s
            services. You may view and share this content for personal, non-commercial reference. You may not copy, reproduce, or republish substantial
            portions of the Site for commercial purposes without our written permission.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-slate-900 dark:text-white">No professional advice</h2>
          <p className="mt-3">
            Content on the Site, including blog posts and case studies, is provided for general informational purposes only and does not constitute
            professional, technical, or legal advice for your specific circumstances.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-slate-900 dark:text-white">Client engagements</h2>
          <p className="mt-3">
            Submitting the contact form or otherwise inquiring about our services does not, by itself, create a client relationship or any contractual
            obligation. Any engagement for services is governed by a separate, mutually signed agreement (such as a statement of work or master services
            agreement) that will set out scope, fees, timelines, and each party&apos;s obligations.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-slate-900 dark:text-white">Intellectual property</h2>
          <p className="mt-3">
            Unless otherwise agreed in writing, all trademarks, logos, and site content remain the property of Zenthara or its licensors. Client and project
            names referenced in case studies are used to describe our work and remain the property of their respective owners.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-slate-900 dark:text-white">Disclaimer and limitation of liability</h2>
          <p className="mt-3">
            The Site is provided &quot;as is&quot; without warranties of any kind, express or implied. To the fullest extent permitted by law, Zenthara is not
            liable for any indirect, incidental, or consequential damages arising from your use of the Site.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-slate-900 dark:text-white">Third-party links</h2>
          <p className="mt-3">
            The Site may link to third-party websites (such as our LinkedIn or GitHub profiles). We are not responsible for the content or practices of
            sites we do not operate.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-slate-900 dark:text-white">Changes to these terms</h2>
          <p className="mt-3">
            We may revise these terms from time to time. Continued use of the Site after changes are posted constitutes acceptance of the revised terms.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-slate-900 dark:text-white">Contact us</h2>
          <p className="mt-3">
            Questions about these terms can be sent to{' '}
            <a className="text-brand hover:underline dark:text-brand-light" href="mailto:info@zentharatechnologies.com">info@zentharatechnologies.com</a>.
          </p>
        </section>
      </div>
    </div>
  );
}
