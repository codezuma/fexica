/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: 'class',
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
            colors: {
                border: 'hsl(var(--border))',
                input: 'hsl(var(--input))',
                ring: 'hsl(var(--ring))',
                background: 'hsl(var(--background))',
                foreground: 'hsl(var(--foreground))',
                primary: {
                    DEFAULT: '#7F56D9',
                    foreground: 'var(--primary-foreground)',
                    '100':'#F4EBFF',
                    '50':'#F9F5FF'
                }}}	},
	plugins: [],
}
