/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        playfairDisplay: '"Playfair Display", serif',
        workSans: '"Work Sans", sans-serif'
      },
  },
},
plugins: [], 
};
