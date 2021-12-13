import Image from "next/image";
import styled from "styled-components";
import * as GS from "styles/GlobalStyles";

export const Container = styled(GS.Container)`
  display: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 100%;
  display: flex;
  align-items: center;
  background-color: transparent;
`;

export const Logo = styled(Image)`
  display: flex;
  align-items: center;
  justify-content: flex-start;
`;
