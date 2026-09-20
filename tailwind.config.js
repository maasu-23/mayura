/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        // Off-white base + near-black ink, light theme
        paper: {
          DEFAULT: '#F8F8F6',
          dim: '#F0F0EE',
          hi: '#FFFFFF',
        },
        ink: {
          DEFAULT: '#111111',
          dim: '#555555',
          faint: '#999999',
        },
        line: {
          DEFAULT: '#E5E5E5',
          dim: '#D4D4D4',
        },
        // Peacock — the Mayura accent. Moss/emerald green.
        peacock: {
          DEFAULT: '#2F6B4F',
          glow: '#4ADE94',
          dim: '#1F4A38',
        },
        // Warm brass, for hairlines and secondary accents.
        brass: {
          DEFAULT: '#C89B5A',
          dim: '#9A743E',
        },
      },
      fontFamily: {
        sans: ['"Space Grotesk"', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'monospace'],
      },
    },
  },
  plugins: [],
}
