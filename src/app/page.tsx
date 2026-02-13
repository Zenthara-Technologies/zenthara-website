import { Suspense } from 'react';
import { Button } from '@/components/Button';
import { ContactButton } from '@/components/ContactButton';
import { ServicesShowcase } from '@/components/ServicesShowcase';
import { ProcessSection } from '@/components/ProcessSection';
import { AboutMission } from '@/components/AboutMission';
import { ContactInfoSection } from '@/components/ContactInfoSection';

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
            Building dependable software for <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand to-brand-dark">modern businesses</span>.
          </h1>
          <p className="hero-subtitle animate-fade-up delay-200">
            We partner with organizations to design, develop, and deliver scalable digital solutions. From strategy to deployment, our team focuses on clarity,
            performance, and long-term reliability.
          </p>
          <div className="hero-cta animate-fade-up delay-200">
            <ContactButton size="lg">Start a project</ContactButton>
            <Button href="/#services" variant="ghost" size="lg">Explore services</Button>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="section section-pad section-screen scroll-mt-16" id="services">
        <div className="container">
          <div className="mx-auto mb-6 w-fit rounded-full bg-brand/10 px-4 py-1 text-sm font-semibold text-brand">Comprehensive Solutions</div>
          <h2 className="section-title text-center">Services We Offer</h2>
          <p className="mx-auto mb-10 max-w-3xl text-center text-slate-600">We handle every stage of software development, from idea to launch, building solutions designed to scale with your business.</p>
          <Suspense fallback={<div className="h-96 w-full animate-pulse rounded-2xl bg-slate-100" />}>
            <ServicesShowcase />
          </Suspense>
        </div>
      </section>

      {/* How We Work */}
      <ProcessSection />

      {/* About Us */}
      <AboutMission />

      {/* Get In Touch */}
      <ContactInfoSection />
    </>
  );
}
