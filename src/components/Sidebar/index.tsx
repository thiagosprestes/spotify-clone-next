import React from "react";
import { GoSearch } from "react-icons/go";
import { MdHomeFilled } from "react-icons/md";
import { getStyleVariable } from "../../utils/getStyleVariable";
import { Container } from "./styles";

const Sidebar: React.FC = () => {
  const menuOptions = [
    {
      name: "Início",
      icon: (
        <MdHomeFilled size={getStyleVariable("--default-menu-icon-size")} />
      ),
    },
    {
      name: "Buscar",
      icon: <GoSearch size={getStyleVariable("--default-menu-icon-size")} />,
    },
  ];

  return (
    <Container>
      <img src="https://raw.githubusercontent.com/thiagosprestes/Spotify-clone-app-react/master/my-app/src/assets/spotify-clone-app-logo-white.png" />
      <div className="options">
        {menuOptions.map((item) => (
          <div className="item" key={item.name}>
            {item.icon}
            <p>{item.name}</p>
          </div>
        ))}
      </div>
    </Container>
  );
};

export default Sidebar;
