import React from 'react';
import Link from 'next/link';

export const Footer: React.FC = () => {
    return (
        <footer className="bg-background-dark text-text-inverted py-16">
            <div className="max-w-[var(--spacing-container)] mx-auto px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 border-b border-gray-800 pb-12 mb-12">
                    <div>
                        <h3 className="font-playfair text-2xl mb-6 text-white">NexDeal Advisory</h3>
                        <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
                            Sparring Partner & Strategic Bodyguard pour dirigeants, actionnaires et professionnels sur M&A.
                        </p>
                    </div>
                    <div className="flex flex-col gap-4">
                        <h4 className="text-sm font-semibold uppercase tracking-wider text-gray-500 mb-2">Navigation</h4>
                        <Link href="/services" className="text-gray-300 hover:text-white transition-colors">Notre approche</Link>
                        <Link href="/sparring-partner" className="text-gray-300 hover:text-white transition-colors">Sparring Partner</Link>
                        <Link href="/bodyguard" className="text-gray-300 hover:text-white transition-colors">Bodyguard</Link>
                        <Link href="/pain-points" className="text-gray-300 hover:text-white transition-colors">CEOs Painpoints</Link>
                        <Link href="/team" className="text-gray-300 hover:text-white transition-colors">Équipe</Link>
                    </div>
                    <div className="flex flex-col gap-4">
                        <h4 className="text-sm font-semibold uppercase tracking-wider text-gray-500 mb-2">Liens</h4>
                        <a href="https://nexdeal-sparring.firebaseapp.com/" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition-colors">Mini site Sparring Partner</a>
                        <a href="https://vague-transmission.web.app/" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition-colors">Mini site La grande transmission</a>
                        <a href="https://competitivite-explorer-fr.firebaseapp.com/" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition-colors">Mini site Le casse tête de compétitivité</a>
                        <a href="https://www.linkedin.com/company/110420139/admin/dashboard/" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition-colors">Linkedin Nexdeal Advisory</a>
                        <a href="https://www.linkedin.com/showcase/ceos-pain-points/?viewAsMember=true" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition-colors">Linkedin CEO Pain Points</a>
                    </div>
                    <div>
                        <h4 className="text-sm font-semibold uppercase tracking-wider text-gray-500 mb-2">Contact</h4>
                        <p className="text-gray-300 mb-2">Paris, France</p>
                        <a href="mailto:nexdealadvisory@gmail.com" className="text-gray-300 hover:text-white transition-colors">nexdealadvisory@gmail.com</a>
                    </div>
                </div>
                <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-600">
                    <p>&copy; 2026 NexDeal Advisory. All rights reserved.</p>
                    <div className="flex gap-6 mt-4 md:mt-0">
                        <Link href="/legal" className="hover:text-gray-400">Mentions Légales</Link>
                        <Link href="/admin" className="hover:text-gray-400 text-gray-700">Admin</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};
