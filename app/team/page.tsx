import { Section } from '@/components/ui/Section';

export default function TeamPage() {
    const teamMembers = [
        {
            name: "Senior Partner 1",
            role: "Fondateur & Stratégie",
            bio: "20 ans d'expérience en conseil stratégique et M&A. Ancien partenaire de fonds d'investissement."
        },
        {
            name: "Senior Partner 2",
            role: "Gouvernance & Opérations",
            bio: "Experte en restructuration et gouvernance familiale. A accompagné plus de 50 transmissions."
        },
        {
            name: "Director",
            role: "Corporate Finance",
            bio: "Spécialiste des montages financiers complexes et de la dette structurée."
        },
        {
            name: "Associate",
            role: "Market Intelligence",
            bio: "Analyste senior spécialisé dans les signaux faibles et la veille concurrentielle."
        }
    ];

    return (
        <>
            <section className="bg-background-secondary py-24 border-b border-gray-100">
                <div className="max-w-[var(--spacing-container)] mx-auto px-6 lg:px-8">
                    <h1 className="text-display font-playfair mb-6 animate-fade-in-up">Une séniorité collective.</h1>
                    <p className="text-h3 text-text-secondary font-light max-w-3xl animate-fade-in-up delay-100">
                        Pas de juniors sur les sujets critiques. Une équipe resserrée d'experts ayant l'habitude des environnements à forts enjeux et de la confidentialité absolue.
                    </p>
                </div>
            </section>

            <Section>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {teamMembers.map((member, idx) => (
                        <div key={idx} className="group relative overflow-hidden bg-gray-50 rounded-[var(--radius-card)] aspect-[3/4]">
                            {/* Placeholder for Image */}
                            <div className="absolute inset-0 bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center text-gray-400">
                                <span className="text-4xl font-playfair opacity-20">Photo</span>
                            </div>

                            {/* Overlay Info */}
                            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent p-6 text-white pt-24 transform transition-transform duration-300 translate-y-4 group-hover:translate-y-0">
                                <h3 className="text-xl font-playfair">{member.name}</h3>
                                <p className="text-sm font-medium opacity-90 mb-2">{member.role}</p>
                                <p className="text-xs text-gray-200 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-75 line-clamp-3">
                                    {member.bio}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </Section>
        </>
    );
}
