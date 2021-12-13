import styled, { createGlobalStyle } from "styled-components";

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

  p,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-weight: normal;
    line-height: 1;
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


  
  * {
    scrollbar-width: 10px;
    scrollbar-color: #fff;
    scrollbar-border-radius: 24px;
  }

  *::-webkit-scrollbar {
    width: 10px;
  }

  *::-webkit-scrollbar-track {
    box-shadow: inset 0 0 5px grey;
    border-radius: 24px;
  }

  *::-webkit-scrollbar-thumb {
    background: #fff;
    border-radius: 24px;
  }

  *::-webkit-scrollbar-thumb:hover {
    opacity: 25%;
  }
`;

export const Container = styled.div`
  margin: 0 auto;
  padding: 0 15px;
  width: 100%;
  position: relative;

  @media (min-width: 480px) {
    max-width: 728px;
  }

  @media (min-width: 992px) {
    max-width: 960px;
  }

  @media (min-width: 1200px) {
    max-width: 1140px;
  }

  @media (min-width: 1600px) {
    max-width: 1500px;
  }
`;
