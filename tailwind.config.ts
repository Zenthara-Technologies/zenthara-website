import type { Config } from 'tailwindcss'

const config: Config = {
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
          DEFAULT: '#8B5CF6', // Violet-500
          dark: '#7C3AED',    // Violet-600
          light: '#A78BFA',   // Violet-400
          glow: '#C4B5FD',    // Violet-300
        },
        accent: {
          cyan: '#06B6D4',    // Cyan-500
          teal: '#14B8A6',    // Teal-500
          pink: '#EC4899',    // Pink-500
        },
        dark: {
          900: '#0F172A',     // Slate-900 (Deep Background)
          800: '#1E293B',     // Slate-800 (Card Background)
          700: '#334155',     // Slate-700 (Border)
        }
      },
      boxShadow: {
        card: '0 8px 32px rgba(0, 0, 0, 0.08)',
        'card-hover': '0 12px 48px rgba(124, 58, 237, 0.15)',
        glow: '0 0 20px rgba(139, 92, 246, 0.5)',
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

