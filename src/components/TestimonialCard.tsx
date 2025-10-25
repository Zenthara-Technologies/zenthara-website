type Props = {
  quote: string;
  author: string;
  role?: string;
};

export function TestimonialCard({ quote, author, role }: Props) {
  return (
    <figure className="quote rounded-xl border border-gray-100 bg-white p-6 shadow-sm">
      <blockquote>“{quote}”</blockquote>
      <figcaption className="mt-3">— {author}{role ? `, ${role}` : ''}</figcaption>
    </figure>
  );
}

