"use client";

import { useMemo, useState } from 'react';
import { Case } from '@/content/case-studies';
import { CaseStudyCard } from '@/components/CaseStudyCard';

type Props = { cases: Case[] };

export function PortfolioGrid({ cases }: Props) {
  const categories = useMemo(() => {
    const s = new Set<string>();
    cases.forEach((c) => s.add(c.category));
    return ['All', ...Array.from(s).sort()];
  }, [cases]);

  const [query, setQuery] = useState('');
  const [category, setCategory] = useState('All');

  const filtered = cases.filter((c) => {
    const q = query.trim().toLowerCase();
    const matchesQ = !q || [c.title, c.excerpt, c.client, c.category, ...(c.tags ?? [])]
      .filter(Boolean)
      .some((v) => String(v).toLowerCase().includes(q));
    const matchesCategory = category === 'All' || c.category === category;
    return matchesQ && matchesCategory;
  });

  return (
    <div className="mt-6">
      {/* Controls */}
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex flex-wrap gap-2">
          {categories.map((c) => (
            <button
              key={c}
              onClick={() => setCategory(c)}
              className={`rounded-full border px-3 py-1.5 text-sm transition-colors ${category === c ? 'bg-brand text-white border-brand' : 'bg-white border-gray-200 hover:border-gray-300 dark:bg-dark-800 dark:border-white/10 dark:text-slate-300 dark:hover:border-white/20'}`}
              type="button"
            >
              {c}
            </button>
          ))}
        </div>
        <div>
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search client, capability, or title…"
            className="w-full sm:w-80 rounded-xl border border-gray-300 p-2.5 focus:outline-none focus:ring-2 focus:ring-brand dark:border-white/10 dark:bg-dark-800 dark:text-white dark:placeholder:text-slate-500"
          />
        </div>
      </div>

      {/* Grid */}
      <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map((c) => (
          <CaseStudyCard
            key={c.slug}
            title={c.title}
            excerpt={c.excerpt}
            href={`/portfolio/${c.slug}`}
            category={c.category}
            status={c.status}
            tags={c.tags}
          />
        ))}
        {filtered.length === 0 && (
          <div className="col-span-full rounded-xl border border-dashed dark:border-white/15 p-8 text-center text-gray-600 dark:text-slate-400">No results. Try another category or search.</div>
        )}
      </div>
    </div>
  );
}
