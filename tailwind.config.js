/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        // Deep neutral base — lets warm interior imagery carry the color.
        ink: {
          DEFAULT: '#0B0B0C',
          deep: '#070708',
          card: '#131315',
          cardHi: '#191a1c',
        },
        // Peacock — the "Mayura" accent.
        peacock: {
          DEFAULT: '#0E7C7B',
          glow: '#2DD4BF',
          dim: '#0A5C5B',
        },
        // Warm brass, for hairlines and secondary accents.
        brass: {
          DEFAULT: '#C89B5A',
          dim: '#9A743E',
        },
        cream: {
          DEFAULT: '#F4EFE7',
          dim: '#A8A29A',
        },
      },
      fontFamily: {
        display: ['"Fraunces"', 'Georgia', 'serif'],
        sans: ['"Inter"', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        tightest: '-0.04em',
        tighter: '-0.03em',
      },
      animation: {
        // Ported from ~/projects/Carva/tailwind.config.js — the track is duplicated
        // x2 in markup, so translating -50% lands exactly on the seam.
        marquee: 'marquee var(--marquee-duration, 32s) linear infinite',
        'fade-up': 'fadeUp 1s cubic-bezier(0.22,1,0.36,1) both',
      },
      keyframes: {
        marquee: {
          from: { transform: 'translateX(0)' },
          to: { transform: 'translateX(-50%)' },
        },
        fadeUp: {
          from: { opacity: '0', transform: 'translateY(24px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
};
