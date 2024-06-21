import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        green: "#5b8c51",
        yellow: "#eddd5e",
        gray: "#464646",
        darkText: "#404a3d",
        grayText: "#666666",
        background: "#f8f7f0",
        grayLine: "#ecedeb",
        darkBorder: "#cbc057",
        shadow: "#f8f7f0",
      },
      animation: {
        marquee: "marquee 50s linear infinite",
        fill: "fill 0.5s forwards",
        slideIn: "slideIn 1s ease-out forwards",
        slideUp: "slideUp 1.5s ease-out forwards",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-100%)" },
        },
        fill: {
          "0%": { backgroundPosition: "200% 0" },
          "100%": { backgroundPosition: "0 0" },
        },
        slideIn: {
          "0%": {
            transform: "translateX(-100%)",
            opacity: "0",
          },
          "100%": {
            transform: "translateX(0)",
            opacity: "1",
          },
        },
        slideUp: {
          "0%": { transform: "translateY(100%)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
