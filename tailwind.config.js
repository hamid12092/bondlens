/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#fff1f2',
          100: '#ffe4e6',
          500: '#FF6B8B',
          600: '#e55b7a',
          700: '#cc4d69',
          900: '#881337'
        },
        secondary: {
          50: '#f0fdfa',
          100: '#ccfbf1',
          500: '#4ECDC4',
          600: '#45b7b8',
          700: '#3ca1a3',
          900: '#134e4a'
        },
        dark: {
          primary: '#1A1A2E',
          secondary: '#16213E',
          accent: '#0F3460'
        }
      },
      fontFamily: {
        'display': ['Inter', 'system-ui', 'sans-serif'],
        'body': ['Inter', 'system-ui', 'sans-serif']
      },
      animation: {
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'heartbeat': 'heartbeat 1.5s ease-in-out infinite',
        'float': 'float 6s ease-in-out infinite',
        'glow': 'glow 2s ease-in-out infinite alternate'
      },
      keyframes: {
        heartbeat: {
          '0%, 100%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.1)' }
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' }
        },
        glow: {
          '0%': { boxShadow: '0 0 5px rgba(255, 107, 139, 0.5)' },
          '100%': { boxShadow: '0 0 20px rgba(255, 107, 139, 0.8)' }
        }
      },
      backdropBlur: {
        'xs': '2px'
      }
    },
  },
  plugins: [],
};