/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': 'rgba(255, 255, 255, 1)',
        'secondary': 'rgba(122, 178, 66, 1)',
        'third': 'rgba(45, 120, 108, 1)',
        'fourth': 'rgba(144, 169, 85, 1)',
        'danger': '#dc3545',
        'warning': '#ffc107',
        'info': '#0dcaf0',
        'light': '#f8f9fa',
        'dark': '#212529',
      },
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif'],
      },
      keyframes: { 
        'fade-in-right': 
        { '0%': { opacity: '0', transform: 'translateX(100%)' }, 
        '100%': { opacity: '1', transform: 'translateX(0)' }, 
        }, 
        'fade-in-left': 
        { '0%': { opacity: '0', transform: 'translateX(-100%)' }, 
        '100%': { opacity: '1', transform: 'translateX(0)' }, 
      }, 
      }, 
      animation: { 
        'fade-in-right': 'fade-in-right 1s ease-in-out', 
        'fade-in-left': 'fade-in-left 1s ease-in-out', 
      },
    },
  },
  plugins: [
  ],
}

