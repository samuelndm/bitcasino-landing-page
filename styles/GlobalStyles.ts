import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  * {
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    margin: 0;
    outline: 0;
    padding: 0;
  }

  html {
    font-size: 62.5%;
    -ms-overflow-style: scrollbar;
  }

  body {
    
      font-family: roboto;
      font-size: 1.6rem;
    
  }

  html, body, #root {
    height: 100%;
  }

  

  input ,
  textarea,
  button,
  select {
    appearance: none;
    border: 0;
    outline: 0;
  }

  ul {
    list-style: none;
  }
`;
