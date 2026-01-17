export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        serif: ['Playfair Display', 'serif'],
      },
      animation: {
        'puff-slow': 'puff 8s ease-in-out infinite',
        'puff-medium': 'puffSlow 12s ease-in-out infinite',
        'puff-slower': 'puff 15s ease-in-out infinite',
        'puff-medium-delay': 'puffMedium 10s ease-in-out 2s infinite',
        'marquee': 'marquee 20s linear infinite',
        'marquee-slow': 'marquee 30s linear infinite',
        'marquee-fast': 'marquee 15s linear infinite',
      },
      keyframes: {
        puff: {
          '0%, 100%': {
            transform: 'translate(0, 0) scale(1)',
            opacity: '0.3'
          },
          '25%': {
            transform: 'translate(10px, -15px) scale(1.1)',
            opacity: '0.4'
          },
          '50%': {
            transform: 'translate(-5px, 10px) scale(0.9)',
            opacity: '0.2'
          },
          '75%': {
            transform: 'translate(15px, 5px) scale(1.05)',
            opacity: '0.35'
          },
        },
        puffSlow: {
          '0%, 100%': {
            transform: 'translate(0, 0) scale(1)',
            opacity: '0.2'
          },
          '33%': {
            transform: 'translate(-8px, 12px) scale(1.15)',
            opacity: '0.3'
          },
          '66%': {
            transform: 'translate(12px, -8px) scale(0.85)',
            opacity: '0.15'
          },
        },
        puffMedium: {
          '0%, 100%': {
            transform: 'translate(0, 0) scale(1)',
            opacity: '0.25'
          },
          '50%': {
            transform: 'translate(15px, -10px) scale(1.2)',
            opacity: '0.35'
          },
        },
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' }
        }
      }
    },
  },
  plugins: [],
}