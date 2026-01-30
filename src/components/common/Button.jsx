import React from 'react';

const Button = ({ 
  variant = 'default', 
  children, 
  className = '', 
  ...props 
}) => {
  const baseStyles = 'px-6 py-3 rounded-full font-semibold transition-all duration-300 inline-flex items-center gap-2';
  
  const variantStyles = {
    black: 'bg-[#850E35] text-white hover:bg-[#6D0A2A]',
    outline: 'border-2 border-[#850E35] text-[#850E35] hover:bg-[#850E35] hover:text-white',
    default: 'bg-[#850E35] text-white hover:bg-[#6D0A2A]'
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
