import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        sage: {
          50:  "#F3F7F0",
          100: "#E2EDD9",
          200: "#C8DBBE",
          300: "#A9C49A",
          400: "#87AC75",
          500: "#6B8F5E",
          600: "#527248",
          700: "#3D5535",
          800: "#2A3B24",
          900: "#151D12",
        },
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
        serif: ["Georgia", "serif"],
      },
    },
  },
  plugins: [],
};
export default config;
