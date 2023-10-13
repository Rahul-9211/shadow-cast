/**
 * This file is part of FourthStar User Dashboard
 *(c) 2023 ShadowCast.Io <craig@shadowcast.io>
 *------------------------------------------------------
 *@module SingIn
 *@developer Sudhanshu <sudhanshut@instaacoders.com>
 */
import { Box } from "@mui/material";
import { useState } from "react";
import GoogleLogin from "components/buttons/Google";
import eyeOff from "assets/images/eye-off.svg";
import { isValidEmail, isStrongPassword } from "../utils/ValidationUtils";
import { togglePasswordVisibility } from "../utils/togglePasswordVisibilityBtn";
/* This code is a React component for user sign-in with the option to switch between "User" and "Creator" accounts. It performs real-time validation for email, and password, including password strength checks. Users can toggle the visibility of the password, and the form is enabled for submission when all requirements are met.
 */


const SignIn = () => {
  const [signInType, setSignInType] = useState("user");
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [formErrors, setFormErrors] = useState({
    email: "",
    password: "",
  });
  const [isPasswordValid, setIsPasswordValid] = useState(true);
  const [isEmailValid, setIsEmailValid] = useState(true);
  // Function to toggle between user and creator sign-up
  const toggleSignInType = () => {
    setSignInType((prevSignInType) =>
      prevSignInType === "user" ? "creator" : "user"
    );
  };
  // Function to validate the form data
  const validateForm = () => {
    const errors = {};
    let isValid = true;
    let validEmail = true;
    if (!formData.email) {
      errors.email = "Email is required";
      validEmail = false;
    } else if (!isValidEmail(formData.email)) {
      errors.email = "Invalid email address";
      validEmail = false;
    }
    if (!formData.password) {
      errors.password = "Password is required";
      isValid = false;
    } else if (!isStrongPassword(formData.password)) {
      errors.password = "Invalid Password format.";
      isValid = false;
    }
    setFormErrors(errors);
    setIsPasswordValid(isValid);
    setIsEmailValid(validEmail)
    return isValid;
  };

  // Function to handle input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });

  };
  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm() && isPasswordValid) {
      console.log("Form data submitted:", formData);
    }
  };
  return (
    <Box
      className="w-full max-w-[700px] rounded-lg border border-[#363636] p-[32px] md:p-[58px] signin-form"
      ref={ref}
    >
      <Box className="text-white max-w-[500px] mx-auto">
        <h1 className="text-xl text-center font-heading mb-[36px]">
          {signInType === "creator"
            ? "Sign in as Creator"
            : "Sign In as User"}
        </h1>
        <form className="auth-form mb-5" onSubmit={handleSubmit}>

          <div className="mb-4">
            <label
              htmlFor="email"
              className="font-medium text-white/[.80] text-sm"
            >
              Email
            </label>
            <div className="mt-2">
              <input
                type="email"
                name="email"
                className={`rounded-lg w-full bg-transparent border border-white focus:border-[#51A2FF] font-normal py-3 px-5 leading-normal font-semibold outline-none ${!isEmailValid ? '!border-error' : ''}`}
                id="email"
                value={formData.email}
                onChange={handleInputChange}
              />
              {!isEmailValid && formErrors.email && (
                <span className="text-error font-inter text-sm">
                  {formErrors.email}
                </span>
              )}
            </div>
          </div>

          <div className="mb-2">
            <label
              htmlFor="password"
              className="font-medium text-white/[.80] text-sm"
            >
              Password
            </label>
            <div className="mt-2 flex relative">
              <input
                type="password"
                name="password"
                className={`rounded-lg w-full bg-transparent border border-white focus:border-[#51A2FF] font-normal py-3 px-5 leading-normal font-semibold outline-none font-inter pr-[40px] ${!isPasswordValid ? '!border-error' : ''}`}
                id="password"
                value={formData.password}
                onChange={handleInputChange}
              />
              <span
                className="vector absolute right-4 top-1/2 -translate-y-1/2 cursor-pointer text-white"
                onClick={(e) => togglePasswordVisibility(e)}
              >
                <img src={eyeOff} alt="PasswordVisibility" />
              </span>
            </div>
            {!isPasswordValid && formErrors.password && (
              <span className="text-error font-inter text-sm">
                {formErrors.password}
              </span>
            )}
          </div>

          <div className="mb-6">
            <a href="/otp-verification" className="clip-text font-semibold text-sm">Forgot Password?</a>
          </div>


          <button
            type="submit"
            className="font-bold rounded-lg btn-gradient w-full text-black py-3 px-5"
            disabled={!isFormValid()}
          >
            Sign In
          </button>
        </form>

        <div className="divider flex gap-x-2 mb-5">
          <span className="text-sm font-medium">Or</span>
        </div>

        <GoogleLogin
          type="button"
          text="Continue with Google"
          className="mb-6"
        />

        <p className="mb-5 text-sm text-center">
          Don't have an account?{" "}
          <a href="/signup" className="clip-text font-medium">
            Create account
          </a>
        </p>

        <p className="text-center text-sm font-inter clip-text font-bold">
          <button onClick={toggleSignInType}>
            {signInType === "creator"
              ? "Sign In as User"
              : "Sign In as Creator"}
          </button>
        </p>
      </Box>
    </Box>
  )
}

export default SignIn;