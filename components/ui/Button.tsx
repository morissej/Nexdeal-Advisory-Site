import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'primary' | 'secondary';
    children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({
    variant = 'primary',
    children,
    className = '',
    ...props
}) => {
    // Base styles: deep blue primary, outline secondary
    const baseStyles = "inline-flex items-center justify-center rounded-[var(--radius-button)] px-6 py-3 font-medium transition-all duration-200 ease-out focus:outline-none focus:ring-2 focus:ring-accent-blue/50 disabled:opacity-50 disabled:cursor-not-allowed text-sm uppercase tracking-wide";

    const variants = {
        primary: "bg-accent-blue text-text-inverted hover:bg-accent-blue-light hover:shadow-lg",
        secondary: "bg-transparent border border-accent-blue text-accent-blue hover:bg-accent-blue hover:text-text-inverted",
    };

    return (
        <button
            className={`${baseStyles} ${variants[variant]} ${className}`}
            {...props}
        >
            {children}
        </button>
    );
};
