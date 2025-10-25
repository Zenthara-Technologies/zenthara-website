export function TrustedClients() {
  const clients = [
    { code: 'TC', name: 'TechCorp', tag: 'Technology' },
    { code: 'IL', name: 'InnovateLab', tag: 'Innovation' },
    { code: 'DF', name: 'DataFlow', tag: 'Data Analytics' },
    { code: 'CV', name: 'CloudVision', tag: 'Cloud Services' },
    { code: 'ST', name: 'SecureTech', tag: 'Cybersecurity' },
    { code: 'DM', name: 'DevMaster', tag: 'Software Development' }
  ];

  const stats = [
    { value: '40', label: 'Total Clients' },
    { value: '10+', label: 'Countries Served' },
    { value: '99%', label: 'Client Satisfaction' },
    { value: '52+', label: 'Projects Delivered' }
  ];

  return (
    <section className="section section-alt">
      <div className="container">
        <h2 className="text-3xl sm:text-4xl font-bold text-center">Trusted by Industry Leaders</h2>
        <p className="mx-auto mt-3 max-w-3xl text-center text-gray-600">
          We’ve partnered with companies of all sizes across various industries, delivering innovative solutions that drive digital transformation and business growth.
        </p>

        <div className="mt-10 text-center text-gray-500 font-semibold">Featured Clients</div>

        <div className="mt-6 grid gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6">
          {clients.map((c, i) => (
            <div key={c.code} className="animate-fade-up" style={{ animationDelay: `${i * 80}ms` }}>
              <div className="flex flex-col items-center tile-hover rounded-2xl bg-white/60 p-4 shadow-sm ring-1 ring-black/5">
                <div className="flex h-24 w-24 items-center justify-center rounded-2xl bg-gradient-to-br from-slate-50 to-amber-50/60 ring-1 ring-inset ring-black/5 text-indigo-700 font-bold text-2xl shadow-sm">
                  {c.code}
                </div>
                <div className="mt-3 text-sm font-semibold text-gray-900">{c.name}</div>
                <div className="text-xs text-gray-500">{c.tag}</div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 rounded-3xl bg-gradient-to-r from-amber-50 to-indigo-50 p-6 ring-1 ring-inset ring-black/5 tile-hover">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {stats.map((s, i) => (
              <div key={s.label} className="text-center animate-fade-up tile-hover rounded-2xl bg-white/70 p-4 shadow-sm" style={{ animationDelay: `${i * 100}ms` }}>
                <div className="text-4xl font-extrabold text-indigo-700">{s.value}</div>
                <div className="mt-1 text-gray-600">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
