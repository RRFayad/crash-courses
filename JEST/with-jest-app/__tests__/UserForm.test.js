import { render, screen } from "@testing-library/react";
import user from "@testing-library/user-event";

import UserForm from "../src/components/UserForm";
import exp from "constants";

test("it renders 2 input fields on the screen", () => {
  // 1. Render the component
  render(<UserForm />);

  // 2. Manipulate the HTML Document
  const inputFields = screen.getAllByRole("textbox");

  // 3. Assertions
  expect(inputFields).toHaveLength(2);
});

test("it calls the onAddUser function with proper arguments when the form is submitted", async () => {
  const onUserAdd = jest.fn(); // mock function
  const mockName = "John Doe";
  const mockEmail = "John@anything.com";

  // 1. Render the component
  render(<UserForm onUserAdd={onUserAdd} />);

  // 2. Manipulate the HTML Document
  const nameField = screen.getByRole("textbox", { name: /name/i }); // the regex means the name of the input label field contains the word "name"
  await user.click(nameField);
  await user.keyboard(mockName);

  const emailField = screen.getByRole("textbox", { name: /email/i });

  await user.click(emailField);
  await user.keyboard(mockEmail);

  const button = screen.getByRole("button");
  await user.click(button);

  // 3. Assertions
  expect(onUserAdd).toHaveBeenCalledTimes(1);
  expect(onUserAdd).toHaveBeenCalledWith({ name: mockName, email: mockEmail });
});
