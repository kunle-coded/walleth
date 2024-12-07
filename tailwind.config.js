/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          500: "#090A0B",
        },
        secondary: {
          100: "#F8F8F9",
          200: "#F4F4F6",
          300: "#AFB4C0",
          400: "#A4A9B7",
          500: "#767E93",
          900: "#090A0B",
        },
        brand: {
          100: "#E8EDFF",
          400: "#747bff",
          500: "#646cff",
        },
      },
    },
  },
  plugins: [],
};