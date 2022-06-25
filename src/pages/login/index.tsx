import { useContext, useEffect } from "react";
import { AuthContext } from "../../contexts/AuthContext";
import { AUTH_REDIRECT_URL, AUTH_SCOPE, AUTH_URL } from "../../utils/constants";
import { LoginContainer } from "./container";

const Login = () => {
  const { signIn } = useContext(AuthContext);

  const handleOnLogin = async () => {
    const url = `${AUTH_URL}?response_type=token&client_id=${process.env.NEXT_PUBLIC_API_CLIENT_ID}&scope=${AUTH_SCOPE}&redirect_uri=${AUTH_REDIRECT_URL}`;

    window.location.href = url;
  };

  useEffect(() => {
    const hasToken = window.location.hash.includes("access_token");

    if (hasToken) {
      const token = window.location.hash
        .split("&")[0]
        .split("access_token=")
        .pop();

      signIn(token!);
    }
  }, []);

  return <LoginContainer onLogin={handleOnLogin} />;
};

export default Login;
