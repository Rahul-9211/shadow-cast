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
import { Link } from "react-router-dom";
 
 /* This code is a React component for user and creator login with the option to switch between "User" and "Creator" accounts. It performs real-time validation for  email, and password, including password strength checks. Users can toggle the visibility of the password, and the form is enabled for submission when all requirements are met.
  */
 const SignIn = () => {
   const ref = useRef(null);
 
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
 
 
 
   // Function to toggle password visibility
   const togglePasswordVisibility = (event) => {
    const previousSibling = event.currentTarget.previousElementSibling;
    if (previousSibling.tagName === "INPUT") {
      if (previousSibling.getAttribute("type") === "password") {
        previousSibling.setAttribute("type", "text");
        event.currentTarget.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
        <path d="M8.81999 8.82227C8.50748 9.13489 8.33195 9.55885 8.33203 10.0009C8.33211 10.4429 8.50778 10.8668 8.82041 11.1793C9.13303 11.4919 9.557 11.6674 9.99903 11.6673C10.4411 11.6672 10.865 11.4916 11.1775 11.1789" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M13.9008 13.8942C12.7319 14.6255 11.3789 15.0091 10 15C7 15 4.5 13.3333 2.5 10C3.56 8.23333 4.76 6.935 6.1 6.105M8.48333 5.15C8.98253 5.04894 9.49068 4.99869 10 5C13 5 15.5 6.66667 17.5 10C16.945 10.925 16.3508 11.7225 15.7183 12.3917M2.5 2.5L17.5 17.5" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>`;
      } else {
        previousSibling.setAttribute("type", "password");
        event.currentTarget.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
        <path d="M8.81999 8.82227C8.50748 9.13489 8.33195 9.55885 8.33203 10.0009C8.33211 10.4429 8.50778 10.8668 8.82041 11.1793C9.13303 11.4919 9.557 11.6674 9.99903 11.6673C10.4411 11.6672 10.865 11.4916 11.1775 11.1789" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M13.9008 13.8942C12.7319 14.6255 11.3789 15.0091 10 15C7 15 4.5 13.3333 2.5 10C3.56 8.23333 4.76 6.935 6.1 6.105M8.48333 5.15C8.98253 5.04894 9.49068 4.99869 10 5C13 5 15.5 6.66667 17.5 10C16.945 10.925 16.3508 11.7225 15.7183 12.3917M2.5 2.5L17.5 17.5" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>`;
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
 
           <div className="mb-0">
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
                 className={
                   isPasswordValid
                     ? "rounded-lg w-full bg-transparent border border-white focus.border-[#51A2FF] font-normal py-3 px-5 leading-normal font-semibold outline-none font-inter pr-[40px] border-error"
                     : "rounded-lg w-full bg-transparent border border-red-500 focus.border-red-500 font-normal py-3 px-5 leading-normal font-semibold outline-none font-inter pr-[40px] border-error"
                 }
                 id="password"
                 value={formData.password}
                 onChange={handleInputChange}
               />
               <span
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
         Don’t have an account?{" "}
           <Link to={'/forgot'} className="clip-text font-medium">
           Create account
           </Link>
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
 