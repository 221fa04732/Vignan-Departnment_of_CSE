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
      },
      animation: {
        vibrateZigzag: 'vibrateZigzag 1s infinite linear',
      },
      perspective: {
        DEFAULT: '1000px',
      },
      transformOrigin: {
        'center': 'center',
      },
    },
  },
  plugins: [
    require('tailwindcss/plugin')(({ addUtilities }) => {
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
