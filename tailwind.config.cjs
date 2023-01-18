/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        fontFamily: {
            roboto: 'Roboto, sans-serif',
        },
        colors: {
            'light-blue': 'hsl(214, 100%, 95%)',
            'dark-blue': 'hsl(209, 100%, 29%)',
            blue: 'hsl(209, 100%, 35%)',
            gray: 'rgb(209 213 219)',
            evening: '#b92b27',
            sunshine: '#1565c0',
        },
        screens: {
            xs: '520px',
            sm: '640px',
            md: '768px',
            lg: '992px',
            xl: '1280px',
            '2xl': '1536px',
        },
        extend: {},
    },
    plugins: [],
};
