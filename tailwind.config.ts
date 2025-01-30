import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors:{
        'white-primary' : '#FFFFFF',
        'green-actived': '#327A4F',
        'purple' : '#9454ad',
        'purple-overlay': '#9454ad',
      },
      maxWidth: {
        grid: '77.5rem'
      },
      height : {
        'section-hero' : '54.625rem'
      },
      textColor: {
        'purple' : '#9454ad',
      },
    },
  },
  plugins: [],
};
export default config;
