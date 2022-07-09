import Image from "next/image";
import { ButtonComponent as Button } from "../../../components/Button";
import { Container } from "./styles";

export enum State {
  default = "default",
  loading = "loading",
}

interface LoginContainerProps {
  onLogin: () => void;
  state: State;
}

const LoginContainer = ({ onLogin, state }: LoginContainerProps) => {
  const renderContainer = (
    <>
      <Image
        className="logo"
        src="https://raw.githubusercontent.com/thiagosprestes/Spotify-clone-app-react/master/my-app/src/assets/spotify-clone-app-logo-white.png"
        width="250px"
        height="90px"
        alt="clone-app-logo"
      />
      <Button onClick={onLogin}>ENTRAR</Button>
    </>
  );

  const renderLoading = <h1>Carregando...</h1>;

  return (
    <Container>
      {
        {
          [State.default]: renderContainer,
          [State.loading]: renderLoading,
        }[state]
      }
    </Container>
  );
};

export { LoginContainer };
