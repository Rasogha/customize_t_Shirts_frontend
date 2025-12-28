/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
        colors: {
            brandBlack: '#343333ff',
            brandGreen: '#07582eff',
            brandLightGreen: '#12c849ff',
            brandGray: '#5e756fff',
        }
    },
  },
  plugins: [],
}

