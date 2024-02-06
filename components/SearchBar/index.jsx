import { InputField, Icon, InputContainer } from "./styled";
import { useSearchContext } from "../../contexts/SearchContext";
import searchIcon from "../../assets/search.svg";
import { useState } from "react";

function debounce(func, delay) {
  let timeoutId;

  return function (...args) {
    clearTimeout(timeoutId);

    timeoutId = setTimeout(() => {
      func.apply(this, args);
    }, delay);
  };
}

export default function SearchBar() {
  const { fetchData } = useSearchContext();
  const [isFocused, setIsFocused] = useState(false);

  const handleOnFocus = () => {
    setIsFocused(true);
  };

  const handleOnBlur = () => {
    setIsFocused(false);
  };

  const handleInputChange = (e) => {
    fetchData(e.target.value);
  };

  return (
    <InputContainer $isFocused={isFocused}>
      <Icon src={searchIcon.src} alt="Search icon" />
      <InputField
        onFocus={handleOnFocus}
        onBlur={handleOnBlur}
        maxLength="256"
        type="text"
        placeholder="Search"
        onInput={debounce(handleInputChange, 500)}
      />
    </InputContainer>
  );
}
