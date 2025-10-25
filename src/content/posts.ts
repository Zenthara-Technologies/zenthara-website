export type Post = {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  content: string;
  tags?: string[];
};

export const posts: Post[] = [
  {
    slug: 'shipping-faster-with-platform-engineering',
    title: 'Shipping Faster with Platform Engineering',
    excerpt: 'How a strong internal platform accelerates delivery and improves reliability.',
    date: '2025-01-12',
    content: `\nPlatform engineering helps teams standardize CI/CD, observability, and infrastructure.\nBy providing golden paths and paved roads, teams focus on product outcomes—not plumbing.\n`
  }
];

