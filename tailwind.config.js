/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  plugins: [require('@tailwindcss/forms')],
  theme: {
    fontFamily: {
      assistant: ['Assistant', 'sans-serif'],
    },
    extend: {
      colors: {
        'primary-white': '#FFFFFF',
        'typography-main': '#1A1A1A',
        'typography-secondary': '#4D4D4D',
        'typography-grey': '#787878',
        'typography-disabled': '#AEAEAE',
        'primary-dark-grey': '#3A3A3A',
        'primary-dark-green': '#005246',
        'primary-green-dark-10': 'rgba(0, 82, 70, 0.1)',
        'secondary-grey-light': '#E3E3E3',
        'secondary-grey-light-2': '#F9FAFB',
        'chart-blue-dark': '#0054AD',
        'chart-blue-light-3': '#F6FBFF',
        'chart-orange-dark': '#EE8100',
        'chart-orange-light-2': '#FFF9E9',
        'chart-purple-dark': '#030078',
        'chart-purple-light-2': '#F3F2FF',
        'chart-green-light-2': '#ECFDF5',
        'moss-50': '#F5FBEE',
        'moss-600': '#4F7A21',
        'pink-25': '#FEF6FB',
        'fuchsia-25': '#FEFAFF',
        'violet-25': '#FBFAFF',
      },
    },
  },
};
