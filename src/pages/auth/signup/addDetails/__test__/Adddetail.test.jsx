import React from "react";
import "@testing-library/jest-dom";
import { render, screen, fireEvent } from "@testing-library/react";
import AddDetails from "../Index";

describe("AddDetails Component", () => {
  it("renders the component without errors", () => {
    render(<AddDetails />);
    expect(screen.getByText(/Add Details/i)).toBeInTheDocument();
    expect(screen.getByLabelText('Username')).toBeInTheDocument();
  });

  it('displays an error when an empty username is provided', () => {
    render(<AddDetails />);
    const usernameInput = screen.getByLabelText('Username');
    fireEvent.blur(usernameInput);
    expect(screen.getByText('UserName is required')).toBeInTheDocument();
  });

  it('displays an error when an empty date is provided', () => {
    render(<AddDetails />);
    const dateInput = screen.getByTestId('date');
    fireEvent.blur(dateInput);
  });


  it('submits the form with valid data', () => {
    render(<AddDetails />);
    const usernameInput = screen.getByLabelText('Username');
    const dateInput = screen.getByTestId('date');
    const saveButton = screen.getByText('Save Details');

    fireEvent.change(usernameInput, { target: { value: 'John_doe13' } });
    fireEvent.change(dateInput, { target: { value: '12/10/2000' } });

    fireEvent.click(saveButton);
  });

  it('displays an error when an empty name is provided', () => {
    render(<AddDetails />);
    const nameInput = screen.getByLabelText('Username');
    fireEvent.blur(nameInput);
    expect(screen.getByText('UserName is required')).toBeInTheDocument();
  });


});
