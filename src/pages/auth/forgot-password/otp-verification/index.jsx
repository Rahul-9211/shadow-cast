
/**
 * This file is part of FourthStar User Dashboard
 *(c) 2023 ShadowCast.Io <craig@shadowcast.io>
 *------------------------------------------------------
 *@module OtpVerification
 *@developer Sudhanshu <<sudhanshut@instaacoders.com>>
 */

import { Box } from "@mui/material";
import axios from "axios";
import { SERVICE_URL } from "pages/api/services";
import { useState } from "react";
import { useSelector } from "react-redux";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

/* This code is a React component for getting OTP is you forgot account passwords.
 */
const OtpVerification = () => {
  const {name , email , username , dob , password} = useSelector((state) => state.userData);
  
  const SuccessNotify = () => toast.success(' OTP has been sent!', {
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
    });

    const ErrorNotify = () => toast.error(' Some Error occured!', {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      });


  const [formData, setFormData] = useState({
    verificationCode: "",
  });
  const [formErrors, setFormErrors] = useState({
    verificationCode: "",
  });
  const [isOTPexist, setIsOTPexist] = useState(true);


  // Function to validate the form data
  const validateForm = () => {
    const errors = {};
    let isValid = true;

    if (!formData.verificationCode) {
      errors.verificationCode = "Please enter OTP";
      isValid = false;
    } else {
      isValid = true;
      setIsOTPexist(isValid);
    }

    setIsOTPexist(isValid);
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

    // Clear the error and remove the red border when the user starts typing
    if (name === "verificationCode") {
      setFormErrors({ ...formErrors, verificationCode: "" });
    }
  };
const sendCodeAgain =async () =>{
  try {
    const payload = {
      email : email,
    }
    const response = await axios.post("URL", payload)
    if(response.statusCode === 200){
      SuccessNotify()
    }
    else{
      ErrorNotify()
    }
  } catch (error) {
    console.log("🚀 ~ file: index.jsx:99 ~ sendCodeAgain ~ error:", error)
    ErrorNotify()
    
  }
}
  // Function to handle form submission
  const handleSubmit =async  (e) => {
    e.preventDefault();
    if (validateForm()) {
      console.log("Form data submitted:", formData);
      try {
        const payload = {
          email : email,
          otp : formData.verificationCode
        }
        const response = await axios.post(SERVICE_URL.VERIFY_USER, payload)
        if(response.statusCode === 200){
          SuccessNotify()
        }
        else{
          ErrorNotify()
        }
      } catch (error) {
        console.log("🚀 ~ file: index.jsx:99 ~ sendCodeAgain ~ error:", error)
        ErrorNotify()
        
      }
    }
  };


  return (<>
    <Box
      className="w-full max-w-[700px] rounded-lg border border-[#363636] p-5 md:p-[32px] lg:p-[58px] signin-form"
    >
      <Box className="text-white max-w-[500px] mx-auto">
 {password}
        <h1 className="text-lg lg:text-xl text-center font-heading mb-[28px]">OTP Verification</h1>
        { username }
        <p className="text-center mb-[50px]">
          Please Enter the verification code we sent to your Email.{" "}
        </p>
        <form className="auth-form mb-5" onSubmit={handleSubmit}>
          <div className="mb-4">
            <div className="mt-2">
              <input
                type="text"
                name="verificationCode"
                className={`rounded-lg w-full bg-transparent border border-white focus:border-[#51A2FF] autofill:bg-transparent ${!isOTPexist ? '!border-error' : ''} font-normal py-3 px-5 leading-normal font-semibold outline-none pr-[40px] placeholder-normal`}
                id="verificationCode"
                placeholder="Enter Verification Code"
                value={formData.verificationCode}
                onChange={handleInputChange}
              />
              {formErrors.verificationCode && (
                <span className="text-error text-sm">
                  {formErrors.verificationCode}
                </span>
              )}
            </div>
          </div>

          <button type="submit" className="font-bold rounded-lg btn-gradient w-full text-black py-3 px-5 mt-6">Verify</button>


          <button type="button" onClick={sendCodeAgain} className="text-center font-semibold text-sec hover:text-secDark w-full mt-[14px]">Resend Code</button>
        </form>

      </Box>
    </Box>
        <ToastContainer /></>

  );
};

export default OtpVerification;