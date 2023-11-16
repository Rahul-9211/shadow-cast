/**
 * This file is part of FourthStar User Dashboard
 *(c) 2023 ShadowCast.Io <craig@shadowcast.io>
 *------------------------------------------------------
 *@module SingIn
 *@developer Sudhanshu <sudhanshut@instaacoders.com>
 */
import { Box } from "@mui/material";
import { useEffect, useState } from "react";
import GoogleLogin from "components/buttons/Google";
import { NavLink } from "react-router-dom";
import { isValidEmail, togglePasswordVisibility } from "utils/index";
import eyeOff from "assets/images/eye-off.svg";
import { connect } from "react-redux";
import { userData } from "redux/actions/userAction";
import axios from "axios";
import { SERVICE_URL } from "api/services";
/* This code is a React component for user sign-in with the option to switch between "User" and "Creator" accounts. It performs real-time validation for email, and password, including password strength checks. Users can toggle the visibility of the password, and the form is enabled for submission when all requirements are met.
 */

const SignIn = (props) => {
  const { data, userData } = props;
  useEffect(() => {
    // console.log("🚀 ~ file: index.jsx:45 ~ useEffect ~ props:", props);
    // userData({ token: "temporaryToken" });
  }, []);

  const [signInType, setSignInType] = useState("user");
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [formErrors, setFormErrors] = useState({
    email: "",
    password: "",
  });
  const isRequired = value => value === '' ? false : true;
  // Function to toggle between user and creator sign-up
  const toggleSignInType = () => {
    setSignInType((prevSignInType) =>
      prevSignInType === "user" ? "creator" : "user"
    );
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };
  // Function to validate the form data
  const validateForm = () => {
    let isValid = checkEmail(formData.email) && checkPassword(formData.password);
    return isValid;
  };

  // Function to handle input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value.trim(),
    });
    // if (name === "email") {
    //     if (!value.trim() && !value.trim().includes('@')) {
    //         checkEmail(value);
    //     }
    //     if (value.trim() && value.trim().includes('@')) {
    //         checkEmail(value);
    //     } else {
    //         setFormErrors({
    //             ...formErrors,
    //             email: ''
    //         });
    //     }
    // }
    // if (name === "password") {
    //     checkPassword(value);
    // }
  };
  // Function to check if the form is valid
  const isFormValid = () => {
    return (
            isValidEmail(formData.email) &&
            formData.password
        );
  };

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      //   alert(JSON.stringify(formData));
      CheckCredentials();
      //   setFormData({
      //     email: "",
      //     password: "",
      //   });
    }
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
    } else {
      setFormErrors({
        ...formErrors,
        password: ''
      });
      valid = true;
    }
    return valid;
  };

  async function CheckCredentials() {
    console.log("signin API", formData.email, formData.password);
    const payload = {
      email: formData.email,
      password: formData.password,
    };
    try {
      const response = await axios.post(SERVICE_URL.SIGN_IN, payload);
      const data = await response.json();
    } catch (error) {
      console.log(
        "🚀 ~ file: index.jsx:151 ~ CheckCredentials ~ error:",
        error
      );
      alert("some error occured ");
    }
  }

  return (
    <Box className="w-full max-w-[700px] rounded-lg border border-[#363636] p-5 md:p-[32px] lg:p-[58px] signin-form">
      <Box className="text-white max-w-[500px] mx-auto">
        <h1 className="text-lg lg:text-xl text-center font-heading mb-[36px]">
          {signInType === "creator" ? "Sign in as Creator" : "Sign In as User"}
        </h1>
        <form className="auth-form mb-5" onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="email" className="font-medium text-white/[.80] text-sm">Email</label>
            <div className="mt-2">
              <input type="email" name="email" className={`rounded-lg w-full bg-transparent border border-white focus:border-[#51A2FF] font-normal py-3 px-5 leading-normal font-semibold outline-none autofill:bg-transparent ${formErrors.email ? '!border-error' : ''}`} id="email" value={formData.email} onChange={handleInputChange} onBlur={e => checkEmail(e.target.value)} />
              {formErrors.email && (<span className="text-error text-sm">{formErrors.email}</span>)}
            </div>
          </div>
          <div className="mb-2">
            <label htmlFor="password" className="font-medium text-white/[.80] text-sm">Password</label>
            <div className="mt-2 flex relative">
              <input type="password" name="password" className={`rounded-lg w-full bg-transparent border border-white focus:border-[#51A2FF] font-normal py-3 px-5 leading-normal font-semibold outline-none pr-[40px] autofill:bg-transparent ${formErrors.password ? '!border-error' : ''}`} id="password" value={formData.password} onChange={handleInputChange} onBlur={e => checkPassword(e.target.value)} />
              <span data-testid="PasswordVisibility" className="vector absolute right-4 top-1/2 -translate-y-1/2 cursor-pointer text-white" onClick={(e) => togglePasswordVisibility(e)}>
                <img src={eyeOff} alt="PasswordVisibility" />
              </span>
            </div>
            {formErrors.password && (<span className="text-error text-sm">{formErrors.password}</span>)}
          </div>
          <div className="mb-6">
            <NavLink to="/otp-verification" className="text-sec hover:text-secDark font-semibold text-sm">Forgot Password?</NavLink>
          </div>
          <button type="submit" className="font-bold rounded-lg btn-gradient w-full text-black py-3 px-5" disabled={!isFormValid()}>Sign In</button>
        </form>

        <div className="divider flex gap-x-2 mb-5">
          <span className="text-sm font-medium">Or</span>
        </div>

        <GoogleLogin type="button" text="Continue with Google" className="mb-6" />

        <p className="mb-5 text-sm text-center">
          Don't have an account?{" "}
          <NavLink to="/signup" className="text-sec hover:text-secDark font-medium">
            Create account
          </NavLink>
        </p>
        {/* <p>{data.token}</p>
        <button onClick={() => userData({ token: "temporaryToken2" })}>
          click me{" "}
        </button> */}

        <p className="text-center text-sm text-sec hover:text-secDark font-bold">
          <button onClick={toggleSignInType}>
            {signInType === "creator" ? "Sign In as User" : "Sign In as Creator"}
          </button>
        </p>
      </Box>
    </Box>
  );
};

// export default SignIn;

const mapStateToProps = (state) => ({
  data: state.userData,
});

const mapDispatchToProps = {
  userData,
};

export default connect(mapStateToProps, mapDispatchToProps)(SignIn);
