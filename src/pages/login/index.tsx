import { AUTH_REDIRECT_URL, AUTH_SCOPE, AUTH_URL } from "../../utils/constants";
import { LoginContainer } from "./container";

const Login = () => {
  const handleOnLogin = async () => {
    const url = `${AUTH_URL}?response_type=token&client_id=${process.env.NEXT_PUBLIC_API_CLIENT_ID}&scope=${AUTH_SCOPE}&redirect_uri=${AUTH_REDIRECT_URL}`;

    window.open(url);
  };

  return <LoginContainer onLogin={handleOnLogin} />;
};

export default Login;
