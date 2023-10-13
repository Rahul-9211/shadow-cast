/**
 * This file is part of FourthStar User Dashboard
 *(c) 2023 ShadowCast.Io <craig@shadowcast.io>
 *------------------------------------------------------
 *@module SingUp
 *@developer Sudhanshu <sudhanshut@instaacoders.com>
 */

import { Box } from "@mui/material";
import { useRef, useState } from "react";
import GoogleLogin from "components/buttons/Google";
import { isValidEmail, isStrongPassword } from "../utils/ValidationUtils";
import {togglePasswordVisibility} from "../utils/togglePasswordVisibilityBtn"
import eyeOff from "assets/images/eye-off.svg";

/* This code is a React component for user registration with the option to switch between "User" and "Creator" accounts. It performs real-time validation for name, email, and password, including password strength checks. Users can toggle the visibility of the password, and the form is enabled for submission when all requirements are met.
 */
const SignUp = () => {
  const ref = useRef(null);

  const [signUpType, setSignUpType] = useState("user");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [formErrors, setFormErrors] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [isPasswordValid, setIsPasswordValid] = useState(true);

  // Function to toggle between user and creator sign-up
  const toggleSignUpType = () => {
    setSignUpType((prevSignUpType) =>
      prevSignUpType === "user" ? "creator" : "user"
    );
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  // Function to validate the form data
  const validateForm = () => {
    const errors = {};
    let isValid = true;

    if (!formData.name) {
      errors.name = "Name is required";
      isValid = false;
    }

    if (!formData.email) {
      errors.email = "Email is required";
      isValid = false;
    } else if (!isValidEmail(formData.email)) {
      errors.email = "Invalid email address";
      isValid = false;
    }

    if (!formData.password) {
      errors.password = "Password is required";
      isValid = false;
    } else if (!isStrongPassword(formData.password)) {
      errors.password = "Password must be strong.";
      isValid = false;
    }

    setFormErrors(errors);
    return isValid;
  };

  // Function to handle input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });

    if (name === "password") {
      const isValid = isStrongPassword(value);
      setIsPasswordValid(isValid);

      if (!isValid) {
        setFormErrors({
          ...formErrors,
          password: "Password must be strong.",
        });
      } else {
        setFormErrors({
          ...formErrors,
          password: "",
        });
      }
    }
    if (name === "email") {
      const isValid = isValidEmail(value);

      if (!isValid) {
        setFormErrors({
          ...formErrors,
          email: "Invalid email address",
        });
      } else {
        setFormErrors({
          ...formErrors,
          email: "",
        });
      }
    }
  };

  // Function to check if the form is valid
  const isFormValid = () => {
    return (
      formData.name &&
      formData.email &&
      isValidEmail(formData.email) &&
      formData.password.length >= 8 &&
      isPasswordValid
    );
  };


  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm() && isPasswordValid) {
      alert(JSON.stringify(formData))
      setFormData({
        name: "",
        email: "",
        password: "",
      })
    }

  };

  return (
    <Box
      className="w-full max-w-[700px] rounded-lg border border-[#363636] p-[32px] md:p-[58px] signin-form"
    >
      <Box className="text-white max-w-[500px] mx-auto">
        <h1 className="text-xl text-center font-heading mb-[36px]">
          {signUpType === "creator"
            ? "Become a Creator"
            : "Create User Account"}
        </h1>

        <form className="auth-form mb-5" onSubmit={handleSubmit}>
          <div className="mb-4">
            <label
              htmlFor="name"
              className="font-medium text-white/[.80] text-sm"
            >
              Name
            </label>
            <div className="mt-2">
              <input
                type="text"
                name="name"
                className={`rounded-lg w-full bg-transparent border border-white focus:border-[#51A2FF] font-normal py-3 px-5 leading-normal font-semibold outline-none ${formErrors.name ? '!border-error' : ''}`}
                id="name"
                value={formData.name}
                onChange={handleInputChange}
              />
              {formErrors.name && (
                <span className="text-error font-inter text-sm">
                  {formErrors.name}
                </span>
              )}
            </div>
          </div>

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
                className={`rounded-lg w-full bg-transparent border border-white focus:border-[#51A2FF] font-normal py-3 px-5 leading-normal font-semibold outline-none ${formErrors.email ? '!border-error' : ''}`}
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

          <div className="mb-6">
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
                <img src={eyeOff} alt="PasswordVisibility" />
              </span>
            </div>
            {!isPasswordValid && formErrors.password && (
              <span className="text-error font-inter text-sm">
                {formErrors.password}
              </span>
            )}
          </div>

          <button
            type="submit"
            className="font-bold rounded-lg btn-gradient w-full text-black py-3 px-5"
            disabled={!isFormValid()}
          >
            Create my account
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
          Already have an account?{" "}
          <a href="/signin" className="clip-text font-medium">
            Sign In
          </a>
        </p>

        <p className="text-center text-sm font-inter clip-text font-bold">
          <button onClick={toggleSignUpType}>
            {signUpType === "creator"
              ? "Create User Account"
              : "Become a Creator"}
          </button>
        </p>
      </Box>
    </Box>
  );
};

export default SignUp;