/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        rick: ["Get Schwifty", "sans-serif"],
        futuristic: ["Nova Square", "sans-serif"],
        primary: ["Jura", "sans-serif"],
      },
      backgroundImage: {
        background: "url('/src/images/tile-background.jpg')",
      },
      colors: {
        primary: {
          100: "#F3F3F3",
          200: "#e8e8e8",
          300: "#C5E898",
          400: "#29ADB2",
          500: "#0766AD",
        },
        action: {
          500: "#ad0000",
        },
      },
    },
  },
  plugins: [],
};
