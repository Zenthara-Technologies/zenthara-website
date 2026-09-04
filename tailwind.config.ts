import type { Config } from 'tailwindcss'

const config: Config = {
  darkMode: 'class',
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/content/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: '#6366F1', // Indigo-500
          dark: '#4F46E5',    // Indigo-600
          light: '#818CF8',   // Indigo-400
          glow: '#A5B4FC',    // Indigo-300
        },
        accent: {
          emerald: '#10B981', // Emerald-500
          teal: '#14B8A6',    // Teal-500
          amber: '#F59E0B',   // Amber-500
        },
        dark: {
          900: '#0B1120',     // Deep background
          800: '#141B2E',     // Card / surface background
          700: '#293449',     // Border
        }
      },
      boxShadow: {
        card: '0 8px 32px rgba(0, 0, 0, 0.08)',
        'card-hover': '0 12px 48px rgba(79, 70, 229, 0.15)',
        glow: '0 0 20px rgba(99, 102, 241, 0.5)',
      },
      backgroundImage: {
        'hero-gradient': 'radial-gradient(ellipse at top, #1e1b4b, #0f172a)',
        'glass': 'linear-gradient(180deg, rgba(255, 255, 255, 0.05) 0%, rgba(255, 255, 255, 0.02) 100%)',
      },
      animation: {
        'fade-up': 'fade-up 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'fade-in': 'fade-in 0.6s ease-out forwards',
        'pulse-glow': 'pulse-glow 4s infinite alternate',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        'pulse-glow': {
          '0%': { opacity: '0.4', filter: 'blur(20px)' },
          '100%': { opacity: '0.8', filter: 'blur(25px)' },
        },
        'float': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        }
      }
    },
  },
  plugins: [],
}

export default config

