/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "button": "var(--button)",
        "main-background": "var(--main-background)",
        "background": "var(--background)",
        "text": "var(--text)",
        "footer": "var(--footer)",
        "text-description": "var(--text-description)"
      },
    },

  },
  plugins: [],
}
