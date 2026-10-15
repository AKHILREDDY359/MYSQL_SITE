/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        background: '#0B1020',
        panel: {
          DEFAULT: '#121A2B',
          light: '#182338',
          lighter: '#1E2C46',
          border: '#263449',
          hover: '#1B263B'
        },
        brand: {
          DEFAULT: '#4F8CFF',
          hover: '#3B72E2',
          glow: 'rgba(79, 140, 255, 0.15)'
        },
        success: {
          DEFAULT: '#22C55E',
          light: '#4ADE80',
          dark: '#16A34A',
          glow: 'rgba(34, 197, 94, 0.15)'
        },
        danger: {
          DEFAULT: '#EF4444',
          light: '#F87171',
          glow: 'rgba(239, 68, 68, 0.15)'
        },
        warning: {
          DEFAULT: '#F59E0B',
          light: '#FBBF24',
          glow: 'rgba(245, 158, 11, 0.15)'
        },
        text: {
          primary: '#E5E7EB',
          secondary: '#94A3B8',
          muted: '#64748B'
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'Menlo', 'Monaco', 'Courier New', 'monospace'],
      }
    },
  },
  plugins: [],
}
