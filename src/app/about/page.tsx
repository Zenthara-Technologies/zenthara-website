export const metadata = { title: 'About - Zenthara' };

export default function AboutPage() {
  const values = [
    {
      title: 'Innovation',
      description:
        'We stay ahead of technology trends to build forward-looking solutions that keep our clients ahead of the curve.'
    },
    {
      title: 'Collaboration',
      description:
        'True success comes from partnership, so we work hand-in-hand with clients to understand goals and deliver measurable impact.'
    },
    {
      title: 'Quality',
      description:
        'Every project undergoes thorough design, testing, and review to ensure reliability and long-term success.'
    },
    {
      title: 'Global Reach',
      description:
        'With clients across industries and continents, we provide consistent delivery and transparent communication wherever you are.'
    }
  ];

  return (
    <div className="container section-pad space-y-16">
      <div className="max-w-3xl">
        <div className="section-kicker !mx-0">About Zenthara</div>
        <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-slate-900 dark:text-white">
          Turning vision into <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand to-brand-dark dark:from-brand-light dark:to-accent-emerald">high-performance software</span>
        </h1>
        <p className="mt-5 text-lg text-gray-600 dark:text-slate-400 leading-relaxed">
          Every great product starts with a vision — we turn that vision into technology that works. We believe innovation should be both accessible and
          impactful, so we help businesses build scalable, high-quality digital solutions designed for the future.
        </p>
        <p className="mt-4 text-gray-600 dark:text-slate-400 leading-relaxed">
          By blending strategic thinking, modern design, and robust engineering, we transform complex challenges into elegant, dependable systems. Whether
          you&apos;re nurturing a new idea or modernizing an existing platform, we focus on outcomes that create real business value.
        </p>
      </div>

      <div className="grid gap-6 sm:grid-cols-2">
        <div className="card !p-7">
          <h3 className="text-xl font-semibold text-slate-900 dark:text-white">Our Mission</h3>
          <p className="mt-3 text-gray-700 dark:text-slate-400 leading-relaxed">
            To democratize access to cutting-edge technology by delivering reliable, world-class solutions that drive innovation, efficiency, and
            sustainable growth for every client we serve.
          </p>
        </div>

        <div className="card !p-7">
          <h3 className="text-xl font-semibold text-slate-900 dark:text-white">Think. Build. Deliver.</h3>
          <p className="mt-3 text-gray-700 dark:text-slate-400 leading-relaxed">
            We build long-term partnerships, aligning our multidisciplinary team with your roadmap. From discovery through delivery, we remain accountable
            to the outcomes that matter most to your business.
          </p>
        </div>
      </div>

      <div>
        <h3 className="text-2xl font-bold tracking-tight text-slate-900 dark:text-white">Our Values</h3>
        <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {values.map((value) => (
            <div
              key={value.title}
              className="rounded-2xl border border-gray-100 bg-white p-6 shadow-card tile-hover dark:border-white/10 dark:bg-dark-800"
            >
              <div className="text-xs font-semibold text-brand dark:text-brand-light uppercase tracking-widest">{value.title}</div>
              <p className="mt-3 text-gray-700 dark:text-slate-400 text-sm leading-relaxed">{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
