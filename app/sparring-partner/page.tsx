'use client';

import { Section } from '@/components/ui/Section';

export default function SparringPartnerPage() {
    return (
        <>
            <section className="bg-background-secondary py-32 border-b border-gray-100">
                <div className="max-w-[var(--spacing-container)] mx-auto px-6 lg:px-8">
                    <h1 className="text-h1 font-playfair animate-fade-in-up">Votre Sparring Partner</h1>
                </div>
            </section>

            <Section className="bg-white">
                <div className="max-w-4xl mx-auto">
                    <p className="text-xl text-text-secondary leading-relaxed mb-16 animate-fade-in-up delay-100">
                        Ce pilier vise à transformer la fonction M&A de nos clients en un avantage concurrentiel durable et reproductible. Nous intervenons sur l'intégralité du cycle de vie de l'opération pour optimiser chaque étape et garantir l'atteinte des objectifs stratégiques.
                    </p>

                    <div className="space-y-6">
                        {/* Block 1 */}
                        <div className="group relative p-8 rounded-2xl bg-white border border-gray-100 hover:border-accent-blue/20 hover:shadow-[0_8px_30px_rgb(0,0,0,0.04)] transition-all duration-500 animate-fade-in-up delay-200 overflow-hidden">
                            <div className="flex justify-between items-center cursor-pointer">
                                <h3 className="text-3xl font-playfair text-accent-blue group-hover:text-accent-gold transition-colors duration-300">Préparation à la Transaction (Vente ou IPO)</h3>
                                <span className="text-accent-blue group-hover:text-accent-gold transform group-hover:rotate-180 transition-all duration-500">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6" /></svg>
                                </span>
                            </div>

                            <div className="max-h-0 opacity-0 group-hover:max-h-[2000px] group-hover:opacity-100 transition-all duration-700 ease-in-out">
                                <div className="pt-8">
                                    <p className="text-text-secondary mb-8 leading-relaxed">
                                        Une intervention précoce, 12 à 18 mois en amont, est le facteur le plus déterminant pour maximiser la valorisation et sécuriser le processus. Nous travaillons à vos côtés pour préparer méticuleusement le terrain.
                                    </p>
                                    <ul className="space-y-4">
                                        {[
                                            { title: "Thèse d'investissement", text: "Nous construisons un récit stratégique puissant et factuel qui articule vos avantages compétitifs, vos drivers de croissance et votre potentiel de création de valeur." },
                                            { title: "Structure de capital & financement", text: "Nous optimisons votre structure financière en analysant le ratio dette/equity et en évaluant des instruments hybrides." },
                                            { title: "Business Plan robuste", text: "Nous vous aidons à élaborer des projections financières crédibles sur 3 à 5 ans, avec des analyses de sensibilité." },
                                            { title: "Valorisation pré-marketing", text: "Nous définissons une fourchette de valeur réaliste et argumentée qui servira de socle à votre stratégie de négociation." },
                                            { title: "Due Diligence proactive (VDD)", text: "Nous menons un audit préalable pour identifier et résoudre tous les points sensibles avant qu'ils ne soient utilisés contre vous." },
                                            { title: "Introduction investisseurs", text: "Nous cartographions l'écosystème des investisseurs pertinents et gérons les premières discussions." }
                                        ].map((item, idx) => (
                                            <li key={idx} className="group/item flex gap-4 items-start p-3 rounded-lg hover:bg-gray-50 transition-colors duration-300">
                                                <div className="w-1.5 h-1.5 rounded-full bg-accent-blue mt-2.5 shrink-0 group-hover/item:bg-accent-gold transition-colors duration-300" />
                                                <p className="text-text-secondary leading-relaxed text-sm">
                                                    <strong className="text-text-primary font-medium block mb-1">{item.title}</strong>
                                                    {item.text}
                                                </p>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>

                        {/* Block 2 */}
                        <div className="group relative p-8 rounded-2xl bg-white border border-gray-100 hover:border-accent-blue/20 hover:shadow-[0_8px_30px_rgb(0,0,0,0.04)] transition-all duration-500 animate-fade-in-up delay-300 overflow-hidden">
                            <div className="flex justify-between items-center cursor-pointer">
                                <h3 className="text-3xl font-playfair text-accent-blue group-hover:text-accent-gold transition-colors duration-300">Booster les Acquisitions : Optimisation de la Fonction M&A</h3>
                                <span className="text-accent-blue group-hover:text-accent-gold transform group-hover:rotate-180 transition-all duration-500">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6" /></svg>
                                </span>
                            </div>

                            <div className="max-h-0 opacity-0 group-hover:max-h-[2000px] group-hover:opacity-100 transition-all duration-700 ease-in-out">
                                <div className="pt-8">
                                    <p className="text-text-secondary mb-8 leading-relaxed">
                                        Pour les entreprises engagées dans une stratégie de croissance externe (buy-and-build), nous apportons la méthode et les outils pour transformer l'acquisition en une compétence clé.
                                    </p>
                                    <ul className="space-y-4">
                                        {[
                                            { title: "Alignement organisationnel", text: "Nous facilitons la création d'un consensus clair entre le management, le conseil d'administration et les actionnaires sur la stratégie M&A." },
                                            { title: "Audit et optimisation", text: "Nous diagnostiquons vos capacités internes et mettons en place des playbooks sur mesure." },
                                            { title: "Screening systématique", text: "Nous structurons des processus de veille automatisés par IA pour analyser des milliers de cibles potentielles." },
                                            { title: "Capacité d'absorption", text: "Nous modélisons les impacts financiers et évaluons votre capacité organisationnelle d'intégration." }
                                        ].map((item, idx) => (
                                            <li key={idx} className="group/item flex gap-4 items-start p-3 rounded-lg hover:bg-gray-50 transition-colors duration-300">
                                                <div className="w-1.5 h-1.5 rounded-full bg-accent-blue mt-2.5 shrink-0 group-hover/item:bg-accent-gold transition-colors duration-300" />
                                                <p className="text-text-secondary leading-relaxed text-sm">
                                                    <strong className="text-text-primary font-medium block mb-1">{item.title}</strong>
                                                    {item.text}
                                                </p>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>

                        {/* Block 3 */}
                        <div className="group relative p-8 rounded-2xl bg-white border border-gray-100 hover:border-accent-blue/20 hover:shadow-[0_8px_30px_rgb(0,0,0,0.04)] transition-all duration-500 animate-fade-in-up delay-400 overflow-hidden">
                            <div className="flex justify-between items-center cursor-pointer">
                                <h3 className="text-3xl font-playfair text-accent-blue group-hover:text-accent-gold transition-colors duration-300">Pendant et Après la Transaction</h3>
                                <span className="text-accent-blue group-hover:text-accent-gold transform group-hover:rotate-180 transition-all duration-500">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6" /></svg>
                                </span>
                            </div>

                            <div className="max-h-0 opacity-0 group-hover:max-h-[2000px] group-hover:opacity-100 transition-all duration-700 ease-in-out">
                                <div className="pt-8">
                                    <p className="text-text-secondary mb-8 leading-relaxed">
                                        Notre accompagnement se poursuit avec la même intensité durant les phases critiques et post-opération.
                                    </p>
                                    <ul className="space-y-4">
                                        {[
                                            { title: "La transaction", text: "Pilotage rigoureux du processus, conseil tactique sur la négociation, anticipation des mouvements, gestion des blocages et optimisation contractuelle." },
                                            { title: "Après la transaction", text: "Support actif à l'exécution du plan d'intégration (100 premiers jours), sessions de retour d'expérience pour capitaliser sur les apprentissages." }
                                        ].map((item, idx) => (
                                            <li key={idx} className="group/item flex gap-4 items-start p-3 rounded-lg hover:bg-gray-50 transition-colors duration-300">
                                                <div className="w-1.5 h-1.5 rounded-full bg-accent-blue mt-2.5 shrink-0 group-hover/item:bg-accent-gold transition-colors duration-300" />
                                                <p className="text-text-secondary leading-relaxed text-sm">
                                                    <strong className="text-text-primary font-medium block mb-1">{item.title}</strong>
                                                    {item.text}
                                                </p>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Section>
        </>
    );
}
