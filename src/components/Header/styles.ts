import styled from "styled-components";

export const Container = styled.header`
  padding: 20px 32px;
  background-color: transparent;

  .navigation {
    background-color: var(--background-press);
    border-radius: 50%;
    cursor: pointer;
  }

  .navigation + .navigation {
    margin-left: 20px;
  }
`;
