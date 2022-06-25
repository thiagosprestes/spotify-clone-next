import styled from "styled-components";

export const Container = styled.div`
  background-color: var(--background-press);
  height: 100%;
  color: #fff;
  padding: 24px 22px;

  img {
    width: 130px;
  }

  .options {
    margin-top: 12px;
  }

  .item {
    display: flex;
    flex-direction: row;
    align-items: center;
  }

  .item:hover {
    cursor: pointer;
  }

  .item p {
    margin-left: 12px;
    font-weight: bold;
    font-size: 14px;
  }
`;
