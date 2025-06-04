import React from 'react';
import '../styles/buttons.css';

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  onClick?: () => void;
  className?: string;
  type?: 'button' | 'submit' | 'reset';
}

export const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  onClick,
  className = '',
  type = 'button',
}) => {
  const baseClasses = 'relative font-medium rounded-md transition-all focus:outline-none focus:ring-2 focus:ring-purple-500/50 overflow-hidden';
  
  const variantClasses = {
    primary: 'glow-button text-white',
    secondary: 'bg-gray-800 text-white hover:bg-gray-700',
    outline: 'bg-transparent border-2 border-purple-500 text-white hover:bg-purple-500/10',
  };
  
  const sizeClasses = {
    sm: 'px-3 py-1 text-sm',
    md: 'px-5 py-2',
    lg: 'px-8 py-3 text-lg',
  };
  
  return (
    <button
      type={type}
      onClick={onClick}
      className={`${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`}
    >
      {children}
    </button>
  );
};