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
import { isValidEmail, isStrongPassword, togglePasswordVisibility } from "utils/index";
import eyeOff from "assets/images/eye-off.svg";
import CheckList from "components/password/checklist";
import { useDispatch, useSelector } from "react-redux";
import { increment, decrement } from "store/slicer/userAuth/counter";
import { setUserData } from "store/slicer/userAuth/userData";
import axios from "axios";
import { SERVICE_URL } from "pages/api/services";
import {useNavigate} from "react-router-dom"
import BtnLoader from "components/ButtonLoader/BtnLoader";
/* This code is a React component for user registration with the option to switch between "User" and "Creator" accounts. It performs real-time validation for name, email, and password, including password strength checks. Users can toggle the visibility of the password, and the form is enabled for submission when all requirements are met.
 */
const SignUp = () => {

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const count = useSelector((state) => state.counter.count);
  const {password, username} = useSelector((state) => state.userData);

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
  const isRequired = value => value === '' ? false : true;
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
    let isValid = checkName(formData.name) && checkEmail(formData.email) && checkPassword(formData.password);
    console.log("🚀 ~ file: index.jsx:54 ~ validateForm ~ isValid:", isValid)
    return isValid;
  };
  // Function to handle input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
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
  const isFormValid = () => {
    return (
      formData.name &&
      isValidEmail(formData.email) &&
      isStrongPassword(formData.password)
    );
  };

const [btnLoaderStatus , setBtnLoaderStatus] = useState(false)
  // Function to handle form submission
  const handleSubmit = async (e) => {
    setBtnLoaderStatus(true)
    e.preventDefault();
    if (validateForm()) {
      // alert(JSON.stringify(formData))
const [fistname , lastName] = formData.name.trim().split(" ")
      const payload = {
        name: lastName ? fistname+ ' ' + lastName : fistname,
        email: formData.email,
        password: formData.password,
      };
      console.log("🚀 ~ file: index.jsx:111 ~ handleSubmit ~ payload:", payload)
      
      try {
        const response = await axios.post(SERVICE_URL.SIGN_UP, payload);
        const data = await response.data;
        console.log("🚀 ~ file: index.jsx:116 ~ handleSubmit ~ data:", data)
        const newUserData = {
          name: formData.name,
          email: formData.email,
          password: formData.password,
          username : data.response.data.userName
        };
        dispatch(setUserData(newUserData));
    setBtnLoaderStatus(false)

        navigate('/signup/add-details');
      } catch (error) {
        console.log(
          "🚀 ~ file: index.jsx:151 ~ CheckCredentials ~ error:",
          error
        );
        alert("some error occured ");
      }
   
      setFormData({
        name: "",
        email: "",
        password: "",
      })
    }
  };
  // checkName
  const checkName = (value) => {
    let valid = false;
    const fieldInput = value.trim();
    if (!isRequired(fieldInput)) {
      setFormErrors({
        ...formErrors,
        name: "Name is required"
      });
    } else {
      setFormErrors({
        ...formErrors,
        name: ''
      });
      valid = true;
    }
    return valid;
  };

  // checkEmail
  const checkEmail = (value) => {
    let valid = false;
    const fieldInput = value.trim();
    if (!isRequired(fieldInput)) {
      setFormErrors({
        ...formErrors,
        email: "Email is required"
      });
    } else if (!isValidEmail(fieldInput)) {
      setFormErrors({
        ...formErrors,
        email: 'Invalid Email Address'
      });
    } else {
      setFormErrors({
        ...formErrors,
        email: ''
      });
      valid = true;
    }
    return valid;
  };

  // checkPassword
  const checkPassword = (value) => {
    let valid = false;
    const fieldInput = value.trim();
    if (!isRequired(fieldInput)) {
      setFormErrors({
        ...formErrors,
        password: "Password is required"
      });
    }
    // else if (!isStrongPassword(fieldInput)) {
    //   setFormErrors({
    //     ...formErrors,
    //     password: 'Password is not strong enough'
    //   });
    // }
    else {
      setFormErrors({
        ...formErrors,
        password: ''
      });
      valid = true;
    }
    return valid;
  };

  return (
    <Box className="w-full max-w-[700px] rounded-lg border border-[#363636] p-5 md:p-[32px] lg:p-[58px] signin-form">
      <Box className="text-white max-w-[500px] mx-auto">
        <h1 className="text-lg lg:text-xl text-center font-heading mb-[36px]">{signUpType === "creator" ? "Become a Creator" : "Create User Account"}</h1>
        <form className="auth-form mb-5" onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="name" className="font-medium text-white/[.80] text-sm">Name</label>
            <div className="mt-2">
              <input type="text" name="name" data-testid="name" className={`rounded-lg w-full bg-transparent border border-white focus:border-[#51A2FF] font-normal py-3 px-5 leading-normal font-semibold outline-none ${formErrors.name ? '!border-error' : ''}`} id="name" value={formData.name} onChange={handleInputChange} onBlur={e => checkName(e.target.value)} />
              {formErrors.name && (<span className="text-error text-sm">{formErrors.name}</span>)}
            </div>
          </div>

          <div className="mb-4">
            <label htmlFor="email" className="font-medium text-white/[.80] text-sm">Email</label>
            <div className="mt-2">
              <input type="email" name="email" data-testid="email" className={`rounded-lg w-full bg-transparent border border-white focus:border-[#51A2FF] font-normal py-3 px-5 leading-normal font-semibold outline-none ${formErrors.email ? '!border-error' : ''}`} id="email" value={formData.email} onChange={handleInputChange} onBlur={e => checkEmail(e.target.value)} />
              {formErrors.email && (<span className="text-error text-sm">{formErrors.email}</span>)}
            </div>
          </div>

          <div className="mb-6">
            <label htmlFor="password" className="font-medium text-white/[.80] text-sm">Password</label>
            <div className="mt-2 flex relative">
              <input type="password" name="password" data-testid="Password" className={`rounded-lg w-full bg-transparent border border-white focus:border-[#51A2FF] font-normal py-3 px-5 leading-normal font-semibold outline-none pr-[40px] ${formErrors.password ? '!border-error' : ''}`} id="password" value={formData.password} onInput={handleInputChange} onBlur={e => checkPassword(e.target.value)} />
              <span data-testid="PasswordVisibility" className="vector absolute right-4 top-1/2 -translate-y-1/2 cursor-pointer text-white" onClick={(e) => togglePasswordVisibility(e)}>
                <img src={eyeOff} alt="PasswordVisibility" />
              </span>
            </div>
            <CheckList value={formData.password} />
            {formErrors.password && (<span className="text-error text-sm">{formErrors.password}</span>)}
          </div>

          <button type="submit" className="flex items-center justify-center font-bold rounded-lg btn-gradient w-full text-black py-3 px-5" disabled={!isFormValid()}>Create my account {btnLoaderStatus ? <BtnLoader/> : ""}</button>
        </form>

        <div className="divider flex gap-x-2 mb-5">
          <span className="text-sm font-medium">Or</span>
        </div>

        <GoogleLogin type="button" text="Continue with Google" className="mb-6" />

        <p className="mb-5 text-sm text-center">
          Already have an account?{" "}
          <NavLink to="/signin" className="text-sec hover:text-secDark font-medium">
            Sign In
          </NavLink>
        </p>

        <p className="text-center text-sm text-sec hover:text-secDark font-bold">
          <button onClick={toggleSignUpType}>
            {signUpType === "creator" ? "Create User Account" : "Become a Creator"}
          </button>
        </p>
      </Box>
    </Box>
  );
};

export default SignUp;
