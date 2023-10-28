
import "@testing-library/jest-dom";
import { render, screen, fireEvent } from "@testing-library/react";
import ForgotPassword from "../index"; 

describe("ForgotPassword Component", () => {
  it("renders the component without errors", () => {
    render(<ForgotPassword />);
    expect(screen.getByText("Please Enter the verification code we sent to your Email.")).toBeInTheDocument();
  });

  it("displays an error when the form is submitted with empty OTP", () => {
    render(<ForgotPassword />);
    const submitButton = screen.getByText("Verify");
    fireEvent.click(submitButton);
    expect(screen.getByText("Please enter OTP")).toBeInTheDocument();
  });


  it("toggles between 'Verify' and 'Resend Code'", () => {
    render(<ForgotPassword />);
    const resendButton = screen.getByText("Resend Code");
    fireEvent.click(resendButton);

    expect(screen.getByText("Verify")).toBeInTheDocument();
  });
});

