import styled, { css } from "styled-components";

const Button = styled.button`
  background-color: white;
  color: black;
  border-radius: 4px;
  padding: 0.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  font-size: 1rem;
  font-weight: 600;

  &:hover {
    background-color: rgba(255,255,255,0.9);
  }

/* 프롭스를 받아서 프롭스에 인벌티드라는 속성이 있으면 추가적으로 적용해라! */
  ${props => props.inverted &&
    css`
      background-color: transparent;
      border: 2px solid white;
      color: white;
      &:hover {
        background: white;
        color: black;
      }
    `
  }

  &+button {
    margin-left: 1rem;
  }
`;

export default Button;