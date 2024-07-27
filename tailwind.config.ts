import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      sm: '599px',
      md: '899px',
      lg: '1199px',
      xl: '1535px',
    },
    colors: {
      //Base
      'cream': '#fdfaf5',
      'beigeStroke': '#dfdac9',
      'white': '#ffffff',

      //Primary
      'green50': '#e6f0ec',
      'green100': '#b0d0c5',
      'green200': '#8ab9a9',
      'green300': '#549881',
      'green400': '#3f8e72',
      'green500': '#006643',
      'green600': '#005d3d',
      'green700': '#004830',
      'green800': '#003825',
      'green900': '#002b1c',

      //Secondary
      'blue50': '#e6f7fd',
      'blue100': '#b0e5f9',
      'blue200': '#8ad9f6',
      'blue300': '#54c7f2',
      'blue400': '#33bdf0',
      'blue500': '#00acec',
      'blue600': '#009dd7',
      'blue700': '#007aa8',
      'blue800': '#005f82',
      'blue900': '#004863',

      //Neutral
      'gray10': '#fbfbfb',
      'gray15': '#F7F7F7',
      'gray40': '#e7e7e6',
      'gray70': '#bdbcbb',
      'gray100': '#9c9b98',
      'gray200': '#918f8d',
      'gray500': '#71706d',
      'gray800': '#504e4b',
      'gray900': '#474541',
      'black': '#000000',
      'cream50': '#fcfcfa',
      'cream300': '#e3ddd0',

      //Accents
      'yellow': '#f8d764',
      'orange': '#e29047',
      'coral': '#f2695c',
      'limeGreen': '#7dc242',

      // Products
      'goWildBrown': '#aa6527',
      'upFront': '#392B80',
      'eliteSilver': '#9A9A9B',
      'eliteGold': '#F1B820',
      'elitePlatinum': '#C3C5DA',
      'eliteDiamond': '#80D3EE',

      //Stoplights
      'error50': '#fdedeb',
      'error300': '#e94d35',
      'error400': '#a33625',
      'warning50': '#fef9e6',
      'warning300': '#f5c400',
      'warning400': '#DD9F17',
      'success50': '#f4faee',
      'success300': '#8fce50',
      'success400': '#649038',
    },
    fontFamily: {
      sans: ['"Montserrat", "Open Sans"', 'sans-serif'],
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
export default config;
