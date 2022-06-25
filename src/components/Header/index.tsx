import React from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { getStyleVariable } from "../../utils/getStyleVariable";

import { Container } from "./styles";

const Header = () => (
  <Container>
    <FiChevronLeft
      size={28}
      color={getStyleVariable("--text-base")}
      className="navigation"
    />
    <FiChevronRight
      size={28}
      color={getStyleVariable("--text-base")}
      className="navigation"
    />
  </Container>
);

export { Header };
