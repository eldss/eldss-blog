import typographyPlugin from "@tailwindcss/typography"
import { type Config } from "tailwindcss"
import colors from "tailwindcss/colors"

import typographyStyles from "./typography"

export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "selector",
  plugins: [typographyPlugin],
  theme: {
    fontSize: {
      xs: ["0.8125rem", { lineHeight: "1.5rem" }],
      sm: ["0.875rem", { lineHeight: "1.5rem" }],
      base: ["1rem", { lineHeight: "1.75rem" }],
      lg: ["1.125rem", { lineHeight: "1.75rem" }],
      xl: ["1.25rem", { lineHeight: "2rem" }],
      "2xl": ["1.5rem", { lineHeight: "2rem" }],
      "3xl": ["1.875rem", { lineHeight: "2.25rem" }],
      "4xl": ["2rem", { lineHeight: "2.5rem" }],
      "5xl": ["3rem", { lineHeight: "3.5rem" }],
      "6xl": ["3.75rem", { lineHeight: "1" }],
      "7xl": ["4.5rem", { lineHeight: "1" }],
      "8xl": ["6rem", { lineHeight: "1" }],
      "9xl": ["8rem", { lineHeight: "1" }],
    },
    typography: typographyStyles,
    extend: {
      colors: {
        "text-dark": colors.zinc[800],
        "text-light": colors.zinc[100],
      },
      borderRadius: {
        app: "0.5rem",
      },
      animation: {
        "drop-down-in": "drop-down-fade-in 0.25s ease-out",
        "rotate-180-to-position": "rotate-180-to-position 0.15s linear",
      },
      keyframes: {
        "drop-down-fade-in": {
          "0%": { opacity: "0", transform: "scale(0.95)" },
          "100%": { opacity: "1", transform: "scale(1)" },
        },
        "rotate-180-to-position": {
          "0%": { transform: "rotateX(180deg)" },
          "100%": { transform: "rotateX(0deg)" },
        },
      },
    },
  },
} satisfies Config
