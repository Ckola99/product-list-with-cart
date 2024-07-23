/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        redHatText: ['Red Hat Text', 'sans-serif'],
      },
      colors: {
        red: 'hsl(var(--Red))',
        green: 'hsl(var(--Green))',
        rose: {
          50: 'hsl(var(--Rose-50))',
          100: 'hsl(var(--Rose-100))',
          300: 'hsl(var(--Rose-300))',
          400: 'hsl(var(--Rose-400))',
          500: 'hsl(var(--Rose-500))',
          900: 'hsl(var(--Rose-900))',
        },
      },
    },
    plugins: [],
  }
}
