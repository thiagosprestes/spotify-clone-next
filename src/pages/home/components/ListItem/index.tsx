import React from "react";
import { Album, Artist, Category, Playlist } from "../../../../types/home";

import { Container, Item, ArtistItem } from "./styles";

export enum ListType {
  releases = "releases",
  categories = "categories",
  playlists = "playlists",
  artists = "artists",
}

interface ListItemProps {
  title: string;
  releases?: Album[];
  categories?: Category[];
  playlists?: Playlist[];
  artists?: Artist[];
  type: ListType;
}

const ListItem = ({
  title,
  releases,
  categories,
  playlists,
  type,
  artists,
}: ListItemProps) => {
  const renderReleases = (
    <>
      {releases &&
        releases.map((item) => (
          <Item key={item.name}>
            <img src={item.images[0].url} />
            <p className="item-name">{item.name}</p>
            <div className="artists">
              {item.artists.map((artist) => (
                <span key={artist.name}>{artist.name}</span>
              ))}
            </div>
          </Item>
        ))}
    </>
  );

  const renderCategories = (
    <>
      {categories &&
        categories.map((item) => (
          <Item key={item.name}>
            <img src={item.icons[0].url} />
            <p className="item-name">{item.name}</p>
          </Item>
        ))}
    </>
  );

  const renderPlaylists = (
    <>
      {playlists &&
        playlists.map((item) => (
          <Item key={item.name}>
            <img src={item.images[0].url} />
            <p className="item-name">{item.name}</p>
            <span className="playlist-description">{item.description}</span>
          </Item>
        ))}
    </>
  );

  const renderArtists = (
    <>
      {artists &&
        artists.map((item) => (
          <ArtistItem key={item.name}>
            <img src={item.images[0].url} />
            <p className="item-name">{item.name}</p>
          </ArtistItem>
        ))}
    </>
  );

  return (
    <Container>
      <h1>{title}</h1>
      <div className="list">
        {
          {
            [ListType.releases]: renderReleases,
            [ListType.categories]: renderCategories,
            [ListType.playlists]: renderPlaylists,
            [ListType.artists]: renderArtists,
          }[type]
        }
      </div>
    </Container>
  );
};

export { ListItem };
