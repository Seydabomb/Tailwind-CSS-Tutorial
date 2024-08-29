/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./build/*.html", "./build/js/*.js"],
	theme: {
		extend: {
			screens: {
				// At least 3 times as wide as it is 2 times tall
				widescreen: { raw: "(min-aspect-ratio: 3/2)" },
				// At least 13 times as wide as it is 20 times as tall
				tallscreen: { raw: "(min-aspect-ratio: 13/20)" },
			},
			keyframes: {
				"open-menu": {
					"0%": { transform: "scaleY(0)" },
					"80%": { transform: "scaleY(1.2)" },
					"100%": { transform: "scaleY(1)" },
				},
			},
			animation: {
				"open-menu": "open-menu 0.5s ease-in-out forwards",
			},
		},
	},
	plugins: [],
};
