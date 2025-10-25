"use client";

import { useMemo, useState } from 'react';
import { Case } from '@/content/case-studies';
import { CaseStudyCard } from '@/components/CaseStudyCard';

type Props = { cases: Case[] };

export function PortfolioGrid({ cases }: Props) {
  const allTags = useMemo(() => {
    const s = new Set<string>();
    cases.forEach((c) => (c.tags ?? []).forEach((t) => s.add(t)));
    return ['All', ...Array.from(s).sort()];
  }, [cases]);

  const [query, setQuery] = useState('');
  const [tag, setTag] = useState('All');

  const filtered = cases.filter((c) => {
    const q = query.trim().toLowerCase();
    const matchesQ = !q || [c.title, c.excerpt, c.client, ...(c.tags ?? []), ...(c.tech ?? [])]
      .filter(Boolean)
      .some((v) => String(v).toLowerCase().includes(q));
    const matchesTag = tag === 'All' || (c.tags ?? []).includes(tag);
    return matchesQ && matchesTag;
  });

  return (
    <div className="mt-6">
      {/* Controls */}
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex flex-wrap gap-2">
          {allTags.map((t) => (
            <button
              key={t}
              onClick={() => setTag(t)}
              className={`rounded-full border px-3 py-1.5 text-sm ${tag === t ? 'bg-indigo-600 text-white border-indigo-600' : 'bg-white border-gray-200 hover:border-gray-300'}`}
              type="button"
            >
              {t}
            </button>
          ))}
        </div>
        <div>
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search client, tech, or title…"
            className="w-full sm:w-80 rounded-xl border border-gray-300 p-2.5 focus:outline-none focus:ring-2 focus:ring-brand"
          />
        </div>
      </div>

      {/* Grid */}
      <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map((c, i) => (
          <CaseStudyCard
            key={c.slug}
            title={c.title}
            excerpt={c.excerpt}
            href={`/portfolio/${c.slug}`}
            tags={c.tags}
            year={c.year}
            variant={(`case-${(i % 3) + 1}` as any)}
          />
        ))}
        {filtered.length === 0 && (
          <div className="col-span-full rounded-xl border border-dashed p-8 text-center text-gray-600">No results. Try another tag or search.</div>
        )}
      </div>
    </div>
  );
}

