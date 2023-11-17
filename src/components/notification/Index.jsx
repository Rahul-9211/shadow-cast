import React from "react";
import { Menu } from "@mui/material";
import ChannelImage from "assets/images/channel.png";
import Drawer from '@mui/material/Drawer';
const NotificationItem = ({ onClose, notifications }) => {
  const handleNotificationClick = () => {
    onClose(); // Close the dropdown when the "Notifications" icon is clicked
  };
  return (
    <>
      <div className="notification-heading px-4 py-5 md:px-3 md:py-3 flex justify-between items-center">
        <h5 className="font-semibold text-lg md:text-sm text-white md:text-[#7A7A7A]">Notifications</h5>
        <button className="text-white md:text-[#7A7A7A] hover:text-white" onClick={handleNotificationClick}>
          <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 28 28" fill="none">
            <path d="M19.6875 8.3125L8.3125 19.6875M8.3125 8.3125L19.6875 19.6875" stroke="currentColor" strokeOpacity="0.5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
      </div>
      <div className="notification-body overflow-y-auto mr-1">
        <ul className="mr-1">
          {notifications.map((el) => (
            <li key={el?.id} className="group flex gap-6 border-l-4 border-l-transparent hover:bg-white hover:bg-opacity-10 hover:border-l-[#FBBC5E] cursor-pointer py-4 border-b border-b-[#424242]">
              <div className="notification_image ml-5">
                <img src={el?.img || ChannelImage} alt="" className="rounded-full w-[58px] h-[58px]" />
              </div>
              <div className="message">
                <div className="content text-sm text-white text-opacity-80 group-hover:text-opacity-100" dangerouslySetInnerHTML={{ __html: el?.content }}></div>
                <div className="timestamp text-sm text-[#AEAEAE] mt-2">
                  {el?.timestamp}
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </>
  )
}
const NotificationDropdown = ({ anchorEl, onClose, notifications, isMobile }) => {
  const open = Boolean(anchorEl);
  const handleNotificationClick = () => {
    onClose(); // Close the dropdown when the "Notifications" icon is clicked
  };
  return (
    <>
      {!isMobile && <Menu
        id="notification"
        sx={
          {
            "& .MuiModal-backdrop":
              { backgroundColor: "rgba(0,0,0,0.6)", },
          }
        }
        anchorEl={anchorEl}
        PopoverClasses={{
          paper: "notification-dropdown"
        }}
        MenuListProps={{
          component: "div"

        }}
        open={open}
        PaperProps={{
          elevation: 0,
          sx: {
            overflow: 'visible',
            mt: 2.5,
            pt: 0,
            bgcolor: "#2D2D2D",
            '& > .MuiMenu-list': {
              paddingTop: 0
            },
            '&:before': {
              content: '""',
              position: 'absolute',
              top: 0,
              right: "calc(50% - 55px)",
              width: 20,
              height: 20,
              display: { xs: 'none', md: 'block' },
              backgroundImage: `url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="18" height="15" viewBox="0 0 18 15" fill="none"><path d="M9 0L17.6603 15H0.339746L9 0Z" fill="%232D2D2D"/></svg>')`,
              transform: 'translateY(-50%)',
              zIndex: 0,
            },

          },
          style: {
            width: '100%',
            maxWidth: '435px',
          }
        }}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
        transformOrigin={{ vertical: 'top', horizontal: 'left' }}
      > 
        
        <NotificationItem onClose={handleNotificationClick} notifications={notifications}/>
      </Menu>}

      {isMobile && <Drawer
          anchor={"right"}
          open={open}
          onClose={handleNotificationClick}
          sx={{
            display: { xs: 'block', lg: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: "100%", maxWidth: "500px", backgroundColor: "#1D1D1D", backdropFilter: "blur(10px)" },
          }}
        > 
          <NotificationItem onClose={handleNotificationClick} notifications={notifications}/>
        </Drawer>}
    </>
  );
};

export default NotificationDropdown;
