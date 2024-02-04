/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    animation: {
      border: "background ease infinite",
    },
    keyframes: {
      background: {
        "0%, 100%": { backgroundPosition: "0% 50%" },
        "50%": { backgroundPosition: "100% 50%" },
      },
      spin: {
        "0%": { transform: "rotate(0deg)" },
        "100%": { transform: "rotate(360deg)" },
      },
    },
    animation: {
      spin: "spin 1s linear infinite",
    },

    extend: {
      fontFamily: {
        "space-grotesk": ["Space Grotesk", "sans-serif"],
        "space-grotesk-light": ["Space Grotesk", "sans-serif", "300"],
        poppins: ["Poppins", "sans-serif"],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      backgroundColor: {
        "custom-bg-black":
          "linear-gradient(105deg, #0c0d13 0%, #131316 101.42%);",
      },
      borderWidth: {
        rem: "0.1rem",
      },
      borderColor: {
        "custom-gray": "#27272a",
      },
      colors: {
        "custom-color-blue": "#0096FF",
      },
    },
  },
  variants: {},
  plugins: [],
};
