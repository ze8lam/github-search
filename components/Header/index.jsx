import SearchBar from "../../components/SearchBar";
import { searchTypes, useSearchContext } from "../../contexts/SearchContext";
import { RadioContainer } from "./styled";

function Header() {
  const { searchType, changeSearchType } = useSearchContext();

  const handleOnRadioChange = (e) => {
    changeSearchType(e.target.value);
  };

  return (
    <div>
      <SearchBar />
      <RadioContainer>
        <input
          type="radio"
          name={searchTypes.REPOSITORY}
          id="repository"
          value={searchTypes.REPOSITORY}
          checked={searchType === searchTypes.REPOSITORY}
          onChange={handleOnRadioChange}
        />
        <label htmlFor="repository">{searchTypes.REPOSITORY}</label>
        <input
          type="radio"
          name={searchTypes.USER}
          id="user"
          value={searchTypes.USER}
          checked={searchType === searchTypes.USER}
          onChange={handleOnRadioChange}
        />
        <label htmlFor="user">{searchTypes.USER}</label>
      </RadioContainer>
    </div>
  );
}

export default Header;
