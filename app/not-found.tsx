import Link from 'next/link';
import { Button } from '@/components/ui/Button';

export default function NotFound() {
  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center px-4 w-full text-center">
      <h2 className="text-display font-playfair mb-4">404 - Page Introuvable</h2>
      <p className="text-text-secondary mb-8">La page que vous recherchez n'existe pas ou a été déplacée.</p>
      <Link href="/">
        <Button variant="primary">Retour à l'accueil</Button>
      </Link>
    </div>
  );
}
