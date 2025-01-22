import { render, screen } from "@testing-library/react";
import user from "@testing-library/user-event";

import UserForm from "../src/components/UserForm";

test("it renders 2 input fields on the screen", () => {
  // 1. Render the component
  render(<UserForm />);

  // 2. Manipulate the HTML Document
  const inputFields = screen.getAllByRole("textbox");

  // 3. Assertions
  expect(inputFields).toHaveLength(2);
});
