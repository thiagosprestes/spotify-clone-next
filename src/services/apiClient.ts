import axios from "axios";
import { parseCookies } from "nookies";

export const getApiClient = (ctx?: any) => {
  const { "spotifyCloneApp.authToken": authToken } = parseCookies(ctx);

  const api = axios.create({
    baseURL: "https://api.spotify.com/v1/",
  });

  if (authToken) {
    api.defaults.headers.common.Authorization = `Bearer ${authToken}`;
  }

  return api;
};
