import { searchTypes } from "../../contexts/SearchContext";
import CardFooter from "./CardFooter";
import CardHeader from "./CardHeader";
import { CardDescription, SearchCard } from "./styled";

function Card({
  avatar,
  description,
  forksUrl,
  languagesUrl,
  link,
  name,
  searchType,
}) {
  return (
    <SearchCard>
      <CardHeader avatar={avatar} name={name} link={link} />
      {description && <CardDescription>{description}</CardDescription>}
      {searchType == searchTypes.REPOSITORY && (
        <CardFooter languagesUrl={languagesUrl} forksUrl={forksUrl} />
      )}
    </SearchCard>
  );
}

export default Card;
