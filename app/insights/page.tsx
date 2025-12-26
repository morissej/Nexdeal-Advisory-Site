import Link from 'next/link';
import { Section } from '@/components/ui/Section';
import { Card } from '@/components/ui/Card';

export default function InsightsPage() {
    const articles = [
        {
            title: "L'asymétrie du silence",
            subtitle: "Pourquoi le non-dit est votre meilleur levier de négociation.",
            date: "Octobre 2025",
            category: "Stratégie"
        },
        {
            title: "Le mirage de la valorisation",
            subtitle: "Quand le prix masque la perte de contrôle structurelle.",
            date: "Septembre 2025",
            category: "Finance"
        },
        {
            title: "Sortir par le haut",
            subtitle: "Préparer sa succession trois ans avant la signature.",
            date: "Août 2025",
            category: "Gouvernance"
        },
        {
            title: "Le coût de l'inaction",
            subtitle: "Analyse des opportunités de consolidation manquées en 2024.",
            date: "Juillet 2025",
            category: "Marché"
        }
    ];

    return (
        <>
            <section className="py-24 border-b border-gray-100">
                <div className="max-w-[var(--spacing-container)] mx-auto px-6 lg:px-8">
                    <h1 className="text-display font-playfair mb-4">Insights</h1>
                    <p className="text-xl text-text-secondary font-light">
                        Notes courtes et analyses pour décideurs pressés.
                    </p>
                </div>
            </section>

            <Section>
                <div className="grid gap-8">
                    {articles.map((article, idx) => (
                        <Card key={idx} className="group cursor-pointer hover:bg-gray-50 transition-colors">
                            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                                <div>
                                    <div className="flex items-center gap-3 mb-2">
                                        <span className="text-xs font-semibold uppercase tracking-wider text-accent-blue/70">
                                            {article.category}
                                        </span>
                                        <span className="text-xs text-gray-400">• {article.date}</span>
                                    </div>
                                    <h2 className="text-2xl font-playfair mb-2 group-hover:text-accent-blue transition-colors">
                                        {article.title}
                                    </h2>
                                    <p className="text-text-secondary">
                                        {article.subtitle}
                                    </p>
                                </div>
                                <div className="text-accent-blue/0 group-hover:text-accent-blue/100 transform translate-x-4 group-hover:translate-x-0 transition-all duration-300">
                                    Lire &rarr;
                                </div>
                            </div>
                        </Card>
                    ))}
                </div>
            </Section>
        </>
    );
}
