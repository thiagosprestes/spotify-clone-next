import styled from "styled-components";
import { colors } from "../../../styles/styleguide";

export const Container = styled.div`
  margin-top: 25px;
  background-color: ${colors.primaryBlack};
  padding: 0 32px;

  h1 {
    margin: 0;
    color: ${colors.white};
    margin-bottom: 20px;
  }
`;

export const LastPlayedList = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 20px;

  .lastPlayedListItem {
    display: flex;
    flex-direction: row;
    align-items: center;
    border-radius: 8px;
    background-color: rgba(255, 255, 255, 0.1);
    padding: 0 20px 0 0;
    cursor: pointer;

    img {
      width: 80px;
      margin-right: 12px;
      border-top-left-radius: 6px;
      border-bottom-left-radius: 6px;
    }

    h2 {
      font-size: 16px;
      color: ${colors.white};
    }
  }

  .lastPlayedListItem:hover {
    background-color: rgba(255, 255, 255, 0.3);
    transition: all 0.5s;
  }
`;
