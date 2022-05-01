import Image from "next/image";
import { ReactNode } from "react";
import { Button } from "./styles";

interface ButtonComponentProps {
  children: ReactNode;
  onClick: () => void;
}

const ButtonComponent = ({ children, onClick }: ButtonComponentProps) => (
  <Button onClick={onClick}>
    <p>{children}</p>
  </Button>
);

export { ButtonComponent };
