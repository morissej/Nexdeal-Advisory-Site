import React from 'react';

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
    children: React.ReactNode;
}

export const Card: React.FC<CardProps> = ({
    children,
    className = '',
    ...props
}) => {
    return (
        <div
            className={`bg-background-secondary border border-gray-100 rounded-[var(--radius-card)] p-8 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 ${className}`}
            {...props}
        >
            {children}
        </div>
    );
};
