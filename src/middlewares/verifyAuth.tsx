import Router from "next/router";
import { parseCookies } from "nookies";
import { ElementType, useEffect } from "react";

export const verifyAuth = (Component: ElementType) => {
  const Wrapper = (props: any) => {
    useEffect(() => {
      const { "spotifyCloneApp.authToken": authToken } = parseCookies();

      if (!authToken) Router.push("/login");
    }, []);

    return <Component {...props} />;
  };

  return Wrapper;
};
