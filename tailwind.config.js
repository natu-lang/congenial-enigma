/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                'sans': ['"Noto Sans JP"', 'sans-serif'],
                'title': ['"Kiwi Maru"', 'serif'],
            },
            colors: {
                primary: {
                    DEFAULT: '#3f9d86',
                    hover: '#307a68',
                },
                background: '#F8F4EC',
            }
        },
    },
    plugins: [],
}
