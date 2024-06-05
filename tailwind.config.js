/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./build/*.html", "./build/js/*.js"],
	theme: {
		extend: {
			screens: {
				widescreen: { raw: "(min-aspect-ration: 3/2)" },
				tallscreen: { raw: "(min-aspect-ration: 13/20)" },
			},

			keyframes: {
				"open-menu": {
					"0%": { transform: "scaleY(0)" },
					"60%": { transform: "scaleY(1.2)" },
					"100%": { transform: "scaleY(1)" },
				},
			},

			animation: {
				"open-menu": "open-menu 500ms ease-in-out forwards",
			},
		},
	},
	plugins: [],
};
