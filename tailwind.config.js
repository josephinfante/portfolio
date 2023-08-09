/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#190082',
        primaryLight: '#7340E6',
        hoverPrimary: '#33338F',
        hoverPrimaryLight: '#8C70FD',
        secondary: '#29ABE2',
        gray: '#666666',
        color: '#000000',
        darkColor: '#ffffff',
        background: '#ffffff',
        darkBackground: '#0D0D0D',
      },
      screens: {
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
        '2xl': '1536px',
      }
    },
  },
  plugins: [],
}

