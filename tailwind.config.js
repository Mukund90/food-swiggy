/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        customDark: 'rgb(2, 6, 12)',
        mukund : '#545454',
        foot:'#F0F0F5',
       // Add your custom color here
      },
      screens: {
        'xs': '480px',    // Extra small
        'sm': '640px',    // Small
        'md': '768px',    // Medium
        'lg': '1024px',   // Large
        'xl': '1280px',   // Extra large
        '2xl': '1536px',  // 2xl
      },
      fontFamily: {
        kuchbhi: ['Poppins', 'sans-serif'], // Custom font family
      },

  
    },
  },
  plugins: [],
}

