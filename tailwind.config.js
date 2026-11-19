/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'bg-primary': 'var(--bg-primary)',
        'bg-secondary': 'var(--bg-secondary)',
        'label-primary': 'var(--label-primary)',
        'label-secondary': 'var(--label-secondary)',
        'label-tertiary': 'var(--label-tertiary)',
        'accent-blue': 'var(--accent-blue)',
        'accent-red': 'var(--accent-red)',
        'fill-secondary': 'var(--fill-secondary)',
        'glass-fill': 'var(--glass-fill)',
        'glass-stroke': 'var(--glass-stroke)',
      },
      fontFamily: {
        sans: [
          'SF Pro Text',
          'SF Pro',
          '-apple-system',
          'BlinkMacSystemFont',
          'Segoe UI',
          'system-ui',
          'sans-serif',
        ],
      },
    },
  },
  plugins: [],
}
