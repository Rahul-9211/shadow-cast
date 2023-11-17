import React from "react";
import ModalCloseIcon from "assets/images/myassets/charm_cross.png";
import FriendAvatarIcon from 'assets/images/f_avatar.png'


/**
 * This file is part of FourthStar User Dashboard
 *(c) 2023 ShadowCast.Io <craig@shadowcast.io>
 *------------------------------------------------------
 *@module Friend-Profile-Modal
 *@developer Aditya P
 */

const FriendProfileModal = ({handleModalStatus, modalData}) => {
  return (
    <>
      <div className="flex bg-[#00000099] w-[100%] opacity-100 justify-center items-center overflow-x-hidden overflow-y-auto fixed inset-0 z-[9998] outline-none focus:outline-none">
        Overlay
      </div>

      <div className="hs-overlay flex justify-center items-center overflow-x-hidden overflow-y-auto fixed inset-0 z-[9999] outline-none focus:outline-none max-[768px]:p-[20px]">
        <div className="bg-[#2C2C2C] __modal__container w-[35%] max-[768px]:w-[100%] h-auto max-[768px]:h-auto max-[1280px]:w-[50%] rounded-[8px] transition-all hs-overlay-open:opacity-100 hs-overlay-open:duration-500">
          <div className="__modal_close_icon_container flex justify-end p-[10px]">
            <img
              onClick={handleModalStatus}
              src={ModalCloseIcon}
              className="w-[20px] h-[20px] hover:cursor-pointer"
              alt="modal_close_btn"
            />
          </div>
          
          <div className="__modal__content_main flex flex-col justify-center items-center mt-[20px] mb-[50px]">
             <img src={FriendAvatarIcon} alt="avatar_profile" className="w-[138px] h-[138px]" />
             <h4 className="text-[20px] mt-[15px]">@{modalData?.username}</h4>
             <span className="text-[16px] text-[#FFFFFF80]">{modalData?.name}</span>
             <div className="flex py-[30px] [&>button]:border gap-[20px] [&>button]:text-[16px] [&>button]:w-[135px] [&>button]:p-[5px] [&>button]:rounded-[5px] [&>button]:border-[#F3A151]">
                <button className="hover:bg-[#F3A151] hover:text-[#000]">Remove</button>
                <button className="hover:bg-[#F3A151] hover:text-[#000]">Block</button>
             </div>
          </div>

        </div>
      </div>
    </>
  );
};

export default FriendProfileModal;
