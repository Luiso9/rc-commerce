/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            transitionProperty: {
                'max-height': 'max-height',
            },
            maxHeight: {
                '0': '0',
                'screen-16': 'calc(100vh - 4rem)',
            },
        },
    },
    variants: {
        extend: {
            maxHeight: ['responsive'],
        },
    },
    plugins: [require("daisyui"),
        require('@tailwindcss/forms'),
    ],
    daisyui: {
        themes: ["light", "dark", "pastel"],
    },
}