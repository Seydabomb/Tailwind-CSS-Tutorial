/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./build/*.html"],
	theme: {
		extend: {
			screens: {
				// At least 3 times as wide as it is 2 times tall
				widescreen: { raw: "(min-aspect-ratio: 3/2)" },
				// At least twice as tall as it is wide
				tallscreen: { raw: "(min-aspect-ratio: 1/2)" },
			},
		},
	},
	plugins: [],
};
