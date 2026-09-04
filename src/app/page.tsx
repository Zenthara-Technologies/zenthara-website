import { Suspense } from 'react';
import Link from 'next/link';
import { Button } from '@/components/Button';
import { ContactButton } from '@/components/ContactButton';
import { SectionLink } from '@/components/SectionLink';
import { ServicesShowcase } from '@/components/ServicesShowcase';
import { ProcessSection } from '@/components/ProcessSection';
import { AboutMission } from '@/components/AboutMission';
import { ContactInfoSection } from '@/components/ContactInfoSection';
import { CaseStudyCard } from '@/components/CaseStudyCard';
import { cases } from '@/content/case-studies';

const FEATURED_SLUGS = ['real-time-patient-monitoring', 'licensing-platform', 'account-portal-rebuild'];
const featuredCases = FEATURED_SLUGS.map((slug) => cases.find((c) => c.slug === slug)).filter((c): c is NonNullable<typeof c> => Boolean(c));

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="section hero" id="home">
        <div className="container hero-inner">
          <div className="inline-flex items-center gap-2 rounded-full bg-brand/5 px-4 py-1.5 text-sm text-brand-dark ring-1 ring-brand/20 animate-fade-up mb-8 backdrop-blur-md">
            <span className="h-2 w-2 rounded-full bg-brand shadow-[0_0_10px_currentColor]"></span>
            Available for new projects
          </div>
          <h1 className="hero-title animate-fade-up delay-100 drop-shadow-sm">
            Software that ships fast and <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand to-brand-dark">holds up</span> in production.
          </h1>
          <p className="hero-subtitle animate-fade-up delay-200">
            Zenthara is a product engineering partner for teams who need to move quickly without cutting corners — from cloud architecture and web
            platforms to AI-powered features, built for the long run.
          </p>
          <div className="hero-cta animate-fade-up delay-200">
            <ContactButton size="lg">Start a project</ContactButton>
            <SectionLink id="services" href="/#services" className="btn btn-ghost btn-lg">Explore services</SectionLink>
          </div>

          <div className="hero-stats animate-fade-up delay-300">
            <div className="hero-stat">
              <div className="hero-stat-value">10 days</div>
              <div className="hero-stat-label">Kickoff to first release</div>
            </div>
            <div className="hero-stat">
              <div className="hero-stat-value">5+ yrs</div>
              <div className="hero-stat-label">Building production systems</div>
            </div>
            <div className="hero-stat">
              <div className="hero-stat-value">AWS</div>
              <div className="hero-stat-label">Certified cloud practice</div>
            </div>
            <div className="hero-stat">
              <div className="hero-stat-value">Weekly</div>
              <div className="hero-stat-label">Demos, not black boxes</div>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="section section-pad scroll-mt-24" id="services">
        <div className="container">
          <div className="text-center" data-reveal>
            <div className="section-kicker">Comprehensive Solutions</div>
            <h2 className="section-title text-center">Services built around your roadmap</h2>
            <p className="mx-auto mb-10 max-w-3xl text-center text-slate-600 dark:text-slate-400">From cloud infrastructure to the product your customers touch, we cover every stage — so you get one accountable team instead of five vendors.</p>
          </div>
          <Suspense fallback={<div className="h-96 w-full animate-pulse rounded-2xl bg-slate-100 dark:bg-white/5" />}>
            <ServicesShowcase />
          </Suspense>
        </div>
      </section>

      {/* How We Work */}
      <ProcessSection />

      {/* Featured Work */}
      <section className="section section-pad">
        <div className="container">
          <div className="text-center" data-reveal>
            <div className="section-kicker">Case Studies</div>
            <h2 className="section-title text-center">Work that&apos;s actually shipped</h2>
            <p className="mx-auto mb-10 max-w-3xl text-center text-slate-600 dark:text-slate-400">A sample of engagements — from continuous platform work to internal automation pipelines.</p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3" data-reveal data-reveal-delay="1">
            {featuredCases.map((c) => (
              <CaseStudyCard
                key={c.slug}
                title={c.title}
                excerpt={c.excerpt}
                href={`/portfolio/${c.slug}`}
                category={c.category}
                status={c.status}
                tags={c.tags}
              />
            ))}
          </div>
          <div className="mt-10 text-center" data-reveal data-reveal-delay="2">
            <Button href="/portfolio" variant="ghost" size="lg">View all case studies</Button>
          </div>
        </div>
      </section>

      {/* About Us */}
      <AboutMission />

      {/* Get In Touch */}
      <ContactInfoSection />
    </>
  );
}
