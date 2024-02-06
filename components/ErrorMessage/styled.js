import styled from "styled-components";

export const ErrorContainer = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const ErrorIcon = styled.img`
  filter: drop-shadow(0rem 1.5625rem 1rem rgba(0, 0, 0, 0.2));
  height: 20rem;
  width: 20rem;
`;

export const ErrorMessageText = styled.p`
  color: #333;
  font-size: 1.5rem;
  font-weight: bold;
  overflow: hidden;
  text-align: center;
  text-overflow: ellipsis;
  white-space: nowrap;
`;
