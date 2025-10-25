import Link from 'next/link';

type Props = {
  title: string;
  excerpt: string;
  href: string;
  tags?: string[];
  year?: number;
  variant?: 'case-1' | 'case-2' | 'case-3';
};

export function CaseStudyCard({ title, excerpt, href, tags, year, variant = 'case-1' }: Props) {
  const variantClass = variant === 'case-2' ? 'case-2' : variant === 'case-3' ? 'case-3' : '';
  return (
    <article className="card case-card">
      <div className={`case-thumb ${variantClass}`} role="img" aria-label={title}></div>
      <div className="case-body mt-4">
        <div className="flex items-center justify-between">
          <h3 className="text-xl font-semibold">{title}</h3>
          {year ? <span className="text-sm text-gray-500">{year}</span> : null}
        </div>
        <p className="mt-2 text-gray-600">{excerpt}</p>
        {tags && tags.length > 0 && (
          <div className="mt-3 flex flex-wrap gap-2">
            {tags.slice(0, 4).map((t) => (
              <span key={t} className="rounded-full bg-slate-100 px-2.5 py-1 text-xs text-gray-700 ring-1 ring-inset ring-black/5">{t}</span>
            ))}
          </div>
        )}
        <Link href={href} className="btn btn-link mt-2">Read more →</Link>
      </div>
    </article>
  );
}
