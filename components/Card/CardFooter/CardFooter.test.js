import React from "react";
import { render, waitFor } from "@testing-library/react";
import CardFooter from ".";

describe("CardFooter component", () => {
  it("renders language badges", async () => {
    const languagesUrl = "mock-languages-url";
    global.fetch = jest.fn(() =>
      Promise.resolve({
        ok: true,
        json: () => Promise.resolve({ JavaScript: 100, CSS: 50 }),
      })
    );

    const { getByText } = render(<CardFooter languagesUrl={languagesUrl} />);
    await waitFor(() => {
      expect(getByText("JavaScript")).toBeInTheDocument();
      expect(getByText("CSS")).toBeInTheDocument();
    });
  });

  it("renders forks", async () => {
    const forksUrl = "mock-forks-url";
    global.fetch = jest.fn(() =>
      Promise.resolve({
        ok: true,
        json: () =>
          Promise.resolve([
            { id: 1, owner: { login: "user1" }, html_url: "fork1-url" },
            { id: 2, owner: { login: "user2" }, html_url: "fork2-url" },
          ]),
      })
    );

    const { getByText } = render(<CardFooter forksUrl={forksUrl} />);
    await waitFor(() => {
      expect(getByText("user1")).toBeInTheDocument();
      expect(getByText("user2")).toBeInTheDocument();
    });
  });

  it("does not render language badges if languagesUrl is not provided", () => {
    const { queryByText } = render(<CardFooter />);
    expect(queryByText("JavaScript")).not.toBeInTheDocument();
    expect(queryByText("CSS")).not.toBeInTheDocument();
  });

  it("does not render forks if forksUrl is not provided", () => {
    const { queryByText } = render(<CardFooter />);
    expect(queryByText("user1")).not.toBeInTheDocument();
    expect(queryByText("user2")).not.toBeInTheDocument();
  });
});
