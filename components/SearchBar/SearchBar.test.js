import { fireEvent, render, waitFor } from "@testing-library/react";
import SearchBar from ".";
import { SearchContext } from "../../contexts/SearchContext";

describe("SearchBar Component", () => {
  it("renders the search bar", () => {
    const { getByPlaceholderText } = render(<SearchBar />);
    const inputElement = getByPlaceholderText("Search");

    expect(inputElement).toBeInTheDocument();
  });

  it("fetches data on input change", async () => {
    const fetchDataMock = jest.fn();
    const contextValue = { fetchData: fetchDataMock };

    const { getByPlaceholderText } = render(
      <SearchContext.Provider value={contextValue}>
        <SearchBar />
      </SearchContext.Provider>
    );

    const inputElement = getByPlaceholderText("Search");

    fireEvent.input(inputElement, { target: { value: "example" } });

    await waitFor(() => {
      expect(fetchDataMock).toHaveBeenCalledWith("example");
    });
  });
});
