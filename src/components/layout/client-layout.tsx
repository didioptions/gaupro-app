'use client';

import { FirebaseClientProvider } from '@/firebase';
import { Toaster } from '@/components/ui/toaster';
import CookieConsentBanner from '@/components/layout/cookie-consent-banner';

export default function ClientLayout({ children }: { children: React.ReactNode }) {
  return (
    <FirebaseClientProvider>
      <div className="flex-grow">{children}</div>
      <Toaster />
      <CookieConsentBanner />
    </FirebaseClientProvider>
  );
}
