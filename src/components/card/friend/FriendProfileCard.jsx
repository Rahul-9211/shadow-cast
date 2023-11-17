import React from "react";
import FriendAvatarIcon from 'assets/images/f_avatar.png'

/**
 * This file is part of FourthStar User Dashboard
 *(c) 2023 ShadowCast.Io <craig@shadowcast.io>
 *------------------------------------------------------
 *@module Your-Friend-Card
 *@developer Aditya P
 */

const FriendProfileCard = ({fkey, h_card, userData, handleModal}) => {
  return (
    <div onClick={handleModal} className={`__list_card_main flex flex-col justify-center items-center max-[668px]:w-[100%] py-[10px] w-[218px] h-[${h_card}] bg-gradient-to-r from-[#FBBC5E0D] to-[#F3A1510D] rounded-[8px] hover:cursor-pointer hover:border-[#FFFFFF80] [&>img]:hover:scale-[1.10]`}>
      <img
        src={FriendAvatarIcon}
        alt="f_avatar"
        className="w-[100px] h-[100px] transition duration-300 ease-in-out"
      />
      <span className="mt-[15px] text-[16px]">@{userData?.username}</span>
      <span className="text-[14px] text-[#FFFFFF80]">{userData?.name}</span>
      {
        fkey === 'BLOCKED' ? <button className="mt-[15px] text-[13px] border border-[#7A7A7A] rounded-[8px] py-[6px] px-[16px] bg-gradient-to-r hover:from-[#FBBC5E4D] hover:to-[#F3A1514D]">
        Unblock User
      </button> : ""
      }
    </div>
  );
};

export default FriendProfileCard;
