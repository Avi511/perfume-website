import React from 'react';

const Button = ({ children, onClick, className = '', variant = 'black', ariaLabel, disabled = false }) => {
  const base = 'inline-flex items-center gap-3 rounded-full px-6 py-3 font-medium transition disabled:opacity-50 disabled:cursor-not-allowed';
  const styles = variant === 'black'
    ? 'bg-black text-white hover:opacity-90'
    : variant === 'outline'
      ? 'bg-transparent border border-gray-300 text-gray-800 hover:bg-gray-50'
      : 'bg-transparent border border-gray-300 text-gray-800 hover:bg-gray-50';

  return (
    <button
      aria-label={ariaLabel}
      onClick={onClick}
      className={`${base} ${styles} ${className}`}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;
