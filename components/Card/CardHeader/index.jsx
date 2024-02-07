import React from "react";
import {
  AvatarWrapper,
  Avatar,
  Header,
  SearchCardLink,
  SearchHeader,
} from "./styled";

function CardHeader({ avatar, name, link }) {
  return (
    <Header>
      <AvatarWrapper>
        <Avatar alt="Avatar" src={avatar} />
      </AvatarWrapper>

      <SearchCardLink target="_blank" href={link}>
        <SearchHeader>{name}</SearchHeader>
      </SearchCardLink>
    </Header>
  );
}

export default CardHeader;
