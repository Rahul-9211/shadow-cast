/**
 * This file is part of FourthStar User Dashboard
 *(c) 2023 ShadowCast.Io <craig@shadowcast.io>
 *------------------------------------------------------
 *@module ConfirmPassword
 *@developer Sudhanshu <<sudhanshut@instaacoders.com>>
 */


import  { useRef, useState } from "react";
import { Box } from "@mui/material";
import {togglePasswordVisibility} from "../../utils/togglePasswordVisibilityBtn"

 /* This code is a React component for setting reset password with confirm functionality .
  */
const ConfirmPassword = () => {
  const ref = useRef(null);

  const [formData, setFormData] = useState({
    password: "",
    confirmPassword: "",
  });
  const [formErrors, setFormErrors] = useState({
    password: "",
    confirmPassword: "",
  });
  const [isPasswordValid, setIsPasswordValid] = useState(true);
  const [isConfirmPasswordValid, setIsConfirmPasswordValid] = useState(true);
  const [passwordMatchError, setPasswordMatchError] = useState("");

  const passwordStrengthRegex =
    /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@#$%^&!])[A-Za-z\d@#$%^&!]{8,}$/;

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });

    if (name === "password") {
      const isValid = passwordStrengthRegex.test(value);
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
  };

  const isFormValid = () => {
    return (
      formData.password.length >= 8 &&
      isPasswordValid &&
      formData.password === formData.confirmPassword
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!isFormValid()) {
      setPasswordMatchError("Passwords do not match.");
    } else {
      setPasswordMatchError(""); // Reset password match error
      console.log("Form data submitted:", formData);
    }
  };



  return (
    <Box className="text-white max-w-[500px] mx-auto">
      <h1 className="text-xl text-center font-heading mb-[36px]">Reset Password</h1>

      <form className="auth-form mb-5" onSubmit={handleSubmit}>
        <div className="mb-6">
          <div className="mt-2 flex relative">
            <input
              type="password"
              name="password"
              className={
                isPasswordValid
                  ? "rounded-lg w-full bg-transparent border border-white focus.border-[#51A2FF] font-normal py-3 px-5 leading-normal font-semibold outline-none font-inter pr-[40px] border-error"
                  : "rounded-lg w-full bg-transparent border border-red-500 focus.border-red-500 font-normal py-3 px-5 leading-normal font-semibold outline-none font-inter pr-[40px] border-error"
              }
              id="password"
              placeholder="Enter new password"
              value={formData.password}
              onChange={handleInputChange}
            />
              <button
  aria-label="Toggle Password Visibility"
                 className="vector absolute right-4 top-1/2 -translate-y-1/2 cursor-pointer text-white"
                 onClick={(e) => togglePasswordVisibility(e)}
               >
                 {
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                  >
                    <path
                      d="M8.81999 8.82227C8.50748 9.13489 8.33195 9.55885 8.33203 10.0009C8.33211 10.4429 8.50778 10.8668 8.82041 11.1793C9.13303 11.4919 9.557 11.6674 9.99903 11.6673C10.4411 11.6672 10.865 11.4916 11.1775 11.1789"
                      stroke="white"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M13.9008 13.8942C12.7319 14.6255 11.3789 15.0091 10 15C7 15 4.5 13.3333 2.5 10C3.56 8.23333 4.76 6.935 6.1 6.105M8.48333 5.15C8.98253 5.04894 9.49068 4.99869 10 5C13 5 15.5 6.66667 17.5 10C16.945 10.925 16.3508 11.7225 15.7183 12.3917M2.5 2.5L17.5 17.5"
                      stroke="white"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                }
               </button>
          </div>
          {!isPasswordValid && formErrors.password && (
            <span className="text-error font-inter text-sm">
              {formErrors.password}
            </span>
          )}
        </div>
        <div className="mb-6">
          <div className="mt-2 flex relative">
            <input
              type="password"
              name="confirmPassword"
              className={
                isConfirmPasswordValid
                  ? "rounded-lg text-white-500 w-full bg-transparent border border-white focus.border-[#51A2FF] font-normal py-3 px-5 leading-normal font-semibold outline-none font-inter pr-[40px] border-error"
                  : "rounded-lg text-white-500 w-full bg-transparent border border-red-500 focus.border-red-500 font-normal py-3 px-5 leading-normal font-semibold outline-none font-inter pr-[40px] border-error"
              }
              id="confirmPassword"
              value={formData.confirmPassword}
              placeholder="Confirm new password"
              onChange={handleInputChange}
            />
            <button
  aria-label="Toggle Password Visibility"
                 className="vector absolute right-4 top-1/2 -translate-y-1/2 cursor-pointer text-white"
                 onClick={(e) => togglePasswordVisibility(e)}
               >
                 {
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                  >
                    <path
                      d="M8.81999 8.82227C8.50748 9.13489 8.33195 9.55885 8.33203 10.0009C8.33211 10.4429 8.50778 10.8668 8.82041 11.1793C9.13303 11.4919 9.557 11.6674 9.99903 11.6673C10.4411 11.6672 10.865 11.4916 11.1775 11.1789"
                      stroke="white"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M13.9008 13.8942C12.7319 14.6255 11.3789 15.0091 10 15C7 15 4.5 13.3333 2.5 10C3.56 8.23333 4.76 6.935 6.1 6.105M8.48333 5.15C8.98253 5.04894 9.49068 4.99869 10 5C13 5 15.5 6.66667 17.5 10C16.945 10.925 16.3508 11.7225 15.7183 12.3917M2.5 2.5L17.5 17.5"
                      stroke="white"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                }
               </button>
          </div>
          {passwordMatchError && (
            <span className="text-error font-inter text-sm">{passwordMatchError}</span>
          )}
        </div>

        <button
          type="submit"
          className="font-bold rounded-lg btn-gradient w-full text-black py-3 px-5"
          disabled={!isFormValid()}
        >
          Change Password
        </button>
      </form>

      
    </Box>
  );
};

export default ConfirmPassword;
