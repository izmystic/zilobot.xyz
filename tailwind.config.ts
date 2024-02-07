/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './components/**/*.{js,vue,ts}',
        './layouts/**/*.vue',
        './pages/**/*.vue',
        './plugins/**/*.{js,ts}',
        './app.vue',
        './error.vue',
    ],
    theme: {
        extend: {
            colors: {
                gold: {
                    50: '#fbf9eb',
                    100: '#f5f2cc',
                    200: '#ede49b',
                    300: '#e2cf62',
                    400: '#d8b937',
                    500: '#c6a129',
                    600: '#ad8121',
                    700: '#8a5f1e',
                    800: '#734d20',
                    900: '#634120',
                    950: '#39210f',
                },
                blurple: {
                    50: '#eef3ff',
                    100: '#e0e9ff',
                    200: '#c6d6ff',
                    300: '#a4b9fd',
                    400: '#8093f9',
                    500: '#5865f2',
                    600: '#4445e7',
                    700: '#3836cc',
                    800: '#2f2fa4',
                    900: '#2d2f82',
                    950: '#1a1a4c',
                },
            }
        }
    },
}