"use client";

import { useEffect, useRef, useState } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';

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
  const router = useRouter();

  // Sync active tab with URL query param
  useEffect(() => {
    const category = searchParams.get('category');
    if (category && CATEGORIES.some(c => c.key === category)) {
      setActive(category);
      // Force scroll to services section to ensure deep link visibility
      // Small timeout to allow layout to stabilize
      setTimeout(() => {
        const section = document.getElementById('services');
        if (section) {
          section.scrollIntoView({ behavior: 'smooth' });
        }
      }, 500);
    }
  }, [searchParams]);

  const handleTabClick = (key: string) => {
    setActive(key);
    // Use window.history to update URL without triggering a Next.js router navigation/scroll reset
    const newUrl = `${window.location.pathname}?category=${key}#services`;
    window.history.replaceState({ ...window.history.state, as: newUrl, url: newUrl }, '', newUrl);
  };

  // When switching categories on small screens, ensure cards are visible
  useEffect(() => {
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
          <div className="space-y-3 sticky top-24" role="tablist" aria-orientation="vertical">
            {CATEGORIES.map((c) => (
              <button
                key={c.key}
                type="button"
                role="tab"
                aria-selected={active === c.key}
                onClick={() => handleTabClick(c.key)}
                className={
                  'w-full text-left rounded-xl border px-4 py-3 font-semibold transition-all backdrop-blur shadow-sm ' +
                  (active === c.key
                    ? 'bg-gradient-to-r from-brand-dark to-brand text-white border-transparent shadow-md'
                    : 'bg-white/80 border-white/40 hover:border-brand-light/30 hover:bg-white')
                }
              >
                {c.label}
              </button>
            ))}
          </div>
        </div>

        {/* Right: Cards */}
        <div className="lg:col-span-8" ref={rightRef}>
          <div className="grid gap-6 md:grid-cols-2">
            {current.items.map((item, i) => (
              <div
                key={item.title}
                className="group rounded-2xl border border-gray-100 bg-white/90 p-6 shadow-card backdrop-blur animate-fade-up tile-hover transition-[border-color] duration-200 hover:border-indigo-200"
                style={{ animationDelay: `${i * 90}ms` }}
              >
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-indigo-50 to-violet-50 text-2xl ring-1 ring-black/5">
                    <span aria-hidden>{item.icon}</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold group-hover:text-indigo-700 transition-colors">{item.title}</h3>
                    <p className="mt-1 text-gray-600">{item.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
