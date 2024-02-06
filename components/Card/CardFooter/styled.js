import styled from "styled-components";

export const Footer = styled.div`
  color: rgb(101, 109, 118);
  display: flex;
  font-size: 0.75rem;
  margin: 0.625rem 0 0 0;
`;

export const LanguageBox = styled.div`
  align-items: center;
  display: flex;
  margin: 0 1.25rem 0 0;
  width: fit-content;
`;

export const LanguageBadge = styled.div`
  background: ${({ color = "transparent" }) => color};
  border-radius: 50%;
  height: 0.625rem;
  margin: 0 0.3125rem 0 0;
  width: 0.625rem;
`;

export const Forks = styled.div`
  align-items: flex-end;
  display: flex;
`;

export const ForkLink = styled.a`
  background-color: #ddf4ff;
  border-radius: 0.625rem;
  color: rgb(9, 105, 218);
  cursor: pointer;
  font-size: 0.75rem;
  line-height: 1.375rem;
  padding: 0 0.625rem;
  text-decoration: none;
`;

export const ForkContainer = styled.div`
  align-items: center;
  display: flex;
  margin: 0 0.625rem 0 0;

  :hover {
    background-color: rgb(9, 105, 218);
    color: white;
  }
`;

export const ForkIcon = styled.img`
  height: 1.875rem;
  width: 1.875rem;
`;