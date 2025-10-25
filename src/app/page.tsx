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
          <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-sm text-white/80 ring-1 ring-white/20 animate-fade-up mb-6">
            <span className="h-2 w-2 rounded-full bg-emerald-400"></span>
            Available for new projects
          </div>
          <h1 className="hero-title animate-fade-up delay-100">Building dependable software for modern businesses.</h1>
          <p className="hero-subtitle animate-fade-up delay-200">
            We partner with organizations to design, develop, and deliver scalable digital solutions. From strategy to deployment, our team focuses on clarity,
            performance, and long-term reliability—helping you launch faster with confidence. Our expertise includes product strategy, custom web and mobile
            development, and cloud-native engineering designed for growth.
          </p>
          <div className="hero-cta animate-fade-up delay-200">
            <ContactButton size="lg">Start a project</ContactButton>
            <Button href="/#services" variant="ghost" size="lg">Explore services</Button>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="section section-pad section-screen bg-slate-50 scroll-mt-16 bg-[radial-gradient(1200px_600px_at_50%_-20%,rgba(99,102,241,0.10),transparent)]" id="services">
        <div className="container">
          <div className="mx-auto mb-6 w-fit rounded-full bg-indigo-100/70 px-4 py-1 text-sm font-semibold text-indigo-700">Comprehensive Solutions</div>
          <h2 className="section-title text-center">Services We Offer</h2>
          <p className="mx-auto mb-10 max-w-3xl text-center text-gray-600">We handle every stage of software development, from idea to launch, building solutions designed to scale with your business.</p>
          <ServicesShowcase />
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
