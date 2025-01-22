# Practical Beginner Guide to Testing

[YT Video](https://www.youtube.com/watch?v=pnLC-9waA44)
[JEST DOCS](https://jestjs.io/docs/getting-started)

## Set up
- npx create-next-app@latest

- npm install -D jest jest-environment-jsdom @testing-library/react @testing-library/dom @testing-library/jest-dom ts-node


## Creating Test

1. Create Folder `__tests__` in the root path of the app  

2. Create Unit Test File

```javascript
test("it renders 2 input fields on the screen", () => {
  // 1. Render the component
  render(<UserForm />);

  // 2. Manipulate the HTML Document
  const inputFields = screen.getAllByRole("textbox");

  // 3. Assertions
  expect(inputFields).toHaveLength(2);
});
 ```

- Obs.:
    - Description String;
    - render() the component;
    - screen methods manipulates the html
    - expect(result) and bind it with a matcher function

3. npm run test:watch

## Another example

```javascript
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
```
