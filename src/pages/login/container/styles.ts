import styled from "styled-components";
import { colors } from "../../../styles/styleguide";

export const Container = styled.main`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${colors.primaryBlack};
  flex-direction: column;

  button {
    margin-top: 50px;
  }
`;
