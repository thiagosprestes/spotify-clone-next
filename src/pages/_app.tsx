import type { AppProps } from "next/app";
import { AuthProvider } from "../contexts/authContext";
import { GlobalStyles } from "../styles/globals";
import { Routes } from "./routes";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <AuthProvider>
      <GlobalStyles />
      <Routes Component={Component} {...pageProps} />
    </AuthProvider>
  );
}

export default MyApp;
