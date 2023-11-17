import React, { useState } from "react";
import ModalClose from "assets/images/myassets/charm_cross.png";
import EyeOffPass from "assets/images/eye-off.svg";
import EyeOnPass from "assets/images/eye-on.svg";

/**
 * This file is part of FourthStar User Dashboard
 *(c) 2023 ShadowCast.Io <craig@shadowcast.io>
 *------------------------------------------------------
 *@module Password-Reset-Modal
 *@developer Aditya P
 */

const PasswordModal = ({ handleModalStatus, modalStatus }) => {
  const [isPasswordCurrentDisplay, SetPasswordCurrentDisplay] = useState(false);
  const [isPasswordNewDisplay, SetPasswordNewDisplay] = useState(false);
  const [isPasswordConfirmDisplay, SetPasswordConfirmDisplay] = useState(false);

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
              src={ModalClose}
              className="w-[20px] h-[20px] hover:cursor-pointer"
              alt="modal_close_btn"
            />
          </div>
          <div className="__modal_content_main px-[35px]">
            <h4 className="text-[18px] max-[768px]:text-[16px] font-bold">
              Change Password
            </h4>
            <div className="__passwordreset_form_container flex flex-col">
              <form onSubmit={() => {}}>
                <div className="flex flex-col relative container mx-auto">
                  <label
                    htmlFor="curr_pass"
                    className="text-[14px] max-[768px]:text-[12px] mt-[20px]"
                  >
                    Current Password
                  </label>
                  <input
                    type={`${isPasswordCurrentDisplay ? "text" : "password"}`}
                    className="mt-[5px] bg-transparent border-[1px] border-[#FFFFFF1A] rounded-[8px] p-[10px] focus:border-[#51A2FF] outline-none"
                    name="curr_pass"
                    data-testid="Password"
                    required
                  />
                  <span
                    onClick={() =>
                      SetPasswordCurrentDisplay(!isPasswordCurrentDisplay)
                    }
                    className="hover:cursor-pointer absolute top-[60px] right-0 flex items-center px-4 text-gray-600"
                  >
                    <img
                      className="w-[20px] h-[20px]"
                      src={isPasswordCurrentDisplay ? EyeOnPass : EyeOffPass}
                    />
                  </span>
                </div>
                <div className="flex flex-col relative container mx-auto">
                  <label
                    htmlFor="new_pass"
                    className="text-[14px] max-[768px]:text-[12px] mt-[20px]"
                  >
                    New Password
                  </label>
                  <input
                    type={`${isPasswordNewDisplay ? "text" : "password"}`}
                    className="mt-[5px] bg-transparent border-[1px] border-[#FFFFFF1A] rounded-[8px] p-[10px] focus:border-[#51A2FF] outline-none"
                    name="new_pass"
                  />
                  <span
                    onClick={() => SetPasswordNewDisplay(!isPasswordNewDisplay)}
                    className="hover:cursor-pointer absolute top-[60px] right-0 flex items-center px-4 text-gray-600"
                  >
                    <img
                      className="w-[20px] h-[20px]"
                      src={isPasswordNewDisplay ? EyeOnPass : EyeOffPass}
                    />
                  </span>
                </div>
                <div className="flex flex-col relative container mx-auto">
                  <label
                    htmlFor="con_new_pass"
                    className="text-[14px] max-[768px]:text-[12px] mt-[20px]"
                  >
                    Confirm New Password
                  </label>
                  <input
                    type={`${isPasswordConfirmDisplay ? "text" : "password"}`}
                    className="mt-[5px] bg-transparent border-[1px] border-[#FFFFFF1A] rounded-[8px] p-[10px] focus:border-[#51A2FF] outline-none"
                    name="con_new_pass"
                  />
                  <span
                    onClick={() =>
                      SetPasswordConfirmDisplay(!isPasswordConfirmDisplay)
                    }
                    className="hover:cursor-pointer absolute top-[60px] right-0 flex items-center px-4 text-gray-600"
                  >
                    <img
                      className="w-[20px] h-[20px]"
                      src={isPasswordConfirmDisplay ? EyeOnPass : EyeOffPass}
                    />
                  </span>
                </div>

                <div className="__form_btn_group flex justify-center mt-[40px] mb-[40px] gap-[20px]">
                  <button
                    onClick={handleModalStatus}
                    className="bg-[#7A7A7A] text-[16px] max-[768px]:text-[14px] font-medium w-[50%] rounded-[8px] py-[10px]"
                  >
                    Cancel
                  </button>
                  <button className="bg-[#F3A151] text-[#000] text-[16px] max-[768px]:text-[14px] font-semibold w-[50%] rounded-[8px]">
                    Change
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PasswordModal;
