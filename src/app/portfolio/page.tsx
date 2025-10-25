import { cases } from '@/content/case-studies';
import { PortfolioGrid } from '@/components/PortfolioGrid';
import { ContactButton } from '@/components/ContactButton';

export const metadata = { title: 'Portfolio — Zenthara' };

export default function PortfolioPage() {
  return (
    <div className="container section-pad">
      <h1 className="text-3xl sm:text-4xl font-bold">Portfolio / Case Studies</h1>
      <p className="mt-3 text-gray-600 max-w-2xl">Selected projects highlighting client, problem, solution, and measurable results.</p>

      <PortfolioGrid cases={cases} />

      <div className="mt-12 rounded-2xl bg-gradient-to-r from-indigo-50 to-amber-50 p-6 ring-1 ring-black/5 flex items-center justify-between flex-col sm:flex-row gap-4 tile-hover">
        <div>
          <div className="text-lg font-semibold">Have a similar project in mind?</div>
          <div className="text-gray-600">Let’s talk outcomes and next steps.</div>
        </div>
        <ContactButton>Discuss Your Project</ContactButton>
      </div>
    </div>
  );
}
