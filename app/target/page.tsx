import { Section } from '@/components/ui/Section';
import { Card } from '@/components/ui/Card';

export default function TargetPage() {
    const targets = [
        {
            title: "Dirigeants de PME en forte croissance",
            description: "Vous faites face à une offre de rachat non sollicitée ou préparez une ouverture de capital. Vous cherchez à protéger votre valorisation et votre gouvernance."
        },
        {
            title: "Family Offices & Holdings",
            description: "Vous gérez un portefeuille d'actifs et cherchez des opportunités d'arbitrage ou de diversification directe, hors des sentiers battus."
        },
        {
            title: "Fondateurs de Scale-ups",
            description: "La pression concurrentielle s'intensifie. Vous devez choisir entre consolidation (buy & build) ou adossement à un acteur industriel."
        },
        {
            title: "Professionnels du M&A",
            description: "Directeurs M&A ou banquiers d'affaires cherchant un sparring partner pour débloquer une situation complexe ou structurer une approche confidentielle."
        }
    ];

    return (
        <>
            <section className="bg-background-secondary py-24 border-b border-gray-100">
                <div className="max-w-[var(--spacing-container)] mx-auto px-6 lg:px-8">
                    <h1 className="text-h1 font-playfair mb-6 animate-fade-in-up">Confidentialité absolue.</h1>
                    <p className="text-h3 text-text-secondary font-light max-w-3xl animate-fade-in-up delay-100">
                        Nous travaillons dans l'ombre des décideurs. Pas de tombstones, pas de logos clients. Notre track record se mesure à la qualité des décisions prises, pas à la publicité des transactions.
                    </p>
                </div>
            </section>

            <Section>
                <div className="grid md:grid-cols-2 gap-8">
                    {targets.map((item, idx) => (
                        <Card key={idx} className="h-full border-gray-100 hover:border-accent-blue/20">
                            <h3 className="text-2xl font-playfair mb-4 text-accent-blue">{item.title}</h3>
                            <p className="text-text-secondary leading-relaxed">
                                {item.description}
                            </p>
                        </Card>
                    ))}
                </div>
            </Section>

            <Section className="bg-background-dark text-text-inverted text-center">
                <h2 className="text-h2 font-playfair mb-6">Vous reconnaissez-vous ?</h2>
                <p className="text-gray-400 max-w-2xl mx-auto mb-8">
                    Si vous faites face à l'une de ces situations, une discussion informelle permet souvent de clarifier l'horizon.
                </p>
            </Section>
        </>
    );
}
