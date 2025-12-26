'use client';

import { useState } from 'react';
import { Section } from '@/components/ui/Section';
import { Button } from '@/components/ui/Button';

export default function ContactPage() {
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Here we would handle the submission
        setSubmitted(true);
    };

    if (submitted) {
        return (
            <div className="min-h-[60vh] flex items-center justify-center">
                <div className="text-center p-8 bg-green-50 rounded-lg border border-green-100 max-w-md">
                    <h2 className="text-2xl font-playfair mb-4 text-green-900">Message reçu.</h2>
                    <p className="text-green-800">
                        Merci de votre sollicitation. Nous traitons votre demande de manière confidentielle et vous répondrons sous 48h si votre profil correspond à notre expertise.
                    </p>
                    <Button variant="secondary" className="mt-8" onClick={() => setSubmitted(false)}>
                        Retour
                    </Button>
                </div>
            </div>
        );
    }

    return (
        <>
            <section className="py-24 border-b border-gray-100">
                <div className="max-w-[var(--spacing-container)] mx-auto px-6 lg:px-8">
                    <h1 className="text-display font-playfair mb-6 animate-fade-in-up">Entrons en contact.</h1>
                    <p className="text-h3 text-text-secondary font-light max-w-2xl animate-fade-in-up delay-100">
                        Nous ne répondons pas à toutes les sollicitations. Ce formulaire vise à comprendre votre situation, pas à initier une démarche commerciale.
                    </p>
                </div>
            </section>

            <Section>
                <div className="grid lg:grid-cols-2 gap-16">
                    {/* Info */}
                    <div>
                        <div className="mb-12">
                            <h3 className="text-xl font-playfair mb-4">Bureau</h3>
                            <p className="text-text-secondary">Paris, France</p>
                        </div>
                        <div className="mb-12">
                            <h3 className="text-xl font-playfair mb-4">Email</h3>
                            <p className="text-text-secondary">contact@nexdeal.advisory</p>
                        </div>
                        <div className="p-6 bg-gray-50 border border-gray-100 rounded-[var(--radius-card)]">
                            <p className="text-sm text-text-secondary italic">
                                "La confidentialité est notre première valeur. Aucun échange n'est partagé avec des tiers sans accord explicite."
                            </p>
                        </div>
                    </div>

                    {/* Form */}
                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="grid grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <label htmlFor="firstName" className="text-sm font-medium text-text-secondary">Prénom</label>
                                <input type="text" id="firstName" required className="w-full p-3 bg-background-primary border border-gray-200 rounded-[var(--radius-button)] focus:border-accent-blue focus:ring-1 focus:ring-accent-blue outline-none transition-all" />
                            </div>
                            <div className="space-y-2">
                                <label htmlFor="lastName" className="text-sm font-medium text-text-secondary">Nom</label>
                                <input type="text" id="lastName" required className="w-full p-3 bg-background-primary border border-gray-200 rounded-[var(--radius-button)] focus:border-accent-blue focus:ring-1 focus:ring-accent-blue outline-none transition-all" />
                            </div>
                        </div>

                        <div className="space-y-2">
                            <label htmlFor="company" className="text-sm font-medium text-text-secondary">Entreprise</label>
                            <input type="text" id="company" required className="w-full p-3 bg-background-primary border border-gray-200 rounded-[var(--radius-button)] focus:border-accent-blue focus:ring-1 focus:ring-accent-blue outline-none transition-all" />
                        </div>

                        <div className="grid grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <label htmlFor="role" className="text-sm font-medium text-text-secondary">Fonction</label>
                                <input type="text" id="role" required className="w-full p-3 bg-background-primary border border-gray-200 rounded-[var(--radius-button)] focus:border-accent-blue focus:ring-1 focus:ring-accent-blue outline-none transition-all" />
                            </div>
                            <div className="space-y-2">
                                <label htmlFor="turnover" className="text-sm font-medium text-text-secondary">Chiffre d'Affaires</label>
                                <select id="turnover" required className="w-full p-3 bg-background-primary border border-gray-200 rounded-[var(--radius-button)] focus:border-accent-blue focus:ring-1 focus:ring-accent-blue outline-none transition-all">
                                    <option value="">Sélectionner...</option>
                                    <option value="0-50">0 - 50 M€</option>
                                    <option value="50-100">50 - 100 M€</option>
                                    <option value="100-500">100 - 500 M€</option>
                                    <option value="500+">500 M€ +</option>
                                </select>
                            </div>
                        </div>

                        <div className="space-y-2">
                            <label htmlFor="website" className="text-sm font-medium text-text-secondary">Site Internet</label>
                            <input type="url" id="website" className="w-full p-3 bg-background-primary border border-gray-200 rounded-[var(--radius-button)] focus:border-accent-blue focus:ring-1 focus:ring-accent-blue outline-none transition-all" placeholder="https://" />
                        </div>

                        <div className="space-y-2">
                            <label htmlFor="message" className="text-sm font-medium text-text-secondary">Message (Facultatif)</label>
                            <textarea id="message" rows={4} className="w-full p-3 bg-background-primary border border-gray-200 rounded-[var(--radius-button)] focus:border-accent-blue focus:ring-1 focus:ring-accent-blue outline-none transition-all" placeholder="Contexte rapide..."></textarea>
                        </div>

                        <Button type="submit" variant="primary" className="w-full justify-center py-4">
                            Envoyer la demande
                        </Button>

                        <p className="text-xs text-center text-text-secondary mt-4">
                            Vos données sont protégées et ne seront jamais commercialisées.
                        </p>
                    </form>
                </div>
            </Section>
        </>
    );
}
