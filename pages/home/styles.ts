import styled from "styled-components";
import Image from "next/image";
import * as GS from "styles/GlobalStyles";

export const Container = styled(GS.Container)`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

export const Content = styled.div`
  max-width: 500px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
`;

export const Title = styled.h2`
  font-size: 48px;
  text-align: left;
  color: #fff;
  line-height: 1.2;
`;

export const SubTitle = styled.h3`
  margin: 30px 0 0;
  font-size: 28px;
  text-align: left;
  color: #fff;
  opacity: 50%;
  line-height: 1.3;
`;

export const LeprechaunImage = styled(Image)`
  margin: 50px 0 0;
`;
