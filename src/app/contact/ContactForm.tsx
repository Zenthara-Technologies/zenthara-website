"use client";

import { useState } from 'react';
import { Button } from '@/components/Button';

export function ContactForm() {
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle');
  const [error, setError] = useState<string | null>(null);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus('sending');
    setError(null);
    const form = e.currentTarget;
    const formData = new FormData(form);
    const payload: Record<string, FormDataEntryValue> = {};
    formData.forEach((value, key) => {
      payload[key] = value;
    });

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });
      if (!res.ok) throw new Error('Failed to send');
      setStatus('sent');
      form.reset();
    } catch (err: any) {
      setStatus('error');
      setError(err?.message ?? 'Something went wrong');
    }
  }

  return (
    <form onSubmit={onSubmit} className="mt-4 grid gap-4">
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label className="block text-sm font-medium">Name *</label>
          <input name="name" placeholder="Your name" required className="mt-1 w-full rounded-xl border border-gray-300 p-3 focus:outline-none focus:ring-2 focus:ring-brand" />
        </div>
        <div>
          <label className="block text-sm font-medium">Email *</label>
          <input type="email" name="email" placeholder="your.email@example.com" required className="mt-1 w-full rounded-xl border border-gray-300 p-3 focus:outline-none focus:ring-2 focus:ring-brand" />
        </div>
      </div>
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label className="block text-sm font-medium">Company</label>
          <input name="company" placeholder="Your company (optional)" className="mt-1 w-full rounded-xl border border-gray-300 p-3 focus:outline-none focus:ring-2 focus:ring-brand" />
        </div>
        <div>
          <label className="block text-sm font-medium">Phone</label>
          <input name="phone" placeholder="Your phone (optional)" className="mt-1 w-full rounded-xl border border-gray-300 p-3 focus:outline-none focus:ring-2 focus:ring-brand" />
        </div>
      </div>
      <div>
        <label className="block text-sm font-medium">Project Details *</label>
        <textarea name="message" placeholder="Tell us about your project, timeline, and budget…" required rows={6} className="mt-1 w-full rounded-xl border border-gray-300 p-3 focus:outline-none focus:ring-2 focus:ring-brand" />
      </div>
      <div>
        <button type="submit" disabled={status === 'sending'} className="w-full btn btn-lg text-white bg-gradient-to-r from-indigo-600 to-violet-600 hover:from-indigo-700 hover:to-violet-700 focus:ring-indigo-600">
          {status === 'sending' ? 'Sending…' : 'Send Message'}
        </button>
        {status === 'sent' && <div className="mt-2 text-sm text-emerald-600">Thanks! We’ll be in touch.</div>}
        {status === 'error' && <div className="mt-2 text-sm text-red-600">{error}</div>}
      </div>

      <div className="mt-2 border-t border-gray-100 pt-4">
        <div className="text-sm font-semibold text-gray-700 mb-3">Or reach out directly:</div>
        <div className="flex flex-wrap items-center gap-3">
          {[
            { icon: '✉️', label: 'info@zentharatechnologies.com', href: 'mailto:info@zentharatechnologies.com' },
            { icon: '📞', label: '+91 7304245311' },
            { icon: '📍', label: 'Mumbai, India' }
          ].map((c) => (
            <a key={c.label} href={c.href ?? '#'} className="flex items-center gap-2 rounded-xl bg-slate-50 px-3 py-2 text-sm text-gray-700 ring-1 ring-inset ring-black/5">
              <span>{c.icon}</span>
              <span>{c.label}</span>
            </a>
          ))}
        </div>
      </div>
    </form>
  );
}
