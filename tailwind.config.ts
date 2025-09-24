import type { Config } from "tailwindcss";

const config: Config = {
    darkMode: ["class"],
    content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
  	extend: {
  		fontFamily: {
  			'space': ['Space Grotesk', 'sans-serif'],
  			'inter': ['Inter', 'sans-serif'],
  		},
  		colors: {
  			// Quantum Finance Palette
  			quantum: {
  				dark: '#0B0F14',
  				slate: '#0F172A',
  				gray: '#111827',
  				cyan: '#22D3EE',
  				violet: '#C084FC',
  				lime: '#C3FF5E',
  				border: '#94A3B8',
  			},
  			background: 'hsl(var(--background))',
  			foreground: 'hsl(var(--foreground))',
  			card: {
  				DEFAULT: 'hsl(var(--card))',
  				foreground: 'hsl(var(--card-foreground))'
  			},
  			popover: {
  				DEFAULT: 'hsl(var(--popover))',
  				foreground: 'hsl(var(--popover-foreground))'
  			},
  			primary: {
  				DEFAULT: 'hsl(var(--primary))',
  				foreground: 'hsl(var(--primary-foreground))'
  			},
  			secondary: {
  				DEFAULT: 'hsl(var(--secondary))',
  				foreground: 'hsl(var(--secondary-foreground))'
  			},
  			muted: {
  				DEFAULT: 'hsl(var(--muted))',
  				foreground: 'hsl(var(--muted-foreground))'
  			},
  			accent: {
  				DEFAULT: 'hsl(var(--accent))',
  				foreground: 'hsl(var(--accent-foreground))'
  			},
  			destructive: {
  				DEFAULT: 'hsl(var(--destructive))',
  				foreground: 'hsl(var(--destructive-foreground))'
  			},
  			border: 'hsl(var(--border))',
  			input: 'hsl(var(--input))',
  			ring: 'hsl(var(--ring))',
  			chart: {
  				'1': 'hsl(var(--chart-1))',
  				'2': 'hsl(var(--chart-2))',
  				'3': 'hsl(var(--chart-3))',
  				'4': 'hsl(var(--chart-4))',
  				'5': 'hsl(var(--chart-5))'
  			}
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		},
  		animation: {
  			'orbit': 'orbit 24s linear infinite',
  			'pulse-glow': 'pulse-glow 4s ease-in-out infinite',
  			'float': 'float 6s ease-in-out infinite',
  		},
  		keyframes: {
  			orbit: {
  				'0%': { transform: 'rotate(0deg) translateX(260px) rotate(0deg)' },
  				'100%': { transform: 'rotate(360deg) translateX(260px) rotate(-360deg)' },
  			},
  			'pulse-glow': {
  				'0%, 100%': { 
  					boxShadow: '0 0 60px rgba(34, 211, 238, 0.35)',
  					transform: 'scale(1)'
  				},
  				'50%': { 
  					boxShadow: '0 0 120px rgba(192, 132, 252, 0.45)',
  					transform: 'scale(1.05)'
  				},
  			},
  			float: {
  				'0%, 100%': { transform: 'translateY(0px)' },
  				'50%': { transform: 'translateY(-10px)' },
  			},
  		}
  	}
  },
  plugins: [require("tailwindcss-animate")],
};
export default config;
