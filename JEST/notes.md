# Practical Beginner Guide to Testing

[YT Video](https://www.youtube.com/watch?v=pnLC-9waA44)

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

