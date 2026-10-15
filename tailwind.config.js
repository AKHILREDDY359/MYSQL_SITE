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
