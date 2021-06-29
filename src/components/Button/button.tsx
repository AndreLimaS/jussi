import React from "react";
import { ContainerButton } from "./styles";
import { ButtonPropsTypes } from "./types";

const Button = (props: ButtonPropsTypes) => {
  const { text, textcolor, borderColor, background, borderRadius } = props;
  return <ContainerButton {...props}>{text}</ContainerButton>;
};

export default Button;
