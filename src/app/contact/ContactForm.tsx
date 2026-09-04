"use client";

import { useFormState } from 'react-dom';
import { sendContactEmail } from './actions';
import { useEffect, useRef } from 'react';

const initialState = {
  success: false,
  error: undefined,
};

export function ContactForm() {
  const [state, formAction] = useFormState(sendContactEmail, initialState);
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    if (state.success && formRef.current) {
      formRef.current.reset();
    }
  }, [state.success]);

  return (
    <form ref={formRef} action={formAction} className="mt-4 grid gap-4">
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label className="block text-sm font-medium text-slate-700 dark:text-slate-300">Name *</label>
          <input name="name" placeholder="Your name" required className="mt-1 w-full rounded-xl border border-gray-300 p-3 focus:outline-none focus:ring-2 focus:ring-brand dark:border-white/10 dark:bg-white/5 dark:text-white dark:placeholder:text-slate-500" />
        </div>
        <div>
          <label className="block text-sm font-medium text-slate-700 dark:text-slate-300">Email *</label>
          <input type="email" name="email" placeholder="your.email@example.com" required className="mt-1 w-full rounded-xl border border-gray-300 p-3 focus:outline-none focus:ring-2 focus:ring-brand dark:border-white/10 dark:bg-white/5 dark:text-white dark:placeholder:text-slate-500" />
        </div>
      </div>
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label className="block text-sm font-medium text-slate-700 dark:text-slate-300">Company</label>
          <input name="company" placeholder="Your company (optional)" className="mt-1 w-full rounded-xl border border-gray-300 p-3 focus:outline-none focus:ring-2 focus:ring-brand dark:border-white/10 dark:bg-white/5 dark:text-white dark:placeholder:text-slate-500" />
        </div>
        <div>
          <label className="block text-sm font-medium text-slate-700 dark:text-slate-300">Phone</label>
          <input name="phone" placeholder="Your phone (optional)" className="mt-1 w-full rounded-xl border border-gray-300 p-3 focus:outline-none focus:ring-2 focus:ring-brand dark:border-white/10 dark:bg-white/5 dark:text-white dark:placeholder:text-slate-500" />
        </div>
      </div>
      <div>
        <label className="block text-sm font-medium text-slate-700 dark:text-slate-300">Project Details *</label>
        <textarea name="message" placeholder="Tell us about your project, timeline, and budget…" required rows={6} className="mt-1 w-full rounded-xl border border-gray-300 p-3 focus:outline-none focus:ring-2 focus:ring-brand dark:border-white/10 dark:bg-white/5 dark:text-white dark:placeholder:text-slate-500" />
      </div>
      <div>
        <SubmitButton />
        {state.success && <div className="mt-2 text-sm text-emerald-600 dark:text-emerald-400">Thanks! We’ll be in touch.</div>}
        {state.error && <div className="mt-2 text-sm text-red-600 dark:text-red-400">{state.error}</div>}
      </div>

      <div className="mt-2 border-t border-gray-100 dark:border-white/10 pt-4">
        <div className="text-sm font-semibold text-gray-700 dark:text-slate-300 mb-3">Or reach out directly:</div>
        <div className="flex flex-wrap items-center gap-3">
          {[
            { icon: '✉️', label: 'info@zentharatechnologies.com', href: 'mailto:info@zentharatechnologies.com' },
            { icon: '📞', label: '+91 7304245311' },
            { icon: '📍', label: 'Mumbai, India' }
          ].map((c) => (
            <a key={c.label} href={c.href ?? '#'} className="flex items-center gap-2 rounded-xl bg-slate-50 px-3 py-2 text-sm text-gray-700 ring-1 ring-inset ring-black/5 dark:bg-white/5 dark:text-slate-300 dark:ring-white/10">
              <span>{c.icon}</span>
              <span>{c.label}</span>
            </a>
          ))}
        </div>
      </div>
    </form>
  );
}

import { useFormStatus } from 'react-dom';

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <button type="submit" disabled={pending} className="w-full btn btn-lg btn-primary">
      {pending ? 'Sending…' : 'Send Message'}
    </button>
  );
}

