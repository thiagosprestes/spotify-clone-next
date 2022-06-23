import styled from "styled-components";
import { colors } from "./styleguide";

export const Container = styled.div`
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  display: grid;
  grid-template-columns: 240px 1fr;
  height: 100%;
  background-color: ${colors.primaryBlack};
`;
