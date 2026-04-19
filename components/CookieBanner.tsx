'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';

export function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookie_consent');
    if (!consent) setVisible(true);
  }, []);

  const accept = () => {
    localStorage.setItem('cookie_consent', 'accepted');
    setVisible(false);
  };

  const decline = () => {
    localStorage.setItem('cookie_consent', 'declined');
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-gray-200 shadow-lg p-4 md:p-6">
      <div className="max-w-[var(--spacing-container)] mx-auto flex flex-col md:flex-row items-start md:items-center gap-4 justify-between">
        <p className="text-sm text-text-secondary max-w-2xl">
          Ce site utilise des cookies pour analyser la fréquentation et améliorer votre expérience.{' '}
          <Link href="/legal" className="underline hover:text-accent-blue">Politique de confidentialité</Link>.
        </p>
        <div className="flex gap-3 shrink-0">
          <button onClick={decline} className="px-4 py-2 text-sm border border-gray-300 rounded hover:border-gray-400 transition-colors">
            Refuser
          </button>
          <button onClick={accept} className="px-4 py-2 text-sm bg-accent-blue text-white rounded hover:bg-accent-blue/90 transition-colors">
            Accepter
          </button>
        </div>
      </div>
    </div>
  );
}
