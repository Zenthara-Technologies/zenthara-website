import { notFound } from 'next/navigation';
import { cases } from '@/content/case-studies';

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
    <div className="container section-pad">
      <div className="text-sm text-gray-500">Case Study</div>
      <h1 className="text-3xl sm:text-4xl font-bold mt-1">{c.title}</h1>
      <p className="mt-3 text-gray-600 max-w-3xl">{c.excerpt}</p>

      <div className="mt-6 flex flex-wrap gap-2">
        {(c.tags ?? []).map((t) => (
          <span key={t} className="rounded-full bg-slate-100 px-2.5 py-1 text-xs text-gray-700 ring-1 ring-inset ring-black/5">{t}</span>
        ))}
        {(c.tech ?? []).map((t) => (
          <span key={t} className="rounded-full bg-indigo-50 px-2.5 py-1 text-xs text-indigo-700 ring-1 ring-inset ring-indigo-200">{t}</span>
        ))}
      </div>

      <div className="mt-8 grid gap-6 sm:grid-cols-2">
        <div className="rounded-2xl bg-white p-6 shadow-card ring-1 ring-black/5 tile-hover">
          <h2 className="font-semibold">Client</h2>
          <p className="text-gray-700">{c.client}</p>
        </div>
        <div className="rounded-2xl bg-white p-6 shadow-card ring-1 ring-black/5 tile-hover">
          <h2 className="font-semibold">Year</h2>
          <p className="text-gray-700">{c.year ?? '—'}</p>
        </div>
      </div>

      <div className="mt-6 rounded-2xl bg-white p-6 shadow-card ring-1 ring-black/5 tile-hover">
        <h2 className="text-xl font-semibold">Problem</h2>
        <p className="mt-2 text-gray-700">{c.problem}</p>
      </div>
      <div className="mt-6 rounded-2xl bg-white p-6 shadow-card ring-1 ring-black/5 tile-hover">
        <h2 className="text-xl font-semibold">Solution</h2>
        <p className="mt-2 text-gray-700">{c.solution}</p>
      </div>
      <div className="mt-6 rounded-2xl bg-white p-6 shadow-card ring-1 ring-black/5 tile-hover">
        <h2 className="text-xl font-semibold">Results</h2>
        <ul className="mt-2 list-disc pl-5 text-gray-700 space-y-1">
          {c.results.map((r, i) => (
            <li key={i}>{r}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
