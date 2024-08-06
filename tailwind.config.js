/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
     
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      height: {
        '125': '31.25rem', 
        '180': '45rem'
      }, 
      colors: {
        'yellow': '#FFC151',
        'blue': '#426AAF', 
        'darkgrey': '#4F4F4F',
        'lightgrey': '#e5e7eb',
      },
      maxWidth: {
        '9/10': '90%',
      }
    },
  },
  plugins: [],
};
