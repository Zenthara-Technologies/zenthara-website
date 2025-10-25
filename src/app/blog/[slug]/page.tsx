import { notFound } from 'next/navigation';
import { posts } from '@/content/posts';

type Props = { params: { slug: string } };

export function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({ params }: Props) {
  const post = posts.find((p) => p.slug === params.slug);
  return { title: post ? `${post.title} — Zenthara` : 'Post — Zenthara' };
}

export default function PostPage({ params }: Props) {
  const post = posts.find((p) => p.slug === params.slug);
  if (!post) return notFound();
  return (
    <div className="container section-pad max-w-3xl">
      <h1 className="text-3xl sm:text-4xl font-bold">{post.title}</h1>
      <p className="mt-2 text-sm text-gray-500">{new Date(post.date).toLocaleDateString()}</p>
      <div className="mt-6 whitespace-pre-wrap text-gray-800 leading-7">{post.content}</div>
    </div>
  );
}
