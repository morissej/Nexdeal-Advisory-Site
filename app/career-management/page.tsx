'use client';

import { Section } from '@/components/ui/Section';

export default function CareerManagementPage() {
    const sections = [
        {
            title: "1. Grandes Banques d'Affaires (Bulge Brackets)",
            items: [
                {
                    title: "Le Burnout Structurel et les Heures Extrêmes",
                    rational: "Le volume d'heures (80 à 100 heures par semaine) génère une usure physiologique et mentale. 72% des banquiers envisagent de quitter la profession pour limiter les risques liés à ce rythme toxique.",
                    ma_link: "Exploiter politiquement le \"protected weekend\", documenter toutes les demandes abusives, et constituer un réseau de soutien interne très solide."
                },
                {
                    title: "Le Goulot d'Étranglement des Promotions",
                    rational: "Une surpopulation d'Associates et de VPs freine dramatiquement l'accès au titre de Director ou MD. La stagnation bloque de nombreux profils qualifiés sans visibilité avérée.",
                    ma_link: "Provoquer des conversations claires sur vos délais de promotion dès la 2ème année, et ne pas hésiter à initier un mouvement latéral."
                },
                {
                    title: "La Transition Exécution vers Origination",
                    rational: "Passer MD modifie le métier : il ne faut plus modéliser, mais générer du business. Une conversion périlleuse pour d'excellents techniciens manquant d'aptitudes commerciales.",
                    ma_link: "Commencer le développement de votre réseau dès le grade d'Associate, et construire une réputation sectorielle qui dépasse votre banque."
                }
            ]
        },
        {
            title: "2. Banques d'Affaires Boutiques",
            items: [
                {
                    title: "Les Pics d'Intensité Extrêmes",
                    rational: "Si les périodes interstitielles semblent calmes, les pics d'exécution en transactions actives sont souvent encore plus intenses (80-90h/semaine) du fait de la taille réduite des effectifs.",
                    ma_link: "Anticiper les phases de deal intensives, et préserver son énergie pour capitaliser sur son réseau pendant les répits."
                },
                {
                    title: "La Dépendance au Deal Flow et Rainmakers",
                    rational: "La carrière d'un collaborateur repose sur la capacité spécifique de sa boutique à attirer des mandats. Une perte soudaine de business réduit directement les opportunités d'apprentissage.",
                    ma_link: "Évaluer la santé du deal flow et les partners en place avant d'accepter une offre, afin de protéger sa courbe de développement."
                },
                {
                    title: "La Pression sur l'Exit PE",
                    rational: "Le placement quasi systématique en Private Equity est un mythe qui s'érode. Beaucoup consentent à des sacrifices immenses sur cette seule promesse.",
                    ma_link: "Valider les statistiques très récentes de placement de votre boutique, et construire un réseau sans espérer de transfert automatique."
                }
            ]
        },
        {
            title: "3. Cabinets d'Avocats M&A",
            items: [
                {
                    title: "La Cage Dorée des Heures Facturables",
                    rational: "Avec des barèmes de 2 200 à 2 300 heures facturables annuelles, 52% des avocats se déclarent souvent au bord du burn-out, incitant à des départs massifs.",
                    ma_link: "Tracker son niveau d'épuisement comme une réelle métrique de performance, et systématiser des rituels de décompression vitaux."
                },
                {
                    title: "Un Parcours Associé Long et Incertain",
                    rational: "La route vers le statut d'Equity Partner est marquée par 7 à 12 ans de compétition acharnée, nécessitant un sens politique fort et une redoutable solidité.",
                    ma_link: "Avoir des discussions transparentes sur les KPI d'association dès sa 3ème année, et identifier formellement son sponsor en interne."
                },
                {
                    title: "Conflits d'Intérêts et Pression Concurrentielle",
                    rational: "Les conflits d'intérêts vous bloquent occasionnellement l'accès à certaines opportunités majeures. Parallèlement, la pression sur les honoraires crée de lourdes doubles contraintes.",
                    ma_link: "Construire de solides relations avec vos portefeuilles pour garantir des missions stratégiques au-delà des affrontements tarifaires."
                }
            ]
        },
        {
            title: "4. Corporate M&A (Développement d'Entreprise)",
            items: [
                {
                    title: "Manque de Visibilité et Deal Flow Subi",
                    rational: "La fonction doit souvent affirmer son périmètre face au COMEX. De plus, elle se retrouve parfois contrainte de subir la direction en réagissant aux choix extérieurs.",
                    ma_link: "Créer un pipeline documenté reposant sur vos propres thèses d'acquisition sectorielles pour vous imposer en leader stratégique."
                },
                {
                    title: "La Césure entre Due Diligence et Intégration",
                    rational: "Le manque de transmission entre la phase d'exécution financière et l'intégration opérationnelle génère logiquement des dérives en post-closing.",
                    ma_link: "Impliquer scrupuleusement les responsables de l'intégration globale de l'entreprise dès réception d'une lettre d'intention sérieuse."
                },
                {
                    title: "L'Étroitesse du Parcours de Carrière",
                    rational: "L'évolution pyramidale au sein d'un département Corporate limite naturellement les ouvertures vers les vastes positions structurelles (type C-Level).",
                    ma_link: "Chercher des missions à forte exposition transversale au niveau du comité de direction et prévoir des points d'étape de carrière anticipés."
                }
            ]
        },
        {
            title: "5. Enjeux Transversaux & Santé Mentale",
            items: [
                {
                    title: "Le Syndrome de l'Imposteur en Milieu Hypercompétitif",
                    rational: "Devoir toujours justifier d'une confiance infaillible engendre le développement invisible d'un doute. La peur latente du moindre manquement alimente un stress lourd.",
                    ma_link: "Ne pas délaisser ses atouts relationnels et cultiver ses soft skills (leadership, résilience) pour dominer vos complexes d'exécution."
                },
                {
                    title: "La Perte de Sens Existentielle à Long Terme",
                    rational: "Usé par des transactions qui restent fondamentalement techniques, il n'est pas rare qu'un talent confirmé ressente un brutal vide de sens personnel passé la quarantaine.",
                    ma_link: "S'assurer de ne jamais perdre la passion du domaine et de concevoir des évolutions avant d'agir par simple dépit de l'épuisement."
                }
            ]
        }
    ];

    return (
        <>
            <section className="bg-background-secondary py-32 border-b border-gray-100">
                <div className="max-w-[var(--spacing-container)] mx-auto px-6 lg:px-8 text-center md:text-left">
                    <h1 className="text-h1 font-playfair animate-fade-in-up mb-8">M&A Career management</h1>
                </div>
            </section>

            <Section className="bg-white">
                <div className="max-w-5xl mx-auto space-y-24">
                    {sections.map((section, sIdx) => (
                        <div key={sIdx} className="scroll-mt-32" id={`section-${sIdx}`}>
                            <h2 className="text-3xl font-playfair text-accent-blue mb-12 border-b border-gray-100 pb-4">
                                {section.title}
                            </h2>
                            <div className="grid gap-8">
                                {section.items.map((item, iIdx) => (
                                    <div key={iIdx} className="group p-8 rounded-xl bg-white border border-gray-100 hover:border-accent-blue/30 hover:shadow-lg transition-all duration-300">
                                        <h3 className="text-xl font-bold text-text-primary mb-6 group-hover:text-accent-blue transition-colors">
                                            {item.title}
                                        </h3>

                                        <div className="mb-6">
                                            <span className="text-xs font-bold text-accent-blue uppercase tracking-wider mb-2 block">Le Rationnel</span>
                                            <p className="text-text-secondary text-sm leading-relaxed">
                                                {item.rational}
                                            </p>
                                        </div>

                                        <div className="bg-background-secondary rounded-lg p-4 mt-6">
                                            <div className="flex gap-3 items-start">
                                                <div className="w-1.5 h-1.5 rounded-full bg-accent-gold mt-2 shrink-0"></div>
                                                <div>
                                                    <span className="text-sm font-bold text-text-primary block mb-1">Le Conseil NexDeal</span>
                                                    <p className="text-sm text-text-secondary leading-relaxed">
                                                        {item.ma_link}
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </Section>
        </>
    );
}
