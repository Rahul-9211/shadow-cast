
/**
 * This file is part of FourthStar User Dashboard
 *(c) 2023 ShadowCast.Io <craig@shadowcast.io>
 *------------------------------------------------------
 *@module OtpVerification
 *@developer Sudhanshu <<sudhanshut@instaacoders.com>>
 */

 import { Box } from "@mui/material";
 import { useRef, useState } from "react";
 
 
 /* This code is a React component for getting OTP is you forgot account passwords.
  */
 const OtpVerification = () => {
   const ref = useRef(null);
 
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
 
   // Function to handle form submission
   const handleSubmit = (e) => {
     e.preventDefault();
     if (validateForm()) {
       console.log("Form data submitted:", formData);
     }
   };



 
   return (
    <Box className="text-white max-w-[500px] mx-auto">
         <h1 className="text-xl text-center font-heading mb-[28px]">
           OTP Verification
         </h1>
         <p className="text-center mb-[50px]">
           Please Enter the verification code we sent to your Email.{" "}
         </p>
         <form className="auth-form mb-5" onSubmit={handleSubmit}>
           <div className="mb-4">
             <div className="mt-2">
               <input
                 type="text"
                 name="verificationCode"
                 className={`rounded-lg w-full bg-transparent ${
                   isOTPexist
                     ? "border border-white focus:border-[#51A2FF]"
                     : "border border-red-500 focus:border-red-500"
                 } font-normal py-3 px-5 leading-normal font-semibold outline-none font-inter pr-[40px] border-error`}
                 id="verificationCode"
                 placeholder="Enter Verification Code"
                 value={formData.verificationCode}
                 onChange={handleInputChange}
               />
               {formErrors.verificationCode && (
                 <span className="text-error font-inter text-sm">
                   {formErrors.verificationCode}
                 </span>
               )}
             </div>
           </div>
 
           <button
             type="submit"
             className="font-bold rounded-lg btn-gradient w-full text-black py-3 px-5 mt-6"
           >
             Verify
           </button>
 
           <button
             type="submit"
             className="text-center font-semibold  clip-text w-full mt-[14px] "
           >
             Resend Code
           </button>
         </form>
       </Box>
   );
 };
 
 export default OtpVerification;