import React from "react";
import "@testing-library/jest-dom";
import { render, screen, fireEvent } from "@testing-library/react";
import ConfirmPassword from "../index";

describe("ConfirmPassword Component", () => {
  it("renders the component without errors", () => {
    render(<ConfirmPassword />);
    expect(screen.getByText("Reset Password")).toBeInTheDocument();
  });

  it("displays an error when an invalid password is provided", () => {
    render(<ConfirmPassword />);
    const passwordInput = screen.getByPlaceholderText("Enter new password");
    fireEvent.change(passwordInput, { target: { value: "weak" } });

    const submitButton = screen.getByText("Change Password");
    fireEvent.click(submitButton);

    expect(screen.getByText("Password must be strong.")).toBeInTheDocument();
  });

  it('initially displays "Reset Password"', () => {
    render(<ConfirmPassword />);
    const heading = screen.getByText("Reset Password");
    expect(heading).toBeInTheDocument();
  });

  it('toggles password visibility', () => {
    render(<ConfirmPassword />);
    const passwordInput = screen.getByPlaceholderText('Enter new password');
    const toggleButton = screen.getByTestId('PasswordVisibility');
    expect(passwordInput.getAttribute('type')).toBe('password');
    fireEvent.click(toggleButton);
    expect(passwordInput.getAttribute('type')).toBe('text');
    fireEvent.click(toggleButton);
    expect(passwordInput.getAttribute('type')).toBe('password');
  });

  it('toggles confirm password visibility', () => {
    render(<ConfirmPassword />);
    const passwordInput = screen.getByPlaceholderText('Confirm new password');
    const toggleButton = screen.getByTestId('ConfPasswordVisibility');
    expect(passwordInput.getAttribute('type')).toBe('password');
    fireEvent.click(toggleButton);
    expect(passwordInput.getAttribute('type')).toBe('text');
    fireEvent.click(toggleButton);
    expect(passwordInput.getAttribute('type')).toBe('password');
  });

});
