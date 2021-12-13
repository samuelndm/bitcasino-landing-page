import { DefaultTheme } from "styled-components";

// ----------------------------------------------------------------------------------
// If you add/change any attribute, update the styled.d.ts file
// ----------------------------------------------------------------------------------

const defaultTheme: DefaultTheme = {
  font: {
    family:
      "Open Sans, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif",
  },

  navbar: {
    height: "100px",
    backgroudColor: "#2a0a4a",
  },

  page: {
    backgroundColor: "#2a0a4a",
  },
};

export default defaultTheme;
