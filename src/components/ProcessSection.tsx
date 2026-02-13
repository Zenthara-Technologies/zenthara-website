export function ProcessSection() {
  const steps = [
    { num: 1, title: 'Discovery', desc: 'We align on objectives, constraints, and measurable success criteria to ensure every decision serves your goals.' },
    { num: 2, title: 'Design', desc: 'We define the system architecture, user experience, and delivery roadmap, all mapped to clear business outcomes.' },
    { num: 3, title: 'Development', desc: 'Our team delivers iteratively with CI/CD pipelines, peer reviews, and strict quality gates to maintain reliability at speed.' },
    { num: 4, title: 'Deploy & Support', desc: 'We manage deployment, monitoring, and continuous improvement with defined SLOs and full observability.' }
  ];
  const highlights = [
    { label: 'Kickoff to first release', value: '10 days', detail: 'We timebox discovery so you see tangible progress inside two sprints.' },
    { label: 'Typical team makeup', value: '4 experts', detail: 'Product lead, designer, full-stack engineer, and platform specialist.' },
    { label: 'Ops cadence', value: 'Weekly demos', detail: 'Show work early, gather feedback, and adjust priorities together.' }
  ];

  return (
    <section className="section section-pad section-screen scroll-mt-16 relative overflow-hidden process-surface" id="process">
      <span className="process-veil process-veil-1" aria-hidden="true" />
      <span className="process-veil process-veil-2" aria-hidden="true" />
      <span className="process-veil process-veil-3" aria-hidden="true" />
      <div className="container relative z-10 flex h-full flex-col">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="section-title text-center">Think. Build. Deliver.</h2>
          <p className="text-gray-600">A pragmatic, results-driven process that keeps momentum high and risk low.</p>
        </div>

        <div className="relative mt-10 flex-1">
          <div className="absolute left-1/2 top-8 -translate-x-1/2 h-[calc(100%-4rem)] w-px bg-gradient-to-b from-brand-light/30 via-brand-light/10 to-transparent hidden lg:block" aria-hidden="true" />
          <div className="grid gap-6 lg:grid-cols-2">
            {steps.map((s, i) => (
              <div
                key={s.title}
                className="flex items-start gap-4 rounded-2xl bg-white/80 p-6 shadow-card ring-1 ring-white/20 animate-fade-up backdrop-blur tile-hover"
                style={{ animationDelay: `${i * 80}ms` }}
              >
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-brand-dark to-brand text-white font-bold shadow-lg shadow-brand/20">
                  {s.num}
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-slate-900">{s.title}</h3>
                  <p className="text-slate-600">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12 grid gap-4 sm:grid-cols-3">
          {highlights.map((item, i) => (
            <div
              key={item.label}
              className="rounded-2xl border border-white/40 bg-white/60 p-5 shadow-sm backdrop-blur animate-fade-up tile-hover"
              style={{ animationDelay: `${(i + steps.length) * 70}ms` }}
            >
              <div className="text-xs font-semibold uppercase tracking-widest text-brand">{item.label}</div>
              <div className="mt-1 text-2xl font-bold text-slate-900">{item.value}</div>
              <p className="mt-2 text-sm text-slate-600">{item.detail}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
