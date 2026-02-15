import { ContactButton } from '@/components/ContactButton';

type ContactRow = { label: string; value: string; icon: React.ReactNode; href?: string };

const CONTACT_ROWS: ContactRow[] = [
  {
    label: 'Email',
    value: 'info@zentharatechnologies.com',
    icon: <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>,
    href: 'mailto:info@zentharatechnologies.com'
  },
  {
    label: 'Phone',
    value: '+91 7304245311',
    icon: <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
  },
  {
    label: 'Location',
    value: 'Mumbai, India',
    icon: <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
  }
];

export function ContactInfoSection() {
  return (
    <section id="contact" className="section section-pad section-screen contact-surface relative overflow-hidden scroll-mt-16" aria-labelledby="contact-heading">
      <span className="contact-veil contact-veil-1" aria-hidden="true" />
      <span className="contact-veil contact-veil-2" aria-hidden="true" />
      <span className="contact-veil contact-veil-3" aria-hidden="true" />
      <div className="container relative z-10">
        <h2 id="contact-heading" className="text-3xl sm:text-4xl font-bold text-center">Get In Touch</h2>
        <p className="mx-auto mt-3 max-w-3xl text-center text-gray-600">
          Ready to start your next project? Contact us to discuss how we can help bring your vision to life.
        </p>

        <div className="mt-8 grid gap-6 lg:grid-cols-12">
          {/* Left CTA */}
          <div className="lg:col-span-5">
            <div className="rounded-2xl bg-white p-6 shadow-card ring-1 ring-black/5 tile-hover-soft">
              <h3 className="text-xl font-semibold">Ready to Get Started?</h3>
              <p className="mt-2 text-gray-600">Tell us about your project and how we&apos;d be a good fit. We&apos;ll reply within 24 hours.</p>
              <ContactButton className="mt-4">Contact Us</ContactButton>
            </div>
          </div>

          {/* Right Info List */}
          <div className="lg:col-span-7 grid gap-4">
            {CONTACT_ROWS.map((row) => (
              <div key={row.label} className="flex items-center justify-between rounded-2xl bg-white p-4 shadow-sm ring-1 ring-black/5 tile-hover-soft">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-50 text-indigo-700">{row.icon}</div>
                  <div>
                    <div className="text-sm text-gray-500">{row.label}</div>
                    {row.href ? (
                      <a className="font-semibold text-gray-900" href={row.href}>{row.value}</a>
                    ) : (
                      <div className="font-semibold text-gray-900">{row.value}</div>
                    )}
                  </div>
                </div>
              </div>
            ))}

            <div className="mt-2">
              <div className="text-sm font-semibold text-gray-700 mb-2">Follow Us</div>
              <div className="flex items-center gap-3">
                <a href="https://www.linkedin.com" target="_blank" rel="noreferrer" className="flex h-10 w-10 items-center justify-center rounded-lg bg-slate-100 text-indigo-700 transition-colors hover:bg-brand/10 hover:text-brand">
                  <svg className="h-5 w-5 fill-current" viewBox="0 0 24 24" aria-hidden="true"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" /></svg>
                </a>
                <a href="https://github.com" target="_blank" rel="noreferrer" className="flex h-10 w-10 items-center justify-center rounded-lg bg-slate-100 text-indigo-700 transition-colors hover:bg-brand/10 hover:text-brand">
                  <svg className="h-5 w-5 fill-current" viewBox="0 0 24 24" aria-hidden="true"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" /></svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
