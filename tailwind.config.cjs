/** @type {import('tailwindcss').Config} */

module.exports = {
	content: ['./src/**/**/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {



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
			

		},

		// --biz-font-small:'Bilbo Swash Caps';
		// --liz-font-small:'Ceviche One';
	},

	plugins: [],
};

