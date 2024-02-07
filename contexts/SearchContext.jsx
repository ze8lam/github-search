import React, {
  createContext,
  useContext,
  useState,
  useRef,
  useEffect,
  useCallback,
} from "react";

const apiUrl = "https://api.github.com/search";

export const searchTypes = Object.freeze({
  REPOSITORY: "repository",
  USER: "user",
});

export const SearchContext = createContext({
  changeSearchType: () => {},
  data: {},
  error: null,
  fetchData: () => {},
  isLoading: false,
  searchType: searchTypes.REPOSITORY,
});

SearchContext.displayName = "SearchContext";

export function SearchProvider({ children = null }) {
  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState();
  const [searchType, setSearchType] = useState(searchTypes.REPOSITORY);

  const queryRef = useRef("");

  const fetchData = useCallback(
    async (query) => {
      if (!query || !query.trim().length) {
        setData({});
        return;
      }

      let formattedQuery = query.trim().toLowerCase();
      queryRef.current = formattedQuery;
      try {
        let response;

        setIsLoading(true);

        if (searchType === searchTypes.REPOSITORY) {
          response = await fetch(`${apiUrl}/repositories?q=${formattedQuery}`);
        } else {
          response = await fetch(`${apiUrl}/users?q=${formattedQuery}`);
        }

        if (!response.ok) {
          let errorMessage;
          if (searchType === searchTypes.REPOSITORY) {
            errorMessage = "Error fetching repository data.";
          } else {
            errorMessage = "Error fetching user data.";
          }
          throw new Error(`${response.status} - ${errorMessage}`);
        }

        const responseData = await response.json();

        setIsLoading(false);
        setData(responseData);
      } catch (error) {
        setIsLoading(false);
        setError(error);
        console.error(`Error fetching ${searchType} data:`, error);
      }
    },
    [searchType]
  );

  useEffect(() => {
    if (searchType && queryRef.current) {
      fetchData(queryRef.current);
    }
  }, [searchType, fetchData]);

  const changeSearchType = (type) => {
    setData({});

    if (type === searchTypes.REPOSITORY || type === searchTypes.USER) {
      setSearchType(type);
    }
  };

  return (
    <SearchContext.Provider
      value={{
        changeSearchType,
        data,
        error,
        fetchData,
        isLoading,
        searchType,
      }}
    >
      {children}
    </SearchContext.Provider>
  );
}

export const useSearchContext = () => useContext(SearchContext);
