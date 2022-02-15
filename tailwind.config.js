module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
	theme: {
		extend: {
			colors: {
				'primary': '#3A9679',
				'primary-light': '#4EA187',
				'primary-bg': '#F7F9FD',
				'light-blue': '#F7F9FD',
				'dark-gray': '#7F8FA4',
				'red': '#E16262'
			},
		},
	},
  plugins: [require('@tailwindcss/forms')],
}
