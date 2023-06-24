/** @type {import('tailwindcss').Config} */

module.exports = {
	content: ['./src/**/**/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		fontSize: {
			xs: ['0.75rem', { lineHeight: '1rem' }],
			sm: ['1rem', { lineHeight: '1.25rem' }],
			base: ['1.25rem', { lineHeight: '1.5rem' }],
			lg: ['1.6rem', { lineHeight: '1.75rem' }],
			xl: ['2rem', { lineHeight: '1.75rem' }],
			'2xl': ['2.3rem', { lineHeight: '2rem' }],
			'3xl': ['2.75rem', { lineHeight: '2.25rem' }],
			'4xl': ['3.5rem', { lineHeight: '2.5rem' }],
			'5xl': ['4.3rem', { lineHeight: '1' }],
			'6xl': ['5.2rem', { lineHeight: '1' }],
			'7xl': ['7.3rem', { lineHeight: '1' }],
			'8xl': ['10rem', { lineHeight: '1' }],
			'9xl': ['15rem', { lineHeight: '1' }],
		  },
		  borderRadius: {
			none: '0px',
			sm: '0.75rem',
			DEFAULT: '1rem',
			md: '1.5rem',
			lg: '2rem',
			xl: '50px',
			'2xl': '3.75rem',
			'3xl': '5rem',
			full: '9999px',
		  },
		  borderWidth: {
			DEFAULT: '1px',
			0: '0px',
			2: '2px',
			4: '4px',
			8: '8px',
			12: '12px',
			16: '16px',
			20: '20px',
		  },
		  boxShadow: {
			sm: '0 1px 2px 0 rgb(0 0 0 / 0.05)',
			DEFAULT: '0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)',
			md: '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)',
			lg: '0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)',
			xl: '0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)',
			'2xl': '0 50px 75px -12px rgb(0 0 0 / 0.65)',
			inner: 'inset 0 2px 4px 0 rgb(0 0 0 / 0.05)',
			none: 'none',
		  },
		  




		  blur: {
			0: '0',
			none: '0',
			sm: '4px',
			DEFAULT: '8px',
			md: '12px',
			lg: '16px',
			xl: '24px',
			'2xl': '40px',
			'3xl': '64px',
		  },
		  dropShadow: {
			sm: '0 1px 1px rgb(0 0 0 / 0.05)',
			DEFAULT: ['0 1px 2px rgb(0 0 0 / 0.1)', '0 1px 1px rgb(0 0 0 / 0.06)'],
			md: ['0 4px 3px rgb(0 0 0 / 0.07)', '0 2px 2px rgb(0 0 0 / 0.06)'],
			lg: ['0 10px 8px rgb(0 0 0 / 0.04)', '0 4px 3px rgb(0 0 0 / 0.1)'],
			xl: ['0 20px 13px rgb(0 0 0 / 0.03)', '0 8px 5px rgb(0 0 0 / 0.08)'],
			'2xl': '0 25px 25px rgb(0 0 0 / 0.15)',
			none: '0 0 #0000',
		  },
		  borderOpacity: ({ theme }) => theme('opacity'),
		  borderRadius: {
			none: '0px',
			sm: '0.125rem',
			DEFAULT: '0.25rem',
			md: '0.375rem',
			lg: '0.5rem',
			xl: '0.75rem',
			'2xl': '1rem',
			'3xl': '1.5rem',
			full: '9999px',
		  },
		  brightness: {
			0: '0',
			50: '.5',
			75: '.75',
			90: '.9',
			95: '.95',
			100: '1',
			105: '1.05',
			110: '1.1',
			125: '1.25',
			150: '1.5',
			200: '2',
		  },
		  contrast: {
			0: '0',
			50: '.5',
			75: '.75',
			100: '1',
			125: '1.25',
			150: '1.5',
			200: '2',
		  },
		  fontWeight: {
			thin: '100',
			extralight: '200',
			light: '300',
			normal: '400',
			medium: '500',
			semibold: '600',
			bold: '700',
			extrabold: '800',
			black: '900',
		  },



		extend: {

			colors: {
				biz1: "#01FF3c",
				biz2: "#B205F8",
				bizbg: "#000",
				viz1: "#B205F8",
				viz2: "#013ffe",
				vizbg: "#000",
				diz1: "#013ffe",
				diz2: "#01AFFE",
				dizbg: "#000",
				wiz1: "#01AFFE",
				wiz2: "#d6C1d2",
				wizbg: "#000",
				fiz1: "#d6C1d2",
				fiz2: "#01AFFE",
				fizbg: "#000",
				liz1: "#42a158",
				liz2: "#FE9001",
				lizbg: "#000",
				piz1: "#42a158",
				piz2: "#FFEF00",
				pizbg: "#000",
			},
			fontFamily: {
				biz: ['Aladin'],
				viz: ['Ruslan Display'],
				diz: ['Sedgwick-ave'],
				wiz: ['Faster One'],
				fiz: ['Ceviche One'],
				xiz: ['Jolly Lodger'],
				liz: ['Stalinist One'],
				piz: ['Pacifico'],
				riz: ['Sniglet'],
				bizf1: ['Aladin'],
				bizf2: ['Aladin'],
				vizf1: ['Ruslan Display'],
				vizf2: ['Ruslan Display'],
				dizf1: ['Ceviche One'],
				dizf2: ['Sedgwick-ave'],
				wizf1: ['Faster One'],
				wizf2: ['Sniglet'],
				fizf1: ['Ceviche One'],
				fizf2: ['Sniglet'],
				xizf1: ['Jolly Lodger'],
				xizf2: ['Jolly Lodger'],
				lizf1: ['Stalinist One'],
				lizf2: ['Stalinist One'],
				pizf1: ['Pacifico'],
				pizf2: ['Pacifico'],
				rizf1: ['Sniglet'],
				rizf2: ['Sniglet']
			},	

			keyframes: {
				slidein: {
					'0%': { transform: 'translateX(-100%)'},
					'100%': { transform: 'translateX(0%)'},
				},
				grow: {
					'0%': { transform: 'scale(1)' },
					'100%': { transform: 'scale(1.5)' },
				},
				shrink: {
					'0%': { transform: 'scale(1.5)' },
					'100%': { transform: 'scale(1)' },
				},
				wave: {
					'0%': { transform: 'rotate(0.0deg)' },
					'10%': { transform: 'rotate(14deg)' },
					'20%': { transform: 'rotate(-8deg)' },
					'30%': { transform: 'rotate(14deg)' },
					'40%': { transform: 'rotate(-4deg)' },
					'50%': { transform: 'rotate(10.0deg)' },
					'60%': { transform: 'rotate(0.0deg)' },
					'100%': { transform: 'rotate(0.0deg)' },
				},
				progress: {
					'0%': { backgroundPosition: '0% 50%' },
					'50%': { backgroundPosition: '100% 50%' },
					'100%': { backgroundPosition: '0% 50%' },

					
				}
			},
			animation: {
				'slidein': 'slidein 2s ease-in forwards',
				'waving-hand': 'wave 2s linear infinite',
				'grow': 'grow 1s ease-in-out forwards',
				'shrink': 'shrink 1s ease-in-out forwards',
			},

		},

		// --biz-font-small:'Bilbo Swash Caps';
		// --liz-font-small:'Ceviche One';
	},

	plugins: [],
};

