import { render, screen } from "@testing-library/react";
import Home from "../../pages/Home.js";

test("renders home and Little Lemon string", () => {
  render(<Home/>);
  const stringElement = screen.getByText("Little Lemon");
  expect(stringElement).toBeInTheDocument();
});