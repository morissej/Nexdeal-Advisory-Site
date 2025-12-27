'use client';

import { Section } from '@/components/ui/Section';

export default function TeamPage() {
    return (
        <>
            <section className="bg-background-secondary py-32 border-b border-gray-100">
                <div className="max-w-[var(--spacing-container)] mx-auto px-6 lg:px-8">
                    <h1 className="text-h1 font-playfair animate-fade-in-up">Une Expertise de Premier Plan</h1>
                    <p className="mt-6 text-xl text-text-secondary max-w-3xl animate-fade-in-up delay-100">
                        Une séniorité forgée au sein des institutions les plus prestigieuses, dédiée à la réussite de vos opérations stratégiques.
                    </p>
                </div>
            </section>

            <Section className="bg-white">
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

                    {/* Experience Block */}
                    <div className="col-span-1 lg:col-span-3 group p-10 rounded-2xl bg-gradient-to-br from-[#0B1D35] to-[#152C4E] text-white shadow-xl hover:shadow-2xl transition-all duration-500 animate-fade-in-up delay-200">
                        <div className="flex flex-col md:flex-row items-center gap-8">
                            <div className="w-full md:w-1/3 text-center md:text-left border-b md:border-b-0 md:border-r border-white/20 pb-8 md:pb-0 md:pr-8">
                                <span className="block text-7xl font-playfair font-bold text-accent-gold mb-2">30+</span>
                                <span className="text-xl tracking-wide uppercase font-light">Années d'Expérience</span>
                                <span className="block text-sm text-gray-300 mt-2">Cumulées en Banque d'Affaires</span>
                            </div>
                            <div className="w-full md:w-2/3">
                                <p className="text-xl font-light leading-relaxed text-gray-200">
                                    Une carrière bâtie sur l'excellence et la rigueur des standards internationaux les plus élevés, garantissant une maîtrise parfaite des enjeux complexes.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* US Banks Block */}
                    <div className="group p-8 rounded-2xl bg-white border border-gray-100 hover:border-gray-200 hover:shadow-lg transition-all duration-500 animate-fade-in-up delay-300">
                        <div className="w-12 h-12 bg-accent-blue/10 rounded-full flex items-center justify-center mb-6 group-hover:bg-accent-blue/20 transition-colors">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-accent-blue"><path d="M3 21h18M5 21V7l8-4 8 4v14M8 21V12a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v9" /></svg>
                        </div>
                        <h3 className="text-2xl font-playfair text-accent-blue mb-4">Banques d'Affaires de Rang Mondial</h3>
                        <p className="text-text-secondary mb-6">
                            Un parcours au sein des leaders de Wall Street :
                        </p>
                        <ul className="space-y-3">
                            {['Morgan Stanley', 'Citi', 'Bank of America Merrill Lynch'].map((bank, i) => (
                                <li key={i} className="flex items-center gap-3 text-text-primary font-medium">
                                    <span className="w-1.5 h-1.5 rounded-full bg-accent-gold" />
                                    {bank}
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* International Block */}
                    <div className="group p-8 rounded-2xl bg-white border border-gray-100 hover:border-gray-200 hover:shadow-lg transition-all duration-500 animate-fade-in-up delay-400">
                        <div className="w-12 h-12 bg-accent-blue/10 rounded-full flex items-center justify-center mb-6 group-hover:bg-accent-blue/20 transition-colors">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-accent-blue"><circle cx="12" cy="12" r="10" /><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" /><path d="M2 12h20" /></svg>
                        </div>
                        <h3 className="text-2xl font-playfair text-accent-blue mb-4">Portée Internationale</h3>
                        <p className="text-text-secondary">
                            Une expertise éprouvée dans les transactions <strong>cross-border</strong> et une capacité à naviguer entre les différentes cultures d'affaires et juridictions.
                        </p>
                    </div>

                    {/* Clients Block */}
                    <div className="group p-8 rounded-2xl bg-white border border-gray-100 hover:border-gray-200 hover:shadow-lg transition-all duration-500 animate-fade-in-up delay-500">
                        <div className="w-12 h-12 bg-accent-blue/10 rounded-full flex items-center justify-center mb-6 group-hover:bg-accent-blue/20 transition-colors">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-accent-blue"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M22 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" /></svg>
                        </div>
                        <h3 className="text-2xl font-playfair text-accent-blue mb-4">Grands Clients</h3>
                        <p className="text-text-secondary leading-relaxed">
                            Accompagnement de confiance pour :
                        </p>
                        <div className="flex flex-wrap gap-2 mt-4">
                            {['CAC 40', 'Private Equity', 'État Français'].map((client, i) => (
                                <span key={i} className="px-3 py-1 bg-gray-50 text-accent-blue font-medium rounded-full text-sm border border-gray-100">
                                    {client}
                                </span>
                            ))}
                        </div>
                    </div>

                    {/* Transactions Block (Full Width) */}
                    <div className="col-span-1 lg:col-span-3 group p-10 rounded-2xl bg-background-secondary border border-gray-100 hover:border-gray-200 hover:shadow-lg transition-all duration-500 animate-fade-in-up delay-600">
                        <div className="max-w-4xl mx-auto text-center">
                            <h3 className="text-3xl font-playfair text-accent-blue mb-8">Un Large Spectre d'Intervention</h3>
                            <div className="flex flex-wrap justify-center gap-4">
                                {[
                                    'Buy-side', 'Sell-Side', 'Fusion', 'Spin-off',
                                    'Défense', 'IPO', 'Rights issue', 'Levées de dette'
                                ].map((type, i) => (
                                    <span
                                        key={i}
                                        className="px-6 py-3 bg-white text-text-primary text-lg font-medium rounded-lg shadow-sm border border-gray-100 hover:border-accent-gold hover:text-accent-blue hover:-translate-y-1 transition-all duration-300 cursor-default"
                                    >
                                        {type}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>

                </div>
            </Section>
        </>
    );
}
