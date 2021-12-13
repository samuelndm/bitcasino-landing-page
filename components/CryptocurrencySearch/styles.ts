import styled from "styled-components";

export const Container = styled.div`
  padding: 40px 50px;
  width: 400px;
  height: 260px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  background-color: #fff;
  border-radius: 4px;
`;

export const Form = styled.form`
  width: 100%;
`;

export const InputContainer = styled.div`
  width: 100%;
  position: relative;
`;

export const Label = styled.label`
  position: absolute;
  top: -12px;
  left: 10px;
  padding: 5px;
  font-size: 1.3rem;
  color: #afafaf;
  background-color: #fff;
`;

export const Input = styled.input`
  padding-left: 10px;
  width: 100%;
  height: 50px;
  border: 1px solid #afafaf;
  border-radius: 4px;
  font-size: 1.5rem;
  font-weight: 600;
  text-transform: uppercase;
`;

export const Button = styled.button`
  margin: 15px 0 0;
  width: 100%;
  height: 40px;
  background-color: #fd4b24;
  border-radius: 24px;
  text-align: center;
  color: #fff;

  &:hover {
    opacity: 85%;
    cursor: pointer;
    transition: all 1s ease;
  }
`;

export const Terms = styled.span`
  margin: auto 0 0;
  text-align: center;
  font-size: 1.5rem;
  color: #333;
  opacity: 50%;
`;
