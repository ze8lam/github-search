import Header from "components/Header";
import Card from "../components/Card";
import ErrorMessage from "../components/ErrorMessage";
import LoadingSpinner from "../components/Spinner";
import { searchTypes, useSearchContext } from "../contexts/SearchContext";
import { AppContainer, ContentContainer } from "./styled";

function Home() {
  const { data, isLoading, error, searchType } = useSearchContext();

  return (
    <AppContainer>
      <Header />
      <ContentContainer>
        {isLoading && !error && <LoadingSpinner />}
        {error && <ErrorMessage message={error.message} />}
        {!isLoading && !error && (
          <div>
            {data?.items &&
              data?.items.map((item) => {
                if (searchType === searchTypes.REPOSITORY) {
                  return (
                    <Card
                      key={item.id}
                      avatar={item.owner?.avatar_url}
                      description={item.description}
                      languagesUrl={item.languages_url}
                      forksUrl={item.forks_url}
                      link={item.html_url}
                      name={item.name}
                      searchType={searchType}
                    />
                  );
                } else if (searchType === searchTypes.USER) {
                  return (
                    <Card
                      key={item.id}
                      avatar={item.avatar_url}
                      link={item.html_url}
                      name={item.login}
                      searchType={searchType}
                    />
                  );
                }
                return null;
              })}
          </div>
        )}
      </ContentContainer>
    </AppContainer>
  );
}

export default Home;
