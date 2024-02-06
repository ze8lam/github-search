import styled, { keyframes } from "styled-components";

export const spin = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

export const SpinnerContainer = styled.div`
  align-items: center;
  display: flex;
  height: 100%;
  justify-content: center;
`;

export const Spinner = styled.div`
  border: .25rem solid rgb(255 255 255 / 70%);
  border-top: .25rem solid transparent;
  border-radius: 50%;
  width: 4.375rem;
  height: 4.375rem;
  animation: ${spin} 1s linear infinite;
`;
