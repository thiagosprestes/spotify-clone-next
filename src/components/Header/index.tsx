import React from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { colors } from "../../styles/styleguide";

import { Container } from "./styles";

const Header = () => (
  <Container>
    <FiChevronLeft size={28} color={colors.white} className="navigation" />
    <FiChevronRight size={28} color={colors.white} className="navigation" />
  </Container>
);

export { Header };
