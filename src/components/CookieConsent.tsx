"use client";

import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';

const STORAGE_KEY = 'cookie-consent';

export function CookieConsent() {
  const [visible, setVisible] = useState(false);
  const bannerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    try {
      if (!localStorage.getItem(STORAGE_KEY)) setVisible(true);
    } catch {
      // Storage unavailable (private mode, etc.) — skip the banner rather than nag every load.
    }
  }, []);

  // The banner is fixed to the viewport bottom, which would otherwise sit
  // on top of the footer's last row (including the Privacy/Terms links)
  // and block clicks on it. Reserve its actual (variable — it can wrap to
  // 2-3 lines on narrow phones) height as body padding so the footer stays
  // reachable.
  useEffect(() => {
    if (!visible) {
      document.body.classList.remove('has-cookie-banner');
      document.body.style.removeProperty('--cookie-banner-height');
      return;
    }
    document.body.classList.add('has-cookie-banner');
    const el = bannerRef.current;
    if (!el) return;
    const setHeight = () => document.body.style.setProperty('--cookie-banner-height', `${el.offsetHeight}px`);
    setHeight();
    const ro = new ResizeObserver(setHeight);
    ro.observe(el);
    return () => {
      ro.disconnect();
      document.body.classList.remove('has-cookie-banner');
      document.body.style.removeProperty('--cookie-banner-height');
    };
  }, [visible]);

  const dismiss = (value: 'accepted' | 'dismissed') => {
    try {
      localStorage.setItem(STORAGE_KEY, value);
    } catch {
      // ignore storage errors
    }
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div ref={bannerRef} className="fixed inset-x-0 bottom-0 z-50 p-4 sm:p-6" role="dialog" aria-live="polite" aria-label="Cookie notice">
      <div className="mx-auto flex max-w-3xl flex-col gap-3 rounded-2xl border border-slate-200/80 bg-white/95 p-4 shadow-2xl backdrop-blur-xl sm:flex-row sm:items-center sm:justify-between dark:border-white/10 dark:bg-dark-900/95">
        <p className="text-sm text-gray-600 dark:text-slate-400">
          We use a small, functional cookie to remember your theme preference and this notice. We don&apos;t use tracking or advertising cookies. See our{' '}
          <Link href="/privacy" className="font-medium text-brand hover:underline dark:text-brand-light">Privacy Policy</Link> for details.
        </p>
        <div className="flex shrink-0 items-center gap-2">
          <button type="button" onClick={() => dismiss('dismissed')} className="btn btn-ghost btn-sm">Dismiss</button>
          <button type="button" onClick={() => dismiss('accepted')} className="btn btn-primary btn-sm">Accept</button>
        </div>
      </div>
    </div>
  );
}
