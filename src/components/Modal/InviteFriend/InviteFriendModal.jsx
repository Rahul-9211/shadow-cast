import React from "react";
import ModalCloseIcon from "assets/images/myassets/charm_cross.png";

/**
 * This file is part of FourthStar User Dashboard
 *(c) 2023 ShadowCast.Io <craig@shadowcast.io>
 *------------------------------------------------------
 *@module Invite-Friend-Modal-Module
 *@developer Aditya P
 */

// Invite Search Component
const InviteSearch = () => {
  return <></>;
};

// Send Invite Component
const SendInvite = () => {};

const InviteFriendModal = ({ handleModalStatus }) => {
  return (
    <>
      <div className="flex bg-[#00000099] w-[100%] opacity-100 justify-center items-center overflow-x-hidden overflow-y-auto fixed inset-0 z-[9998] outline-none focus:outline-none">
        Overlay
      </div>
      <div className="__invite_search_component hs-overlay flex justify-center items-center overflow-x-hidden overflow-y-auto fixed inset-0 z-[9999] outline-none focus:outline-none max-[768px]:p-[20px]">
        <div className="bg-[#2C2C2C] __modal__container w-[35%] max-[768px]:w-[100%] min-h-[500px] max-[768px]:h-auto max-[1280px]:w-[50%] rounded-[8px] transition-all hs-overlay-open:opacity-100 hs-overlay-open:duration-500">
          <div className="__modal_close_icon_container flex justify-end p-[10px]">
            <img
              onClick={handleModalStatus}
              src={ModalCloseIcon}
              className="w-[20px] h-[20px] hover:cursor-pointer"
              alt="modal_close_btn"
            />
          </div>
          <div className="__modal_content_main px-[35px] mb-[20px] max-[768px]:p-0">
            <div className="__modal_heading text-center">
              <h4 className="font-heading text-[13px] ">
                Send Invite to Friends
              </h4>
            </div>
            <div className="__input_group_main py-[18px] mx-[20px] max-[768]:p-0">
              <form>
                <div>
                  <label className="font-body text-[14px] text-[#FFFFFFCC] max-[768px]:text-[11px]">Enter Name or Username</label>
                </div>
                <div className="flex mt-[5px] gap-[10px]">
                  <div className="__input_ele w-[80%]">
                    <input className="bg-transparent w-[100%] border border-[#FFFFFF4D] py-[5px] rounded-[8px] px-[10px] text-[14px] font-light hover:outline-none max-[768px]:py-[3px]" type="text" name="search_ele" />
                  </div>
                  <div className="__search_button_main w-[20%]">
                    <button className="border-[2px] py-[5px] rounded-[8px] px-[15px] text-[14px] border-[#F3A151] max-[768px]:py-[3px] max-[768px]:px-[10px] max-[768px]:text-[10px]">Search</button>
                  </div>
                </div>
              </form>
            </div>
            <div className="__search_result_container">
                <span className="text-[13px] font-body text-[#7A7A7A] mx-[20px]">Results</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default InviteFriendModal;
