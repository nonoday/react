/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./App.tsx', './app/**/*.{js,ts,jsx,tsx}', './pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}', './src/**/*.{js,ts,jsx,tsx}'],
    darkMode: 'class',
    theme: {
        container: {
            center: true,
        },
        extend: {
            colors: {
                primary: {
                    DEFAULT: '#4361ee',
                    light: '#eaf1ff',
                    'dark-light': 'rgba(67,97,238,.15)',
                },
                secondary: {
                    DEFAULT: '#805dca',
                    light: '#ebe4f7',
                    'dark-light': 'rgb(128 93 202 / 15%)',
                },
                success: {
                    DEFAULT: '#00ab55',
                    light: '#ddf5f0',
                    'dark-light': 'rgba(0,171,85,.15)',
                },
                danger: {
                    DEFAULT: '#e7515a',
                    light: '#fff5f5',
                    'dark-light': 'rgba(231,81,90,.15)',
                },
                warning: {
                    DEFAULT: '#e2a03f',
                    light: '#fff9ed',
                    'dark-light': 'rgba(226,160,63,.15)',
                },
                info: {
                    DEFAULT: '#2196f3',
                    light: '#e7f7ff',
                    'dark-light': 'rgba(33,150,243,.15)',
                },
                dark: {
                    DEFAULT: '#3b3f5c',
                    light: '#eaeaec',
                    'dark-light': 'rgba(59,63,92,.15)',
                },
                black: {
                    DEFAULT: '#0e1726',
                    light: '#e3e4eb',
                    'dark-light': 'rgba(14,23,38,.15)',
                },
                white: {
                    DEFAULT: '#ffffff',
                    light: '#e0e6ed',
                    dark: '#888ea8',
                },
            },
            fontFamily: {
                nunito: ['Nunito', 'sans-serif'],
            },
            spacing: {
                4.5: '18px',
            },
            boxShadow: {
                '3xl': '0 2px 2px rgb(224 230 237 / 46%), 1px 6px 7px rgb(224 230 237 / 46%)',
            },
            typography: ({ theme }) => ({
                DEFAULT: {
                    css: {
                        '--tw-prose-invert-headings': theme('colors.white.dark'),
                        '--tw-prose-invert-links': theme('colors.white.dark'),
                        h1: { fontSize: '40px', margin: 0, padding: 0 },
                        h2: { fontSize: '32px', margin: 0, padding: 0 },
                        h3: { fontSize: '28px', margin: 0, padding: 0 },
                        h4: { fontSize: '24px', margin: 0, padding: 0 },
                        h5: { fontSize: '20px', margin: 0, padding: 0 },
                        h6: { fontSize: '16px', margin: 0, padding: 0 },
                        p: { margin: 0, padding: 0 },
                        li: { margin: 0, padding: 0 },
                        img: { margin: 0, padding: 0, border:0 },
                    },
                },
            }),
        },
        // screens: {
            //기본 셋팅값
            //'sm': '640px',
            // => @media (min-width: 640px) { ... }
            //'md': '768px',
            // => @media (min-width: 768px) { ... }
            //'lg': '1024px',
            // => @media (min-width: 1024px) { ... }
            //'xl': '1280px',
            // => @media (min-width: 1280px) { ... }
            //'2xl': '1536px',
            // => @media (min-width: 1536px) { ... }

            //기타 셋팅샘플
            //'sm': {'min': '640px','max': '767px'}
            // 'tablet': '640px',
            // 'desktop': '1280px',
            //다중 설정시
            // 'md': [
            //     {'min': '668px', 'max': '767px'},
            //     {'min': '868px'}
            // ],
            //커스텀 raw 특수 키워드 raw를 사용 -> CSS 미디어 쿼리의 전체 문자열을 직접 입력
            // 'tall': { 'raw': '(min-height: 800px)' },
            //예시 tall:text-white tall:bg-blue-500
            // @media (min-height: 800px) {
            //     .tall\:bg-blue-500 {
            //       background-color: #3b82f6; 
            //     }
            //     .tall\:text-white {
            //       color: #ffffff; 
            //     }
            // }
        // }
    },
    plugins: [
        require('@tailwindcss/forms')({
            strategy: 'class',
        }),
        require('@tailwindcss/typography'),
    ],
};
