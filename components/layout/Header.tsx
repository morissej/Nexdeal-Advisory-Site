'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/Button';

const NAV_ITEMS = [
    { label: 'Accueil', href: '/' },
    { label: 'Notre approche', href: '/services' },
    { label: 'Sparring Partner', href: '/sparring-partner' },
    { label: 'Bodyguard', href: '/bodyguard' },
    { label: 'CEOs Painpoints', href: '/pain-points' },
    { label: 'Équipe', href: '/team' },
];

export const Header: React.FC = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const pathname = usePathname();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        setMobileMenuOpen(false);
    }, [pathname]);

    return (
        <header
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white/90 backdrop-blur-md shadow-sm py-2' : 'bg-transparent py-6'
                }`}
        >
            <div className="max-w-[var(--spacing-container)] mx-auto px-6 lg:px-8 flex items-center justify-between">
                <nav className="hidden md:flex items-center gap-8">
                    {NAV_ITEMS.map((item) => (
                        <Link
                            key={item.href}
                            href={item.href}
                            className={`text-sm tracking-wide transition-colors ${pathname === item.href ? 'text-accent-blue font-medium' : 'text-text-secondary hover:text-accent-blue'
                                }`}
                        >
                            {item.label}
                        </Link>
                    ))}
                    <Link href="/contact">
                        <Button variant="secondary" className="px-5 py-2 text-xs">
                            Contact
                        </Button>
                    </Link>
                </nav>

                <Link href="/" className="relative z-50">
                    <Image
                        src="/images/logo-main.png"
                        alt="NexDeal Advisory"
                        width={750}
                        height={180}
                        className={`w-auto object-contain transition-all duration-300 ${isScrolled ? 'h-40' : 'h-60'}`}
                        priority
                    />
                </Link>

                <button
                    className="md:hidden relative z-50 text-text-primary"
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                >
                    {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>

                {/* Mobile Menu Overlay */}
                <div className={`fixed inset-0 bg-background-primary z-40 flex flex-col items-center justify-center transition-opacity duration-300 md:hidden ${mobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
                    }`}>
                    <nav className="flex flex-col items-center gap-8 text-center">
                        {NAV_ITEMS.map((item) => (
                            <Link
                                key={item.href}
                                href={item.href}
                                className="text-2xl font-light font-playfair text-text-primary"
                                onClick={() => setMobileMenuOpen(false)}
                            >
                                {item.label}
                            </Link>
                        ))}
                        <Link href="/contact" onClick={() => setMobileMenuOpen(false)}>
                            <Button variant="primary" className="mt-4">
                                Contact
                            </Button>
                        </Link>
                    </nav>
                </div>
            </div>
        </header>
    );
};
