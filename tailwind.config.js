/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        unbounded: ['Unbounded', 'cursive'],
        spartan: ['League Spartan', 'sans-serif'],
      },
      // Aapke diye gaye 6 colors yahan add kar diye hain
      colors: {
        brandGold: '#e1b054',
        brandPink: '#d24a8a',
        brandRed: '#ee3444',
        brandBlue: '#75b0d2',
        brandPurple: '#7361a7',
        brandCoral: '#f1574d',
      },
      // Floating animation ko config mein daal diya taake "animate-float" kaam kare
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        }
      },
      animation: {
        float: 'float 4s ease-in-out infinite',
      }
    },
  },
  plugins: [],
}