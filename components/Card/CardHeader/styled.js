import styled from "styled-components";

export const Header = styled.div`
  display: flex;
  flex-direction: row;
`;

export const AvatarWrapper = styled.div`
  align-items: center;
  display: flex;
  margin-right: .625rem;
`;

export const Avatar = styled.img`
  border-radius: 50%;
  height: 2.5rem;
  width: 2.5rem;
`;

export const SearchCardLink = styled.a`
  color: rgb(47, 129, 247);
  cursor: pointer;

  :hover {
    text-decoration: underline;
  }
`;

export const SearchHeader = styled.p`
  align-items: center;
  display: flex;
  font-weight: 500;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;
