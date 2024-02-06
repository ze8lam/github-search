import styled from "styled-components";

export const InputContainer = styled.div`
  display: flex;
  border: 1px solid;
  border-radius: 1.25rem;
  min-width: 31.25rem;
  align-items: center;
  box-shadow: 0 0.125rem 0.5rem rgba(0, 0, 0, 0.4);

  :focus {
    outline: 0;
  }

  border-color: ${({ $isFocused }) =>
    $isFocused ? "rgb(47, 129, 247)" : "transparent"};
`;

export const Icon = styled.img`
  width: 26px;
  margin: 0 16px;
`;

export const InputField = styled.input`
  background-color: inherit;
  border: none;
  flex-grow: 1;
  font-size: 1em;
  line-height: 16px;
  padding: 0px;
  width: 100%;
  height: 40px;

  :focus {
    outline: 0;
  }
`;
