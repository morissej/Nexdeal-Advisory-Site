'use client';

import { Section } from '@/components/ui/Section';

export default function PainPointsPage() {
    const sections = [
        {
            title: "1. Pression concurrentielle & consolidation",
            items: [
                {
                    title: "La Spirale de la Marginalisation",
                    rational: "Consolidation accélérée, acteurs mieux capitalisés, besoin de taille critique pour survivre, coûts fixes de conformité qui montent.",
                    emotional: "Sentiment d'être rétréci par rapport aux dynamiques du marché. Anxiété croissante de perte de statut. Humiliation silencieuse.",
                    ma_link: "Le M&A permet de reprendre l'initiative : acquisitions ciblées pour atteindre la taille critique, rapprochement stratégique ou processus de vente maîtrisé."
                },
                {
                    title: "Peur de rater le bon mouvement",
                    rational: "Incertitude sur les cycles de marché, timing incertain pour acheter ou s'adosser, manque de visibilité sur la fenêtre optimale.",
                    emotional: "Rumination et hésitation constantes. Impression de jouer l'avenir entier sur une seule décision.",
                    ma_link: "Une approche structurée permet de cartographier les options et d'objectiver les scénarios pour être prêt lorsque la fenêtre s'ouvre."
                },
                {
                    title: "Perte progressive du rapport de force",
                    rational: "Plus le temps passe, plus le pouvoir de négociation diminue ; les options se ferment progressivement.",
                    emotional: "Urgence silencieuse. Impression de perdre la main progressivement. Peur viscérale de ne plus avoir le choix.",
                    ma_link: "Un processus préparé à l'avance permet de figer le rapport de force au bon moment et de lancer une opération quand les fondamentaux sont solides."
                },
                {
                    title: "Consolidation défensive",
                    rational: "Chocs externes (tech, régulation) favorisent les gros ; coûts fixes de conformité en augmentation constante.",
                    emotional: "Colère sourde contre un système injuste. Sentiment d'impuissance : même une bonne entreprise ne peut pas survivre seule.",
                    ma_link: "Le M&A offre la possibilité de mutualiser les coûts fixes via une fusion ou de monétiser la valeur créée avant que les exigences externes ne l'érodent."
                }
            ]
        },
        {
            title: "2. Croissance, financement & structure de capital",
            items: [
                {
                    title: "Croissance rapide mal structurée",
                    rational: "Organisation, processus, gouvernance et financement ne suivent pas la traction ; risque de surcharge.",
                    emotional: "Peur existentielle de casser ce qui marche. Surcharge permanente, culpabilité de devoir changer pour survivre.",
                    ma_link: "La croissance externe permet d'acheter des capacités déjà structurées plutôt que de tout construire en interne."
                },
                {
                    title: "Capital vs contrôle",
                    rational: "Financer croissance sans subir dilution excessive ni prise de pouvoir par les investisseurs.",
                    emotional: "Tension identitaire : fondateur vs actionnaire minoritaire. Méfiance vis-à-vis des investisseurs.",
                    ma_link: "Une structuration fine (minoritaire, OBO, pacte) permet de sécuriser des ressources tout en définissant contractuellement les zones de contrôle."
                },
                {
                    title: "Capital comme piège financier",
                    rational: "Clauses financières (covenants, ratchets) peuvent verrouiller la liberté future.",
                    emotional: "Peur de l'engrenage progressif. Obsession des petites lignes. Sensation d'être piégé au ralenti.",
                    ma_link: "Le M&A permet de refinancer ou restructurer une dette mal calibrée et de réécrire une structure de capital plus robuste."
                },
                {
                    title: "Stress d'une structure de capital non adéquate",
                    rational: "Structure surendettée, covenants contraignants, absence de marges de manœuvre.",
                    emotional: "Stress latent à chaque comité de trésorerie. Sentiment de marcher sur une corde raide.",
                    ma_link: "Un deal M&A peut rééquilibrer la structure de capital, diluer le risque financier et redonner du temps stratégique."
                }
            ]
        },
        {
            title: "3. Partenariats & irréversibilité",
            items: [
                {
                    title: "Perte de contrôle culturel",
                    rational: "Gouvernance partagée, dilution de l'ADN, conflits de priorités.",
                    emotional: "Atteinte à l'identité du fondateur. Peur de trahir l'histoire de la société. Sentiment de deuil.",
                    ma_link: "Un process M&A bien préparé permet de choisir un partenaire culturellement compatible et de négocier des clauses de gouvernance protectrices."
                },
                {
                    title: "Méfiance envers le partenaire",
                    rational: "Asymétrie d'information, agendas cachés, risque de prise de contrôle progressive.",
                    emotional: "Paranoïa rationnelle. Hypervigilance épuisante. Difficulté à faire confiance.",
                    ma_link: "Un conseil indépendant audite les contreparties et structure des « safeguards » contractuels."
                },
                {
                    title: "Association perçue comme capitulation",
                    rational: "Risque de signal de fragilité auprès du marché et des équipes.",
                    emotional: "Peur du jugement externe et interne. Sentiment de sacrifier son image.",
                    ma_link: "Positionné correctement, un deal peut être raconté comme un mouvement offensif (accélération) plutôt qu'une reddition."
                },
                {
                    title: "Engagement irréversible",
                    rational: "Retour en arrière quasi impossible après adossement ou fusion.",
                    emotional: "Vertige. Blocage décisionnel. Peur d'être enfermé.",
                    ma_link: "Des structures intelligentes (phases, options) permettent de gérer l'irréversibilité et de tester une trajectoire."
                }
            ]
        },
        {
            title: "4. Risques externes, fiscalité & international",
            items: [
                {
                    title: "Disruption technologique",
                    rational: "Cycles d'innovation accélérés, nouveaux entrants plus agiles, obsolescence rapide.",
                    emotional: "Peur viscérale d'être dépassé. Perte de confiance dans votre propre vision.",
                    ma_link: "Acquérir une technologie ou une équipe permet de raccourcir les cycles d'adaptation."
                },
                {
                    title: "Incertitude & mauvais paris",
                    rational: "Difficile de distinguer les tendances du buzz ; risque d'investir trop tôt ou trop tard.",
                    emotional: "Anxiété de se tromper. Sentiment d'ignorance face à la complexité technologique.",
                    ma_link: "Miser sur des cibles éprouvées permet de réduire le risque de « pari technologique » isolé."
                },
                {
                    title: "Durcissement des normes & charges",
                    rational: "Coûts de conformité croissants (ESG, qualité) ; pression fiscale lourde.",
                    emotional: "Fatigue et irritation. Impression d'être pénalisé par votre taille. Rage sourde.",
                    ma_link: "Une stratégie M&A permet de changer de catégorie pour mieux diluer les coûts fixes."
                },
                {
                    title: "Instabilité réglementaire & fiscale",
                    rational: "Changements fréquents de règles rendant difficiles les décisions long-terme.",
                    emotional: "Sentiment d'injustice. Impression d'impuissance. Fatigue de l'instabilité.",
                    ma_link: "S'internationaliser via le M&A permet de diversifier le risque pays et de réduire la dépendance à un cadre unique."
                }
            ]
        },
        {
            title: "5. Solitude & charge mentale du dirigeant",
            items: [
                {
                    title: "Isolement stratégique",
                    rational: "Peu d'interlocuteurs indépendants ; entourage biaisé par les incitations.",
                    emotional: "Sentiment de solitude profond. Pression intense de porter l'avenir seul.",
                    ma_link: "Un interlocuteur indépendant joue le rôle de sparring-partner sans agenda caché."
                },
                {
                    title: "Charge mentale et veille",
                    rational: "Trop de fronts à surveiller, surcharge cognitive.",
                    emotional: "Épuisement cognitif. Culpabilité de privilégier l'urgence au détriment du futur.",
                    ma_link: "Structurer un agenda M&A permet de hiérarchiser les priorités et transformer une veille subie en trajectoire choisie."
                },
                {
                    title: "Décisions avec informations incomplètes",
                    rational: "Incertitude multidimensionnelle, absence de lecture intégrée.",
                    emotional: "Anxiété et rumination. Peur de l'erreur irréversible.",
                    ma_link: "Un processus M&A impose de rassembler et challenger les informations pour remettre de la clarté."
                },
                {
                    title: "Perte de maîtrise du récit",
                    rational: "Marché ou banquiers imposent leur calendrier et narration.",
                    emotional: "Sensation d'être manipulé. Perte de sentiment de contrôle.",
                    ma_link: "Préparer story et data en amont permet au dirigeant de reprendre la main sur le récit et le tempo."
                }
            ]
        },
        {
            title: "6. Maîtrise du jeu M&A",
            items: [
                {
                    title: "Angle mort sur les options",
                    rational: "Vision binaire (vendre/pas vendre) et manque de scénarios créatifs.",
                    emotional: "Confusion. Peur de rater la meilleure option par ignorance.",
                    ma_link: "Un conseil M&A cartographie les options créatives : carve-out, JV, cession progressive, etc."
                },
                {
                    title: "Décisions suboptimales faute d’anticipation",
                    rational: "Décisions prises sous contrainte, timing manqué.",
                    emotional: "Stress de l'urgence. Sentiment de subir plutôt que choisir.",
                    ma_link: "La préparation (12–18 mois) transforme l'urgence en opportunité."
                },
                {
                    title: "Biais des conseils transactionnels",
                    rational: "Certains conseils poussent au mandat ; biais d'incitation.",
                    emotional: "Défiance. Peur d'être instrumentalisé.",
                    ma_link: "Chercher un conseil en amont de tout mandat permet un diagnostic sans conflit d'intérêt."
                },
                {
                    title: "Incertitude sur le timing",
                    rational: "Risque de lancer trop tôt ou trop tard.",
                    emotional: "Doute persistant. Procrastination paralysante.",
                    ma_link: "Une préparation pluriannuelle permet de tester le marché et de ne lancer formellement qu'au moment optimal."
                },
                {
                    title: "Données insuffisamment préparées",
                    rational: "Reporting et risques non structurés fragilisent la due diligence.",
                    emotional: "Peur d'être exposé. Anxiété des mauvaises surprises.",
                    ma_link: "Une VDD proactive identifie et corrige les problèmes avant qu'un acheteur ne les découvre."
                }
            ]
        },
        {
            title: "7. Gouvernance & Actionnariat",
            items: [
                {
                    title: "Absence de plan de succession",
                    rational: "Pas de schéma de transmission clair, dépendance à une seule personne.",
                    emotional: "Peur de voir son œuvre disparaître. Culpabilité.",
                    ma_link: "Le M&A permet de préparer une transition ordonnée et d'institutionnaliser la gouvernance."
                },
                {
                    title: "Départ de talents clés",
                    rational: "Absence de perspectives pousse les bons à partir.",
                    emotional: "Peur viscérale de perdre les talents critiques. Angoisse.",
                    ma_link: "Un projet M&A peut inclure des plans d'intéressement (ManEco) pour retenir et embarquer les clés."
                },
                {
                    title: "Actionnariat dysfonctionnel",
                    rational: "Blocages de gouvernance, horizons divergents.",
                    emotional: "Frustration de ne pas décider seul. Sentiment d'être coincé.",
                    ma_link: "Une recomposition capitalistique permet de nettoyer l'actionnariat et réaligner les intérêts."
                }
            ]
        }
    ];

    return (
        <>
            <section className="bg-background-secondary py-32 border-b border-gray-100">
                <div className="max-w-[var(--spacing-container)] mx-auto px-6 lg:px-8 text-center md:text-left">
                    <h1 className="text-h1 font-playfair animate-fade-in-up mb-8">CEOs Painpoints</h1>

                    <a href="https://vague-transmission.web.app/" target="_blank" rel="noopener noreferrer" className="inline-block animate-fade-in-up delay-200">
                        <div className="bg-accent-blue text-white px-8 py-4 rounded-lg font-medium hover:bg-accent-blue/90 transition-colors shadow-lg hover:shadow-xl flex items-center gap-3">
                            <span>En savoir plus sur la grande vague de transmissions d'entreprises qui arrive avec le départ à la retraite des boomers</span>
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /><polyline points="15 3 21 3 21 9" /><line x1="10" y1="14" x2="21" y2="3" /></svg>
                        </div>
                    </a>
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
                                                    <span className="text-sm font-bold text-text-primary block mb-1">La Réponse NexDeal</span>
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
