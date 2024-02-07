import { render } from "@testing-library/react";
import CardHeader from ".";

describe("CardHeader", () => {
  const props = {
    avatar: "mock-avatar-url",
    name: "Mock User/Repository",
    link: "http://mock-link.com",
  };

  it("renders the header with correct avatar, name, and link", () => {
    const { getByAltText, getByText, getByRole } = render(<CardHeader {...props} />);

    const avatarElement = getByAltText("Avatar");
    expect(avatarElement).toBeInTheDocument();
    expect(avatarElement).toHaveAttribute("src", "mock-avatar-url");

    const nameElement = getByText("Mock User/Repository");
    expect(nameElement).toBeInTheDocument();

    const linkElement = getByRole("link");
    expect(linkElement).toBeInTheDocument();
    expect(linkElement).toHaveAttribute("href", "http://mock-link.com");
  });
});
