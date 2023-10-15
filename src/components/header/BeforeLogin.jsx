/**
 * This file is part of FourthStar User Dashboard
 *(c) 2023 ShadowCast.Io <craig@shadowcast.io>
 *------------------------------------------------------
 *@module BeforeLogin
 *@developer Sudhanshu <<sudhanshut@instaacoders.com>>
 */

import { Box } from "@mui/material";

import logo from "assets/images/logo.png";
const BeforeLogin = () => {
  return (
    // header before login
    <Box className="wrapper-container ">
      <Box className="h-[100px] flex justify-between items-center bg-black backdrop-blur-2">
        <Box className="logo-image">
          <img
            src={logo}
            className="cursor-pointer w-auto h-auto"
            alt="Network problem"
          />
        </Box>
        <Box className="menu-bar ">
          <ul className="flex justify-between items-center text-sm">
            <li className="mx-4">Marketplace</li>
            <li className="mx-4">Sing in</li>
            <li className="mx-4 py-2.5  px-4 rounded-3xl border border-solid border-1 border-yellow-500 bg-opacity-10 bg-white">
              Create Account
            </li>
          </ul>
        </Box>
      </Box>
    </Box>
  );
};

export default BeforeLogin;
