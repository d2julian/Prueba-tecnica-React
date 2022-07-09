import { render, screen } from "@testing-library/react";
import ActivityList from "./ActivityList";
describe("ActivityList component", () => {
  test("renders posts", () => {
    render(<ActivityList />);
    const listTitle = screen.getByText(/List of Activities/i);
    expect(listTitle).toBeInTheDocument();
  });
});
