/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    extend: {
        colors: {
                          "primary": "#0d59f2",
                          "background-light": "#f5f6f8",
                          "background-dark": "#09090b",
                          "card-dark": "#18181b",
                          "border-dark": "#27272a",
                      },
                      fontFamily: {
                          "display": ["Inter", "sans-serif"]
                      },
    },
  },
  plugins: [],
}

