import styled from "styled-components";

export const Container = styled.div`
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  display: grid;
  grid-template-columns: 240px 1fr;
  background-color: var(--background-base);
  height: 100%;

  main {
    background-color: var(--background-base);
  }
`;
