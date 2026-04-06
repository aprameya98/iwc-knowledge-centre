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
        'brand-orange': '#E85C2C',
        'brand-teal': '#2CBFBF',
        'brand-green': '#4CAF7D',
        'bg-sidebar': '#0F0F0F',
        'bg-sidebar-hover': '#1A1A1A',
        'text-sidebar': '#9CA3AF',
        'border-subtle': '#E5E5E3',
      },
      fontFamily: {
        sans: ['var(--font-inter)', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
      },
      maxWidth: {
        'content': '720px',
        'toc': '200px',
      },
      width: {
        'sidebar': '260px',
      },
    },
  },
  plugins: [],
}

export default config
