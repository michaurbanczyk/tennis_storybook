import React from "react";
import { ButtonProps as MuiButtonProps } from "@mui/material";
import { StyledButton } from "./Button.styles";

type ButtonBaseProps = Pick<MuiButtonProps, "color" | "variant">;

export interface ButtonProps extends ButtonBaseProps {
  label: string;
}

export const Button = ({ label, ...rest }: ButtonProps) => {
  const { color } = rest;
  return (
    <StyledButton {...rest} color={color}>
      {label}
    </StyledButton>
  );
};
