/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        wiggle: {
          '0%': { transform: 'skewX(24deg)' },
          '10%': { transform: 'skewX(-8deg)' },
          '20%': { transform: 'skewX(55deg)' },
          '30%': { transform: 'skewX(-90deg)' },
          '40%': { transform: 'skewX(29deg)' },
          '50%': { transform: 'skewX(-90deg)' },
          '60%': { transform: 'skewX(3deg)' },
          '70%': { transform: 'skewX(-2deg)' },
          '80%': { transform: 'skewX(1deg)' },
          '90%': { transform: 'skewX(10deg)' },
          '100%': { transform: 'skewX(0deg)' },
        },

        glitch: {
          '0%':   { transform: 'translate(0, 0)' },
          '20%':  { transform: 'translate(-1px, 1px)' },
          '40%':  { transform: 'translate(1px, -1px)' },
          '60%':  { transform: 'translate(-1px, -1px)' },
          '80%':  { transform: 'translate(1px, 1px)' },
          '100%': { transform: 'translate(0, 0)' },
        },
      },
      animation:{
        wiggle: 'wiggle 0.4s ease-in-out',
        glitch: 'glitch 0.3s ease-in-out',
      },
      colors: {
        cyber: {  
          bg: '#0b0f1a',
          card: '#111827',
          border: '#1e293b',
          muted: '#64748b',
        },
        neon: {
          cyan: '#22d3ee',
          teal: '#2dd4bf',
          fuchsia: '#c084fc',
          violet: '#a78bfa',
          magenta: '#ff008d',
        },
      },
      boxShadow: {
        'glow-white': '0 0 7px rgba(255, 255, 255, 1)',
        'glow-cyan': '0 0 20px rgba(34, 211, 238, 0.35)',
        'glow-teal': '0 0 20px rgba(45, 212, 191, 0.35)',
        'glow-fuchsia': '0 0 20px rgba(192, 132, 252, 0.3)',
        'glow-cyan-sm': '0 0 12px rgba(34, 211, 238, 0.4)',
      },
    },
  },
  plugins: [],
}
