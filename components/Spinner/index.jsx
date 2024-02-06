import React from "react";
import { SpinnerContainer, Spinner } from "./styled";

const LoadingSpinner = () => {
  return (
    <SpinnerContainer>
      <Spinner data-testid="spinner" />
    </SpinnerContainer>
  );
};

export default LoadingSpinner;
