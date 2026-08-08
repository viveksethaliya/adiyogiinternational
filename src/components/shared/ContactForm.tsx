'use client';

import React, { useState } from 'react';
import { useGoogleReCaptcha } from 'react-google-recaptcha-v3';
import { CheckCircle2, AlertCircle, Loader2 } from 'lucide-react';
import { Button } from '@/components/ui/Button';

type FormState = 'idle' | 'loading' | 'success' | 'error';

const inputClass =
  'w-full border border-slate-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-[var(--color-orange)] focus:border-[var(--color-orange)] p-3 text-sm text-slate-800 placeholder:text-slate-400 transition-colors bg-white';

const labelClass = 'block text-sm font-medium text-slate-700 mb-1.5';

export function ContactForm() {
  const { executeRecaptcha } = useGoogleReCaptcha();
  const [formState, setFormState] = useState<FormState>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const [values, setValues] = useState({
    fullName: '',
    company: '',
    email: '',
    phone: '',
    country: '',
    product: '',
    quantity: '',
    packaging: '25kg PP Bags',
    incoterms: 'FOB (Free On Board)',
    message: '',
  });

  const set =
    (key: keyof typeof values) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
      setValues((v) => ({ ...v, [key]: e.target.value }));

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setFormState('loading');
    setErrorMessage('');

    if (!executeRecaptcha) {
      setFormState('error');
      setErrorMessage('reCAPTCHA not ready. Please refresh the page and try again.');
      return;
    }

    try {
      // Execute invisible v3 reCAPTCHA — no user interaction required
      const recaptchaToken = await executeRecaptcha('contact_form');

      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...values, recaptchaToken }),
      });

      const data = await res.json();

      if (!res.ok) {
        setFormState('error');
        setErrorMessage(data.error || 'Something went wrong. Please try again.');
      } else {
        setFormState('success');
        setValues({
          fullName: '', company: '', email: '', phone: '', country: '',
          product: '', quantity: '', packaging: '25kg PP Bags',
          incoterms: 'FOB (Free On Board)', message: '',
        });
      }
    } catch {
      setFormState('error');
      setErrorMessage('Network error. Please check your connection and try again.');
    }
  }

  if (formState === 'success') {
    return (
      <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200 flex flex-col items-center justify-center text-center min-h-[480px]">
        <div className="bg-green-50 rounded-full p-5 mb-6">
          <CheckCircle2 className="h-12 w-12 text-green-500" />
        </div>
        <h3 className="text-2xl font-bold text-[var(--color-navy)] mb-3">Inquiry Sent!</h3>
        <p className="text-slate-600 leading-relaxed max-w-sm mb-8">
          Thank you for reaching out. Our export team will review your inquiry and get back to you within 1–2 business days.
        </p>
        <button
          onClick={() => setFormState('idle')}
          className="text-[var(--color-orange)] font-semibold text-sm hover:underline"
        >
          Send another inquiry
        </button>
      </div>
    );
  }

  return (
    <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200">
      <h2 className="text-2xl font-bold text-[var(--color-navy)] mb-6">Send us a message</h2>

      {formState === 'error' && (
        <div className="flex items-start gap-3 bg-red-50 border border-red-200 text-red-700 p-4 rounded-lg mb-6 text-sm">
          <AlertCircle className="h-5 w-5 shrink-0 mt-0.5" />
          <span>{errorMessage}</span>
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-5" noValidate>
        {/* Full Name */}
        <div>
          <label className={labelClass}>
            Full Name <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            required
            className={inputClass}
            placeholder="John Doe"
            value={values.fullName}
            onChange={set('fullName')}
          />
        </div>

        {/* Company */}
        <div>
          <label className={labelClass}>Company / Organization</label>
          <input
            type="text"
            className={inputClass}
            placeholder="Global Foods Import LLC"
            value={values.company}
            onChange={set('company')}
          />
        </div>

        {/* Email + Phone */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div>
            <label className={labelClass}>
              Email Address <span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              required
              className={inputClass}
              placeholder="buyer@company.com"
              value={values.email}
              onChange={set('email')}
            />
          </div>
          <div>
            <label className={labelClass}>Phone / WhatsApp</label>
            <input
              type="tel"
              className={inputClass}
              placeholder="+1 (555) 019-2834"
              value={values.phone}
              onChange={set('phone')}
            />
          </div>
        </div>

        {/* Country */}
        <div>
          <label className={labelClass}>Country of Destination</label>
          <input
            type="text"
            className={inputClass}
            placeholder="United Arab Emirates / USA / Netherlands"
            value={values.country}
            onChange={set('country')}
          />
        </div>

        {/* Product + Quantity */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div>
            <label className={labelClass}>Product Required</label>
            <input
              type="text"
              className={inputClass}
              placeholder="Cumin Seeds, Spices, etc."
              value={values.product}
              onChange={set('product')}
            />
          </div>
          <div>
            <label className={labelClass}>Required Quantity (MT)</label>
            <input
              type="text"
              className={inputClass}
              placeholder="e.g. 1 x 20ft FCL (18 MT)"
              value={values.quantity}
              onChange={set('quantity')}
            />
          </div>
        </div>

        {/* Packaging + Incoterms */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div>
            <label className={labelClass}>Preferred Packaging</label>
            <select className={inputClass} value={values.packaging} onChange={set('packaging')}>
              <option>25kg PP Bags</option>
              <option>Jute Bags</option>
              <option>Multi-layer Paper Bags</option>
              <option>Vacuum Bags</option>
              <option>Retail Private Labeling</option>
              <option>Other / Not Sure</option>
            </select>
          </div>
          <div>
            <label className={labelClass}>Incoterms Preference</label>
            <select className={inputClass} value={values.incoterms} onChange={set('incoterms')}>
              <option>FOB (Free On Board)</option>
              <option>CIF (Cost, Insurance, Freight)</option>
              <option>CFR (Cost and Freight)</option>
              <option>Other / Discuss Later</option>
            </select>
          </div>
        </div>

        {/* Message */}
        <div>
          <label className={labelClass}>Message / Specific Requirements</label>
          <textarea
            rows={4}
            className={inputClass}
            placeholder="Please specify quality grade, purity %, or special packing requirements..."
            value={values.message}
            onChange={set('message')}
          />
        </div>

        {/* reCAPTCHA v3 notice */}
        <p className="text-xs text-slate-400 leading-relaxed">
          This form is protected by reCAPTCHA v3. By submitting, you agree to Google&apos;s{' '}
          <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="underline hover:text-slate-600">Privacy Policy</a>{' '}
          and{' '}
          <a href="https://policies.google.com/terms" target="_blank" rel="noopener noreferrer" className="underline hover:text-slate-600">Terms of Service</a>.
        </p>

        {/* Submit */}
        <Button
          type="submit"
          variant="primary"
          className="w-full"
          disabled={formState === 'loading'}
        >
          {formState === 'loading' ? (
            <>
              <Loader2 className="h-4 w-4 animate-spin" />
              Sending...
            </>
          ) : (
            'Submit Inquiry'
          )}
        </Button>
      </form>
    </div>
  );
}
