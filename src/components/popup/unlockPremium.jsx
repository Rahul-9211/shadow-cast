/**
 * This file is part of FourthStar User Dashboard
 *(c) 2023 ShadowCast.Io <craig@shadowcast.io>
 *------------------------------------------------------
 *@module UnlockPremium
 *@developer Sudhanshu
 */

import * as React from "react";
import Dialog from "@mui/material/Dialog";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
const UnlockPremium = ({ status, handleData, heading, text, btnText }) => {
  const theme = useTheme();
//   const fullScreen = useMediaQuery(theme.breakpoints.down("md"));
  const handleClick = () => {
    handleData(false);
  };
  return (
    <Dialog
    //   fullScreen={fullScreen}
      open={status}
      onClose={handleClick}
      maxWidth=""
      className="rounded-full"
      sx={{ maxWidth: '700px',maxHeight: 'auto' , margin:"auto" , borderRadius:"84px" }}
    //   aria-labelledby="responsive-dialog-title"
    >
      <div className="py-[24px] px-[33px] sm:py-[48px] sm:px-[66px] bg-[#2C2C2C] text-white rounded ">
        <div className="absolute right-[10px] top-[10px] cursor-pointer" onClick={handleClick}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="28"
            height="28"
            viewBox="0 0 28 28"
            fill="none"
          >
            <rect
              width="28"
              height="28"
              rx="14"
              fill="white"
              fill-opacity="0.1"
            />
            <path
              d="M19.6875 8.3125L8.3125 19.6875M8.3125 8.3125L19.6875 19.6875"
              stroke="white"
              stroke-opacity="0.5"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </div>
        <div className="text-left">
          <h2 className="font-heading text-2xl mb-[29px]">{heading}</h2>
          <p
            className="leading-relaxed "
            dangerouslySetInnerHTML={{ __html: text }}
          ></p>
          <button
            type="button"
            onClick={handleClick}
            className="flex items-center w-full text-sm sm:text-lg justify-center font-bold rounded-lg btn-gradient leading-none text-black py-3 px-12 mt-6"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="25"
              viewBox="0 0 24 25"
              fill="none"
              className="mr-[10px]"
            >
              <path
                d="M12 17.5C12.5304 17.5 13.0391 17.2893 13.4142 16.9142C13.7893 16.5391 14 16.0304 14 15.5C14 14.9696 13.7893 14.4609 13.4142 14.0858C13.0391 13.7107 12.5304 13.5 12 13.5C11.4696 13.5 10.9609 13.7107 10.5858 14.0858C10.2107 14.4609 10 14.9696 10 15.5C10 16.0304 10.2107 16.5391 10.5858 16.9142C10.9609 17.2893 11.4696 17.5 12 17.5ZM18 8.5C18.5304 8.5 19.0391 8.71071 19.4142 9.08579C19.7893 9.46086 20 9.96957 20 10.5V20.5C20 21.0304 19.7893 21.5391 19.4142 21.9142C19.0391 22.2893 18.5304 22.5 18 22.5H6C5.46957 22.5 4.96086 22.2893 4.58579 21.9142C4.21071 21.5391 4 21.0304 4 20.5V10.5C4 9.96957 4.21071 9.46086 4.58579 9.08579C4.96086 8.71071 5.46957 8.5 6 8.5H7V6.5C7 5.17392 7.52678 3.90215 8.46447 2.96447C9.40215 2.02678 10.6739 1.5 12 1.5C12.6566 1.5 13.3068 1.62933 13.9134 1.8806C14.52 2.13188 15.0712 2.50017 15.5355 2.96447C15.9998 3.42876 16.3681 3.97995 16.6194 4.58658C16.8707 5.19321 17 5.84339 17 6.5V8.5H18ZM12 3.5C11.2044 3.5 10.4413 3.81607 9.87868 4.37868C9.31607 4.94129 9 5.70435 9 6.5V8.5H15V6.5C15 5.70435 14.6839 4.94129 14.1213 4.37868C13.5587 3.81607 12.7956 3.5 12 3.5Z"
                fill="black"
              />
            </svg>
            {btnText}
          </button>
        </div>
      </div>
    </Dialog>
  );
};

export default UnlockPremium;
