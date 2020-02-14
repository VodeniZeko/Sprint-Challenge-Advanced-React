import React from "react";
import { render } from "@testing-library/react";
import { Input } from "./Input";

test("app test", () => {
  const { getByText } = render(<Input />);
  const header = getByText(/hit me/i);
  expect(header).toBeInTheDocument(); //test passed hoooraaayyy
});

test("button", () => {
  const { getByText } = render(<Input />);
  const header = getByText(/hit me/i);
  expect(header).toBeInTheDocument(); //test passed hoooraaayyy
});
