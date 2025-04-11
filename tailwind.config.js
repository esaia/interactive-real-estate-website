/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  theme: {
    extend: {
      typography: ({ theme }) => ({
        DEFAULT: {
          css: {
            "--tw-prose-pre-bg": "whiteSmoke",
          },
        },
      }),

      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      screens: {
        xs: "0px",
        sm: "480px",
        md: "744px",
        lg: "1024px",
        xl: "1248px",
        "2xl": "1440px",
        "3xl": "1920px",
      },
      container: {
        center: true,
        padding: {
          DEFAULT: "16px",
          xs: "16px",
          sm: "16px",
          md: "24px",
          lg: "50px",
          xl: "50px",
          "2xl": "50px",
        },
      },
      colors: {
        primary: "rgb(219, 36, 36)",
      },
      boxShadow: {
        testimonial: "0px 10px 20px 0px rgba(92, 115, 160, 0.07)",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
