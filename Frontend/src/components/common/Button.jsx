import React from 'react';

const Button = ({ children, onClick, className = "", type = "button" }) => {
    return (
        <button
            type={type}
            onClick={onClick}
            className={`
        relative overflow-hidden
        px-8 py-3 rounded-full
        text-white font-medium tracking-widest text-xs uppercase
        transition-all duration-500 ease-out
        glass-button
        hover:scale-105 active:scale-95
        group
        ${className}
      `}
        >
            <div className="absolute inset-x-0 top-0 h-px bg-white/20" />
            <div className="absolute inset-x-0 bottom-0 h-px bg-white/5" />

            <div className="absolute top-0 -inset-full h-full w-1/2 liquid-shimmer opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

            <span className="relative z-10 transition-shadow duration-500 group-hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.4)]">
                {children}
            </span>

            <div className="absolute inset-0 bg-gradient-to-b from-white/10 to-transparent pointer-events-none opacity-50" />
        </button>
    );
};

export default Button;
