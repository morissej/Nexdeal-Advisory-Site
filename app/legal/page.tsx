'use client';

import { Section } from '@/components/ui/Section';

export default function LegalPage() {
    return (
        <>
            <section className="bg-background-secondary py-32 border-b border-gray-100">
                <div className="max-w-[var(--spacing-container)] mx-auto px-6 lg:px-8">
                    <h1 className="text-h1 font-playfair animate-fade-in-up">Mentions Légales</h1>
                </div>
            </section>

            <Section className="bg-white">
                <div className="max-w-4xl mx-auto space-y-12">

                    {/* Éditeur du site */}
                    <div>
                        <h2 className="text-2xl font-playfair text-accent-blue mb-4">1. Éditeur du Site</h2>
                        <p className="text-text-secondary leading-relaxed">
                            Le site NexDeal Advisory est édité par la société NexDeal Advisory.<br />
                            <strong>Forme juridique :</strong> Société par Actions Simplifiée (SAS)<br />
                            <strong>Siège social :</strong> Paris, France<br />
                            <strong>Email :</strong> contact@nexdeal.advisory<br />
                        </p>
                    </div>

                    {/* Hébergement */}
                    <div>
                        <h2 className="text-2xl font-playfair text-accent-blue mb-4">2. Hébergement</h2>
                        <p className="text-text-secondary leading-relaxed">
                            Ce site est hébergé par Google Firebase.<br />
                            Société : Google LLC<br />
                            Adresse : 1600 Amphitheatre Parkway, Mountain View, CA 94043, USA<br />
                            Site web : https://firebase.google.com
                        </p>
                    </div>

                    {/* Propriété Intellectuelle */}
                    <div>
                        <h2 className="text-2xl font-playfair text-accent-blue mb-4">3. Propriété Intellectuelle</h2>
                        <p className="text-text-secondary leading-relaxed">
                            L'ensemble de ce site (structure, présentation, contenus, logos, images, textes) relève de la législation française et internationale sur le droit d'auteur et la propriété intellectuelle.
                            Toute reproduction, représentation, modification, publication, adaptation de tout ou partie des éléments du site, quel que soit le moyen ou le procédé utilisé, est interdite, sauf autorisation écrite préalable de NexDeal Advisory.
                        </p>
                    </div>

                    {/* Limitation de responsabilité */}
                    <div>
                        <h2 className="text-2xl font-playfair text-accent-blue mb-4">4. Limitation de Responsabilité</h2>
                        <p className="text-text-secondary leading-relaxed">
                            NexDeal Advisory s'efforce de fournir sur le site des informations aussi précises que possible. Toutefois, la société ne pourra être tenue responsable des oublis, des inexactitudes et des carences dans la mise à jour, qu'elles soient de son fait ou du fait des tiers partenaires qui lui fournissent ces informations.
                            Les informations indiquées sur le site sont données à titre indicatif, et sont susceptibles d'évoluer.
                        </p>
                    </div>

                    {/* Données Personnelles */}
                    <div>
                        <h2 className="text-2xl font-playfair text-accent-blue mb-4">5. Données Personnelles (GDPR)</h2>
                        <p className="text-text-secondary leading-relaxed">
                            Conformément au Règlement Général sur la Protection des Données (RGPD), vous disposez d’un droit d’accès, de rectification, de portabilité et d’effacement de vos données personnelles.
                            Les informations recueillies via le formulaire de contact sont destinées exclusivement à NexDeal Advisory pour le traitement de votre demande et ne sont jamais transmises à des tiers à des fins commerciales.
                            Pour exercer vos droits, vous pouvez nous contacter à l'adresse : contact@nexdeal.advisory.
                        </p>
                    </div>

                </div>
            </Section>
        </>
    );
}
