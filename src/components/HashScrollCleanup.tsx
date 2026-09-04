"use client";

import { useEffect } from 'react';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';

const KNOWN_IDS = new Set(['home', 'services', 'process', 'about', 'contact']);

/**
 * Lands smoothly on a hash target after a cross-page navigation (e.g. from
 * /about clicking "Services" lands on /#services), then strips the hash and
 * any transient query params so the address bar settles back to a clean
 * path instead of staying on /#services or /?category=cloud#services.
 *
 * Same-page section links never touch the URL in the first place — see
 * SectionLink — so this only needs to handle the cross-page landing case.
 */
export function HashScrollCleanup() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const router = useRouter();
  const search = searchParams.toString();

  useEffect(() => {
    const hash = window.location.hash.replace('#', '');
    if (!hash && !search) return;

    const target = hash && KNOWN_IDS.has(hash) ? document.getElementById(hash) : null;
    const cleanUp = () => router.replace(pathname, { scroll: false });

    if (target) {
      requestAnimationFrame(() => {
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      });
      const timer = setTimeout(cleanUp, 900);
      return () => clearTimeout(timer);
    }

    cleanUp();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname, search]);

  return null;
}
