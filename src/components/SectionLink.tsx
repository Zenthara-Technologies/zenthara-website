"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import type { MouseEvent, ReactNode } from 'react';

type Props = {
  id: string;
  href: string;
  className?: string;
  children: ReactNode;
  onNavigate?: () => void;
};

/**
 * A link to an in-page section (e.g. href="/#services"). On the home route
 * it scrolls straight to the target with plain JS — the URL never changes,
 * so no #hash ever touches the address bar. From any other route it falls
 * back to a normal navigation to e.g. "/#services"; HashScrollCleanup lands
 * on it and strips the hash once it settles.
 */
export function SectionLink({ id, href, className, children, onNavigate }: Props) {
  const pathname = usePathname();

  const handleClick = (e: MouseEvent) => {
    if (pathname !== '/') {
      onNavigate?.();
      return;
    }
    e.preventDefault();
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    onNavigate?.();
  };

  return (
    <Link href={href} className={className} onClick={handleClick}>
      {children}
    </Link>
  );
}
