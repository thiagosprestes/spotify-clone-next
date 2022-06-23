import React from "react";
import { Container, LastPlayedList } from "./styles";

interface HomeContainerProps {}

const HomeContainer = ({}: HomeContainerProps) => (
  <Container>
    <div className="lastPlayed">
      <h1>Olá</h1>
      <LastPlayedList>
        <div className="lastPlayedListItem">
          <img src="https://yt3.ggpht.com/ytc/AKedOLR7tFH2y-LHbKuFiK4hmv3lUFXVt8FQXol5tljRsA=s900-c-k-c0x00ffffff-no-rj" />
          <h2>Black Veil Brides</h2>
        </div>
        <div className="lastPlayedListItem">
          <img src="https://yt3.ggpht.com/ytc/AKedOLR7tFH2y-LHbKuFiK4hmv3lUFXVt8FQXol5tljRsA=s900-c-k-c0x00ffffff-no-rj" />
          <h2>Black Veil Brides</h2>
        </div>
        <div className="lastPlayedListItem">
          <img src="https://yt3.ggpht.com/ytc/AKedOLR7tFH2y-LHbKuFiK4hmv3lUFXVt8FQXol5tljRsA=s900-c-k-c0x00ffffff-no-rj" />
          <h2>Black Veil Brides</h2>
        </div>
      </LastPlayedList>
    </div>
  </Container>
);

export { HomeContainer };
