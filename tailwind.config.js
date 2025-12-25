/** @type {import('tailwindcss').Config*/
export default{
    content:[
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme:{
        extend:{
            colors:{
                brandBlack:'0a0a0a',
                brandGreen: '004d40',
                brandLightGreen: '00796b',
                brandGray: '1f2937',
            },
        },
    },
    plugins:[],
}