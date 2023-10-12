/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'gradient-dark': 'linear-gradient(28deg, #000 25.27%, #646464 146.89%)'
      },
      fontFamily: {
        poppins: ['"Poppins"']
      },
      boxShadow: {
        input:
          '0px 3px 6px 0px rgba(0, 0, 0, 0.07), 0px 11px 11px 0px rgba(0, 0, 0, 0.06), 0px 25px 15px 0px rgba(0, 0, 0, 0.03), 0px 0px 18px 0px rgba(0, 0, 0, 0.01), 0px 0px 20px 0px rgba(0, 0, 0, 0.00)'
      },
      colors: {
        gray: {
          light: '#F1F1F1',
          dark: '#1C1C1C'
        }
      }
    }
  },
  plugins: []
}
