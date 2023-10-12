/**
 * This file is part of FourthStar User Dashboard
 *(c) 2023 ShadowCast.Io <craig@shadowcast.io>
 *------------------------------------------------------
 *@module OTP Verification
 *@developer Sudhanshu <sudhanshut@instaacoders.com>
 */

import { Box } from "@mui/material";
const VerifyForm = () => {
    return (
        <Box
            className="w-full max-w-[700px] rounded-lg border border-[#363636] p-[32px] md:p-[58px] signin-form"
        >
            <Box className="text-white max-w-[500px] mx-auto">
                <h1 className="text-xl text-center font-heading mb-6">OTP Verification</h1>
                <p class="text-lightGray font-medium text-center">Please Enter the verification code we sent to your Email.</p>
                <form className="auth-form mt-10 mb-4">
                    <div className="mb-8">
                        <div className="mt-2">
                            <input
                                type="text"
                                name="otp-field"
                                className="rounded-lg w-full bg-transparent border border-white focus:border-[#51A2FF] font-normal py-3 px-5 leading-normal font-semibold outline-none placeholder-normal" placeholder="Enter Verification Code"
                                id="otp-field"
                            />
                        </div>
                    </div>
                    <button
                        type="submit"
                        className="font-bold rounded-lg btn-gradient w-full text-black py-3 px-5"
                    >
                        Verify
                    </button>
                </form>
                <p className="text-center text-sm font-inter clip-text font-bold">
                    <button>Resend Code</button>
                </p>
            </Box>
        </Box>
    )
}

export default VerifyForm;