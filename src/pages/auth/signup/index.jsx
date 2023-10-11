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
    ref.current?.scrollIntoView({behavior: 'smooth'});
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
            <div className="mt-2">
              <input type="password" className="rounded-lg w-full bg-transparent border border-white focus:border-[#51A2FF] font-normal py-3 px-5 leading-normal font-semibold outline-none font-inter" id="password" />
            </div>
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
