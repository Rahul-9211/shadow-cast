import React from "react";
import { IconButton, Menu, MenuItem, Typography } from "@mui/material";
import NotificationsIcon from "@mui/icons-material/Notifications";

import ChannelImage from "assets/images/channel.png";
const NotificationDropdown = ({ open, onClose, notifications }) => {
  const handleNotificationClick = () => {
    onClose(); // Close the dropdown when the "Notifications" icon is clicked
  };

  return (
    <div style={{ position: "absolute" }} className="overlay">
      <IconButton onClick={handleNotificationClick}>
        <NotificationsIcon />
      </IconButton>
      {open && (
        <Menu
          anchorOrigin={{
            vertical: "top",
            horizontal: "right",
            backgroundColor: "#2D2D2D",
          }}
          anchorEl={document.body}
          open={open}
          onClose={onClose}
          style={{ top: "67px", right: "400px" , left:"-90px"}}
        >
          <div className=" bg-[#2D2D2D] p-0">
            <div className="w-[475px] p-[8px] flex justify-between items-center font-semibold">
              <p className="text-[#7A7A7A]">Notifications</p>{" "}
              <p className="">
             <button onClick={ onClose}>
             <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="28"
                  height="28"
                  viewBox="0 0 28 28"
                  fill="none"
                >
                  <path
                    d="M19.6875 8.3125L8.3125 19.6875M8.3125 8.3125L19.6875 19.6875"
                    stroke="white"
                    stroke-opacity="0.5"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
             </button>
              </p>
            </div>
            <div className="w-[475px] notification-dropdown-content ">
              {notifications.map((notification, index) => (
                <div className="hover:bg-[#424242] hover:border-l-4 border-[#FBBC5E] cursor-pointer transition delay-40 ease-in-out " >  
                <hr className="text-[#424242]" style={{ borderColor: "#424242" }} />
                <div onClick={console.log(index)} className="p-4 flex  border-t-10  border-gray-600">
                 
                  <div className="flex w-[20%] py-1 pr-3">
                    {" "}
                    <img src={ChannelImage} />
                  </div>{" "}
                  <div className="w-[80%] text-[14px]  text-white opacity-80 font-medium">
                    {" "}
                    {notification} <p className="pt-[6px] text-[#AEAEAE]">48 min</p>
                  </div>
                </div></div>
              ))}
            </div>
          </div>
        </Menu>
      )}
    </div>
  );
};

export default NotificationDropdown;
