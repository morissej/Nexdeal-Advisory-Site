import Image from 'next/image';
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
            title: "Préparation en amont et suivi en aval",
            description: "Un travail de fond pour structurer votre equity story, renforcer vos process et préparer la data room bien en amont, sans alerter le marché.",
            points: ["Audit de pré et post transaction", "Structuration de la donnée", "Clarification du narratif", "Amélioration continue des processus"]
        },
        {
            title: "Excellence Technologique & IA",
            description: "L'intégration de l'intelligence artificielle et de l'automatisation au cœur de nos processus constitue un avantage concurrentiel majeur. Cette maîtrise technologique nous permet d'être plus rapides, plus précis et plus économiques.",
            points: [
                "Sourcing et screening : Outils de web scraping et algorithmes de machine learning pour qualifier des milliers d'opportunités.",
                "Due diligence augmentée : Extraction automatisée de données et classification intelligente des red flags.",
                "Modélisation dynamique : Modèles financiers intégrant des analyses de sensibilité complexes en temps réel."
            ]
        },
        {
            title: "Accompagnement des moments critiques",
            description: "Une présence à vos côtés pour gérer les situations de haute intensité : crise de gouvernance, arbitrage familial, ou sollicitation hostile.",
            points: ["Gestion de crise", "Médiation actionnariale", "Défense d'intérêts"]
        },
        {
            title: "Une Expertise Internationale",
            description: "Notre portée est mondiale, fruit de 30 années passées à structurer et exécuter des opérations complexes au sein des plus grandes banques d'affaires internationales.",
            points: [
                "Expérience Cross-Border : Transactions et IPOs majeures, naviguant entre différentes cultures d'affaires.",
                "Standards Mondiaux : Application systématique des meilleures pratiques internationales.",
                "Réseau de Partenaires : Accès direct aux décideurs clés sur les principaux marchés financiers."
            ]
        }
    ];

    return (
        <>
            {/* Hero Section */}
            <section className="bg-background-secondary py-32 border-b border-gray-100">
                <div className="max-w-[var(--spacing-container)] mx-auto px-6 lg:px-8">
                    <h1 className="text-h1 font-playfair animate-fade-in-up">Un accompagnement sur le long terme</h1>
                </div>
            </section>

            {/* Services Grid */}
            <Section className="py-24 md:py-40">
                <div className="grid md:grid-cols-2 gap-x-20 gap-y-24">
                    {services.map((service, idx) => (
                        <div key={idx} className="group">
                            <h2 className="text-h2 font-playfair mb-8 group-hover:text-accent-blue transition-colors duration-300">
                                {service.title}
                            </h2>
                            <div className="w-12 h-1 bg-accent-gold/30 mb-8 group-hover:w-24 transition-all duration-300" />
                            <p className="text-text-secondary text-lg leading-relaxed mb-8">
                                {service.description}
                            </p>
                            <ul className="space-y-3">
                                {service.points.map((point, pIdx) => (
                                    <li key={pIdx} className="text-sm font-medium text-text-primary flex items-start">
                                        <span className="w-1.5 h-1.5 bg-accent-blue rounded-full mr-3 mt-1.5 shrink-0" />
                                        <span>{point}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </Section>

            {/* Infographic Section */}
            <Section className="py-20 bg-white border-t border-gray-100">
                <div className="w-full">
                    <Image
                        src="/images/nexdeal-infographics.png"
                        alt="NexDeal Advisory Infographics"
                        width={0}
                        height={0}
                        sizes="100vw"
                        className="w-full h-auto rounded-lg shadow-sm"
                    />
                </div>
            </Section>
        </>
    );
}
