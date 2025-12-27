'use client';

import { useState } from 'react';
import { Section } from '@/components/ui/Section';
import { Button } from '@/components/ui/Button';
import { db } from '@/lib/firebase';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import emailjs from '@emailjs/browser';

// Firebase initialized in @/lib/firebase

export default function ContactPage() {
    const [submitted, setSubmitted] = useState(false);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setLoading(true);
        setError('');

        const form = e.currentTarget;
        const formData = new FormData(form);
        const data = {
            firstName: formData.get('firstName'),
            lastName: formData.get('lastName'),
            company: formData.get('company'),
            role: formData.get('role'),
            turnover: formData.get('turnover'),
            website: formData.get('website'),
            message: formData.get('message'),
            submittedAt: serverTimestamp(),
            status: 'new'
        };

        try {
            // 1. Save to Firebase
            await addDoc(collection(db, "contacts"), data);

            // 2. Send Email via EmailJS
            const SERVICE_ID = 'service_v8a9rdk';
            const TEMPLATE_ID = 'template_tq6r3op';
            const PUBLIC_KEY = '6uz38p0daq7Nnc0Bp';

            await emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form, PUBLIC_KEY);

            setSubmitted(true);
        } catch (err) {
            console.error("Error submitting form: ", err);
            setError("Une erreur est survenue. Veuillez réessayer.");
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
                                <input type="text" id="firstName" name="firstName" required className="w-full p-3 bg-background-primary border border-gray-200 rounded-[var(--radius-button)] focus:border-accent-blue focus:ring-1 focus:ring-accent-blue outline-none transition-all" />
                            </div>
                            <div className="space-y-2">
                                <label htmlFor="lastName" className="text-sm font-medium text-text-secondary">Nom</label>
                                <input type="text" id="lastName" name="lastName" required className="w-full p-3 bg-background-primary border border-gray-200 rounded-[var(--radius-button)] focus:border-accent-blue focus:ring-1 focus:ring-accent-blue outline-none transition-all" />
                            </div>
                        </div>

                        <div className="space-y-2">
                            <label htmlFor="company" className="text-sm font-medium text-text-secondary">Entreprise</label>
                            <input type="text" id="company" name="company" required className="w-full p-3 bg-background-primary border border-gray-200 rounded-[var(--radius-button)] focus:border-accent-blue focus:ring-1 focus:ring-accent-blue outline-none transition-all" />
                        </div>

                        <div className="grid grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <label htmlFor="role" className="text-sm font-medium text-text-secondary">Fonction</label>
                                <input type="text" id="role" name="role" required className="w-full p-3 bg-background-primary border border-gray-200 rounded-[var(--radius-button)] focus:border-accent-blue focus:ring-1 focus:ring-accent-blue outline-none transition-all" />
                            </div>
                            <div className="space-y-2">
                                <label htmlFor="turnover" className="text-sm font-medium text-text-secondary">Chiffre d'Affaires</label>
                                <select id="turnover" name="turnover" required className="w-full p-3 bg-background-primary border border-gray-200 rounded-[var(--radius-button)] focus:border-accent-blue focus:ring-1 focus:ring-accent-blue outline-none transition-all">
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
                            <input type="url" id="website" name="website" className="w-full p-3 bg-background-primary border border-gray-200 rounded-[var(--radius-button)] focus:border-accent-blue focus:ring-1 focus:ring-accent-blue outline-none transition-all" placeholder="https://" />
                        </div>

                        <div className="space-y-2">
                            <label htmlFor="message" className="text-sm font-medium text-text-secondary">Message (Facultatif)</label>
                            <textarea id="message" name="message" rows={4} className="w-full p-3 bg-background-primary border border-gray-200 rounded-[var(--radius-button)] focus:border-accent-blue focus:ring-1 focus:ring-accent-blue outline-none transition-all" placeholder="Contexte rapide..."></textarea>
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
