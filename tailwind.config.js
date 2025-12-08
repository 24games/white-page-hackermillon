/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'neon-green': '#00FF41',
        'neon-green-alt': '#39FF14',
        'dark-bg': '#050505',
        'dark-bg-alt': '#0a0a0a',
      },
      fontFamily: {
        'orbitron': ['Orbitron', 'sans-serif'],
        'space': ['Space Grotesk', 'sans-serif'],
        'inter': ['Inter', 'sans-serif'],
      },
      boxShadow: {
        'neon': '0 0 20px rgba(0, 255, 65, 0.5)',
        'neon-lg': '0 0 40px rgba(0, 255, 65, 0.6)',
      },
    },
  },
  plugins: [],
}




