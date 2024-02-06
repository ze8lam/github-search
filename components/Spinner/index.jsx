import React from "react";
import { SpinnerContainer, Spinner } from "./styled";

function LoadingSpinner() {
  return (
    <SpinnerContainer>
      <Spinner data-testid="spinner" />
    </SpinnerContainer>
  );
}

export default LoadingSpinner;
