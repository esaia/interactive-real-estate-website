/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
    "./content/**/*.md",
  ],
  theme: {
    extend: {
      typography: ({ theme }) => ({
        DEFAULT: {
          css: {
            "--tw-prose-pre-bg": theme("colors.slate.100"),
            "--tw-prose-pre-code": theme("colors.slate.800"),

            maxWidth: "65ch",
            color: theme("colors.slate.700"),
            fontSize: "1rem",
            lineHeight: "1.65",

            // Headings: Medium weight + tighter letter spacing
            "h1, h2, h3, h4 h5 h6": {
              fontWeight: "500",
              letterSpacing: theme("letterSpacing.tight"),
              color: theme("colors.slate.900"),
            },

            // Code Block Styling
            pre: {
              borderRadius: theme("borderRadius.xl"),
              padding: theme("spacing.6"),
            },
            "code::before": { content: '""' }, // Removes backticks
            "code::after": { content: '""' },
            code: {
              fontWeight: "500",
              fontFamily:
                'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace',
              backgroundColor: theme("colors.slate.100"),
              padding: "0.2rem 0.4rem",
              borderRadius: theme("borderRadius.md"),
              color: theme("colors.pink.600"), // "Pretty" inline code color
            },
            "pre code": {
              backgroundColor: "transparent",
              padding: "0",
              color: "inherit", // Let the highlighter handle this
              fontSize: "0.9rem",
            },

            // Table & UI Polish
            "thead th": {
              fontWeight: "500",
              textTransform: "uppercase",
              fontSize: "0.85rem",
              letterSpacing: theme("letterSpacing.wider"),
            },
            "strong, b": {
              fontWeight: "500",
              color: theme("colors.slate.900"),
            },
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
        primary: "rgb(199, 68, 68)",
      },
      boxShadow: {
        testimonial: "0px 10px 20px 0px rgba(92, 115, 160, 0.07)",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
