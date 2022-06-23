import Router from "next/router";
import { setCookie } from "nookies";
import { createContext, ReactNode, useState } from "react";

interface AuthContextType {
  isAuthenticated: boolean;
  signIn(token: string): void;
}

export const AuthContext = createContext({} as AuthContextType);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const signIn = (token: string) => {
    setCookie(undefined, "spotifyCloneApp.authToken", token, {
      maxAge: 60 * 60 * 1, // 1 hour
    });

    setIsAuthenticated(true);

    Router.push("/home");
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, signIn }}>
      {children}
    </AuthContext.Provider>
  );
};
