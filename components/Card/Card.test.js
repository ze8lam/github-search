import React from "react";
import { render } from "@testing-library/react";
import Card from ".";

describe("Card Component", () => {
  const mockData = {
    avatar: "mock-avatar-url",
    name: "Mock User/Repository",
    description: "Mock Description",
    link: "http://mock-link.com",
    languagesUrl: "http://mock-languages-url.com",
    forksUrl: "http://mock-forks-url.com",
    searchType: "repository",
  };

  test("renders Card component correctly", async () => {
    const { getByText, getAllByRole, getByRole } = render(
      <Card {...mockData} />
    );

    expect(getByText("Mock User/Repository")).toBeInTheDocument();
    expect(getByText("Mock Description")).toBeInTheDocument();

    const avatarImage = getAllByRole("img")[0];
    expect(avatarImage).toBeInTheDocument();
    expect(getByRole("link")).toHaveAttribute("href", mockData.link);
  });

  it("does not render description if it's null", () => {
    const props = {
      avatar: "mock-avatar-url",
      name: "Mock User/Repository",
      link: "http://mock-link.com",
      languagesUrl: "http://mock-languages-url.com",
      forksUrl: "http://mock-forks-url.com",
      searchType: "repository",
    };

    const { queryByText } = render(<Card {...props} />);

    expect(queryByText("Mock Description")).not.toBeInTheDocument();
  });

  it("does not render footer if search type is not 'repository'", () => {
    const props = {
      avatar: "mock-avatar-url",
      name: "Mock User/Repository",
      description: "Mock Description",
      link: "http://mock-link.com",
      languagesUrl: "http://mock-languages-url.com",
      forksUrl: "http://mock-forks-url.com",
      searchType: "user",
    };

    const { queryByText } = render(<Card {...props} />);

    expect(queryByText("Mock Language")).not.toBeInTheDocument();
    expect(queryByText("Mock Fork")).not.toBeInTheDocument();
  });
});
