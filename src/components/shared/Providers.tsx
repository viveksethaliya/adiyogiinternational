'use client';

import { GoogleReCaptchaProvider } from 'react-google-recaptcha-v3';

/**
 * Thin wrapper around GoogleReCaptchaProvider so the reCAPTCHA script
 * and badge are only injected on pages that actually use it (e.g. Contact).
 * Do NOT place this in the root layout — it would load the badge site-wide.
 */
export function RecaptchaProvider({ children }: { children: React.ReactNode }) {
  return (
    <GoogleReCaptchaProvider reCaptchaKey={process.env.NEXT_PUBLIC_SITE_KEY as string}>
      {children}
    </GoogleReCaptchaProvider>
  );
}
