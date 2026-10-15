import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: '#0A0D0C',
        surface: {
          DEFAULT: '#121715',
          elevated: '#171E1B',
          card: '#1A211E',
          border: 'rgba(255, 255, 255, 0.08)',
        },
        // Rojo característico Frontera 49 (#981A15)
        brand: {
          red: '#981A15',
          'red-hover': '#B8241D',
          'red-light': '#D43028',
          'red-dark': '#70100C',
          'red-tint': 'rgba(152, 26, 21, 0.15)',
        },
        frontera: {
          red: '#981A15',
          redHover: '#B8241D',
        },
        gold: {
          50: '#FBF9F6',
          100: '#F4EFEA',
          200: '#E5DACB',
          300: '#D6C7B4',
          400: '#C5B49F',
          500: '#B09C84',
          600: '#958169',
        },
        sand: '#C5B49F',
        editorial: {
          light: '#F4F5F1',
          muted: '#8E9B93',
          dark: '#5A6660',
        },
      },
      fontFamily: {
        display: ['var(--font-space-grotesk)', 'system-ui', 'sans-serif'],
        sans: ['var(--font-raleway)', 'system-ui', 'sans-serif'],
        cinzel: ['var(--font-cinzel)', 'Cinzel', 'serif'],
      },
      boxShadow: {
        'glow-red': '0 0 25px rgba(152, 26, 21, 0.45)',
        'glow-red-lg': '0 0 45px rgba(152, 26, 21, 0.6)',
        'glow-gold': '0 0 25px rgba(197, 180, 159, 0.15)',
      },
    },
  },
  plugins: [],
};

export default config;
