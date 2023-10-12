/**
 * This file is part of FourthStar User Dashboard
 *(c) 2023 ShadowCast.Io <craig@shadowcast.io>
 *------------------------------------------------------
 *@module Reset Password
 *@developer Sudhanshu <sudhanshut@instaacoders.com>
 */
import { Box } from "@mui/material";
import { useState } from "react";
import eyeOn from "assets/images/eye-on.svg";
import eyeOff from "assets/images/eye-off.svg";
const ResetPassword = () => {
    const [passVisIcon, setPassVisIcon] = useState(eyeOff);
    // Function to toggle password visibility
    const togglePasswordVisibility = (event) => {
        const passwordInput = event.currentTarget.previousElementSibling;

        if (passwordInput.tagName === "INPUT") {
            if (passwordInput.getAttribute("type") === "password") {
                passwordInput.setAttribute("type", "text");
                setPassVisIcon(eyeOn);
            } else {
                passwordInput.setAttribute("type", "password");
                setPassVisIcon(eyeOff);
            }
        }
    };

    return (
        <Box
            className="w-full max-w-[700px] rounded-lg border border-[#363636] p-[32px] md:p-[58px] signin-form"
        >
            <Box className="text-white max-w-[500px] mx-auto">
                <h1 className="text-xl text-center font-heading mb-7">Reset Password</h1>
                <form className="auth-form mb-4">
                    <div className="mb-6">                        
                        <div className="mt-2 flex relative">
                            <input
                                type="password"
                                name="password"
                                className="rounded-lg w-full bg-transparent border border-white focus:border-[#51A2FF] font-normal py-3 px-5 leading-normal font-semibold outline-none font-inter pr-[40px] placeholder-normal"
                                id="password"
                                placeholder="Enter new password"
                            />
                            <span
                                className="vector absolute right-4 top-1/2 -translate-y-1/2 cursor-pointer text-white"
                                onClick={(e) => togglePasswordVisibility(e)}
                            >
                                <img src={passVisIcon} alt="PasswordVisibility" />
                            </span>
                        </div>
                    </div>
                    <div className="mb-6">
                        <div className="mt-2 flex relative">
                            <input
                                type="password"
                                name="conf_pass"
                                className="rounded-lg w-full bg-transparent border border-white focus:border-[#51A2FF] font-normal py-3 px-5 leading-normal font-semibold outline-none font-inter pr-[40px] placeholder-normal"
                                id="conf_pass"
                                placeholder="Confirm new password"
                            />
                            <span
                                className="vector absolute right-4 top-1/2 -translate-y-1/2 cursor-pointer text-white"
                                onClick={(e) => togglePasswordVisibility(e)}
                            >
                                <img src={passVisIcon} alt="PasswordVisibility" />
                            </span>
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

export default ResetPassword;