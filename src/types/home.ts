import { ReactNode } from "react";

export interface MenuOption {
  name: string;
  icon: ReactNode;
}

export interface Album {
  album_type: string;
  artists: Artist[];
  images: Image[];
  name: string;
  release_date: string;
  release_date_precision: string;
  total_tracks: number;
  type: string;
  uri: string;
}

export interface Artist {
  name: string;
  images: Image[];
}

export interface ExternalUrls {
  spotify: string;
}

export interface Image {
  height: number;
  url: string;
  width: number;
}

export interface CategoryIcon {
  height: number;
  url: string;
  width: number;
}

export interface Category {
  href: string;
  icons: CategoryIcon[];
  id: string;
  name: string;
}

export interface Playlist {
  external_urls: {
    spotify: string;
  };
  images: Image[];
  name: string;
  description: string;
}

export interface Track {
  album: Album;
  artists: Artist[];
  duration_ms: number;
  id: string;
  name: string;
  preview_url: string;
  type: string;
  uri: string;
}

export interface LastPlayed {
  track: Track;
  played_at: Date;
}
