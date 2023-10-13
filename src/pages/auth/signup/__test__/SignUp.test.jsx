import React from "react";
import "@testing-library/jest-dom";
import { render, screen, fireEvent } from "@testing-library/react";
import SignUp from "../index";

describe("SignUp Component", () => {
  it("renders the component without errors", () => {
    render(<SignUp />);
    expect(screen.getByText(/Create User Account/i)).toBeInTheDocument();
  });

  it('displays an error when an invalid email is provided', () => {
    render(<SignUp />);
    const emailInput = screen.getByLabelText('Email');
    fireEvent.change(emailInput, { target: { value: 'invalid-email' } });

    const submitButton = screen.getByText('Create my account');
    fireEvent.click(submitButton);

    expect(screen.getByText('Invalid email address')).toBeInTheDocument();
  });

  it("displays an error when an invalid password is provided", () => {
    render(<SignUp />);
    const passwordInput = screen.getByLabelText("Password");
    fireEvent.change(passwordInput, { target: { value: "weak" } });

    const submitButton = screen.getByText("Create my account");
    fireEvent.click(submitButton);

    expect(screen.getByText("Password must be strong.")).toBeInTheDocument();
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
    const toggleButton = screen.getByText("Create User Account");
    fireEvent.click(toggleButton);
    const spyScrollTo = jest.fn();
    Object.defineProperty(global.window, 'scrollTo', { value: spyScrollTo });
    fireEvent.click(screen.getByText("Become a Creator"));
    const userButton = screen.getByText("Create User Account");
    expect(userButton).toBeInTheDocument();
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
