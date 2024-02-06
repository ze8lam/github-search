import { render } from "@testing-library/react";
import ErrorMessage from ".";

describe("ErrorMessage component", () => {
  it("renders with the provided error message", () => {
    const errorMessage = "error";
    const { getByText, getByAltText } = render(
      <ErrorMessage message={errorMessage} />
    );

    expect(getByText(errorMessage)).toBeInTheDocument();
    expect(getByAltText("Error Icon")).toBeInTheDocument();
  });
});
