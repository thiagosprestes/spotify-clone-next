import styled from "styled-components";
import { colors } from "../../styles/styleguide";

export const Container = styled.header`
  padding: 20px 32px;

  .navigation {
    background-color: ${colors.black};
    border-radius: 50%;
    cursor: pointer;
  }

  .navigation + .navigation {
    margin-left: 20px;
  }
`;
