/**
 * This file is part of FourthStar User Dashboard
 *(c) 2023 ShadowCast.Io <craig@shadowcast.io>
 *------------------------------------------------------
 *@module ForgotPassword
 *@developer Sudhanshu <sudhanshut@instaacoders.com>>
 */

import { Box } from "@mui/material";
import { useRef, useState } from "react";
import ConfirmPassword from "./confirm-password/index";
import OtpVerification from "./otp-verification/index";

/* This code is a React component for forgot account passwords.
 */
const ForgotPassword = () => {
  const ref = useRef(null);

  const [OtpVerified, setOtpVerified] = useState(true);

  return (
    <Box
      className="w-full max-w-[700px] rounded-lg border border-[#363636] p-[32px] md:p-[58px] signin-form"
      ref={ref}
    >
      {OtpVerified ? <ConfirmPassword /> : <OtpVerification />}
    </Box>
  );
};

export default ForgotPassword;
