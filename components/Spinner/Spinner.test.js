import React from "react";
import { render, screen } from "@testing-library/react";
import Spinner from ".";

describe("Spinner Component", () => {
  test("renders Spinner component correctly", async () => {
    const { getByTestId } = render(<Spinner />);
    const spinner = getByTestId("spinner");

    expect(getByTestId("spinner")).toBeInTheDocument();
  });
});
