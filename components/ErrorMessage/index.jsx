import React from "react";
import { ErrorContainer, ErrorIcon, ErrorMessageText } from "./styled";
import Icon from "../../assets/error-icon.svg";

function ErrorMessage({ message }) {
  return (
    <ErrorContainer>
      <ErrorIcon src={Icon.src} alt="Error Icon" />
      <ErrorMessageText>{message}</ErrorMessageText>
    </ErrorContainer>
  );
}

export default ErrorMessage;
