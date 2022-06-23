import Router from "next/router";
import { parseCookies } from "nookies";
import { ElementType, useEffect } from "react";

export const verifyAuth = (Component: ElementType) => {
  const Wrapper = (props: any) => {
    useEffect(() => {
      const cookies = parseCookies();

      if (!cookies) Router.push("/login");
    }, []);

    return <Component {...props} />;
  };

  return Wrapper;
};
