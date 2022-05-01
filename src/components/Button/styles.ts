import styled from "styled-components";
import { colors } from "../../styles/styleguide";

export const Button = styled.button`
  background-color: ${colors.white};
  font-weight: bold;
  border-radius: 50px;
  width: 200px;
  letter-spacing: 1px;
  font-size: 16px;

  &:hover {
    opacity: 0.8;
    transition: all 0.3s;
    cursor: pointer;
  }
`;
