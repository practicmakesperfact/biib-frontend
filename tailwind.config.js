/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      container: { center: true, padding: "1rem" },
      fontFamily: {
        sans: [
          "Inter",
          "ui-sans-serif",
          "system-ui",
          "Segoe UI",
          "Roboto",
          "Helvetica",
          "Arial",
          "Apple Color Emoji",
          "Segoe UI Emoji",
        ],
      },
      colors: {
        brand: {
          50: "#f5f7ff",
          100: "#e9eeff",
          200: "#cfd9ff",
          300: "#a6b7ff",
          400: "#6f86ff",
          500: "#3b5bff", // primary (AA on white)
          600: "#2d47db",
          700: "#2439ad",
          800: "#1f2f8a",
          900: "#1b2972",
        },
      },
      boxShadow: {
        soft: "0 4px 24px rgba(0,0,0,0.08)",
      },
    },
  },
  plugins: [],
};
