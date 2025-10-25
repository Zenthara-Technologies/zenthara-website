import { ContactButton } from '@/components/ContactButton';

export function TestimonialsSection() {
  const items = [
    { init: 'SJ', name: 'Sarah Johnson', role: 'CTO at TechVenture Inc.', quote: 'Zenthara transformed our legacy system into a modern, scalable platform. Delivered on time and within budget.' },
    { init: 'MC', name: 'Michael Chen', role: 'Product Manager at InnovateCorp', quote: 'Exceptional to work with — transparent process and collaborative throughout. Our users love the new mobile app.' },
    { init: 'ER', name: 'Emily Rodriguez', role: 'CEO at DataFlow Solutions', quote: 'Their web platform revolutionized our operations. We achieved goals we didn’t think were possible.' },
    { init: 'DW', name: 'David Wilson', role: 'Head of Engineering at CloudVision', quote: 'AWS consulting helped optimize infra and cut costs by 40%. Knowledgeable, professional, and truly client‑obsessed.' },
    { init: 'LT', name: 'Lisa Thompson', role: 'Founder at StartupX', quote: 'Guided us through every step of our MVP — the technical expertise was crucial to our launch.' },
    { init: 'JA', name: 'James Anderson', role: 'IT Director at SecureTech', quote: 'Security and performance were outstanding. Best practices and enterprise‑grade quality that scales.' }
  ];

  return (
    <section className="section section-pad" id="testimonials">
      <div className="container">
        <h2 className="text-3xl sm:text-4xl font-bold text-center">What Our Clients Say</h2>
        <p className="mx-auto mt-3 max-w-3xl text-center text-gray-600">Don’t just take our word for it. Here’s what industry leaders and founders say about their experience working with Zenthara.</p>

        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {items.map((t, i) => (
            <figure
              key={t.name}
              className="rounded-2xl bg-white p-6 shadow-card ring-1 ring-black/5 animate-fade-up tile-hover"
              style={{ animationDelay: `${i * 70}ms` }}
            >
              <div className="flex items-center justify-between text-indigo-600">
                <span className="text-xl">“</span>
                <div className="text-amber-400 select-none" aria-hidden>
                  {'★★★★★'}
                </div>
              </div>
              <blockquote className="mt-3 text-gray-700">{t.quote}</blockquote>
              <div className="mt-4 h-px bg-gray-100" />
              <figcaption className="mt-4 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-100 text-gray-700 font-semibold">{t.init}</div>
                <div>
                  <div className="font-semibold">{t.name}</div>
                  <div className="text-xs text-gray-500">{t.role}</div>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>

        <div className="mt-10 rounded-2xl bg-gradient-to-r from-indigo-50 to-amber-50 p-6 text-center shadow-sm ring-1 ring-black/5 tile-hover">
          <h3 className="text-xl font-semibold">Ready to Join Our <span className="text-indigo-700">Success</span> Stories?</h3>
          <p className="mx-auto mt-2 max-w-2xl text-gray-600">Let’s discuss how we can transform your ideas into powerful software that drives growth.</p>
          <div className="mt-4">
            <ContactButton>Start Your Project</ContactButton>
          </div>
        </div>
      </div>
    </section>
  );
}
