import * as React from "react";
import { StyledButton,Loader } from "./Button.styled";


interface ButtonProps {
  btnText: string;
  variant: string;
  size: string;
  disabled: boolean;
  isLoading: boolean;
  onClick: () => void;
}

const Button: React.FC<ButtonProps> = ({
  btnText,
  variant,
  size,
  disabled,
  isLoading,
  onClick,
}) => {
  return (
    <StyledButton
      variant={variant || "primary"}
      size={size || "lg"}
      onClick={onClick}
      disabled={disabled || false}
    >
      {!isLoading&&btnText}
      {isLoading&&<Loader size={20} thickness={5}  buttonVariant={variant || "primary"} />}
    </StyledButton>
  );
};

export default Button;
