import React from 'react';
import { LucideProps } from 'lucide-react';

interface IconProps extends LucideProps {
    icon: React.ElementType; // more flexible than ComponentType
}

export const Icon: React.FC<IconProps> = ({
    icon: IconComponent,
    className = '',
    strokeWidth = 1.5,
    ...props
}) => {
    return (
        <IconComponent
            strokeWidth={strokeWidth}
            className={`text-inherit ${className}`}
            {...props}
        />
    );
};
