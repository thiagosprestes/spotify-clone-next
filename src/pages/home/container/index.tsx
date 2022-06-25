import React from "react";
import {
  Album,
  Artist,
  Category,
  LastPlayed,
  Playlist,
} from "../../../types/home";
import { ListItem, ListType } from "../components/ListItem";
import {
  Container,
  LastPlayedContainer,
  LastPlayedContainerItem,
} from "./styles";

interface HomeContainerProps {
  lastPlayed: LastPlayed[];
  releases: Album[];
  playlistsTitle: string;
  playlists: Playlist[];
  artists: Artist[];
  categories: Category[];
}

const HomeContainer = ({
  lastPlayed,
  releases,
  playlistsTitle,
  playlists,
  artists,
  categories,
}: HomeContainerProps) => (
  <Container>
    <LastPlayedContainer>
      {lastPlayed.map((item) => (
        <LastPlayedContainerItem key={item.track.id}>
          <img src={item.track.album.images[0].url} />
          <h1>{item.track.name}</h1>
        </LastPlayedContainerItem>
      ))}
    </LastPlayedContainer>
    <ListItem
      releases={releases}
      title="Novos lançamentos"
      type={ListType.releases}
    />
    <ListItem
      playlists={playlists}
      title={playlistsTitle}
      type={ListType.playlists}
    />
    <ListItem
      artists={artists}
      title="Seus artistas favoritos"
      type={ListType.artists}
    />
    <ListItem
      categories={categories}
      title="Categorias em alta"
      type={ListType.categories}
    />
  </Container>
);

export { HomeContainer };
