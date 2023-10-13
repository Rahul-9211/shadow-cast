/**
 * This file is part of FourthStar User Dashboard
 *(c) 2023 ShadowCast.Io <craig@shadowcast.io>
 *------------------------------------------------------
 *@module SingIn
 *@developer Sudhanshu <<sudhanshut@instaacoders.com>>
 */

import { Box } from "@mui/material";
import { useRef, useState } from "react";
import GoogleLogin from "components/buttons/Google";

import { isValidEmail, isStrongPassword } from "../ValidationUtils";
import eyeOn from "assets/images/eye-on.svg";
import eyeOff from "assets/images/eye-off.svg";
/* This code is a React component for user and creator login with the option to switch between "User" and "Creator" accounts. It performs real-time validation for  email, and password, including password strength checks. Users can toggle the visibility of the password, and the form is enabled for submission when all requirements are met.
 */
const SignIn = () => {
  const ref = useRef(null);

  const [signInType, setSignInType] = useState("user");
  const [passVisIcon, setPassVisIcon] = useState(eyeOff);
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



  // Function to toggle password visibility
  const togglePasswordVisibility = (event) => {
    event.preventDefault()
    const previousSibling = event.currentTarget.previousElementSibling;
    if (previousSibling.tagName === "INPUT") {
      if (previousSibling.getAttribute("type") === "password") {
        previousSibling.setAttribute("type", "text");
        setPassVisIcon(eyeOn);
      } else {
        previousSibling.setAttribute("type", "password");
        setPassVisIcon(eyeOff);
      }
    }
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
            ? "Sign In as Creator"
            : "Sign In as User"}
        </h1>

        <form className="auth-form mb-5" >


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
                className={
                  isEmailValid
                    ? "rounded-lg w-full bg-transparent border border-white focus.border-[#51A2FF] font-normal py-3 px-5 leading-normal font-semibold outline-none font-inter pr-[40px] border-error"
                    : "rounded-lg w-full bg-transparent border border-red-500 focus.border-red-500 font-normal py-3 px-5 leading-normal font-semibold outline-none font-inter pr-[40px] border-error"
                }
                id="email"
                value={formData.email}
                onChange={handleInputChange}
              />
              {formErrors.email && (
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
                data-testid="PasswordVisibility"
                className="vector absolute right-4 top-1/2 -translate-y-1/2 cursor-pointer text-white"
                onClick={(e) => togglePasswordVisibility(e)}
              >
                <img src={passVisIcon} alt="PasswordVisibility" />
              </span>
            </div>
            {!isPasswordValid && formErrors.password && (
              <span className="text-error font-inter text-sm">
                {formErrors.password}
              </span>
            )}
          </div>
          <span className="text-sm">
            <a href="" className="clip-text font-medium">
              Forgot Password ?
            </a>
          </span>

          <button
            type="submit"
            className="font-bold rounded-lg btn-gradient w-full text-black py-3 px-5 mt-6"
            onClick={handleSubmit}
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
          <a to={'/forgot'} className="clip-text font-medium">
            Create account
          </a>
        </p>

        <p className="text-center text-sm font-inter clip-text font-bold">
          <button onClick={toggleSignInType}>
            {signInType === "creator"
              ? "Sign In as Creator"
              : "Sign In as User"}
          </button>
        </p>
      </Box>
    </Box>
  );
};

export default SignIn;
