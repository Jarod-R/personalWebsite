import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        //'grid-pattern': `radial-gradient(#94a3b8 1.5px, transparent 1.5px)`, // Darker dots and slightly larger
        //'noise-pattern': `url("data:image/svg+xml,%3Csvg viewBox='0 0 300 300' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='0.5'/%3E%3C/svg%3E")`,
        //'topo-pattern': `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 0c50 0 50 20 100 20V0H0zM0 40c50 0 50 20 100 20V40H0zM0 80c50 0 50 20 100 20V80H0z' fill-opacity='0.1'/%3E%3C/svg%3E")`,
        'diagonal-pattern': 'repeating-linear-gradient(45deg, #6366f1 0, #6366f1 1px, transparent 0, transparent 50%), repeating-linear-gradient(-45deg, #6366f1 0, #6366f1 1px, transparent 0, transparent 50%), repeating-linear-gradient(60deg, #6366f1 0, #6366f1 1px, transparent 0, transparent 50%)',
        // 'line-pattern': 'linear-gradient(to right, #94a3b8 1px, transparent 1px)',

      },
      backgroundSize: {
        // 'grid': '20px 20px',
        'line': '100px 10%', //for line-pattern
      },
      colors: {
        // Keep your existing color variables
        background: "var(--background)",
        foreground: "var(--foreground)",
        
        // Add the new color palettes
        sage: {
          50: '#f6f7f6',
          100: '#e3e5e3',
          200: '#c7ccc7',
          300: '#a5aea5',
          400: '#848d84',
          500: '#6b746b',
          600: '#555d55',
          700: '#454945',
          800: '#383c38',
          900: '#2f322f',
        },
        slate: {
          50: '#f8fafc',
          100: '#f1f5f9',
          200: '#e2e8f0',
          300: '#cbd5e1',
          400: '#94a3b8',
          500: '#64748b',
          600: '#475569',
          700: '#334155',
          800: '#1e293b',
          900: '#0f172a',
        }
      },
    },
  },
  plugins: [],
} satisfies Config;
