/**
 * This file is part of FourthStar User Dashboard
 *(c) 2023 ShadowCast.Io <craig@shadowcast.io>
 *------------------------------------------------------
 *@module ConfirmPassword
 *@developer Sudhanshu <<sudhanshut@instaacoders.com>>
 */


import { useRef, useState } from "react";
import { Box } from "@mui/material";
import { togglePasswordVisibility } from "../../utils/togglePasswordVisibilityBtn"
import eyeOff from "assets/images/eye-off.svg";
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
    <Box
      className="w-full max-w-[700px] rounded-lg border border-[#363636] p-[32px] md:p-[58px] signin-form"
      ref={ref}
    >
    <Box className="text-white max-w-[500px] mx-auto">
      <h1 className="text-xl text-center font-heading mb-[36px]">Reset Password</h1>

      <form className="auth-form mb-5" onSubmit={handleSubmit}>
        <div className="mb-6">
          <div className="mt-2 flex relative">
            <input
              type="password"
              name="password"
              className={`rounded-lg w-full bg-transparent border border-white focus:border-[#51A2FF] font-normal py-3 px-5 leading-normal font-semibold outline-none font-inter pr-[40px] ${!isPasswordValid ? '!border-error' : ''}`}             
              id="password"
              placeholder="Enter new password"
              value={formData.password}
              onChange={handleInputChange}
            />
            <span
              aria-label="Toggle Password Visibility"
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
          <div className="mt-2 flex relative">
            <input
              type="password"
              name="confirmPassword"
              className={`rounded-lg w-full bg-transparent border border-white focus:border-[#51A2FF] font-normal py-3 px-5 leading-normal font-semibold outline-none font-inter pr-[40px] ${!isConfirmPasswordValid ? '!border-error' : ''}`}                           
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
              <img src={eyeOff} alt="PasswordVisibility" />
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
    </Box>
  );
};

export default ConfirmPassword;
