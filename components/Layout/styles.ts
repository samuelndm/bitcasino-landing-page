import styled, { css } from "styled-components";
import Image from "next/image";

export const Head = styled.header`
  ${({ theme }) => css`
    display: fixed;
    top: 0;
    left: 0;
    right: 0;
    height: ${theme.navbar.height};
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: ${theme.navbar.backgroudColor};
  `}
`;

export const Main = styled.main`
  ${({ theme }) => css`
    position: relative;
    padding-top: ${theme.navbar.height};
    width: 100%;
    min-height: calc(100vh - ${theme.navbar.height});
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    background-color: ${theme.navbar.backgroudColor};
  `}
`;

export const BackgroundImageContainer = styled.div`
  position: fixed;
  top: 0;
  left: 55%;
  width: 100%;
  height: 100vh;
  display: none;

  @media screen and (max-width: 1250px) {
    display: none;
  }
`;

export const BackgroundImage = styled(Image)``;

export const Footer = styled.footer``;
