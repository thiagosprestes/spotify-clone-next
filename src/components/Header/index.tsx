import React from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { useGetStyleVariable } from "../../hooks/useGetStyleVariable";

import { Container } from "./styles";

const Header = () => {
  const color = useGetStyleVariable("--text-base");

  return (
    <Container>
      <FiChevronLeft size={28} color={color} className="navigation" />
      <FiChevronRight size={28} color={color} className="navigation" />
    </Container>
  );
};

export { Header };
