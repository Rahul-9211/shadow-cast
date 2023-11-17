import React, {useState} from "react";
import FriendBannerImg from "assets/images/myassets/Friends hero section image 3.jpg";
import InviteFriend from "components/assets/myassets/friend/InviteFriend";
import YourFriend from "components/assets/myassets/friend/YourFriend";
import PendingInvites from "components/assets/myassets/friend/PendingInvites";
import Requests from "components/assets/myassets/friend/Requests";
import Blocked from "components/assets/myassets/friend/Blocked";
import ShadowFrame from "components/shadow-frame";

/**
 * This file is part of FourthStar User Dashboard
 *(c) 2023 ShadowCast.Io <craig@shadowcast.io>
 *------------------------------------------------------
 *@module Friend-Invite-Home-Component
 *@developer Aditya P
 */

const myFriendTabs = [
  {
    id: 0,
    parentId: 0,
    key: "invite-friend",
    name: "Invite",
    children: [],
    component: <InviteFriend />,
  },
  {
    id: 1,
    parentId: 0,
    key: "your-friend",
    name: "Your Friends",
    children: [],
    component: <YourFriend />,
  },
  {
    id: 2,
    parentId: 0,
    key: "pending-invites",
    name: "Pending Invites",
    children: [],
    component: <PendingInvites />,
  },
  {
    id: 3,
    parentId: 0,
    key: "request",
    name: "Requests",
    children: [],
    component: <Requests />,
  },
  {
    id: 4,
    parentId: 0,
    key: "blocked",
    name: "Blocked",
    children: [],
    component: <Blocked />,
  }
];

const InviteHome = () => {
  const [activeTabs, setActivetab] = useState({
    id: 0,
    parentId: 0,
    key: "invite-friend",
    name: "Invite",
    children: [],
    component: <InviteFriend />,
  });


  return (
    <div className="__invite_friend_home w-[100%]">
      <div className="__invite_friend_banner_main relative top-0 right-0">
        <img
          src={FriendBannerImg}
          alt="friend_banner_bg"
          className="w-[100%] z-0"
        />
        <div className=" absolute top-[50%] left-0 w-[100%] text-center -translate-y-1/2"> <h3 className="font-heading text-[32px] max-[768px]:text-xs max-[1280px]:text-base max-[1100px]:text-lg">Bring Your Friends to the virtual party</h3></div>
      </div>

      {/* <div className="container mx-auto px-[60px] py-[25px] max-[768px]:px-[15px] max-[1280px]:px-0 relative z-10">  */}
      <div className="container app-container mx-auto px-2 md:px-3 xl:px-6 2xl:px-10 py-[25px] relative z-10">
        <div className="__myfriend_invite_container_main px-[15px] py-[35px] flex max-[768px]:flex-col max-[768px]:p-0 max-[1280px]:py-[25px]">
          <div className="__myfriend_invite_category_panel w-[25%] py-[20px] px-[10px] max-[768px]:w-auto max-[768px]:p-0 max-[1280px]:p-0">
            <h5 className="text-[grey] font-bold tracking-[1px] max-[768px]:hidden">
              Friends
            </h5>
            <ul
              className="overflow-y-scroll
                     [&>li]:px-[12px] 
                     [&>li]:py-[10px] 
                     [&>li]:font-light 
                     [&>li]:my-[15px]    
                     hover:[&>li]:rounded-[5px]
                     hover:[&>li]:cursor-pointer
                     max-[768px]:overflow-x-scroll
                     max-[768px]:flex
                     max-[768px]:[&>li]:py-[5px]
                     max-[768px]:[&>li]:my-[10px]
                     max-[768px]:px-0
                     max-[768px]:[&>li]:text-[12px]
                     "
            >
              {myFriendTabs?.map((tabs, index) => {
                return (
                  <li
                    key={tabs?.key}
                    className={`hover:bg-[#FBBC5E1A] rounded-[5px] ${
                      activeTabs.key === tabs.key
                        ? "!bg-[#FBBC5E4D]"
                        : ""
                    }`}
                    onClick={() => setActivetab(tabs)}
                  >
                    {tabs.name}
                  </li>
                );
              })}
            </ul>
          </div>

          <div className="__friends_tabs_container_panel z-[9999] w-[75%] p-[10px] max-[768px]:w-auto max-[768px]:h-auto max-[768px]:mt-[18px]">
            {activeTabs.key === "invite-friend" && activeTabs.component}
            {activeTabs.key === "your-friend" && activeTabs.component}
            {activeTabs.key === "pending-invites" && activeTabs.component}
            {activeTabs.key === "request" && activeTabs.component}
            {activeTabs.key === "blocked" && activeTabs.component}
          </div>
        </div>
        
      </div>
      <ShadowFrame data-testid="shadow-frame" className="z-[0] w-[350px] md:w-[250px] h-[350px] md:h-[400px] rounded-[250px] md:rounded-[400px] left-[-10%] max-[768px]:left-[-50%] top-[50%] max-[768px]:top-[70%] translate-x-1/2 bottom-0 !bg-[#FFE9C9]" />
      <ShadowFrame data-testid="shadow-frame" className="z-[0] w-[250px] md:w-[250px] h-[250px] md:h-[400px] rounded-[250px] md:rounded-[400px] right-[10%] max-[768px]:right-[50%] top-[60%] max-[768px]:top-[70%] translate-x-1/2 bottom-0 !bg-[#FFE9C9]" />
    </div>
  );
};

export default InviteHome;
