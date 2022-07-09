import styled from "styled-components";

export const Container = styled.main`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--background-base);
  flex-direction: column;

  button {
    margin-top: 50px;
  }

  h1 {
    color: var(--text-base);
  }
`;
