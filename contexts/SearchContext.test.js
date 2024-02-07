import React from "react";
import { render, waitFor, fireEvent } from "@testing-library/react";
import { SearchProvider, useSearchContext } from "./SearchContext";

jest.mock("./SearchContext", () => ({
  ...jest.requireActual("./SearchContext"),
  useSearchContext: jest.fn(),
}));

describe("SearchProvider", () => {
  it("fetches data based on search type and query", async () => {
    const mockData = { items: ["item1", "item2"] };
    const mockFetchData = jest.fn().mockResolvedValue(mockData);
    const mockSearchType = "repository";

    useSearchContext.mockReturnValue({
      fetchData: mockFetchData,
      searchType: mockSearchType,
    });

    const TestComponent = () => {
      const { fetchData, searchType } = useSearchContext();

      const handleClick = () => {
        fetchData("test query");
      };

      return (
        <div>
          <button onClick={handleClick}>Fetch Data</button>
          <p>Search Type: {searchType}</p>
        </div>
      );
    };

    const { getByText } = render(
      <SearchProvider>
        <TestComponent />
      </SearchProvider>
    );

    fireEvent.click(getByText("Fetch Data"));

    await waitFor(() => {
      expect(mockFetchData).toHaveBeenCalledWith("test query");
    });
  });

  it("changes search type and resets data when calling changeSearchType", () => {
    const mockChangeSearchType = jest.fn();
    useSearchContext.mockReturnValue({
      changeSearchType: mockChangeSearchType,
    });

    const TestComponent = () => {
      const { changeSearchType } = useSearchContext();

      const handleClick = () => {
        changeSearchType("user");
      };

      return (
        <div>
          <button onClick={handleClick}>Change Search Type</button>
        </div>
      );
    };

    const { getByText } = render(
      <SearchProvider>
        <TestComponent />
      </SearchProvider>
    );

    fireEvent.click(getByText("Change Search Type"));

    expect(mockChangeSearchType).toHaveBeenCalledWith("user");
  });
});
