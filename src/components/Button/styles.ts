import styled from "styled-components";

export const Button = styled.button`
  background-color: var(--text-base);
  font-weight: bold;
  border-radius: 50px;
  width: 200px;
  letter-spacing: 1px;
  font-size: 16px;

  &:hover {
    opacity: 0.8;
    transition: var(--default-transition);
    cursor: pointer;
  }
`;
