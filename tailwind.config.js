/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/components/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			colors: {
				border: '#e5e7eb',
				input: '#e5e7eb',
				ring: '#3b82f6',
				background: '#ffffff',
				foreground: '#111827',
				primary: "#2563eb",
				secondary: "#60a5fa",
				destructive: {
					DEFAULT: '#ef4444',
					foreground: '#ffffff'
				},
				muted: {
					DEFAULT: '#f3f4f6',
					foreground: '#6b7280'
				},
				accent: {
					DEFAULT: '#60a5fa',
					dark: '#3b82f6',
					light: '#93c5fd',
				},
				popover: {
					DEFAULT: '#ffffff',
					foreground: '#111827'
				},
				card: {
					DEFAULT: '#ffffff',
					foreground: '#111827'
				},
				sidebar: {
					DEFAULT: '#1f2937',
					foreground: '#ffffff',
					primary: '#3b82f6',
					'primary-foreground': '#ffffff',
					accent: '#60a5fa',
					'accent-foreground': '#ffffff',
					border: '#374151',
					ring: '#3b82f6'
				},
				portfolio: {
					blue: '#1e90ff',
					lightBlue: '#87cefa',
					darkBlue: '#0047ab',
					instagram: '#E1306C',
					github: '#171515',
					linkedin: '#0077B5',
					discord: '#5865F2',
				},
				text: "#222",
			},
			borderRadius: {
				lg: '0.5rem',
				md: '0.375rem',
				sm: '0.25rem'
			},
			fontFamily: {
				sans: ['Inter', 'sans-serif'],
				poppins: ['Poppins', 'sans-serif'],
			},
			keyframes: {
				'accordion-down': {
					from: {
						height: '0'
					},
					to: {
						height: 'var(--radix-accordion-content-height)'
					}
				},
				'accordion-up': {
					from: {
						height: 'var(--radix-accordion-content-height)'
					},
					to: {
						height: '0'
					}
				},
				'fade-in': {
					'0%': { opacity: '0', transform: 'translateY(10px)' },
					'100%': { opacity: '1', transform: 'translateY(0)' },
				},
				'fade-out': {
					'0%': { opacity: '1', transform: 'translateY(0)' },
					'100%': { opacity: '0', transform: 'translateY(10px)' },
				},
				'scale-in': {
					'0%': {
						transform: 'scale(0.95)',
						opacity: '0'
					},
					'100%': {
						transform: 'scale(1)',
						opacity: '1'
					}
				},
				'slide-in': {
					'0%': { transform: 'translateX(-100%)' },
					'100%': { transform: 'translateX(0)' },
				},
				'float': {
					'0%, 100%': { transform: 'translateY(0)' },
					'50%': { transform: 'translateY(-20px)' },
				},
				'shape-morph': {
					'0%, 100%': {
						'border-radius': '60% 40% 30% 70% / 60% 30% 70% 40%'
					},
					'25%': {
						'border-radius': '30% 60% 70% 40% / 50% 60% 30% 60%'
					},
					'50%': {
						'border-radius': '20% 60% 30% 70% / 70% 30% 60% 40%'
					},
					'75%': {
						'border-radius': '40% 30% 70% 30% / 30% 40% 30% 60%'
					},
				},
				fadeIn: {
					"0%": { opacity: "0" },
					"100%": { opacity: "1" },
				},
				slideUp: {
					"0%": { transform: "translateY(20px)", opacity: "0" },
					"100%": { transform: "translateY(0)", opacity: "1" },
				},
				'spin-slow': {
					'0%': { transform: 'rotate(0deg)' },
					'100%': { transform: 'rotate(360deg)' }
				},
				'spin-slow-reverse': {
					'0%': { transform: 'rotate(360deg)' },
					'100%': { transform: 'rotate(0deg)' }
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'fade-in': 'fade-in 0.5s ease-out',
				'fade-out': 'fade-out 0.5s ease-out',
				'scale-in': 'scale-in 0.7s ease-out',
				'slide-in': 'slide-in 0.5s ease-out',
				'shape-morph': 'shape-morph 8s ease-in-out infinite',
				'float': 'float 6s ease-in-out infinite',
				'fade-in': 'fadeIn 0.5s ease-in-out',
				'slide-up': 'slideUp 0.5s ease-out',
				'spin-slow': 'spin-slow 8s linear infinite',
				'spin-slow-reverse': 'spin-slow-reverse 12s linear infinite'
			}
		}
	},
	plugins: [],
};
