import Image from "next/image";
import { ButtonComponent as Button } from "../../../components/Button";
import { Container } from "./styles";

interface LoginContainerProps {
  onLogin: () => void;
}

const LoginContainer = ({ onLogin }: LoginContainerProps) => (
  <Container>
    <Image
      className="logo"
      src="https://raw.githubusercontent.com/thiagosprestes/Spotify-clone-app-react/master/my-app/src/assets/spotify-clone-app-logo-white.png"
      width="250px"
      height="90px"
      alt="clone-app-logo"
    />
    <Button onClick={onLogin}>ENTRAR</Button>
  </Container>
);

export { LoginContainer };
