import { ContactButton } from '@/components/ContactButton';

type ContactRow = { label: string; value: string; icon: string; href?: string };

const CONTACT_ROWS: ContactRow[] = [
  { label: 'Email', value: 'info@zentharatechnologies.com', icon: '@', href: 'mailto:info@zentharatechnologies.com' },
  { label: 'Phone', value: '+1 (555) 000-0000', icon: 'TEL' },
  { label: 'Location', value: 'Remote-first / Global', icon: 'GLB' }
];

export function ContactInfoSection() {
  return (
    <section className="section section-pad section-screen contact-surface relative overflow-hidden scroll-mt-16" aria-labelledby="get-in-touch">
      <span className="contact-veil contact-veil-1" aria-hidden="true" />
      <span className="contact-veil contact-veil-2" aria-hidden="true" />
      <span className="contact-veil contact-veil-3" aria-hidden="true" />
      <div className="container relative z-10">
        <h2 id="get-in-touch" className="text-3xl sm:text-4xl font-bold text-center">Get In Touch</h2>
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
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-50 text-xs font-semibold text-indigo-700">{row.icon}</div>
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
                <a href="https://www.linkedin.com" target="_blank" rel="noreferrer" className="flex h-10 w-10 items-center justify-center rounded-lg bg-slate-100 text-indigo-700 font-bold">
                  in
                </a>
                <a href="https://github.com" target="_blank" rel="noreferrer" className="flex h-10 w-10 items-center justify-center rounded-lg bg-slate-100 text-indigo-700 font-bold">
                  {'{}'}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
