import { GetServerSidePropsContext } from "next";
import { Album, Artist, Category, LastPlayed, Playlist } from "../types/home";
import { getApiClient } from "./apiClient";

interface GetReleasesResponse {
  albums: {
    items: Album[];
  };
}

interface GetCategoriesResponse {
  categories: {
    items: Category[];
  };
}

interface GetPlaylistsResponse {
  message: string;
  playlists: {
    items: Playlist[];
  };
}

interface GetUserTopArtistsResponse {
  items: Artist[];
}

interface GetLastPlayedResponse {
  items: LastPlayed[];
}

export const getReleases = async (ctx: GetServerSidePropsContext) => {
  const apiClient = getApiClient(ctx);

  const { data } = await apiClient.get<GetReleasesResponse>(
    "browse/new-releases",
    {
      params: {
        country: "BR",
        limit: 8,
      },
    }
  );

  return data.albums.items;
};

export const getCategories = async (ctx: GetServerSidePropsContext) => {
  const apiClient = getApiClient(ctx);

  const { data } = await apiClient.get<GetCategoriesResponse>(
    "browse/categories",
    {
      params: {
        country: "BR",
        limit: 8,
      },
    }
  );

  return data.categories.items;
};

export const getPlaylists = async (ctx: GetServerSidePropsContext) => {
  const apiClient = getApiClient(ctx);

  const { data } = await apiClient.get<GetPlaylistsResponse>(
    "browse/featured-playlists",
    {
      params: {
        country: "BR",
        limit: 8,
      },
    }
  );

  return data;
};

export const getUserTopArtists = async (ctx: GetServerSidePropsContext) => {
  const apiClient = getApiClient(ctx);

  const { data } = await apiClient.get<GetUserTopArtistsResponse>(
    "me/top/artists",
    {
      params: {
        time_range: "short_term",
        limit: 8,
      },
    }
  );

  return data.items;
};

export const getLastPlayed = async (ctx: GetServerSidePropsContext) => {
  const apiClient = getApiClient(ctx);

  const { data } = await apiClient.get<GetLastPlayedResponse>(
    "me/player/recently-played",
    {
      params: {
        limit: 6,
      },
    }
  );

  return data.items;
};
