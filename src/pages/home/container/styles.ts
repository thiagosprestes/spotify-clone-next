import styled from "styled-components";

export const Container = styled.div`
  padding: 0 32px;
`;

export const LastPlayedContainer = styled.div`
  display: grid;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(30%, 1fr));
  gap: 20px;
`;

export const LastPlayedContainerItem = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  background-color: var(--background-tinted-base);
  border-radius: 4px;
  cursor: pointer;

  img {
    width: 80px;
    height: 80px;
    margin-right: 20px;
  }

  h1 {
    font-size: 14px;
    color: var(--text-base);
  }

  &:hover {
    background-color: var(--background-tinted-highlight);
    transition: var(--default-transition);
  }
`;
