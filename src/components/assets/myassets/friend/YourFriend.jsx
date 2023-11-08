import React, { useState } from "react";
import SearchIcon from "assets/images/search_icon.png";
import FriendProfileCard from "components/card/friend/FriendProfileCard";
import { FriendSearchList } from "constant";
import FriendProfileModal from "components/Modal/InviteFriend/FriendProfileModal";

/**
 * This file is part of FourthStar User Dashboard
 *(c) 2023 ShadowCast.Io <craig@shadowcast.io>
 *------------------------------------------------------
 *@module Your-Friend-Component
 *@developer Aditya P
 */

const YourFriend = () => {
  const [openProfile, setOpenProfile] = useState(false);
  const [userProfileData, setUserProfileData] = useState({});
  const [isFriendAvailable, setFriendAvailable] = useState(false);

  const handleOpenProfileModal = (userData) => {
    setUserProfileData(userData);
    setOpenProfile(!openProfile);
  };

  return (
    <div className="__yourFriend_container">
      <div className="__header_container_main flex max-[768px]:flex-col justify-between">
        <div className="w-[50%] max-[768px]:w-[100%]">
          <h4 className="font-heading text-[20px] max-[768px]:text-[15px]">Your Friends</h4>
        </div>
        <div className="__friend_search_container w-[50%] relative max-[768px]:w-[100%] max-[768px]:mt-[15px]">
          <input
            className="w-[100%] bg-[#383838] border border-[#FFFFFF0D] rounded-[20px] px-[35px] py-[3px] text-[11px] outline-none"
            type="text"
            placeholder="Search"
            name="fr_search"
            onChange={() => {}}
          />
          <img
            src={SearchIcon}
            alt="search_ico"
            className="w-[14px] h-[14px] absolute top-[10px] left-[12px]"
          />
        </div>
      </div>

      {isFriendAvailable ? (
        <div className="__default_container mt-[20px] min-h-[300px] flex flex-col justify-center items-center">
            <div className="__no_friend_container flex flex-col text-center">
                <h4 className="text-[16px] max-[768px]:text-[14px] text-[#7A7A7A] font-body font-medium">You Don’t have a friend yet</h4>
                <button className="w-[222px] 
                                   py-[6px] 
                                   border 
                                   border-[#F3A151] 
                                   mt-[20px] 
                                   rounded-[8px] 
                                   hover:bg-[#F3A151] 
                                   hover:text-[#000] 
                                   font-medium 
                                   font-body
                                   max-[768px]:py-[3px]
                                   max-[768px]:text-[13px]
                                   ">Invite friends</button>
            </div>
        </div>
      ) : (
        <div className="__friend_list_card_container flex flex-wrap justify-normal gap-[20px] mt-[20px] max-[1180px]:justify-evenly">
          {FriendSearchList?.map((f) => {
            return (
              <FriendProfileCard
                key={f?.userId}
                fkey="FRIEND"
                h_card="215px"
                userData={f}
                handleModal={() => handleOpenProfileModal(f)}
              />
            );
          })}
        </div>
      )}

      {openProfile ? (
        <FriendProfileModal
          handleModalStatus={handleOpenProfileModal}
          modalData={userProfileData}
        />
      ) : (
        ""
      )}
    </div>
  );
};

export default YourFriend;
