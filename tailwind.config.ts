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
          DEFAULT: '#6D28D9',
          dark: '#4C1D95',
          light: '#A78BFA'
        }
      },
      boxShadow: {
        card: '0 10px 30px rgba(0,0,0,0.08)'
      },
      backgroundImage: {
        'hero-gradient': 'radial-gradient(1200px 600px at 80% -10%, rgba(167,139,250,0.35), transparent), radial-gradient(800px 400px at 10% -10%, rgba(59,130,246,0.25), transparent)'
      }
    },
  },
  plugins: [],
}

export default config

