import Router from "next/router";
import { setCookie } from "nookies";
import { createContext, ReactNode, useState } from "react";
import { api } from "../services/api";
import { getApiClient } from "../services/apiClient";

interface AuthContextType {
  isAuthenticated: boolean;
  signIn(token: string): void;
}

export const AuthContext = createContext({} as AuthContextType);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const apiClient = getApiClient();

  const signIn = (token: string) => {
    setCookie(undefined, "spotifyCloneApp.authToken", token, {
      maxAge: 60 * 60 * 1, // 1 hour,
      secure: true,
    });

    setIsAuthenticated(true);

    apiClient.defaults.headers.common.Authorization = `Bearer ${token}`;

    Router.push("/home");
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, signIn }}>
      {children}
    </AuthContext.Provider>
  );
};
