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
        background: 'var(--bg-app)',
        panel: {
          DEFAULT: 'var(--bg-panel)',
          light: 'var(--bg-panel-light)',
          lighter: 'var(--bg-panel-lighter)',
          border: 'var(--border-color)',
          hover: 'var(--bg-panel-hover)'
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
          primary: 'var(--text-primary)',
          secondary: 'var(--text-secondary)',
          muted: 'var(--text-muted)'
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
