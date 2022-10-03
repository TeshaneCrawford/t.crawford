import {createTheme} from "@nextui-org/react";

const fonts = {
  sans: 'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif',
  mono: "Menlo, Monaco, Lucida Console, Liberation Mono, DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace",
};

export const lightTheme = createTheme({
  type: "light",
  className: "teshane-portfolio-light",
  theme: {
    fonts,
    colors: {
      backgroundBlur: "rgba(255, 255, 255, 0.3)",
    },
  },
});

export const darkTheme = createTheme({
  type: "dark",
  className: "teshane-portfolio-dark",
  theme: {
    fonts,
    colors: {
      backgroundBlur: "rgba(255, 255, 255, 0.1)",
    },
  },
});