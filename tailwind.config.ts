import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#0066CC',
        secondary: '#00A86B',
        accent: '#FF6B35',
        dark: '#1a1a2e',
      },
      backgroundImage: {
        'gradient-primary': 'linear-gradient(135deg, #0066CC 0%, #00A86B 100%)',
        'gradient-accent': 'linear-gradient(135deg, #FF6B35 0%, #0066CC 100%)',
        'gradient-dark': 'linear-gradient(135deg, #1a1a2e 0%, #16213e 100%)',
      },
    },
  },
  plugins: [],
}
export default config
