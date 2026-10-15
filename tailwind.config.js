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
        background: 'rgb(var(--bg-app) / <alpha-value>)',
        panel: {
          DEFAULT: 'rgb(var(--bg-panel) / <alpha-value>)',
          light: 'rgb(var(--bg-panel-light) / <alpha-value>)',
          lighter: 'rgb(var(--bg-panel-lighter) / <alpha-value>)',
          border: 'rgb(var(--border-color) / <alpha-value>)',
          hover: 'rgb(var(--bg-panel-hover) / <alpha-value>)'
        },
        brand: {
          DEFAULT: '#20C58B',
          hover: '#16A675',
          light: '#E8F8F1',
          surface: '#E8F8F1',
          glow: 'rgba(32, 197, 139, 0.15)',
          code: '#3563A9'
        },
        forge: {
          green: '#20C58B',
          'green-hover': '#16A675',
          'green-soft': '#E8F8F1',
          code: '#3563A9',
          dark: '#202630'
        },
        success: {
          DEFAULT: '#16A34A',
          light: '#20C58B',
          dark: '#15803D',
          glow: 'rgba(22, 163, 74, 0.15)',
          surface: '#E8F8F1'
        },
        danger: {
          DEFAULT: '#DC2626',
          light: '#EF4444',
          glow: 'rgba(220, 38, 38, 0.15)'
        },
        warning: {
          DEFAULT: '#D97706',
          light: '#F59E0B',
          glow: 'rgba(217, 119, 6, 0.15)'
        },
        text: {
          primary: 'rgb(var(--text-primary) / <alpha-value>)',
          secondary: 'rgb(var(--text-secondary) / <alpha-value>)',
          muted: 'rgb(var(--text-muted) / <alpha-value>)'
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
