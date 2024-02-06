import { fireEvent, render, waitFor } from "@testing-library/react";
import Header from ".";
import { searchTypes } from "../../contexts/SearchContext";

const changeSearchTypeMock = jest.fn();
jest.mock("../../contexts/SearchContext", () => ({
  ...jest.requireActual("../../contexts/SearchContext"),
  useSearchContext: jest.fn(() => ({
    searchType: searchTypes.REPOSITORY,
    changeSearchType: changeSearchTypeMock,
  })),
}));

describe("Header component", () => {
  it("renders correctly", () => {
    const { getByPlaceholderText, getByText } = render(<Header />);

    expect(getByPlaceholderText("Search")).toBeInTheDocument();

    expect(getByText(searchTypes.REPOSITORY)).toBeInTheDocument();
    expect(getByText(searchTypes.USER)).toBeInTheDocument();
  });

  it("calls changeSearchType when radio button is clicked", async () => {
    const { getByLabelText } = render(<Header />);
    const userRadio = getByLabelText(searchTypes.USER);

    fireEvent.click(userRadio);
    await waitFor(() => {
      expect(changeSearchTypeMock).toHaveBeenCalledWith(searchTypes.USER);
    });
  });
});
