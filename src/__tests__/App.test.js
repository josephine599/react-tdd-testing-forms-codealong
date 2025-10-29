import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";
import App from "../App";

// Pepperoni checkbox
test("checkbox is initially unchecked", () => {
  render(<App />);
  const addPepperoni = screen.getByRole("checkbox", { name: /add pepperoni/i });
  expect(addPepperoni).not.toBeChecked();
});

test("checkbox appears as checked when user clicks it", () => {
  render(<App />);
  const addPepperoni = screen.getByRole("checkbox", { name: /add pepperoni/i });
  userEvent.click(addPepperoni);
  expect(addPepperoni).toBeChecked();
});

test("checkbox appears as unchecked when user clicks a second time", () => {
  render(<App />);
  const addPepperoni = screen.getByRole("checkbox", { name: /add pepperoni/i });

  userEvent.click(addPepperoni);
  expect(addPepperoni).toBeChecked();

  userEvent.click(addPepperoni);
  expect(addPepperoni).not.toBeChecked();
});

// Size select element
test("select element changes when user picks a new size", () => {
  render(<App />);
  const sizeSelect = screen.getByRole("combobox");

  expect(sizeSelect).toHaveValue("small");

  userEvent.selectOptions(sizeSelect, "medium");
  expect(sizeSelect).toHaveValue("medium");
});

// "Your selection" text updates
test("shows correct selection text based on user choices", () => {
  render(<App />);
  const addPepperoni = screen.getByRole("checkbox", { name: /add pepperoni/i });
  const sizeSelect = screen.getByRole("combobox");

  userEvent.selectOptions(sizeSelect, "large");
  userEvent.click(addPepperoni);

  const selectionText = screen.getByText(/large pepperoni/i);
  expect(selectionText).toBeInTheDocument();
});

// "Contact Info" text box
test("user can type into contact info field", () => {
  render(<App />);
  const emailInput = screen.getByPlaceholderText(/email address/i);

  userEvent.type(emailInput, "test@example.com");
  expect(emailInput).toHaveValue("test@example.com");
});

// Submit Order button
test("shows confirmation message after submitting the form", () => {
  render(<App />);
  const submitButton = screen.getByRole("button", { name: /submit order/i });
  userEvent.click(submitButton);

  const confirmation = screen.getByText(/thanks for your order/i);
  expect(confirmation).toBeInTheDocument();
});
