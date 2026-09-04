import { notFound } from 'next/navigation';
import { cases } from '@/content/case-studies';
import { ContactButton } from '@/components/ContactButton';

type Props = { params: { slug: string } };

export function generateStaticParams() {
  return cases.map((c) => ({ slug: c.slug }));
}

export function generateMetadata({ params }: Props) {
  const c = cases.find((x) => x.slug === params.slug);
  return { title: c ? `${c.title} — Zenthara` : 'Case Study — Zenthara' };
}

export default function CaseStudyPage({ params }: Props) {
  const c = cases.find((x) => x.slug === params.slug);
  if (!c) return notFound();

  return (
    <div className="container section-pad max-w-4xl">
      <div className="section-kicker !mx-0">{c.category}</div>
      <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 dark:text-white">{c.title}</h1>
      <p className="mt-3 text-lg text-gray-600 dark:text-slate-400 max-w-3xl leading-relaxed">{c.tagline}</p>

      <div className="mt-5 flex flex-wrap items-center gap-2">
        <span className="rounded-full bg-slate-100 dark:bg-white/10 px-3 py-1 text-xs font-medium text-gray-700 dark:text-slate-300">{c.status}</span>
        {c.tags.map((t) => (
          <span key={t} className="rounded-full bg-indigo-50 dark:bg-brand-light/10 px-3 py-1 text-xs text-indigo-700 dark:text-brand-light ring-1 ring-inset ring-indigo-200 dark:ring-brand-light/20">{t}</span>
        ))}
      </div>

      {c.facts && c.facts.length > 0 && (
        <div className="mt-8 grid gap-4 sm:grid-cols-3">
          {c.facts.map((f) => (
            <div key={f.label} className="rounded-2xl border border-gray-100 dark:border-white/10 bg-white dark:bg-dark-800 p-4">
              <div className="text-xs font-semibold uppercase tracking-widest text-brand dark:text-brand-light">{f.label}</div>
              <div className="mt-1 font-semibold text-slate-900 dark:text-white">{f.value}</div>
            </div>
          ))}
        </div>
      )}

      {c.stats && c.stats.length > 0 && (
        <div className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-4">
          {c.stats.map((s) => (
            <div key={s.label} className="rounded-2xl bg-gradient-to-br from-brand/5 to-accent-emerald/5 dark:from-brand-light/10 dark:to-accent-emerald/10 border border-brand/10 dark:border-white/10 p-4 text-center">
              <div className="text-2xl sm:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-brand-dark to-brand dark:from-brand-light dark:to-accent-emerald">{s.value}</div>
              <div className="mt-1 text-xs text-slate-600 dark:text-slate-400">{s.label}</div>
            </div>
          ))}
        </div>
      )}

      {c.highlights && c.highlights.length > 0 && (
        <div className="mt-8 grid gap-4 sm:grid-cols-2">
          {c.highlights.map((h) => (
            <div key={h.title} className="rounded-2xl border border-gray-100 dark:border-white/10 bg-white dark:bg-dark-800 p-5 tile-hover-soft">
              <div className="font-semibold text-slate-900 dark:text-white">{h.title}</div>
              <p className="mt-1.5 text-sm text-gray-600 dark:text-slate-400 leading-relaxed">{h.body}</p>
            </div>
          ))}
        </div>
      )}

      <div className="mt-12 space-y-12">
        {c.sections.map((s) => (
          <section key={s.heading}>
            <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-slate-900 dark:text-white">{s.heading}</h2>
            {s.body && <p className="mt-3 text-gray-700 dark:text-slate-400 leading-relaxed">{s.body}</p>}

            {s.items && s.items.length > 0 && (
              <div className="mt-5 grid gap-4 sm:grid-cols-2">
                {s.items.map((item) => (
                  <div key={item.title} className="rounded-2xl border border-gray-100 dark:border-white/10 bg-white dark:bg-dark-800 p-5 tile-hover-soft">
                    <div className="font-semibold text-slate-900 dark:text-white">{item.title}</div>
                    <p className="mt-1.5 text-sm text-gray-600 dark:text-slate-400 leading-relaxed">{item.body}</p>
                  </div>
                ))}
              </div>
            )}

            {s.compare && s.compare.length > 0 && (
              <div className="mt-5 overflow-hidden rounded-2xl border border-gray-100 dark:border-white/10">
                <div className="grid grid-cols-2 bg-slate-50 dark:bg-white/5 text-xs font-semibold uppercase tracking-widest text-slate-500 dark:text-slate-400">
                  <div className="px-5 py-2.5">Before</div>
                  <div className="px-5 py-2.5 border-l border-gray-100 dark:border-white/10">With the platform</div>
                </div>
                {s.compare.map((row, i) => (
                  <div key={i} className="grid grid-cols-2 border-t border-gray-100 dark:border-white/10 bg-white dark:bg-dark-800">
                    <div className="px-5 py-3 text-sm text-gray-500 dark:text-slate-500">{row.before}</div>
                    <div className="px-5 py-3 border-l border-gray-100 dark:border-white/10 text-sm font-medium text-slate-900 dark:text-white">{row.after}</div>
                  </div>
                ))}
              </div>
            )}
          </section>
        ))}
      </div>

      {c.quote && (
        <figure className="mt-12 rounded-2xl border border-brand/15 dark:border-brand-light/20 bg-brand/5 dark:bg-brand-light/5 p-6 sm:p-8">
          <blockquote className="text-lg font-medium text-slate-900 dark:text-white leading-relaxed">&ldquo;{c.quote.text}&rdquo;</blockquote>
          <figcaption className="mt-3 text-sm text-gray-600 dark:text-slate-400">— {c.quote.attribution}</figcaption>
        </figure>
      )}

      {c.footnote && (
        <p className="mt-6 text-xs text-gray-500 dark:text-slate-500 leading-relaxed">{c.footnote}</p>
      )}

      <div className="mt-12 rounded-2xl bg-gradient-to-r from-indigo-50 to-amber-50 dark:from-brand-light/10 dark:to-accent-amber/10 p-6 ring-1 ring-black/5 dark:ring-white/10 flex items-center justify-between flex-col sm:flex-row gap-4 tile-hover">
        <div>
          <div className="text-lg font-semibold text-slate-900 dark:text-white">Facing something similar?</div>
          <div className="text-gray-600 dark:text-slate-400">Let’s talk about what this would look like for you.</div>
        </div>
        <ContactButton>Discuss Your Project</ContactButton>
      </div>
    </div>
  );
}
