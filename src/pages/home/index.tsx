import React from "react";
import { verifyAuth } from "../../middlewares/verifyAuth";
import { HomeContainer } from "./container";

const Home = () => {
  return <HomeContainer />;
};

export default verifyAuth(Home);
