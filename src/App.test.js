import React from "react";
import { render, getByText } from "@testing-library/react";
import App from "./App";


test("renders App without crashing", () => {
  render(<App />);
});

test("first and last name fields", () => {
   const { getByText } = render(<App />);
   getByText(/first name/i);
   getByText(/last name/i);
})

test("dummy text", () => {
   const { getByPlaceholderText } = render(<App />);
   getByPlaceholderText('Edd');
})
