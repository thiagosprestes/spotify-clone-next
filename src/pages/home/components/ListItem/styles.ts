import styled from "styled-components";

export const Container = styled.div`
  margin: 20px 0;

  h1 {
    font-size: 24px;
    color: var(--text-base);
  }

  .list {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));
    gap: 20px;
  }
`;

export const Item = styled.div`
  background-color: var(--home-list-item-background);
  padding: 16px;
  border-radius: 4px;
  transition: var(--default-transition);
  cursor: pointer;

  img {
    width: 100%;
  }

  .item-name {
    font-size: 14px;
    font-weight: bold;
    color: var(--text-base);
    max-width: 100%;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
  }

  .artists,
  .playlist-description {
    max-width: 100%;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
    color: var(--text-subdued);
    font-size: 14px;
    font-weight: 400;
    display: inline-block;
  }

  span + span::before {
    content: ", ";
  }

  &:hover {
    background-color: var(--home-list-item-background-hover);
  }
`;

export const ArtistItem = styled.div`
  background-color: var(--home-list-item-background);
  padding: 16px;
  border-radius: 4px;
  transition: var(--default-transition);
  cursor: pointer;

  img {
    border-radius: 50%;
    width: 100%;
    height: 70%;
    object-fit: cover;
  }

  p {
    font-size: 14px;
    font-weight: bold;
    color: var(--text-base);
    max-width: 180px;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
  }

  &:hover {
    background-color: var(--home-list-item-background-hover);
  }
`;
