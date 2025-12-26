'use client';

import Link from 'next/link';
import { ArrowRight, Shield, Swords, TrendingUp, Users, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { Section } from '@/components/ui/Section';
import { Card } from '@/components/ui/Card';
import { Icon } from '@/components/ui/Icon';

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[85vh] flex flex-col justify-center bg-background-primary overflow-hidden">
        {/* Background elements (subtle) */}
        <div className="absolute top-0 right-0 w-1/3 h-full bg-linear-to-l from-gray-100/50 to-transparent pointer-events-none" />

        <div className="max-w-[var(--spacing-container)] mx-auto px-6 lg:px-8 relative z-10 w-full">
          <div className="max-w-3xl">
            <div className="text-display md:text-8xl font-playfair font-bold mb-36 animate-fade-in-up text-accent-blue">
              Nexdeal Advisory
            </div>
            <h1 className="text-display font-playfair mb-6 leading-tight animate-fade-in-up">
              Be M&A ready.
            </h1>
            <p className="text-h3 text-text-secondary mb-10 font-light leading-relaxed max-w-2xl animate-fade-in-up delay-100">
              Conseil stratégique indépendant pour dirigeants et professionnels du M&A confrontés à des choix cruciaux : croissance, capital, transmission, M&A.
            </p>
            {/* CTAs removed as requested */}
          </div>
        </div>

        {/* Scroll Indicator */}
        <div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce text-accent-blue/50 cursor-pointer hover:text-accent-blue transition-colors"
          onClick={() => {
            document.getElementById('philosophy-section')?.scrollIntoView({ behavior: 'smooth' });
          }}
        >
          <Icon icon={ChevronDown} size={32} />
        </div>
      </section>

      {/* Philosophy Section */}
      <Section id="philosophy-section" className="bg-white border-t border-gray-100">
        <div className="grid md:grid-cols-2 gap-16 items-start">
          <div>
            <h2 className="text-h2 font-playfair mb-6 text-accent-blue">Le contre-pied du conseil transactionnel</h2>
            <p className="text-text-secondary text-lg leading-relaxed mb-6">
              Le marché du conseil M&A est dominé par une logique d’exécution. La motivation est la transaction.
            </p>
            <p className="text-text-primary text-lg font-medium leading-relaxed">
              NexDeal Advisory intervient avant, pendant et après la transaction. Et souvent sans transaction.
            </p>
            <div className="mt-8 pl-4 border-l-2 border-accent-gold">
              <p className="text-text-secondary italic">
                Objectifs : Analyser, anticiper, maîtriser.
              </p>
            </div>
          </div>
          <div className="bg-background-primary p-10 rounded-lg">
            <h3 className="text-h3 font-playfair mb-6">Notre Rôle</h3>
            <div className="space-y-8">
              <div className="flex gap-4">
                <div className="mt-1 bg-accent-blue/10 p-2 rounded-full h-fit">
                  <Icon icon={Swords} className="text-accent-blue" size={24} />
                </div>
                <div>
                  <h4 className="font-semibold text-lg mb-1">Sparring Partner</h4>
                  <p className="text-text-secondary">Pour l’entreprise : challenger la réflexion, tester les scénarios, anticiper.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="mt-1 bg-accent-blue/10 p-2 rounded-full h-fit">
                  <Icon icon={Shield} className="text-accent-blue" size={24} />
                </div>
                <div>
                  <h4 className="font-semibold text-lg mb-1">Strategic Bodyguard</h4>
                  <p className="text-text-secondary">Pour le dirigeant : Choix de carrière, décisions difficiles, positionnement, ...</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Context "When to call us" */}
      <Section className="bg-background-primary">
        <div className="mb-16">
          <h2 className="text-h2 font-playfair mb-4">Quand faisons-nous sens ?</h2>
          <p className="text-text-secondary max-w-xl">
            Nous intervenons lorsque dirigeants, actionnaires et professionnels du M&A font face à une décision stratégique ou une complexité financière majeure.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              icon: TrendingUp,
              title: "Consolidation",
              desc: "Pression concurrentielle forte et nécessité de bouger rapidement."
            },
            {
              icon: Users,
              title: "Gouvernance",
              desc: "Divergences entre associés ou recomposition du capital."
            },
            {
              icon: ArrowRight,
              title: "Transmission",
              desc: "Passage de témoin familial ou managérial, cession, scission, ..."
            },
            {
              icon: Shield,
              title: "Solitude Stratégique",
              desc: "Besoin d'un tiers de confiance neutre, hors conflit d'intérêt."
            }
          ].map((item, idx) => (
            <Card key={idx} className="h-full">
              <Icon icon={item.icon} className="text-accent-blue mb-6" size={32} />
              <h3 className="text-xl font-playfair mb-3">{item.title}</h3>
              <p className="text-text-secondary text-sm leading-relaxed">{item.desc}</p>
            </Card>
          ))}
        </div>
      </Section>
    </>
  );
}
