'use client';

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

const COOKIE_CONSENT_KEY = 'gaupro_cookie_consent';

export default function CookieConsentBanner() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // This effect runs only on the client-side
    const consent = localStorage.getItem(COOKIE_CONSENT_KEY);
    if (consent !== 'true') {
      setIsVisible(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem(COOKIE_CONSENT_KEY, 'true');
    setIsVisible(false);
  };

  if (!isVisible) {
    return null;
  }

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-gray-900 text-white p-4 flex items-center justify-center gap-4 z-[100]">
      <p className="text-sm text-white">
        By using this site you agree to Gaupro's use of cookies to give you a personalised experience. Please read the{' '}
        <Link href="/cookie-policy" className="underline text-primary hover:text-primary/80">
          cookie policy
        </Link>{' '}
        for more information.
      </p>
      <Button
        onClick={handleAccept}
        className="bg-accent hover:bg-accent/90 text-accent-foreground flex-shrink-0"
      >
        Accept
      </Button>
    </div>
  );
}
