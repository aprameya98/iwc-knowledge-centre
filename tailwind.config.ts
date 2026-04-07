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
        'brand-orange':     '#f1592b',
        'brand-teal':       '#3ac0c5',
        'brand-green-dark': '#1E534B',
        'brand-green-light':'#78c367',
        'brand-gray-dark':  '#434343',
        'brand-gray-light': '#999999',
      },
      fontFamily: {
        sans:  ["'Helvetica Neue'", 'Helvetica', 'Arial', 'sans-serif'],
      },
      width:    { 'sidebar': '260px' },
      maxWidth: { 'content': '720px', 'toc': '200px' },
    },
  },
  plugins: [],
}

export default config
