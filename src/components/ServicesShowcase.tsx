"use client";

import { useEffect, useRef, useState } from 'react';
import { useSearchParams } from 'next/navigation';

type Item = { icon: string; title: string; desc: string };
type Category = { key: string; label: string; items: Item[] };

const CATEGORY_DATA: Category[] = [
  {
    key: 'software',
    label: 'Software Development',
    items: [
      { icon: '🧩', title: 'Web Development', desc: 'Custom web applications built with modern frameworks and technologies.' },
      { icon: '🎨', title: 'Frontend Development', desc: 'Responsive, accessible, and interactive UI with React and Tailwind.' },
      { icon: '🗄️', title: 'Backend Development', desc: 'Scalable APIs and services with strong security and reliability.' },
      { icon: '☁️', title: 'SaaS Development', desc: 'From concept to deployment for complete SaaS products.' }
    ]
  },
  {
    key: 'mobile',
    label: 'Mobile Applications',
    items: [
      { icon: '📱', title: 'Cross‑platform Apps', desc: 'Ship iOS and Android quickly with a single codebase.' },
      { icon: '⚡', title: 'Performance & Offline', desc: 'Smooth UX with offline‑first data and background sync.' },
      { icon: '🔄', title: 'CI/CD & Releases', desc: 'Automated build pipelines and staged rollouts.' },
      { icon: '🧪', title: 'Quality & Analytics', desc: 'Crash reporting, tracing, and in‑app metrics.' }
    ]
  },
  {
    key: 'cloud',
    label: 'Cloud Solutions',
    items: [
      { icon: '🚀', title: 'Cloud Migration', desc: 'Plan and execute secure, cost‑effective moves to AWS.' },
      { icon: '🏗️', title: 'Infrastructure as Code', desc: 'Repeatable environments with Terraform/CDK and guardrails.' },
      { icon: '📈', title: 'Observability', desc: 'Metrics, logs, traces with SLOs and alerting that matters.' },
      { icon: '🛡️', title: 'Security', desc: 'Least privilege, secrets management, and compliance automation.' }
    ]
  },
  {
    key: 'consulting',
    label: 'AWS Consulting',
    items: [
      { icon: '🏅', title: 'Well‑Architected Review', desc: 'Assess workloads against AWS best practices and improve score.' },
      { icon: '💰', title: 'Cost Optimization', desc: 'FinOps, rightsizing, and savings plans to reduce spend.' },
      { icon: '🔒', title: 'Security Posture', desc: 'Identity, network, and data protection hardened by default.' },
      { icon: '🧭', title: 'Architecture Guidance', desc: 'Target architecture, roadmap, and reference implementations.' }
    ]
  },
  {
    key: 'ai',
    label: 'AWS AI Services',
    items: [
      { icon: '🤖', title: 'AI‑ready Platforms', desc: 'Data foundations and feature stores for AI/ML workloads.' },
      { icon: '🧠', title: 'GenAI Prototypes', desc: 'Pragmatic LLM use‑cases with evaluation and guardrails.' },
      { icon: '🔎', title: 'RAG & Search', desc: 'Retrieval‑augmented generation with secure, up‑to‑date context.' },
      { icon: '📊', title: 'Analytics', desc: 'Real‑time insights with streaming and warehouse layers.' }
    ]
  }
];

const CATEGORY_ORDER: Array<Category['key']> = ['cloud', 'consulting', 'ai', 'software', 'mobile'];

const CATEGORIES: Category[] = CATEGORY_ORDER
  .map((key) => CATEGORY_DATA.find((category) => category.key === key))
  .filter((category): category is Category => Boolean(category));

export function ServicesShowcase() {
  const [active, setActive] = useState<string>(CATEGORIES[0].key);
  const current = CATEGORIES.find((c) => c.key === active) ?? CATEGORIES[0];
  const rightRef = useRef<HTMLDivElement | null>(null);
  const searchParams = useSearchParams();

  // Pick up an initial category from a deep link (e.g. a footer link with
  // ?category=cloud). HashScrollCleanup takes care of scrolling into view
  // and then stripping the query/hash back off the URL.
  useEffect(() => {
    const category = searchParams.get('category');
    if (category && CATEGORIES.some((c) => c.key === category)) {
      setActive(category);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleTabClick = (key: string) => {
    setActive(key);
  };

  // When switching categories on small screens, ensure cards are visible
  const prevActive = useRef(active);
  useEffect(() => {
    if (prevActive.current === active) return;
    prevActive.current = active;
    if (!rightRef.current) return;
    if (window.matchMedia('(max-width: 1023px)').matches) {
      rightRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }, [active]);

  return (
    <div className="relative">
      <div className="flex flex-col gap-8 lg:grid lg:grid-cols-12">
        {/* Left: Tabs */}
        <div className="lg:col-span-4">
          <div
            className="flex gap-2 overflow-x-auto pb-2 lg:sticky lg:top-24 lg:flex-col lg:gap-2 lg:overflow-visible lg:pb-0"
            role="tablist"
            aria-orientation="vertical"
          >
            {CATEGORIES.map((c) => (
              <button
                key={c.key}
                type="button"
                role="tab"
                aria-selected={active === c.key}
                onClick={() => handleTabClick(c.key)}
                className={
                  'shrink-0 rounded-xl border px-4 py-3 text-left font-semibold transition-all backdrop-blur ' +
                  (active === c.key
                    ? 'border-transparent bg-gradient-to-r from-brand-dark to-brand text-white shadow-lg shadow-brand/20'
                    : 'border-white/60 bg-white/70 text-slate-600 shadow-sm hover:border-brand-light/40 hover:bg-white hover:text-slate-900 dark:border-white/10 dark:bg-dark-800/70 dark:text-slate-300 dark:hover:bg-dark-800 dark:hover:text-white')
                }
              >
                {c.label}
              </button>
            ))}
          </div>
        </div>

        {/* Right: Cards */}
        <div className="lg:col-span-8" ref={rightRef}>
          <div className="grid gap-5 md:grid-cols-2">
            {current.items.map((item, i) => (
              <div
                key={item.title}
                className="group rounded-2xl border border-gray-100 bg-white/90 p-6 shadow-card backdrop-blur animate-fade-up tile-hover transition-[border-color] duration-200 hover:border-indigo-200 dark:border-white/10 dark:bg-dark-800/70 dark:hover:border-brand-light/30"
                style={{ animationDelay: `${i * 90}ms` }}
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-brand to-brand-dark text-2xl shadow-md shadow-brand/20">
                  <span aria-hidden className="drop-shadow-sm">{item.icon}</span>
                </div>
                <h3 className="mt-4 text-lg font-semibold text-slate-900 dark:text-white group-hover:text-brand-dark dark:group-hover:text-brand-light transition-colors">{item.title}</h3>
                <p className="mt-1.5 text-gray-600 dark:text-slate-400 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
