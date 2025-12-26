import React from 'react';
import Link from 'next/link';

export const Footer: React.FC = () => {
    return (
        <footer className="bg-background-dark text-text-inverted py-16">
            <div className="max-w-[var(--spacing-container)] mx-auto px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 border-b border-gray-800 pb-12 mb-12">
                    <div>
                        <h3 className="font-playfair text-2xl mb-6 text-white">NexDeal Advisory</h3>
                        <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
                            Sparring Partner & Strategic Bodyguard pour dirigeants, actionnaires et professionnels sur M&A.
                        </p>
                    </div>
                    <div className="flex flex-col gap-4">
                        <h4 className="text-sm font-semibold uppercase tracking-wider text-gray-500 mb-2">Navigation</h4>
                        <Link href="/services" className="text-gray-300 hover:text-white transition-colors">Services</Link>
                        <Link href="/insights" className="text-gray-300 hover:text-white transition-colors">Insights</Link>
                        <Link href="/team" className="text-gray-300 hover:text-white transition-colors">Équipe</Link>
                    </div>
                    <div>
                        <h4 className="text-sm font-semibold uppercase tracking-wider text-gray-500 mb-2">Contact</h4>
                        <p className="text-gray-300 mb-2">Paris, France</p>
                        <a href="mailto:contact@nexdeal.advisory" className="text-gray-300 hover:text-white transition-colors">contact@nexdeal.advisory</a>
                    </div>
                </div>
                <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-600">
                    <p>&copy; {new Date().getFullYear()} NexDeal Advisory. All rights reserved.</p>
                    <div className="flex gap-6 mt-4 md:mt-0">
                        <Link href="/legal" className="hover:text-gray-400">Mentions Légales</Link>
                        <Link href="/privacy" className="hover:text-gray-400">Confidentialité</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};
