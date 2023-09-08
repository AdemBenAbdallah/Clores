import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        my_bg_image: "url('../public/bg/home.webp')",
        section1: "url('../public/bg/section1.webp')",
        section2: "url('../public/bg/section2.webp')",
        section3: "url('../public/bg/section3.webp')",
        section4: "url('../public/bg/section4.webp')",
        shop1: "url('../public/bg/shop1.jpg')",
        shop2: "url('../public/bg/shop2.jpg')",
        shop3: "url('../public/bg/shop3.jpg')",
        shop4: "url('../public/bg/shop4.jpg')",
        perfect: "url('../public/bg/perfectPlant.avif')",
        footer: "url('../public/bg/footer.webp')",
      },
      colors: {
        light: "#b8b8b8",
        primary: "#757E78",
        seconday: "#252525",
        thirdly: "#999999",
        gray_white: "#f2f2f2",
      },
    },
  },
  plugins: [require("daisyui")],
};
export default config;
