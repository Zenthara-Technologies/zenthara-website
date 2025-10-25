"use client";

import { Button } from '@/components/Button';
import { openContactModal } from '@/components/ContactModal';

type Props = { className?: string; size?: 'sm' | 'md' | 'lg'; children?: React.ReactNode };

export function ContactButton({ className, size = 'md', children = 'Contact Us' }: Props) {
  return (
    <Button className={className} size={size} onClick={() => openContactModal()} type="button">
      {children}
    </Button>
  );
}
