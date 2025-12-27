'use client';

import { Section } from '@/components/ui/Section';

export default function BodyguardPage() {
    return (
        <>
            <section className="bg-background-secondary py-32 border-b border-gray-100">
                <div className="max-w-[var(--spacing-container)] mx-auto px-6 lg:px-8">
                    <h1 className="text-h1 font-playfair animate-fade-in-up">The Bodyguard</h1>
                </div>
            </section>

            <Section className="bg-white">
                <div className="max-w-4xl mx-auto">
                    <p className="text-xl text-text-secondary leading-relaxed mb-16 animate-fade-in-up delay-100">
                        Ce volet unique de notre offre est un accompagnement personnalisé et confidentiel. Il part du principe que la performance en M&A dépend autant de la solidité des processus que de la lucidité et de la résilience des individus.
                    </p>

                    <div className="space-y-6">
                        {/* Pour le CEO / Fondateur */}
                        <div className="group relative p-8 rounded-2xl bg-white border border-gray-100 hover:border-accent-blue/20 hover:shadow-[0_8px_30px_rgb(0,0,0,0.04)] transition-all duration-500 animate-fade-in-up delay-200 overflow-hidden">
                            <div className="flex justify-between items-center cursor-pointer">
                                <h3 className="text-3xl font-playfair text-accent-blue group-hover:text-accent-gold transition-colors duration-300">Pour le CEO / Fondateur</h3>
                                <span className="text-accent-blue group-hover:text-accent-gold transform group-hover:rotate-180 transition-all duration-500">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6" /></svg>
                                </span>
                            </div>

                            <div className="max-h-0 opacity-0 group-hover:max-h-[2000px] group-hover:opacity-100 transition-all duration-700 ease-in-out">
                                <div className="pt-8">
                                    <p className="text-text-secondary mb-8 leading-relaxed">
                                        Nous offrons au dirigeant un soutien expert, objectif et dénué de tout conflit d'intérêts pour l'aider à naviguer dans les décisions les plus structurantes.
                                    </p>
                                    <ul className="space-y-4">
                                        {[
                                            { title: "Aide à la décision stratégique", text: "Nous agissons comme un \"sparring intellectuel\" confidentiel, vous permettant de tester vos options, de challenger vos hypothèses et de mettre à l'épreuve vos biais cognitifs en toute sécurité." },
                                            { title: "Formation technique M&A", text: "Nous démystifions les produits complexes de banque d'affaires (LBO, earn-out, reps & warranties insurance, valorisation) pour renforcer votre autonomie et vous permettre de dialoguer d'égal à égal avec vos conseils et les investisseurs." }
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

                        {/* Pour le Conseil d'Administration */}
                        <div className="group relative p-8 rounded-2xl bg-white border border-gray-100 hover:border-accent-blue/20 hover:shadow-[0_8px_30px_rgb(0,0,0,0.04)] transition-all duration-500 animate-fade-in-up delay-300 overflow-hidden">
                            <div className="flex justify-between items-center cursor-pointer">
                                <h3 className="text-3xl font-playfair text-accent-blue group-hover:text-accent-gold transition-colors duration-300">Pour le Conseil d'Administration</h3>
                                <span className="text-accent-blue group-hover:text-accent-gold transform group-hover:rotate-180 transition-all duration-500">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6" /></svg>
                                </span>
                            </div>

                            <div className="max-h-0 opacity-0 group-hover:max-h-[2000px] group-hover:opacity-100 transition-all duration-700 ease-in-out">
                                <div className="pt-8">
                                    <p className="text-text-secondary mb-8 leading-relaxed">
                                        Nous aidons le Conseil à exercer pleinement sa responsabilité fiduciaire en lui apportant un regard extérieur et indépendant.
                                    </p>
                                    <ul className="space-y-4">
                                        {[
                                            { title: "Analyses indépendantes", text: "Fourniture d'analyses indépendantes pour challenger de manière constructive les propositions M&A du management." },
                                            { title: "Angles morts & Gouvernance", text: "Identification des angles morts stratégiques et des risques sous-estimés dans les dossiers présentés, et conseil sur la gouvernance M&A en benchmarking avec les meilleures pratiques." }
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

                        {/* Pour les Professionnels M&A */}
                        <div className="group relative p-8 rounded-2xl bg-white border border-gray-100 hover:border-accent-blue/20 hover:shadow-[0_8px_30px_rgb(0,0,0,0.04)] transition-all duration-500 animate-fade-in-up delay-400 overflow-hidden">
                            <div className="flex justify-between items-center cursor-pointer">
                                <h3 className="text-3xl font-playfair text-accent-blue group-hover:text-accent-gold transition-colors duration-300">Pour les Professionnels M&A</h3>
                                <span className="text-accent-blue group-hover:text-accent-gold transform group-hover:rotate-180 transition-all duration-500">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6" /></svg>
                                </span>
                            </div>

                            <div className="max-h-0 opacity-0 group-hover:max-h-[2000px] group-hover:opacity-100 transition-all duration-700 ease-in-out">
                                <div className="pt-8">
                                    <p className="text-text-secondary mb-8 leading-relaxed">
                                        Nous proposons un coaching ciblé pour accélérer le développement professionnel et personnel des talents évoluant dans cet environnement exigeant.
                                    </p>
                                    <ul className="space-y-4">
                                        {[
                                            { title: "Visibilité et réseau", text: "Définition d'une stratégie de personal branding (LinkedIn, prises de parole, articles) pour se positionner comme un expert reconnu et construction méthodique d'un réseau de haut niveau." },
                                            { title: "Organisation personnelle", text: "Implémentation de méthodes de productivité (gestion du temps, priorisation, to-do lists), utilisation de systèmes (CRM personnel, automatisation IA) et optimisation de l'équilibre vie pro/perso." },
                                            { title: "Positionnement interne", text: "Coaching sur la gestion de votre image, la communication avec le senior management et la construction d'alliances stratégiques au sein de l'organisation." },
                                            { title: "Gestion de la pression", text: "Développement de techniques de résilience pour gérer le stress et prévenir les risques de burn-out inhérents à ce métier." },
                                            { title: "Gestion de carrière", text: "Conseil stratégique pour l'orientation de votre carrière (promotion, changement de poste), la préparation aux entretiens clés et la négociation de votre rémunération (bonus, carry)." }
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
