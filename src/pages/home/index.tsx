import { GetServerSideProps } from "next";
import React from "react";
import { verifyAuth } from "../../middlewares/verifyAuth";
import {
  getCategories,
  getLastPlayed,
  getPlaylists,
  getReleases,
  getUserTopArtists,
} from "../../services/homeService";
import {
  Album,
  Artist,
  Category,
  LastPlayed,
  Playlist,
} from "../../types/home";
import { HomeContainer } from "./container";

interface HomeProps {
  lastPlayed: LastPlayed[];
  releases: Album[];
  playlistsTitle: string;
  playlists: Playlist[];
  artists: Artist[];
  categories: Category[];
}

const Home = ({
  lastPlayed,
  releases,
  playlistsTitle,
  playlists,
  artists,
  categories,
}: HomeProps) => {
  return (
    <HomeContainer
      lastPlayed={lastPlayed}
      releases={releases}
      playlistsTitle={playlistsTitle}
      playlists={playlists}
      artists={artists}
      categories={categories}
    />
  );
};

export const getServerSideProps: GetServerSideProps<HomeProps> = async (
  ctx
) => {
  const lastPlayed = await getLastPlayed(ctx);
  const releases = await getReleases(ctx);
  const { playlists, message } = await getPlaylists(ctx);
  const artists = await getUserTopArtists(ctx);
  const categories = await getCategories(ctx);

  return {
    props: {
      lastPlayed,
      releases,
      playlistsTitle: message,
      playlists: playlists.items,
      artists,
      categories,
    },
  };
};

export default verifyAuth(Home);
