import Image from "next/image";
import styled from "styled-components";

export const Container = styled.div`
  margin: 15px 0 0;
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const Content = styled.div`
  padding: 10px 20px 15px 5px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
`;

export const TrophyIcon = styled(Image)``;

export const Info = styled.div`
  margin: 0 0 0 30px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
`;

export const BaseSymbol = styled.span`
  color: #fff;
`;
export const LastPrice = styled.span`
  margin: 15px 0 0;
  color: #fff;
  opacity: 50%;
`;

export const BorderBottom = styled.div`
  width: 100%;
  height: 1px;
  opacity: 50%;
  background: rgb(2, 0, 36);
  background: linear-gradient(
    90deg,
    rgba(2, 0, 36, 1) 0%,
    rgba(255, 255, 255, 1) 0%,
    rgba(255, 255, 255, 1) 41%,
    rgba(255, 255, 255, 0.7931547619047619) 69%,
    rgba(255, 255, 255, 0) 100%,
    rgba(255, 255, 255, 0) 100%
  );
`;

export const CloseIcon = styled.span`
  color: #fff;
  margin: 0 0 0 auto;
  cursor: pointer;
`;
