'use client';

import { useState } from 'react';
import { Section } from '@/components/ui/Section';
import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';

type Option = {
    label: string;
    value: string;
};

type Question = {
    id: string;
    question: string;
    options: Option[];
};

const QUESTIONS: Question[] = [
    {
        id: 'performance',
        question: "Quel est le principal moteur de performance aujourd’hui ?",
        options: [
            { label: "Croissance organique", value: "organic" },
            { label: "Pricing power / Marges", value: "pricing" },
            { label: "Acquisitions (M&A)", value: "mna" },
            { label: "Innovation / R&D", value: "innovation" }
        ]
    },
    {
        id: 'fragility',
        question: "Quelle est la principale fragilité identifiée à 2-3 ans ?",
        options: [
            { label: "Pression concurrentielle", value: "competition" },
            { label: "Dépedance hommes clés", value: "talent" },
            { label: "Obsolescence technologique", value: "tech" },
            { label: "Besoin de financement", value: "capital" }
        ]
    },
    {
        id: 'governance',
        question: "La question de la succession ou du relais managérial est-elle formalisée ?",
        options: [
            { label: "Oui, plan clair et partagé", value: "yes_clear" },
            { label: "En cours de réflexion", value: "in_progress" },
            { label: "Non, sujet tabou ou reporté", value: "no" },
            { label: "Non applicable (trop tôt)", value: "na" }
        ]
    },
    {
        id: 'pressure',
        question: "Avez-vous le sentiment de subir le tempo plutôt que de le choisir ?",
        options: [
            { label: "Rarement (Maîtrise totale)", value: "rarely" },
            { label: "Parfois (Sur certains sujets)", value: "sometimes" },
            { label: "Souvent (Mode réactif)", value: "often" }
        ]
    }
];

export default function DiagnosticPage() {
    const [step, setStep] = useState(0);
    const [answers, setAnswers] = useState<Record<string, string>>({});
    const [finished, setFinished] = useState(false);

    const handleAnswer = (value: string) => {
        setAnswers({ ...answers, [QUESTIONS[step].id]: value });
    };

    const nextStep = () => {
        if (step < QUESTIONS.length - 1) {
            setStep(step + 1);
        } else {
            setFinished(true);
        }
    };

    const prevStep = () => {
        if (step > 0) setStep(step - 1);
    };

    if (finished) {
        return (
            <Section className="min-h-[60vh] flex flex-col items-center justify-center">
                <Card className="max-w-2xl w-full p-10 bg-white border-2 border-accent-blue/10">
                    <h2 className="text-h2 font-playfair mb-6 text-accent-blue">Diagnostic Préliminaire</h2>
                    <p className="text-text-secondary leading-relaxed mb-8">
                        Votre situation indique un besoin de clarification stratégique.
                        {answers['pressure'] === 'often' && " Le sentiment de subir le tempo est un signal d'alerte classique qui précède souvent une perte de valeur."}
                        {answers['governance'] === 'no' && " L'absence de plan de succession fragilise votre position de négociation future."}
                    </p>

                    <div className="bg-gray-50 p-6 rounded mb-8">
                        <h3 className="font-playfair text-lg mb-4">Recommandation</h3>
                        <p className="text-sm text-text-secondary">
                            Nous conseillons une cartographie des options à froid, hors de toute pression transactionnelle, pour restaurer votre optionnalité.
                        </p>
                    </div>

                    <div className="flex justify-center">
                        <Button variant="primary" onClick={() => window.location.href = '/contact'}>
                            En discuter confidentiellement
                        </Button>
                    </div>
                </Card>
            </Section>
        );
    }

    const currentQuestion = QUESTIONS[step];
    const progress = ((step + 1) / QUESTIONS.length) * 100;

    return (
        <Section className="min-h-[70vh] flex flex-col items-center">
            <div className="max-w-xl w-full">
                {/* Progress Bar */}
                <div className="w-full bg-gray-200 h-1 rounded-full mb-12 overflow-hidden">
                    <div
                        className="bg-accent-blue h-full transition-all duration-500 ease-out"
                        style={{ width: `${progress}%` }}
                    />
                </div>

                <div className="mb-12">
                    <span className="text-xs uppercase tracking-widest text-gray-400 font-semibold">
                        Question {step + 1}/{QUESTIONS.length}
                    </span>
                    <h2 className="text-3xl font-playfair mt-4 leading-snug">
                        {currentQuestion.question}
                    </h2>
                </div>

                <div className="space-y-4">
                    {currentQuestion.options.map((option) => (
                        <button
                            key={option.value}
                            onClick={() => handleAnswer(option.value)}
                            className={`w-full text-left p-5 rounded-[var(--radius-button)] border transition-all duration-200 flex justify-between items-center group ${answers[currentQuestion.id] === option.value
                                    ? 'border-accent-blue bg-accent-blue/5 shadow-md'
                                    : 'border-gray-200 bg-white hover:border-accent-blue/50'
                                }`}
                        >
                            <span className={`font-medium ${answers[currentQuestion.id] === option.value ? 'text-accent-blue' : 'text-text-primary'
                                }`}>
                                {option.label}
                            </span>
                            <div className={`w-4 h-4 rounded-full border border-gray-300 flex items-center justify-center ${answers[currentQuestion.id] === option.value ? 'border-accent-blue' : ''
                                }`}>
                                {answers[currentQuestion.id] === option.value && (
                                    <div className="w-2 h-2 bg-accent-blue rounded-full" />
                                )}
                            </div>
                        </button>
                    ))}
                </div>

                <div className="flex justify-between mt-12">
                    <Button
                        variant="secondary"
                        onClick={prevStep}
                        disabled={step === 0}
                        className="opacity-50 hover:opacity-100 disabled:opacity-20 border-none px-0 hover:bg-transparent"
                    >
                        &larr; Précédent
                    </Button>
                    <Button
                        variant="primary"
                        onClick={nextStep}
                        disabled={!answers[currentQuestion.id]}
                    >
                        {step === QUESTIONS.length - 1 ? 'Voir les résultats' : 'Suivant'}
                    </Button>
                </div>
            </div>
        </Section>
    );
}
