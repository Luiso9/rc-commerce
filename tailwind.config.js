/** @type {import('tailwindcss').Config} */
const { nextui } = require("@nextui-org/react");

export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
        "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}"
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
    plugins: [
        require('@tailwindcss/forms'),
        nextui()
    ],
    // daisyui: {
    //     themes: ["light", "dark", "pastel"],
    // },

    darkMode: "class",
}