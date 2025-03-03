/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {},
	},
	plugins: [require("daisyui"), require('@tailwindcss/typography'), require("@astrojs/starlight-tailwind")],
	daisyui: {
		themes: ["light", "dark", "aqua"],
	},
}
