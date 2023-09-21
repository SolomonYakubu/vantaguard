/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      // backgroundImage: {
      //   hero: "url('../public/images/background.png)",
      // },
      keyframes: {
        bouncer: {
          "0%": { transform: " translateY(0)" },
          "25%": { transform: "translateY(6px)" },
          "50%": { transform: "translateY(6px)" },
          "75%": { transform: "translateY(6px)" },
          "100%": { transform: "translateY(0px)" },
        },
      },
      animation: {
        bouncing: "bouncer 3s cubic-bezier(0.280, 0.840, 0.420, 1) infinite",
      },
      colors: {
        primary: "#fff",
        secondary: "#fff",
        grad: "#fff",
        bg1: "#000",
        bg2: "#000",
      },
    },
    // colors: {
    //   // 'blue': '#1fb6ff',
    //   // 'pink': '#ff49db',
    //   // 'orange': '#ff7849',
    //   // 'green': '#13ce66',
    //   // 'gray-dark': '#273444',
    //   // 'gray': '#8492a6',
    //   // 'gray-light': '#d3dce6'
    //   // 'primary':'#008bff'

    // },
  },
  plugins: [],
};
