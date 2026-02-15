import Image from 'next/image';

type Feature = {
  icon: string;
  title: string;
  desc: string;
  accent: string;
};

const FEATURES: Feature[] = [
  {
    icon: '✨',
    title: 'Innovation',
    desc: 'We track emerging tech so we can design forward-looking solutions that keep you ahead.',
    accent: 'from-indigo-100 to-indigo-50'
  },
  {
    icon: '🤝',
    title: 'Collaboration',
    desc: 'Hands-on partnership keeps goals aligned, feedback flowing, and impact measurable.',
    accent: 'from-purple-100 to-purple-50'
  },
  {
    icon: '✅',
    title: 'Quality',
    desc: 'Design reviews, automation, and thorough testing deliver dependable, scalable software.',
    accent: 'from-emerald-100 to-emerald-50'
  },
  {
    icon: '🌍',
    title: 'Global Reach',
    desc: 'Distributed teams, reliable communication, and predictable delivery across time zones.',
    accent: 'from-sky-100 to-sky-50'
  }
];

export function AboutMission() {
  return (
    <section className="section section-alt section-screen pt-10 sm:pt-14 lg:pt-16 relative overflow-hidden scroll-mt-16" id="about">
      <span className="mission-blob mission-blob-1" aria-hidden="true" />
      <span className="mission-blob mission-blob-2" aria-hidden="true" />
      <span className="mission-blob mission-blob-3" aria-hidden="true" />
      <div className="container relative z-10">
        <div className="grid gap-10 lg:grid-cols-12 items-center">
          {/* Left: hero image */}
          <div className="lg:col-span-6">
            <div className="relative overflow-hidden rounded-3xl shadow-xl ring-1 ring-black/5">
              <div className="relative aspect-[4/3]">
                <Image
                  src="/images/about-img.jpg"
                  alt="Zenthara team collaborating on product strategy"
                  fill
                  sizes="(min-width: 1024px) 540px, (min-width: 768px) 50vw, 100vw"
                  className="object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-indigo-900/25 via-transparent to-amber-300/25" />
                <div className="absolute top-6 left-6 right-6 rounded-2xl bg-white/85 px-5 py-4 shadow-lg ring-1 ring-black/5 backdrop-blur">
                  <div className="text-xs font-semibold uppercase tracking-[0.3em] text-indigo-500">Experience</div>
                  <div className="mt-2 flex items-baseline gap-2">
                    <div className="text-3xl font-extrabold text-indigo-700">5+ years</div>
                    <div className="text-sm text-gray-600">launching enterprise products</div>
                  </div>
                  <div className="mt-2 grid gap-1 text-sm text-gray-600 sm:grid-cols-2">
                    <span>- Cloud-native platforms</span>
                    <span>- Data &amp; AI foundations</span>
                    <span>- Modern product delivery</span>
                    <span>- Global engineering hubs</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right: copy + feature list */}
          <div className="lg:col-span-6">
            <div className="mb-3 inline-flex rounded-full bg-brand/10 px-4 py-1 text-sm font-semibold text-brand">About Zenthara</div>
            <h2 className="text-3xl sm:text-4xl font-bold">
              Turning vision into <span className="text-brand">high-performance software</span>
            </h2>
            <p className="mt-3 text-slate-600 max-w-2xl">
              Every great product starts with a vision, and we turn that vision into technology that works. We blend strategy, design, and engineering to build
              scalable systems that unlock real business value.
            </p>

            <div className="mt-5 rounded-2xl bg-white/60 backdrop-blur-sm p-5 shadow-card ring-1 ring-white/20">
              <h3 className="font-semibold">Our Mission</h3>
              <p className="mt-1 text-slate-600">
                To democratize access to cutting-edge technology by delivering reliable, world-class solutions that drive innovation, efficiency, and sustainable growth for every client we serve.
              </p>
            </div>

            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              {FEATURES.map((feature, index) => (
                <div
                  key={feature.title}
                  className="flex items-center gap-3 rounded-2xl bg-white/60 p-4 shadow-sm ring-1 ring-white/20 tile-hover-soft animate-fade-up backdrop-blur-sm"
                  style={{ animationDelay: `${index * 80}ms` }}
                >
                  <div className={`flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-br ${feature.accent} text-xl`}>
                    <span>{feature.icon}</span>
                  </div>
                  <div>
                    <div className="font-semibold">{feature.title}</div>
                    <div className="text-gray-600 text-sm">{feature.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
