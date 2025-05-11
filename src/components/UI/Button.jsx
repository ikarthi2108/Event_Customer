import React from 'react';
import { useTheme } from '../../context/ThemeContext';

const Button = ({ 
  children, 
  variant = 'primary', 
  fullWidth = false, 
  rounded = false,
  type = 'button',
  onClick,
  className = '',
  ...props 
}) => {
  const { darkMode } = useTheme();
  
  const baseClasses = "flex items-center justify-center transition-colors duration-300";
  const sizeClasses = "px-4 py-2";
  const widthClasses = fullWidth ? "w-full" : "";
  const roundedClasses = rounded ? "rounded-full" : "rounded-md";
  
  const variantClasses = {
    primary: `${darkMode ? 'bg-emerald-600 hover:bg-emerald-700' : 'bg-emerald-700 hover:bg-emerald-800'} text-white`,
    secondary: `bg-emerald-600 hover:bg-emerald-700 text-white`,
    outline: `${darkMode ? 'border-emerald-400 text-emerald-400 hover:bg-emerald-400/10' : 'border-emerald-700 text-emerald-700 hover:bg-emerald-700/10'} border`,
    text: `${darkMode ? 'text-emerald-400 hover:text-emerald-300' : 'text-emerald-700 hover:text-emerald-800'}`
  };
  
  return (
    <button
      type={type}
      className={`${baseClasses} ${sizeClasses} ${widthClasses} ${roundedClasses} ${variantClasses[variant]} ${className}`}
      onClick={onClick}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;