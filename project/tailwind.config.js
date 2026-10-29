/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        espresso: {
          DEFAULT: '#241B19',
          50: '#F3EAE1',
          100: '#E4D4C6',
          200: '#C6AA96',
          300: '#A27C63',
          400: '#805944',
          500: '#63402F',
          600: '#482F25',
          700: '#34231D',
          800: '#241B19',
          900: '#18100E',
        },
        chocolate: {
          DEFAULT: '#51352A',
          dark: '#3A251E',
        },
        ivory: '#F7F2EA',
        milk: '#E6CFB7',
        taupe: '#B69C8A',
        champagne: '#C6A675',
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        sans: ['Manrope', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        hero: ['clamp(3rem, 8vw, 7.5rem)', { lineHeight: '0.98', letterSpacing: '-0.025em' }],
        display: ['clamp(2.4rem, 5vw, 4.5rem)', { lineHeight: '1.05', letterSpacing: '-0.015em' }],
        section: ['clamp(2.2rem, 4vw, 3.75rem)', { lineHeight: '1.05', letterSpacing: '-0.015em' }],
      },
      maxWidth: { editorial: '1320px' },
      letterSpacing: { eyebrow: '0.28em' },
      transitionTimingFunction: { editorial: 'cubic-bezier(0.22, 1, 0.36, 1)' },
      keyframes: {
        reveal: { '0%': { opacity: '0', transform: 'translateY(28px)' }, '100%': { opacity: '1', transform: 'translateY(0)' } },
        fadeIn: { '0%': { opacity: '0' }, '100%': { opacity: '1' } },
      },
      animation: {
        reveal: 'reveal 0.9s cubic-bezier(0.22, 1, 0.36, 1) both',
        fadeIn: 'fadeIn 0.4s ease-out both',
      },
    },
  },
  plugins: [],
};
