import {
  Box,
  Button,
  FormControl,
  FormHelperText,
  Grid,
  InputAdornment,
  Item,
  OutlinedInput,
  Typography,
} from "@mui/material";
import React, { useRef, useState } from 'react';
import GoogleLogin from "components/buttons/Google";

const SignUp = () => {
  const ref = useRef(null);
  const [signUpType, setSignUpType] = useState('user');
  const routeChange = (e) => {
    e.preventDefault();
    if (signUpType === "user") {
      setSignUpType("creator");
    } else {
      setSignUpType("user");
    }
    ref.current?.scrollIntoView({ behavior: 'smooth' });
  }
  const visible = (event) => {
    const previousSibling = event.currentTarget.previousElementSibling;
    if (previousSibling.tagName === "INPUT") {
      if (previousSibling.getAttribute("type") === "password") {
        previousSibling.setAttribute("type", "text");
        event.currentTarget.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
        <path d="M8.81999 8.82227C8.50748 9.13489 8.33195 9.55885 8.33203 10.0009C8.33211 10.4429 8.50778 10.8668 8.82041 11.1793C9.13303 11.4919 9.557 11.6674 9.99903 11.6673C10.4411 11.6672 10.865 11.4916 11.1775 11.1789" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M13.9008 13.8942C12.7319 14.6255 11.3789 15.0091 10 15C7 15 4.5 13.3333 2.5 10C3.56 8.23333 4.76 6.935 6.1 6.105M8.48333 5.15C8.98253 5.04894 9.49068 4.99869 10 5C13 5 15.5 6.66667 17.5 10C16.945 10.925 16.3508 11.7225 15.7183 12.3917M2.5 2.5L17.5 17.5" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>`
      } else {
        previousSibling.setAttribute("type", "password");
        event.currentTarget.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
        <path d="M8.81999 8.82227C8.50748 9.13489 8.33195 9.55885 8.33203 10.0009C8.33211 10.4429 8.50778 10.8668 8.82041 11.1793C9.13303 11.4919 9.557 11.6674 9.99903 11.6673C10.4411 11.6672 10.865 11.4916 11.1775 11.1789" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M13.9008 13.8942C12.7319 14.6255 11.3789 15.0091 10 15C7 15 4.5 13.3333 2.5 10C3.56 8.23333 4.76 6.935 6.1 6.105M8.48333 5.15C8.98253 5.04894 9.49068 4.99869 10 5C13 5 15.5 6.66667 17.5 10C16.945 10.925 16.3508 11.7225 15.7183 12.3917M2.5 2.5L17.5 17.5" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>`
      }
    }
  }
  return (
    <Box className="w-full max-w-[700px] rounded-lg border border-[#363636] p-[32px] md:p-[58px] signin-form" ref={ref}>
      <Box className='text-white max-w-[500px] mx-auto'>
        <h1 className="text-xl text-center font-heading mb-[36px]">{signUpType === "creator" ? 'Become a Creator' : 'Create User Account'}</h1>
        <form className="auth-form mb-5">
          <div className="mb-4">
            <label htmlFor="name" className="font-medium text-white/[.80] text-sm">Name</label>
            <div className="mt-2">
              <input type="text" className="rounded-lg w-full bg-transparent border border-white focus:border-[#51A2FF] font-normal py-3 px-5 leading-normal font-semibold outline-none" id="name" />
            </div>
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="font-medium text-white/[.80] text-sm">Email</label>
            <div className="mt-2">
              <input type="email" className="rounded-lg w-full bg-transparent border border-white focus:border-[#51A2FF] font-normal py-3 px-5 leading-normal font-semibold outline-none" id="email" />
            </div>
          </div>
          <div className="mb-6">
            <label htmlFor="password" className="font-medium text-white/[.80] text-sm">Password</label>
            <div className="mt-2 flex relative">
              <input type="password" className="rounded-lg w-full bg-transparent border border-white focus:border-[#51A2FF] font-normal py-3 px-5 leading-normal font-semibold outline-none font-inter pr-[40px] border-error" id="password" />
              <span className="vector absolute right-4 top-1/2 -translate-y-1/2 cursor-pointer text-white" onClick={(e) => visible(e)}>
                {
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <path d="M8.81999 8.82227C8.50748 9.13489 8.33195 9.55885 8.33203 10.0009C8.33211 10.4429 8.50778 10.8668 8.82041 11.1793C9.13303 11.4919 9.557 11.6674 9.99903 11.6673C10.4411 11.6672 10.865 11.4916 11.1775 11.1789" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M13.9008 13.8942C12.7319 14.6255 11.3789 15.0091 10 15C7 15 4.5 13.3333 2.5 10C3.56 8.23333 4.76 6.935 6.1 6.105M8.48333 5.15C8.98253 5.04894 9.49068 4.99869 10 5C13 5 15.5 6.66667 17.5 10C16.945 10.925 16.3508 11.7225 15.7183 12.3917M2.5 2.5L17.5 17.5" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                }
              </span>
            </div>
            <span className="text-error font-inter text-sm">Password is not strong enough.</span>
          </div>
          <button type="submit" className="font-bold rounded-lg btn-gradient w-full text-black py-3 px-5">Create my account</button>
        </form>
        <div className="divider flex gap-x-2 mb-5">
          <span className="text-sm font-medium">Or</span>
        </div>
        <GoogleLogin type="button" text="Continue with Google" className="mb-6" />
        <p className="mb-5 text-sm text-center">Already have an account? <a href="" className="clip-text font-medium">Sign In</a></p>
        <p className="text-center text-sm font-inter clip-text font-bold"><a href="#" onClick={e => routeChange(e)}>{signUpType === "creator" ? 'Create user account' : 'Become a Creator'}</a></p>
      </Box>
    </Box >
  )
  // return (
  //   <>
  //     <Box
  //       className="wrapper-container relative flex justify-center items-center w-full mx-24"
  //       height="700px"
  //     >
  //       <Box className="signin w-full mx-auto">
  //         <Box className="signin-form  flex justify-center items-center w-3/4 mx-auto flex-col">
  //           {/* <Box className="w-full"> */}
  //           <Typography
  //             variant="h6"
  //             className="authheading align-center font-normal text-sm pb-10"
  //           >
  //             Create User Account
  //           </Typography>

  //         <Box className="w-3/4">
  //         <FormControl
  //             sx={{ m: 1 }}
  //             variant="outlined"
  //             className="w-full mx-auto"
  //           >
  //             <FormHelperText id="outlined-weight-helper-text" className="input-label pl-16">
  //               Name
  //             </FormHelperText>

  //             <OutlinedInput className="w-full border-white input-field m-auto" id="" />
  //           </FormControl>

  //           <FormControl
  //             sx={{ m: 1 }}
  //             variant="outlined"
  //             className="w-full mx-auto"
  //           >
  //             <FormHelperText id="outlined-weight-helper-text" className="input-label pl-16">
  //               Email
  //             </FormHelperText>

  //             <OutlinedInput className="w-full border-white input-field m-auto" id="" />
  //           </FormControl>

  //           <FormControl
  //             sx={{ m: 1 }}
  //             variant="outlined"
  //             className="w-full mx-auto pb-10"
  //           >
  //             <FormHelperText id="outlined-weight-helper-text" className="input-label pl-16">
  //               Password
  //             </FormHelperText>

  //             <OutlinedInput className="w-full border-white input-field m-auto" id="" />
  //           </FormControl>

  //          <Box className="w-full mx-auto create-account-btn">
  //          <Button  className="createBtn">Contained</Button>
  //          </Box>
  //         </Box>

  //           {/* </Box> */}
  //         </Box>
  //         <Box className="leftShadow"></Box>
  //         <Box className="rightShadow"></Box>
  //       </Box>
  //     </Box>
  //   </>
  // );
};

export default SignUp;
