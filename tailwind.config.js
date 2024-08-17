/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/public/fonts/*.ttf',
  ],
  theme: {
    extend: {
      colors: {
        'verde-oscuro': '#011F1B', // Reemplaza #ff0000 con tu código de color personalizado
        'verde-claro': '#008778', 
        'degrade-top': ' #FFFFFF22',
        'navbar-text': ' #919E9C',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}
