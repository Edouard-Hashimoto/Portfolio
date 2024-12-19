/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        Ecriture: '#e90000',
        Ecriture2: '#313e92',
        'Fond-footer': '#ebebeb',
        'Fond-page-contact': '#bfbfbe',
        'Fond-blanc': '#f5f5f5'
      },
      fontSize: {
        sm: '1.25rem',
        base: '1.5625rem',
        lg: '2.1875rem',
        xl: '3.125rem',
        '2xl': '8.5rem',
        '3xl': '18.75rem'
      },
      fontFamily: {
        'Text-principale': 'League Gothic',
        paragraph: 'Mulish'
      },
      borderRadius: {
        'rounded-0': 'NaNrem',
        'rounded-1': 'NaNrem',
        'rounded-2': 'NaNrem',
        'rounded-3': 'NaNrem',
        'rounded-4': 'NaNrem'
      },
      plugins: []
    }
  }
}
