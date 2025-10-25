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
    <div className="container section-pad space-y-12">
      <div className="max-w-3xl">
        <h1 className="text-3xl sm:text-4xl font-bold">About Zenthara</h1>
        <h2 className="mt-4 text-2xl font-semibold text-indigo-600">Turning Vision Into High-Performance Software</h2>
        <p className="mt-4 text-gray-600">
          Every great product starts with a vision - and at Zenthara, we turn that vision into technology that works. Founded on the belief that
          innovation should be both accessible and impactful, we help businesses build scalable, high-quality digital solutions designed for the future.
        </p>
        <p className="mt-4 text-gray-600">
          By blending strategic thinking, modern design, and robust engineering, we transform complex challenges into elegant, dependable systems. Whether
          you are nurturing a new idea or modernizing an existing platform, we focus on outcomes that create real business value.
        </p>
      </div>

      <div className="grid gap-8 sm:grid-cols-2">
        <div className="rounded-xl border border-gray-100 bg-white p-6 shadow-sm tile-hover">
          <h3 className="text-xl font-semibold">Our Mission</h3>
          <p className="mt-3 text-gray-700">
            To democratize access to cutting-edge technology by delivering reliable, world-class solutions that drive innovation, efficiency, and
            sustainable growth for every client we serve.
          </p>
        </div>

        <div className="rounded-xl border border-gray-100 bg-white p-6 shadow-sm tile-hover">
          <h3 className="text-xl font-semibold">Think. Build. Deliver.</h3>
          <p className="mt-3 text-gray-700">
            We build long-term partnerships, aligning our multidisciplinary team with your roadmap. From discovery through delivery, we remain accountable
            to the outcomes that matter most to your business.
          </p>
        </div>
      </div>

      <div>
        <h3 className="text-2xl font-semibold">Our Values</h3>
        <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {values.map((value) => (
            <div
              key={value.title}
              className="rounded-xl border border-gray-100 bg-white p-6 shadow-sm tile-hover"
            >
              <div className="text-sm font-semibold text-indigo-600 uppercase tracking-wide">{value.title}</div>
              <p className="mt-3 text-gray-700 text-sm leading-relaxed">{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
