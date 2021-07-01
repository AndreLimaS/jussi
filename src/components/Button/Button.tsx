import React from "react";
import { ContainerButton } from "./Styles";
import { ButtonPropsTypes } from "./types";

const Button = ({ text, ...props }: ButtonPropsTypes) => {
  return <ContainerButton {...props}>{text}</ContainerButton>;
};

export default Button;
