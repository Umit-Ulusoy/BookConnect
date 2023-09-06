import {fireEvent, render, screen} from "@testing-library/react"
import Login from "../pages/Login"


test("username input should be rendered", () => {
    render(<Login />);
    const usernameInput = screen.getByPlaceholderText("Username");
    expect(usernameInput).toBeInTheDocument();
});

test("password input should be rendered", () => {
    render(<Login />);
    const passwordInput = screen.getByPlaceholderText("Password");
    expect(passwordInput).toBeInTheDocument();
});

test("button should be rendered", () => {
    render(<Login />);
    const loginButton = screen.getByRole("button");
    expect(loginButton).toBeInTheDocument();
});

test("username input should be change", () => {
    render(<Login />);
    const usernameInput = screen.getByPlaceholderText("Name"); 
    const testValue = "test";
    fireEvent.change(usernameInput, { target: { value: testValue } });
    expect(usernameInput.value).toBe(testValue); 
});

test("password input should be change", () => {
    render(<Login />);
    const passwordInput = screen.getByPlaceholderText("Password");
    const testValue = "test";
    fireEvent.change(passwordInput, { target: { value: testValue } });
    expect(passwordInput.value).toBe(testValue); 
});

test("button should not be disabled when inputs exist", () => {
    render(<Login />);
    const loginButton = screen.getByRole("button");
    const usernameInput = screen.getByPlaceholderText("Name");
    const passwordInput = screen.getByPlaceholderText("Password");
    const testValue = "test";

    fireEvent.change(usernameInput, { target: { value: testValue } });
    fireEvent.change(passwordInput, { target: { value: testValue } });
    expect(loginButton).not.toBeDisabled();
});

test("user should be rendered after fetching", async () => {
    render(<Login />);
    const loginButton = screen.getByRole("button");
    const usernameInput = screen.getByPlaceholderText("Name");
    const passwordInput = screen.getByPlaceholderText("Password");
    const testValue = "test";

    fireEvent.change(usernameInput, { target: { value: testValue } });
    fireEvent.change(passwordInput, { target: { value: testValue } });
    fireEvent.click(loginButton);

    const userItem = await screen.findByText("username");
    expect(userItem).toBeInTheDocument();
});



