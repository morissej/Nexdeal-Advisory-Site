import Link from 'next/link';
import { Section } from '@/components/ui/Section';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';

export default function ServicesPage() {
    const services = [
        {
            title: "Cartographie stratégique des options",
            description: "Avant toute décision, nous explorons l'intégralité du champ des possibles : continuer seul, croissance externe, adossement partiel, cession progressive ou recomposition capitalistique.",
            points: ["Analyse de scénarios", "Modélisation financière", "Stress-test des options"]
        },
        {
            title: "Lecture et décodage des dynamiques M&A",
            description: "Nous vous donnons une longueur d'avance en décryptant les intentions réelles des acteurs du marché (fonds, industriels, banquiers) et les signaux faibles de votre secteur.",
            points: ["Rapports de force", "Intelligence de marché", "Identification des contreparties"]
        },
        {
            title: "Préparation silencieuse",
            description: "Un travail de fond pour structurer votre equity story, renforcer vos process et préparer la data room bien en amont, sans alerter le marché.",
            points: ["Audit de pré-cession", "Structuration de la donnée", "Clarification du narratif"]
        },
        {
            title: "Accompagnement des moments critiques",
            description: "Une présence à vos côtés pour gérer les situations de haute intensité : crise de gouvernance, arbitrage familial, ou sollicitation hostile.",
            points: ["Gestion de crise", "Médiation actionnariale", "Défense d'intérêts"]
        }
    ];

    return (
        <>
            {/* Hero Section */}
            <section className="bg-background-secondary py-24 border-b border-gray-100">
                <div className="max-w-[var(--spacing-container)] mx-auto px-6 lg:px-8">
                    <h1 className="text-h1 font-playfair mb-6 animate-fade-in-up">Un accompagnement, pas un mandat.</h1>
                    <p className="text-h3 text-text-secondary font-light max-w-3xl animate-fade-in-up delay-100">
                        Nous refusons la logique du catalogue de deals. Nous proposons un accompagnement stratégique continu, conçu pour protéger vos intérêts bien avant, pendant et après une transaction.
                    </p>
                </div>
            </section>

            {/* Services Grid */}
            <Section>
                <div className="grid md:grid-cols-2 gap-x-12 gap-y-16">
                    {services.map((service, idx) => (
                        <div key={idx} className="group">
                            <h2 className="text-h2 font-playfair mb-4 group-hover:text-accent-blue transition-colors duration-300">
                                {service.title}
                            </h2>
                            <div className="w-12 h-1 bg-accent-gold/30 mb-6 group-hover:w-24 transition-all duration-300" />
                            <p className="text-text-secondary text-lg leading-relaxed mb-6">
                                {service.description}
                            </p>
                            <ul className="space-y-2">
                                {service.points.map((point, pIdx) => (
                                    <li key={pIdx} className="text-sm font-medium text-text-primary flex items-center">
                                        <span className="w-1.5 h-1.5 bg-accent-blue rounded-full mr-3" />
                                        {point}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </Section>

            {/* Bottom CTA */}
            <Section className="bg-background-secondary border-t border-gray-100 text-center">
                <h3 className="text-h2 font-playfair mb-6">Parlons de votre situation</h3>
                <p className="text-text-secondary mb-8 max-w-xl mx-auto">
                    Une discussion confidentielle pour évaluer vos options, sans engagement de mandat.
                </p>
                <Link href="/contact">
                    <Button variant="primary">Initier une discussion</Button>
                </Link>
            </Section>
        </>
    );
}
