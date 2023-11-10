/**
 * This file is part of FourthStar User Dashboard
 *(c) 2023 ShadowCast.Io <craig@shadowcast.io>
 *------------------------------------------------------
 *@module SingUp
 *@developer Sudhanshu <sudhanshut@instaacoders.com>
 */

import { Box } from "@mui/material";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import GoogleLogin from "components/buttons/Google";

import { FormControl, InputLabel, Select, MenuItem } from "@mui/material";
import {
  isValidEmail,
  isStrongPassword,
  togglePasswordVisibility,
} from "utils/index";
import eyeOff from "assets/images/eye-off.svg";
import CheckList from "components/password/checklist";

import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DateCalendar } from "@mui/x-date-pickers/DateCalendar";
/* This code is a React component for user registration with the option to switch between "User" and "Creator" accounts. It performs real-time validation for name, email, and password, including password strength checks. Users can toggle the visibility of the password, and the form is enabled for submission when all requirements are met.
 */
const AddDetails = () => {
  const [signUpType, setSignUpType] = useState("user");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    date: "12/10/2000",
  });
  const [formErrors, setFormErrors] = useState({
    name: "",
    email: "",
    password: "",
    date: "",
  });
  const isRequired = (value) => (value === "" ? false : true);
  // Function to toggle between user and creator sign-up
//   const toggleSignUpType = () => {
//     setSignUpType((prevSignUpType) =>
//       prevSignUpType === "user" ? "creator" : "user"
//     );
//     window.scrollTo({
//       top: 0,
//       behavior: "smooth",
//     });
//   };
  // Function to validate the form data
  const validateForm = () => {
    let isValid =
      checkName(formData.name) 
    return isValid;
  };
  // Function to handle input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value.trim(),
    });
    // if (name === "name") {
    //   checkName(value);
    // }
    // if (name === "email") {
    //   if (!value.trim() && !value.trim().includes('@')) {
    //     checkEmail(value);
    //   }
    //   if (value.trim() && value.trim().includes('@')) {
    //     checkEmail(value);
    //   } else {
    //     setFormErrors({
    //       ...formErrors,
    //       email: ''
    //     });
    //   }
    // }
    // if (name === "password") {
    //   checkPassword(value);
    // }
  };

  // Function to check if the form is valid
//   const isFormValid = () => {
//     return (
//       formData.name &&
//       isValidEmail(formData.email) &&
//       isStrongPassword(formData.password)
//     );
//   };

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      alert(JSON.stringify(formData));
      setFormData({
        name: "",
        email: "",
        password: "",
      });
    }
  };
  // checkName
  const checkName = (value) => {
    let valid = false;
    const fieldInput = value.trim();
    if (!isRequired(fieldInput)) {
      setFormErrors({
        ...formErrors,
        name: "UserName is required",
      });
    } else {
      setFormErrors({
        ...formErrors,
        name: "",
      });
      valid = true;
    }
    return valid;
  };

  // checkEmail
//   const checkEmail = (value) => {
//     let valid = false;
//     const fieldInput = value.trim();
//     if (!isRequired(fieldInput)) {
//       setFormErrors({
//         ...formErrors,
//         email: "Email is required",
//       });
//     } else if (!isValidEmail(fieldInput)) {
//       setFormErrors({
//         ...formErrors,
//         email: "Invalid Email Address",
//       });
//     } else {
//       setFormErrors({
//         ...formErrors,
//         email: "",
//       });
//       valid = true;
//     }
//     return valid;
//   };

//   // checkPassword
//   const checkPassword = (value) => {
//     let valid = false;
//     const fieldInput = value.trim();
//     if (!isRequired(fieldInput)) {
//       setFormErrors({
//         ...formErrors,
//         password: "Password is required",
//       });
//     }
//     // else if (!isStrongPassword(fieldInput)) {
//     //   setFormErrors({
//     //     ...formErrors,
//     //     password: 'Password is not strong enough'
//     //   });
//     // }
//     else {
//       setFormErrors({
//         ...formErrors,
//         password: "",
//       });
//       valid = true;
//     }
//     return valid;
//   };
  const [userGuideLines, setuserGuideLines] = useState(false);

  const toggleUserGuidelines = (e) => {
    setuserGuideLines(!userGuideLines);
  };
  const [Calender, setCalender] = useState(false);

  const toggleCalender = (e) => {
    setCalender(!Calender);
  };

  const [selectedGender, setselectedGender] = useState("-Select-");
  const handleGender = (e) => {
  console.log("🚀 ~ file: Index.jsx:193 ~ handleGender ~ e:", e)
  setGender(!Gender);
    setselectedGender(e);
  };
  const [Gender, setGender] = useState(false);
  const toggleGender = (e) => {
    setGender(!Gender);
  };

  const [focus , setFocus] = useState({
    username:false, 
    dob : false , 
    gender : false
  })

  const handleFocus = (value) =>{
    if(value === "username"){
        setFocus({
            ...focus,
            username: true,
          });
    }
    if(value === "dob"){
        setFocus({
            ...focus,
            dob: true,
          });
    }
    if(value === "gender"){
        setFocus({
            ...focus,
            gender: true,
          });
    }
    else{
        setFocus({
            username: false,
            dob: false,
            gender: false,
        })
    }
  }
  return (
    <Box className="w-full max-w-[700px] rounded-lg border border-[#363636] p-5 md:p-[32px] lg:p-[58px] signin-form">
      <Box className="text-white max-w-[500px] mx-auto">
        <h1 className="text-lg lg:text-xl text-center font-heading mb-[36px]">
          {signUpType === "creator" ? "Become a Creator" : "Add Details"}
        </h1>
        <form className="auth-form mb-5" onSubmit={handleSubmit}>
          <div className="mb-4" >
            <label
              htmlFor="name"
              className="font-medium text-white/[.80] text-sm"
              data-testid="Username"
            >
              Username
            </label>
            <div className="mt-2 relative">
              <input
                type="text"
                placeholder="eg. John_doe13"
                name="name"
                className={`rounded-lg w-full bg-transparent border border-white focus:border-[#FBBC5E] font-normal py-3 px-5 leading-normal font-semibold outline-none ${
                  formErrors.name ? "!border-error" : "" 
                } ${focus ? "" : ""}`}
                id="name"
                value={formData.name}
                onChange={handleInputChange}
                onBlur={(e) => checkName(e.target.value)}
              />
              <span
                className="vector absolute right-4 top-1/2 -translate-y-1/2 cursor-pointer text-white"
                onClick={(e) => toggleUserGuidelines(e)}
                onMouseEnter={(e) => toggleUserGuidelines(e)}
                onMouseLeave={(e) => toggleUserGuidelines(e)}
              >
                <svg
                  width="22"
                  height="22"
                  viewBox="0 0 22 22"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect
                    x="0.75"
                    y="0.75"
                    width="20.5"
                    height="20.5"
                    rx="10.25"
                    stroke="white"
                    stroke-width="1.5"
                  />
                  <path
                    d="M10.4995 18V9.456H12.4995V18H10.4995ZM11.5075 8.048C11.1342 8.048 10.8248 7.93067 10.5795 7.696C10.3448 7.46133 10.2275 7.17867 10.2275 6.848C10.2275 6.50667 10.3448 6.224 10.5795 6C10.8248 5.76533 11.1342 5.648 11.5075 5.648C11.8808 5.648 12.1848 5.76 12.4195 5.984C12.6648 6.19733 12.7875 6.46933 12.7875 6.8C12.7875 7.152 12.6702 7.45067 12.4355 7.696C12.2008 7.93067 11.8915 8.048 11.5075 8.048Z"
                    fill="white"
                  />
                </svg>
              </span>
            </div>
            {formErrors.name && (
              <span className="text-error text-sm">{formErrors.name}</span>
            )}

            {userGuideLines && (
              <div className="notification-dropdown absolute top-12 right-1 delay-200 transition">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="23"
                  viewBox="0 0 20 23"
                  fill="none"
                >
                  <path
                    d="M19.6752 0.847325L0.643729 11.8411L19.6803 22.826L19.6752 0.847325Z"
                    fill="#716046"
                  />
                </svg>
              </div>
            )}

            {userGuideLines && (
              <div
              data-testid = "Username"
                onBlur={toggleUserGuidelines}
                className="absolute top-8 -right-[350px] p-5 max-w-[357px] overflow-hidden z-[1] rounded-md bg-[#716046] backdrop-blur-sm"
              >
                <p className="text-[14px] text-[#FBBC5E] font-bold pb-[9px]">
                  Username Guidelines
                </p>
                <ul className="pl-5">
                  <li className="text-[14px] font-semibold list-disc">
                    There should be no spaces.
                  </li>
                  <li className="text-[14px] font-semibold list-disc">
                    Username should not start with a number.
                  </li>
                  <li className="text-[14px] font-semibold list-disc">
                    Username should only contain alphabets and numbers.
                  </li>
                  <li className="text-[14px] font-semibold list-disc">
                    Username should not contain any special character.
                  </li>
                </ul>
              </div>
            )}
          </div>

          <div className="mb-4" onClick={()=>{handleFocus("dob")}} onBlur={()=>{handleFocus("test")}}>
            <label
              htmlFor="email"
              className="font-medium text-white/[.80] text-sm"
              data-testid="Date Of Birth"
            >
              Date Of Birth
            </label>
            <div className="mt-2  relative">
              <input
                placeholder="eg. John_doe13"
                type="date"
                name="date"
                data-testid="date"
                className={`rounded-lg w-full remove-icon bg-transparent border border-white focus:border-[#FBBC5E] font-normal py-3 px-5 leading-normal font-semibold outline-none ${
                  formErrors.date ? "!border-error" : ""
                }`}
                id="date"
                value={formData.date}
                // onChange={handleInputChange}
                // onBlur={(e) => checkEmail(e.target.value)}
              />

              <span
                data-testid="PasswordVisibility"
                className="vector absolute right-4 top-1/2 -translate-y-1/2 cursor-pointer text-white"
                onClick={(e) => toggleCalender(e)}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M19 4H17V3C17 2.73478 16.8946 2.48043 16.7071 2.29289C16.5196 2.10536 16.2652 2 16 2C15.7348 2 15.4804 2.10536 15.2929 2.29289C15.1054 2.48043 15 2.73478 15 3V4H9V3C9 2.73478 8.89464 2.48043 8.70711 2.29289C8.51957 2.10536 8.26522 2 8 2C7.73478 2 7.48043 2.10536 7.29289 2.29289C7.10536 2.48043 7 2.73478 7 3V4H5C4.20435 4 3.44129 4.31607 2.87868 4.87868C2.31607 5.44129 2 6.20435 2 7V19C2 19.7956 2.31607 20.5587 2.87868 21.1213C3.44129 21.6839 4.20435 22 5 22H19C19.7956 22 20.5587 21.6839 21.1213 21.1213C21.6839 20.5587 22 19.7956 22 19V7C22 6.20435 21.6839 5.44129 21.1213 4.87868C20.5587 4.31607 19.7956 4 19 4ZM20 19C20 19.2652 19.8946 19.5196 19.7071 19.7071C19.5196 19.8946 19.2652 20 19 20H5C4.73478 20 4.48043 19.8946 4.29289 19.7071C4.10536 19.5196 4 19.2652 4 19V12H20V19ZM20 10H4V7C4 6.73478 4.10536 6.48043 4.29289 6.29289C4.48043 6.10536 4.73478 6 5 6H7V7C7 7.26522 7.10536 7.51957 7.29289 7.70711C7.48043 7.89464 7.73478 8 8 8C8.26522 8 8.51957 7.89464 8.70711 7.70711C8.89464 7.51957 9 7.26522 9 7V6H15V7C15 7.26522 15.1054 7.51957 15.2929 7.70711C15.4804 7.89464 15.7348 8 16 8C16.2652 8 16.5196 7.89464 16.7071 7.70711C16.8946 7.51957 17 7.26522 17 7V6H19C19.2652 6 19.5196 6.10536 19.7071 6.29289C19.8946 6.48043 20 6.73478 20 7V10Z"
                    fill={`${focus.dob ? "#FBBC5E" : "white"}`}
                  />
                </svg>
              </span>
              {Calender && (
                <div className="absolute bg-white text-red z-[4]">
                  <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DateCalendar />
                  </LocalizationProvider>
                </div>
              )}
            </div>
            {/* {formErrors.date && (
              <span className="text-error text-sm">{formErrors.date}</span>
            )} */}
          </div>

          {/* <div className="mb-6">
            <label
              htmlFor="password"
              className="font-medium text-white/[.80] text-sm"
            >
              Gender
            </label>
            <div className="mt-2 flex relative date">
              <select
                name="gender"
                id="gender"
                className={`rounded-lg w-full bg-transparent border border-white focus:border-[#51A2FF] font-normal py-3 px-5 leading-normal font-semibold outline-none pr-[40px] ${
                  formErrors.password ? "!border-error" : ""
                }`}
              >
                <option value="" disabled selected>
                  -Select-
                </option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
              </select>
              
            </div>
            {formErrors.password && (
              <span className="text-error text-sm">{formErrors.password}</span>
            )}
          </div> */}

          <div className="mb-6">
            <label
              htmlFor="Gender"
              className="font-medium text-white/[.80] text-sm" 
              data-testid="Gender"
            >
              Gender
            </label>
            <div className="mt-2 flex relative date">
              <div
                className={`rounded-lg w-full bg-transparent border border-white focus:border-[#51A2FF] font-normal py-3 px-5 leading-normal font-semibold outline-none pr-[40px] ${
                  formErrors.password ? "!border-error" : ""
                }`}
              >
                {selectedGender}
              </div>

              <span
                data-testid="Gender"
                className="vector absolute right-4 top-1/2 -translate-y-1/2 cursor-pointer text-white"
                onClick={(e) => toggleGender(e)}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M19 8L12 15L5 8"
                    stroke="white"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </span>
            {Gender &&   <div className="absolute w-full top-14 rounded-lg border border-[#FBBC5E] bg-[#332e28] z-[3] overflow-hidden" onBlur={console.log('called')}>
                <div
                  className={`w-full bg-transparent focus:border-[#51A2FF] hover:bg-[#FBBC5E] hover:bg-opacity-10 hover:text-[#FBBC5E] cursor-pointer font-normal py-3 px-5 leading-normal font-semibold outline-none pr-[40px] ${
                    formErrors.password ? "!border-error" : ""
                  }`}
                  onClick={()=>{handleGender("Male")}}

                >
                  Male
                </div>
                <div
                  className={` w-full bg-transparent focus:border-[#51A2FF] hover:bg-[#FBBC5E] hover:bg-opacity-10  hover:text-[#FBBC5E] cursor-pointer font-normal py-3 px-5 leading-normal font-semibold outline-none pr-[40px] ${
                    formErrors.password ? "!border-error" : ""
                  }`}

                  onClick={()=>{handleGender("Female")}}
                >
                  Female
                </div>
                <div
                  className={` w-full bg-transparent focus:border-[#51A2FF] hover:bg-[#FBBC5E] hover:bg-opacity-10 hover:text-[#FBBC5E] cursor-pointer font-normal py-3 px-5 leading-normal font-semibold outline-none pr-[40px] ${
                    formErrors.password ? "!border-error" : ""
                  }`}

                  onClick={()=>{handleGender("Others")}}
                >
                  Others
                </div>
              </div>}
            </div>
          </div>

          <button
            type="submit"
            className="font-bold rounded-lg btn-gradient w-full text-black py-3 px-5"
            // disabled={!isFormValid()}
          >
            Save Details
          </button>
        </form>
      </Box>
    </Box>
  );
};

export default AddDetails;
