import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'light-teal': '#7AB4A8',
        'dark-teal': '#4EA292',
        'dark-grey': '#C0C1B3',
        'sand': '#E1CEA6',
        'light-grey': '#E5E8E1',
        'sand-light': '#EDDDC3',
        'background': 'var(--background)',
      },
      fontSize: {
        // H1: Base size with 86.4px line height
        h1: ['96px', { lineHeight: '86.4px', letterSpacing: '-0.02em' }],
        'h1-md': ['72px', { lineHeight: '64.8px', letterSpacing: '-0.02em' }],  // 75% of base
        'h1-sm': ['48px', { lineHeight: '43.2px', letterSpacing: '-0.02em' }],  // 50% of base
        
        // H2: ~75% of H1
        h2: ['72px', { lineHeight: '64.8px', letterSpacing: '-0.02em' }],
        'h2-md': ['54px', { lineHeight: '48.6px', letterSpacing: '-0.02em' }],
        'h2-sm': ['36px', { lineHeight: '32.4px', letterSpacing: '-0.02em' }],
        
        // H3: ~60% of H1
        h3: ['54px', { lineHeight: '51.84px', letterSpacing: '-0.02em' }],
        'h3-md': ['40px', { lineHeight: '38.88px', letterSpacing: '-0.02em' }],
        'h3-sm': ['28px', { lineHeight: '25.92px', letterSpacing: '-0.02em' }],
        
        // H4: ~45% of H1
        h4: ['36px', { lineHeight: '38.88px', letterSpacing: '-0.02em' }],
        'h4-md': ['28px', { lineHeight: '29.16px', letterSpacing: '-0.02em' }],
        'h4-sm': ['24px', { lineHeight: '22.44px', letterSpacing: '-0.02em' }],
        
        // Paragraph: ~25% of H1 line height
        p: ['21px', { lineHeight: '22.6px' }],
      },
      fontFamily: {
        korolev: ['korolev-condensed', 'sans-serif'],
        proxima: ['proxima-nova', 'sans-serif'],
        poppins: ['var(--font-poppins)', 'sans-serif'],
      },
      keyframes: {
        panZoom: {
          '0%': { transform: 'scale(1) translate(0, 0)' },
          '100%': { transform: 'scale(2) translate(-10%, 10%)' }
        },
        ping: {
          '75%, 100%': {
            transform: 'scale(1.5)',
            opacity: '0',
          },
        },
      },
      animation: {
        'panZoom': 'panZoom 10s ease-in-out infinite alternate',
        'scrollX': 'scrollX 20s linear infinite',
        'ping': 'ping 1.5s cubic-bezier(0, 0, 0.2, 1) infinite',
      },
    },
  },
  plugins: [],
} satisfies Config;
