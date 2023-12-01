/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}",],
  theme: {
    extend: {
      backgroundImage: {
        'hero-pattern': "url('../src/img/back.jpg')",
        
    },
    
  },
  plugins: [],
}
}
