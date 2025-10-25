type Props = {
  icon: string;
  title: string;
  description: string;
  id?: string;
};

export function ServiceCard({ icon, title, description, id }: Props) {
  return (
    <article id={id} className="card group">
      <div className="icon-wrap text-3xl" aria-hidden>{icon}</div>
      <h3 className="mt-3 text-xl font-semibold">{title}</h3>
      <p className="mt-2 text-gray-600">{description}</p>
      <div className="mt-3 h-1 w-0 bg-brand transition-all duration-200 group-hover:w-12" />
    </article>
  );
}

