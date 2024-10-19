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
        background: "var(--background)",
        foreground: "var(--foreground)",
        text: "var(--color-text)",
      },
      fontFamily: {
        // Custom fonts for different elements
        title: ['Open Sans', 'serif'],   // For titles
        header: ['Lora', 'serif'],             // For headers
        paragraph: ['Roboto', 'serif'],   // For paragraphs
      },
    },
  },
  plugins: [],
  darkMode: 'class',
};

export default config;
