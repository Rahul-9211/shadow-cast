import InviteFriendModal from "components/Modal/InviteFriend/InviteFriendModal";
import React, { useState } from "react";


/**
 * This file is part of FourthStar User Dashboard
 *(c) 2023 ShadowCast.Io <craig@shadowcast.io>
 *------------------------------------------------------
 *@module Invite-Friend-Module
 *@developer Aditya P
 */

const InviteFriend = () => {

  const [isInviteModalStatus, setInviteModal] = useState(false)

  const handleInviteModal = () => {
    setInviteModal(!isInviteModalStatus)
  }

  return (
    <div className="__friends_invite_container py-[45px] min-h-[400px] px-[30px] max-[768px]:p-0">
      <div className="__invite__box__container
                     bg-gradient-to-r 
                     from-[#FBBC5E1A] 
                     to-[#F3A1511A] 
                     text-center 
                     h-[330px] 
                     flex 
                     flex-col 
                     justify-center 
                     align-middle 
                     items-center 
                     rounded-[8px]
                     max-[768px]:h-[200px]
                     max-[768px]:w-[100%]
                     max-[1280px]:h-[220px]
                     ">
        <h2 className="text-[20px] font-heading max-[768px]:text-[15px] max-[1280px]:text-[13px]">Invite Friends</h2>
        <p className="font-body text-[16px] mt-[35px] max-[768px]:text-[12px] max-[768px]:px-[15px] max-[1280px]:px-[15px] max-[768px]:mt-[25px] max-[1280px]:text-[12px] max-[1280px]:mt-[15px]">
          Explore the virtual world with your friends and invite them to your{" "}
          <br /> virtual space and tours.
        </p>
        <button onClick={() => {setInviteModal(!isInviteModalStatus)}} className="bg-transparency border border-[#F3A151] px-[130px] py-[7px] mt-[30px] rounded-[8px] font-medium transition-all hover:text-[#000] hover:bg-[#FBBC5E]">
          Invite
        </button>
      </div>

    {
      isInviteModalStatus ? <InviteFriendModal handleModalStatus={handleInviteModal} /> : <></>
    }

    </div>
  );
};

export default InviteFriend;
