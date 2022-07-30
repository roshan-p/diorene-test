import * as React from "react";
import { StyledButton } from "./Button.styled";

interface ButtonProps {
  btnText: string;
  variant: string;
  size: string;
  post?: {
    id: string;
    text: string;
  };
  onClick: () => void;
}

const Button: React.FC<ButtonProps> = ({
  btnText,
  variant,
  size,
  onClick,
}) => {
  return (
    <StyledButton
      variant={variant || "primary"}
      size={size||"lg"}
      onClick={onClick}
    >
      {btnText}
    </StyledButton>
  );
};

export default Button;
