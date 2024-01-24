import { render, screen } from "@testing-library/react";
import Home from "@/app/page";

// Renders a main element with a child div element.
// Renders a main element with a child div element.
it("should render a main element with a child div element", () => {
  render(<Home />);
  expect(screen.getByRole("main"));
});

it("should have a div element with class 'text-rose-500'", () => {
  render(<Home />);
  expect(screen.getByRole("div"));
});
