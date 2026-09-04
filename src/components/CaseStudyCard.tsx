import Link from 'next/link';

type Props = {
  title: string;
  excerpt: string;
  href: string;
  category: string;
  status: string;
  tags?: string[];
};

export function CaseStudyCard({ title, excerpt, href, category, status, tags }: Props) {
  return (
    <Link href={href} className="card case-card group flex flex-col">
      <span className="inline-flex w-fit items-center rounded-full bg-brand/10 dark:bg-brand-light/10 px-3 py-1 text-xs font-semibold text-brand-dark dark:text-brand-light">
        {category}
      </span>
      <h3 className="mt-4 text-lg font-semibold text-slate-900 dark:text-white group-hover:text-brand dark:group-hover:text-brand-light transition-colors">{title}</h3>
      <p className="mt-2 flex-1 text-sm text-gray-600 dark:text-slate-400 leading-relaxed">{excerpt}</p>
      {tags && tags.length > 0 && (
        <div className="mt-4 flex flex-wrap gap-2">
          {tags.slice(0, 3).map((t) => (
            <span key={t} className="rounded-full bg-slate-100 px-2.5 py-1 text-xs text-gray-700 ring-1 ring-inset ring-black/5 dark:bg-white/10 dark:text-slate-300 dark:ring-white/10">{t}</span>
          ))}
        </div>
      )}
      <div className="mt-4 flex items-center justify-between border-t border-slate-100 dark:border-white/10 pt-3">
        <span className="text-xs font-medium text-gray-500 dark:text-slate-500">{status}</span>
        <span className="btn btn-link text-sm">Read case study →</span>
      </div>
    </Link>
  );
}
