"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { openContactModal } from '@/components/ContactModal';
import { Button } from '@/components/Button';
import { LogoMark } from '@/components/Logo';
import { ThemeToggle } from '@/components/ThemeToggle';
import { SectionLink } from '@/components/SectionLink';

const SECTION_IDS = ['home', 'services', 'process', 'about'];

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState<string>('');
  const pathname = usePathname();

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  const clearFocusedButton = () => {
    const current = document.activeElement as HTMLElement | null;
    if (current?.tagName === 'BUTTON') current.blur();
  };

  const handleNavigate = () => {
    clearFocusedButton();
    setOpen(false);
  };

  // Scrollspy for in-page sections on home route
  useEffect(() => {
    if (pathname !== '/') return;
    const els = SECTION_IDS
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => Boolean(el));

    const io = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible?.target?.id) setActive(visible.target.id);
      },
      { rootMargin: '-40% 0px -55% 0px', threshold: [0, 0.25, 0.5, 0.75, 1] }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, [pathname]);

  useEffect(() => {
    if (pathname !== '/') setActive('');
  }, [pathname]);

  return (
    <header className="site-header">
      <div className="container">
        <div className="site-header-inner">
          <Link className="logo" href="/" aria-label="Zenthara Home">
            <LogoMark className="logo-mark" />
            <span className="logo-text">Zenthara</span>
          </Link>
          <div className="flex items-center gap-1 md:hidden">
            <ThemeToggle />
            <button
              className="nav-toggle"
              aria-label="Toggle navigation"
              aria-expanded={open}
              onClick={() => setOpen((v) => !v)}
              type="button"
            >
              {open ? '✕' : '☰'}
            </button>
          </div>
          <nav className="site-nav" aria-label="Main">
            <SectionLink id="home" href="/" className={pathname === '/' && (!active || active === 'home') ? 'active' : ''}>
              Home
            </SectionLink>
            <SectionLink id="services" href="/#services" className={active === 'services' ? 'active' : ''}>Services</SectionLink>
            <SectionLink id="process" href="/#process" className={active === 'process' ? 'active' : ''}>Process</SectionLink>
            <SectionLink id="about" href="/#about" className={active === 'about' ? 'active' : ''}>About</SectionLink>
            <Link href="/portfolio" className={pathname.startsWith('/portfolio') ? 'active' : ''}>Work</Link>
            <ThemeToggle className="ml-1" />
            <Button onClick={() => openContactModal()} size="sm" variant="primary" className="ml-1">Contact</Button>
          </nav>
        </div>
      </div>

      {open && (
        <div className="container md:hidden">
          <div className="mt-2 flex flex-col gap-1 rounded-2xl border border-slate-200/80 bg-white/95 p-3 shadow-lg backdrop-blur-xl dark:border-white/10 dark:bg-dark-900/95">
            <SectionLink id="home" href="/" className="rounded-lg px-3 py-2.5 font-medium text-slate-700 hover:bg-slate-900/5 dark:text-slate-200 dark:hover:bg-white/10" onNavigate={handleNavigate}>
              Home
            </SectionLink>
            <SectionLink id="services" href="/#services" className="rounded-lg px-3 py-2.5 font-medium text-slate-700 hover:bg-slate-900/5 dark:text-slate-200 dark:hover:bg-white/10" onNavigate={handleNavigate}>Services</SectionLink>
            <SectionLink id="process" href="/#process" className="rounded-lg px-3 py-2.5 font-medium text-slate-700 hover:bg-slate-900/5 dark:text-slate-200 dark:hover:bg-white/10" onNavigate={handleNavigate}>Process</SectionLink>
            <SectionLink id="about" href="/#about" className="rounded-lg px-3 py-2.5 font-medium text-slate-700 hover:bg-slate-900/5 dark:text-slate-200 dark:hover:bg-white/10" onNavigate={handleNavigate}>About</SectionLink>
            <Link href="/portfolio" className="rounded-lg px-3 py-2.5 font-medium text-slate-700 hover:bg-slate-900/5 dark:text-slate-200 dark:hover:bg-white/10" onClick={handleNavigate}>Work</Link>
            <Button
              onClick={() => {
                setOpen(false);
                openContactModal();
              }}
              variant="primary"
              className="mt-1 w-full justify-center"
            >
              Contact
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}
