'use client';

import { useState } from 'react';
import { Section } from '@/components/ui/Section';
import { Button } from '@/components/ui/Button';

export default function ContactPage() {
    const [submitted, setSubmitted] = useState(false);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const [fieldErrors, setFieldErrors] = useState<Record<string, string[]>>({});

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setLoading(true);
        setError('');
        setFieldErrors({});

        const form = e.currentTarget;
        const formData = new FormData(form);
        const data = {
            name: formData.get('name'),
            email: formData.get('email'),
            phone: formData.get('phone') || undefined,
            turnover: formData.get('turnover'),
            message: formData.get('message'),
        };

        try {
            const res = await fetch('/api/contact', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(data)
            });
            const result = await res.json();

            if (!res.ok) {
                if (result.errors) {
                    setFieldErrors(result.errors);
                    setError("Veuillez corriger les erreurs dans le formulaire.");
                } else {
                    setError(result.error || "Une erreur est survenue.");
                }
            } else {
                setSubmitted(true);
            }
        } catch (err) {
            console.error("Error submitting form: ", err);
            setError("Une erreur inattendue est survenue. Veuillez réessayer.");
        } finally {
            setLoading(false);
        }
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
                </div>
            </section>

            <Section>
                <div className="grid lg:grid-cols-2 gap-16">
                    <div>
                        <div className="mb-12">
                            <h3 className="text-xl font-playfair mb-4">Bureau</h3>
                            <p className="text-text-secondary">Paris, France</p>
                        </div>
                        <div className="mb-12">
                            <h3 className="text-xl font-playfair mb-4">Email</h3>
                            <p className="text-text-secondary">nexdealadvisory@gmail.com</p>
                        </div>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="grid grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <label htmlFor="name" className="text-sm font-medium text-text-secondary">Nom complet *</label>
                                <input 
                                    type="text" id="name" name="name" 
                                    required aria-required="true" 
                                    aria-invalid={!!fieldErrors.name}
                                    className="w-full p-3 bg-background-primary border border-gray-200 rounded-[var(--radius-button)] focus:border-accent-blue focus:ring-1 focus:ring-accent-blue outline-none transition-all" 
                                />
                                {fieldErrors.name && <p className="text-red-500 text-xs mt-1">{fieldErrors.name[0]}</p>}
                            </div>
                            <div className="space-y-2">
                                <label htmlFor="email" className="text-sm font-medium text-text-secondary">Email *</label>
                                <input 
                                    type="email" id="email" name="email" 
                                    required aria-required="true"
                                    aria-invalid={!!fieldErrors.email}
                                    className="w-full p-3 bg-background-primary border border-gray-200 rounded-[var(--radius-button)] focus:border-accent-blue focus:ring-1 focus:ring-accent-blue outline-none transition-all" 
                                />
                                {fieldErrors.email && <p className="text-red-500 text-xs mt-1">{fieldErrors.email[0]}</p>}
                            </div>
                        </div>

                        <div className="grid grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <label htmlFor="phone" className="text-sm font-medium text-text-secondary">Téléphone</label>
                                <input 
                                    type="tel" id="phone" name="phone" 
                                    className="w-full p-3 bg-background-primary border border-gray-200 rounded-[var(--radius-button)] focus:border-accent-blue focus:ring-1 focus:ring-accent-blue outline-none transition-all" 
                                />
                            </div>
                            <div className="space-y-2">
                                <label htmlFor="turnover" className="text-sm font-medium text-text-secondary">Chiffre d'Affaires *</label>
                                <select 
                                    id="turnover" name="turnover" 
                                    required aria-required="true"
                                    aria-invalid={!!fieldErrors.turnover}
                                    className="w-full p-3 bg-background-primary border border-gray-200 rounded-[var(--radius-button)] focus:border-accent-blue focus:ring-1 focus:ring-accent-blue outline-none transition-all"
                                >
                                    <option value="">Sélectionner...</option>
                                    <option value="0-50">0 - 50 M€</option>
                                    <option value="50-100">50 - 100 M€</option>
                                    <option value="100-500">100 - 500 M€</option>
                                    <option value="500+">500 M€ +</option>
                                </select>
                                {fieldErrors.turnover && <p className="text-red-500 text-xs mt-1">{fieldErrors.turnover[0]}</p>}
                            </div>
                        </div>

                        <div className="space-y-2">
                            <label htmlFor="message" className="text-sm font-medium text-text-secondary">Message *</label>
                            <textarea 
                                id="message" name="message" rows={4} 
                                required aria-required="true"
                                aria-invalid={!!fieldErrors.message}
                                className="w-full p-3 bg-background-primary border border-gray-200 rounded-[var(--radius-button)] focus:border-accent-blue focus:ring-1 focus:ring-accent-blue outline-none transition-all" 
                                placeholder="Contexte rapide..."
                            ></textarea>
                            {fieldErrors.message && <p className="text-red-500 text-xs mt-1">{fieldErrors.message[0]}</p>}
                        </div>

                        {error && <p className="text-red-500 text-sm">{error}</p>}

                        <Button type="submit" variant="primary" className="w-full justify-center py-4" disabled={loading}>
                            {loading ? 'Envoi en cours...' : 'Envoyer la demande'}
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
