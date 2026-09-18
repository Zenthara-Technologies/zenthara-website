import { notFound } from 'next/navigation';
import { posts } from '@/content/posts';

type Props = { params: { slug: string } };

export function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({ params }: Props) {
  const post = posts.find((p) => p.slug === params.slug);
  if (!post) return { title: 'Post not found' };
  return {
    title: post.title,
    description: post.excerpt,
    alternates: { canonical: `/blog/${post.slug}` },
    openGraph: { title: post.title, description: post.excerpt, type: 'article', publishedTime: post.date },
  };
}

export default function PostPage({ params }: Props) {
  const post = posts.find((p) => p.slug === params.slug);
  if (!post) return notFound();
  return (
    <div className="container section-pad max-w-3xl">
      <h1 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white">{post.title}</h1>
      <p className="mt-2 text-sm text-gray-500 dark:text-slate-400">{new Date(post.date).toLocaleDateString()}</p>
      <div className="mt-6 whitespace-pre-wrap text-gray-800 dark:text-slate-300 leading-7">{post.content}</div>
    </div>
  );
}
