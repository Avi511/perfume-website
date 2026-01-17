import React from 'react';

const Button = ({ 
  variant = 'default', 
  children, 
  className = '', 
  ...props 
}) => {
  const baseStyles = 'px-6 py-3 rounded-full font-semibold transition-all duration-300 inline-flex items-center gap-2';
  
  const variantStyles = {
    black: 'bg-black text-white hover:bg-gray-800',
    outline: 'border-2 border-black text-black hover:bg-black hover:text-white',
    default: 'bg-gray-900 text-white hover:bg-gray-800'
  };

  return (
    <button 
      className={`${baseStyles} ${variantStyles[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
