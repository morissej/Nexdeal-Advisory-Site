'use client';

import { useEffect } from 'react';
import { Button } from '@/components/ui/Button';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center px-4 w-full text-center">
      <h2 className="text-3xl font-playfair mb-4 text-accent-blue">Oups! Une erreur est survenue</h2>
      <p className="text-text-secondary mb-8">Nous sommes désolés, une erreur inattendue s'est produite lors du chargement de la page.</p>
      <Button variant="primary" onClick={() => reset()}>
        Réessayer
      </Button>
    </div>
  );
}
