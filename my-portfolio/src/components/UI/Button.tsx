import type { ReactNode } from 'react';

interface ButtonProps {
    title?: string;
    children?: ReactNode;
    onClick?: () => void;
    variant?: 'primary' | 'secondary';
    className?: string;
    type?: 'button' | 'submit';
}

const variantStyles = {
    primary: 'bg-yellow-400 text-black hover:bg-yellow-300 border border-transparent hover:-translate-y-1',
    secondary: 'bg-transparent text-yellow-400 border border-yellow-400 hover:bg-yellow-300 hover:text-black hover:-translate-y-1',
};

export default function Button({
    title,
    children,
    onClick,
    variant = 'primary',
    className = '',
    type = 'button',
}: ButtonProps) {
    return (
        <button
            type={type}
            onClick={onClick}
            className={`rounded-xl px-5 py-2 font-semibold transition-all duration-200 active:scale-95 ${variantStyles[variant]} ${className}`}
        >
            {children ?? title}
        </button>
    )
}