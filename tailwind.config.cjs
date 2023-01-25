/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        fontFamily: {
            roboto: 'Roboto, sans-serif',
        },
        colors: {
            black: '#121212',
            white: '#f9f9f9',
            'light-blue': 'hsl(214, 100%, 95%)',
            'dark-blue': 'hsl(209, 100%, 29%)',
            blue: 'hsl(209, 100%, 35%)',
            'blue-button': 'hsl(214, 100%, 90%)',
            'blue-button-hover': 'hsl(214, 100%, 85%)',
            gray: 'rgb(209 213 219)',
            kimoby: '#0072ff',
            newblue: '#00c6ff',
            sunshine: '#b92b27',
            'orange-red': '#E94916',
            'dark-red': '#DC2331',
            evening: '#1565C0',
        },
        screens: {
            xs: '520px',
            sm: '640px',
            md: '768px',
            lg: '992px',
            xl: '1280px',
            '2xl': '1536px',
        },
        extend: {
            boxShadow: {
                sidebar: '1.95px 0 2.6px rgba(0, 0, 0, 0.15)',
                footer: '0 -1.95px 2.6px rgba(0, 0, 0, 0.15)',
            },
        },
    },
    plugins: [require('daisyui')],
    daisyui: {
        themes: [],
    },
};
