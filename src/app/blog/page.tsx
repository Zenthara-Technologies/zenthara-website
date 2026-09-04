import Link from 'next/link';
import { posts } from '@/content/posts';

export const metadata = { title: 'Blog — Zenthara' };

export default function BlogIndexPage() {
  return (
    <div className="container section-pad">
      <h1 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white">Blog</h1>
      <p className="mt-3 text-gray-600 dark:text-slate-400 max-w-2xl">Insights on web, cloud, and data engineering.</p>
      <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {posts.map((p) => (
          <article key={p.slug} className="rounded-xl border border-gray-100 bg-white p-6 shadow-sm tile-hover-soft dark:border-white/10 dark:bg-dark-800">
            <h2 className="text-xl font-semibold text-slate-900 dark:text-white">
              <Link href={`/blog/${p.slug}`}>{p.title}</Link>
            </h2>
            <p className="mt-2 text-gray-600 dark:text-slate-400">{p.excerpt}</p>
            <div className="mt-2 text-sm text-gray-500 dark:text-slate-500">{new Date(p.date).toLocaleDateString()}</div>
          </article>
        ))}
      </div>
    </div>
  );
}

