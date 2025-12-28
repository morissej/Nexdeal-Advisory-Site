'use client';

import { ChevronDown } from 'lucide-react';
import { Icon } from '@/components/ui/Icon';

export const ScrollDownButton = () => {
    return (
        <div
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce text-accent-blue/50 cursor-pointer hover:text-accent-blue transition-colors"
            onClick={() => {
                document.getElementById('philosophy-section')?.scrollIntoView({ behavior: 'smooth' });
            }}
        >
            <Icon icon={ChevronDown} size={32} />
        </div>
    );
};
