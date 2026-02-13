"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { openContactModal } from '@/components/ContactModal';
import { Button } from '@/components/Button';

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState<string>('');
  const pathname = usePathname();

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  const handleNavigate = () => setOpen(false);

  // Scrollspy for in-page sections on home route
  useEffect(() => {
    if (pathname !== '/') return;
    const ids = ['home', 'services', 'process', 'about'];
    const els = ids
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

  return (
    <header className="site-header">
      <div className="container flex h-16 items-center justify-between">
        <Link className="logo" href="/" aria-label="Zenthara Home">
          <span className="logo-mark" aria-hidden>⚡</span>
          <span className="logo-text">Zenthara</span>
        </Link>
        <button
          className="nav-toggle"
          aria-label="Toggle navigation"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          type="button"
        >
          ☰
        </button>
        <nav className="site-nav" aria-label="Main">
          <Link href="/" className={pathname === '/' && (!active || active === 'home') ? 'active' : ''}>Home</Link>
          <Link href="/#services" className={active === 'services' ? 'active' : ''}>Services</Link>
          <Link href="/#process" className={active === 'process' ? 'active' : ''}>Process</Link>
          <Link href="/#about" className={active === 'about' ? 'active' : ''}>About</Link>
          <Button onClick={() => openContactModal()} size="sm" variant="primary">Contact</Button>
        </nav>
      </div>

      {open && (
        <div className="md:hidden border-t border-gray-200 bg-white">
          <div className="container py-3 flex flex-col gap-3">
            <Link href="/" onClick={handleNavigate}>Home</Link>
            <Link href="/#services" onClick={handleNavigate}>Services</Link>
            <Link href="/#process" onClick={handleNavigate}>Process</Link>
            <Link href="/#about" onClick={handleNavigate}>About</Link>
            <Button
              onClick={() => {
                setOpen(false);
                openContactModal();
              }}
              variant="primary"
              className="w-full justify-start"
            >
              Contact
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}
