import React from 'react';

interface SectionProps extends React.HTMLAttributes<HTMLElement> {
    children: React.ReactNode;
    fullWidth?: boolean;
    className?: string;
    id?: string;
}

export const Section: React.FC<SectionProps> = ({
    children,
    fullWidth = false,
    className = '',
    id,
    ...props
}) => {
    return (
        <section id={id} className={`py-20 md:py-32 ${className}`} {...props}>
            <div className={fullWidth ? 'w-full' : 'max-w-[var(--spacing-container)] mx-auto px-6 lg:px-8'}>
                {children}
            </div>
        </section>
    );
};
