import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        'md': '768px',
        "lg": "1024px"
      },
      colors: {
        background: "var(--background-color)",
        foreground: "var(--foreground-color)",
        "ecommerce-light": "var(--ecommerce-light-color)",
        input: {
          border: "var(--input-border)"
        }
      },
      fontSize: {
        header: "var(--fs-hero-header)",
        "header-two": "var(--fs-header-two)",
        "header-three": "var(--fs-header-three)",
        base: "var(--fs-base)",
        body: "var(--fs-body)",
      }
    },
  },
  plugins: [],
};
export default config;
