"use client";

import { useEffect, useState } from 'react';
import { ContactForm } from '@/app/contact/ContactForm';

export function openContactModal() {
  if (typeof window !== 'undefined') {
    // Prefer direct function if provider has attached it
    const anyWin = window as any;
    if (typeof anyWin.__openContactModal === 'function') {
      anyWin.__openContactModal();
    } else {
      window.dispatchEvent(new CustomEvent('open-contact'));
    }
  }
}

export function ContactModalProvider() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onOpen = () => setOpen(true);
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false);
    };
    window.addEventListener('open-contact', onOpen as any);
    window.addEventListener('keydown', onKey);
    // Expose an imperative opener for robustness
    (window as any).__openContactModal = onOpen;
    return () => {
      window.removeEventListener('open-contact', onOpen as any);
      window.removeEventListener('keydown', onKey);
      if ((window as any).__openContactModal === onOpen) {
        delete (window as any).__openContactModal;
      }
    };
  }, []);

  if (!open) return null;
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" onClick={() => setOpen(false)} />
      {/* Container becomes a flex column with a scrollable content area on small screens */}
      <div className="relative z-10 w-full sm:max-w-3xl rounded-3xl sm:rounded-2xl bg-white p-0 shadow-2xl ring-1 ring-black/10 animate-fade-up max-h-[92vh] flex flex-col">
        <div className="px-6 py-5 border-b border-gray-100 flex items-start justify-between rounded-t-3xl">
          <div>
            <h3 className="text-2xl sm:text-3xl font-bold">Let{`'`}s Get Started</h3>
            <p className="text-gray-600">Tell us about your project and we{`'`}ll get back to you within 24 hours.</p>
          </div>
          <button aria-label="Close" className="text-2xl leading-none" onClick={() => setOpen(false)}>
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div className="px-6 pt-5 pb-6 overflow-y-auto">
          <ContactForm />
        </div>
      </div>
    </div>
  );
}
