import plugin from 'tailwindcss/plugin';

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      width: {
        'readmorewidth': '900px',
      },
      height: {
        'readmoreheight': '500px',
        'height1' : '700px',
        'height2' : '370px'
      },
      maxHeight:{
        'height1' : '700px',
      },
      fontFamily: {
        grotesk: ["Familjen Grotesk"],
        inter: ['Inter', 'sans-serif'],
      },
      keyframes: {
        vibrateZigzag: {
          '0%': { transform: 'translate(0, 0) rotate(0)' },
          '10%': { transform: 'translate(-2px, -1px) rotate(-2deg)' },
          '20%': { transform: 'translate(2px, 1px) rotate(2deg)' },
          '30%': { transform: 'translate(-1px, 2px) rotate(-1deg)' },
          '40%': { transform: 'translate(1px, -2px) rotate(1deg)' },
          '50%': { transform: 'translate(-1px, -1px) rotate(-1deg)' },
          '60%': { transform: 'translate(1px, 1px) rotate(1deg)' },
          '70%': { transform: 'translate(0, -1px) rotate(0)' },
          '80%': { transform: 'translate(-2px, 1px) rotate(-2deg)' },
          '90%': { transform: 'translate(2px, -1px) rotate(2deg)' },
          '100%': { transform: 'translate(0, 0) rotate(0)' },
        },
        slideIn: {
          '0%': { transform: 'translateX(100%)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
        slideOut: {
          '0%': { transform: 'translateX(0)', opacity: '1' },
          '100%': { transform: 'translateX(100%)', opacity: '0' },
        },
      },
      animation: {
        vibrateZigzag: 'vibrateZigzag 1s infinite linear',
        'slide-in': 'slideIn 0.7s ease-out forwards',
        'slide-out': 'slideOut 0.7s ease-in forwards', 
      },
      perspective: {
        DEFAULT: '1000px',
      },
      transformOrigin: {
        'center': 'center',
      },
      rotate: {
        "180": "180deg",
      },
    },
  },
  plugins: [
    plugin(({ addUtilities }) => {
      addUtilities({
        '.perspective': {
          perspective: '1000px',
        },
        '.backface-hidden': {
          backfaceVisibility: 'hidden',
        },
        '.rotate-y-180': {
          transform: 'rotateY(180deg)',
        },
        '.transform-style-preserve-3d': {
          transformStyle: 'preserve-3d',
        },
      });
    }),
  ],
};
