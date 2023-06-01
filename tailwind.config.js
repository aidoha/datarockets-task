/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{js,jsx,ts,tsx}'],
	theme: {
		extend: {
			colors: {
				cyan: {
					strong: '#26c0ab',
					very_dark_grayish: '#00494d',
					dark_grayish: '#5e7a7d',
					grayish: '#7f9c9f',
					light_grayish: '#c5e4e7',
					very_light_grayish: '#f4fafa',
				},
				white: '#fff',
			},
		},
	},
	plugins: [],
};
