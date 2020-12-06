import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders products", () => {
  render(<App />);
  const product = screen.getByText(/Think/i);
  expect(product).toBeInTheDocument();
});
