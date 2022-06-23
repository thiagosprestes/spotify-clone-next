import { AppProps } from "next/app";
import React, { useContext } from "react";
import { Header } from "../components/Header";
import Sidebar from "../components/Sidebar";
import { AuthContext } from "../contexts/authContext";
import { Container } from "../styles/app";
import Login from "./login";

const Routes = ({ Component, pageProps }: AppProps) => {
  const { isAuthenticated } = useContext(AuthContext);

  if (isAuthenticated)
    return (
      <Container>
        <Sidebar />
        <main>
          <Header />
          <Component {...pageProps} />
        </main>
      </Container>
    );

  return <Login />;
};

export { Routes };
