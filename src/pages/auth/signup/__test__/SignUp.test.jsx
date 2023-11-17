import React from "react";
import "@testing-library/jest-dom";
import { render, screen, fireEvent } from "@testing-library/react";
import SignUp from "../index";

describe("SignUp Component", () => {
  it("renders the component without errors", () => {
    render(<SignUp />);
    expect(screen.getByText(/Create User Account/i)).toBeInTheDocument();
    expect(screen.getByLabelText('Name')).toBeInTheDocument();
    expect(screen.getByLabelText('Email')).toBeInTheDocument();
    expect(screen.getByLabelText('Password')).toBeInTheDocument();
  });

  it('displays an error when an invalid email is provided', () => {
    render(<SignUp />);
    const emailInput = screen.getByTestId('email');
    fireEvent.change(emailInput, { target: { value: '123' } })
    fireEvent.blur(emailInput);
    expect(screen.getByText('Invalid Email Address')).toBeInTheDocument();
  });

  it('initially displays "Create User Account"', () => {
    render(<SignUp />);
    const toggleButton = screen.getByText("Create User Account");
    expect(toggleButton).toBeInTheDocument();
  });

  it('toggles to "Become a Creator" when clicked', () => {
    render(<SignUp />);
    const toggleButton = screen.getByText("Create User Account");
    fireEvent.click(toggleButton);
    const spyScrollTo = jest.fn();
    Object.defineProperty(global.window, 'scrollTo', { value: spyScrollTo });
    const creatorButton = screen.getByText("Become a Creator");
    expect(creatorButton).toBeInTheDocument();
  });

  it('toggles back to "Create User Account" when clicked again', () => {
    render(<SignUp />);
    const toggleButton = screen.getByText("Become a Creator");
    fireEvent.click(toggleButton);
    const spyScrollTo = jest.fn();
    Object.defineProperty(global.window, 'scrollTo', { value: spyScrollTo });
    const userButton = screen.getByText("Create User Account");
    expect(userButton).toBeInTheDocument();
  });

  it('toggles password visibility', () => {
    render(<SignUp />);
    const passwordInput = screen.getByLabelText('Password');
    const toggleButton = screen.getByTestId('PasswordVisibility');

    expect(passwordInput.getAttribute('type')).toBe('password');

    fireEvent.click(toggleButton);
    expect(passwordInput.getAttribute('type')).toBe('text');

    fireEvent.click(toggleButton);
    expect(passwordInput.getAttribute('type')).toBe('password');
  });

  // this will be run iF we will not create disable button , if data is not entered --->
  //   it('displays errors when the form is submitted with empty fields', () => {
  //     render(<SignUp />);

  //     const submitButton = screen.getByText('Create my account');
  //     fireEvent.click(submitButton);

  //     expect(screen.getByText('Name is required')).toBeInTheDocument();
  //     expect(screen.getByText('Email is required')).toBeInTheDocument();
  //     expect(screen.getByText('Password is required')).toBeInTheDocument();
  //   });

});
