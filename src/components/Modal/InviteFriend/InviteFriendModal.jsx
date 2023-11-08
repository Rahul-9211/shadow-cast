import React, { useCallback, useState } from "react";
import ModalCloseIcon from "assets/images/myassets/charm_cross.png";
import { FriendSearchList } from "constant";
import { debounce } from "lodash";
import FriendsAvatarImg from "assets/images/friends_avatar.png";
import FriendSearchCard from "components/card/friend/FriendSearchCard";
import InviteSentIcon from "assets/images/mdi_tick.png";

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
  const [IssentInvite, setsentInvite] = useState(false);
  const [sentInvite, SetsentInvite] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  /**
   *@desc Implement Debouncing for search result optimization
   */
  const handleSearchDebounce = useCallback(
    debounce(() => {}, 300),
    []
  );
  return (
    <>
      <div className="flex bg-[#00000099] opacity-100 justify-center items-center overflow-x-hidden overflow-y-auto fixed inset-0 z-[9998] outline-none focus:outline-none">
        Overlay
      </div>
      <div className="__invite_search_component hs-overlay flex justify-center items-center overflow-x-hidden overflow-y-auto fixed inset-0 z-[9999] outline-none focus:outline-none max-[768px]:p-[20px]">
        <div className="bg-[#2C2C2C] __modal__container w-[35%] max-[768px]:w-[100%] h-auto max-[768px]:h-auto max-[1280px]:w-[50%] rounded-[8px] transition-all hs-overlay-open:opacity-100 hs-overlay-open:duration-500">
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
            <div className="__input_group_main py-[18px] mx-[20px] max-[768px]:p-0 max-[768px]:mt-[15px]">
              {/* Search Input Component */}
              {IssentInvite ? (
                ""
              ) : (
                <form>
                  <div>
                    <label className="font-body text-[14px] text-[#FFFFFFCC] max-[768px]:text-[11px]">
                      Enter Name or Username
                    </label>
                  </div>
                  <div className="flex mt-[5px] gap-[10px]">
                    <div className="__input_ele w-[80%]">
                      <input
                        className="bg-transparent w-[100%] border border-[#FFFFFF4D] py-[5px] rounded-[8px] px-[10px] text-[14px] font-light hover:outline-none max-[768px]:py-[3px]"
                        type="text"
                        name="search_ele"
                        onChange={(e) => handleSearchChange(e)}
                      />
                    </div>
                    <div className="__search_button_main w-[20%]">
                      <button className="border-[2px] py-[5px] rounded-[8px] px-[15px] text-[14px] border-[#F3A151] max-[768px]:py-[3px] max-[768px]:px-[10px] max-[768px]:text-[10px]">
                        Search
                      </button>
                    </div>
                  </div>
                </form>
              )}

              {/* Sent Email Component */}
              {IssentInvite ? (
                sentInvite ? (
                  ""
                ) : (
                  <form>
                    <div>
                      <label className="font-body text-[14px] text-[#FFFFFFCC] max-[768px]:text-[11px]">
                        Enter email id
                      </label>
                    </div>
                    <div className="flex flex-col mt-[5px] gap-[10px]">
                      <div className="__input_sent_ele w-[100%]">
                        <input
                          className="bg-transparent w-[100%] border border-[#FFFFFF4D] py-[5px] rounded-[8px] px-[10px] text-[14px] font-light hover:outline-none max-[768px]:py-[3px]"
                          type="text"
                          name="search_ele"
                          placeholder="Enter email"
                          onChange={(e) => {}}
                        />
                      </div>
                      <div className="__search_button_main flex justify-center py-[20px]">
                        <button
                          onClick={(e) => {
                            e.preventDefault();
                            SetsentInvite(!sentInvite);
                          }}
                          className="border-[2px] py-[5px] rounded-[8px] px-[15px] text-[14px] border-[#F3A151] max-[768px]:py-[3px] max-[768px]:px-[10px] max-[768px]:text-[10px]"
                        >
                          Sent Invite
                        </button>
                      </div>
                    </div>
                  </form>
                )
              ) : (
                ""
              )}

              {/* Invite Sent Component */}
              {sentInvite ? (
                <div className="__invite_sent_dialog flex flex-col gap-[20px] justify-center items-center mt-[15px]">
                  <img
                    src={InviteSentIcon}
                    alt="invite_sent_icon"
                    className="w-[52px] h-[52px]"
                  />
                  <h4 className="font-heading text-[15px]">Invite Sent</h4>
                  <p className="font-body text-[13px] text-center">
                    They will added to your friends list once they accept your
                    invite.
                  </p>
                  <button
                    onClick={handleModalStatus}
                    className="border-[2px] py-[5px] rounded-[8px] px-[15px] text-[14px] border-[#F3A151] max-[768px]:py-[3px] max-[768px]:px-[10px] max-[768px]:text-[10px]"
                  >
                    Got it!
                  </button>
                </div>
              ) : (
                ""
              )}
            </div>

            {/* Search Container */}
            <div className="__search_result_container h-[100%] max-[768px]:mt-[15px]">
              {IssentInvite ? (
                ""
              ) : (
                <span className="text-[13px] font-body text-[#7A7A7A] mx-[20px]">
                  Results
                </span>
              )}

              {/* This container will shown when no user is found after the search */}
              {/* Search List */}
              {/* <div className="__no_user_found_main text-center py-[50px] px-[35px]">
                  <span className="text-[14px] font-body">No user was found with this name or username.</span><br/>
                  <button onClick={() => setsentInvite(!IssentInvite)} className="text-[#F3A151] text-[14px] hover:underline">Invite via email</button>
              </div> */}

              {/* User Friends List */}
              {IssentInvite ? (
                ""
              ) : (
                <div className="__friends_list_view_main px-[22px]">
                  <div className="__friend_list_scroll_container pr-[10px] max-h-[250px] overflow overflow-y-scroll">
                    {FriendSearchList.map((_li) => {
                      return (
                        <FriendSearchCard
                          key={_li?.userId}
                          avtarImg={FriendsAvatarImg}
                          username={`@${_li?.username}`}
                          fullname={_li?.name}
                          email={_li?.email}
                          statustype={_li?.status}
                        />
                      );
                    })}
                  </div>

                  <div className="__invite_via_email_container text-center">
                    <p className="text-[14px] mt-[20px] max-[768px]:text-xs">
                      Did not find User? Try inviting{" "}
                      <span className="text-[#F3A151] font-medium">
                        <button
                          onClick={() => setsentInvite(!IssentInvite)}
                          className="hover:underline"
                        >
                          via Email
                        </button>
                      </span>
                    </p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default InviteFriendModal;
