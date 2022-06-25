import type { AppProps } from "next/app";
import { useRouter } from "next/router";
import { Header } from "../components/Header";
import Sidebar from "../components/Sidebar";
import { AuthProvider } from "../contexts/AuthContext";
import { Container } from "../styles/app";
import { GlobalStyles } from "../styles/globals";

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();

  return (
    <AuthProvider>
      <GlobalStyles />
      {router.pathname !== "/login" ? (
        <Container>
          <Sidebar />
          <main>
            <Header />
            <Component {...pageProps} />
          </main>
        </Container>
      ) : (
        <Component {...pageProps} />
      )}
    </AuthProvider>
  );
}

export default MyApp;
