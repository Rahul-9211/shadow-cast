import React, { useState } from 'react'
import SearchIcon from "assets/images/search_icon.png";
import FriendStatusCard from "components/card/friend/FriendStatusCard";

const Requests = () => {

  const [isRequestAvailable, setRequestAvailable] = useState(true)

  return <div className="__friend__request__invites">
  <div className="__header_container_main flex max-[768px]:flex-col justify-between">
    <div className="w-[50%] max-[768px]:w-[100%]">
      <h4 className="font-heading text-[20px] max-[768px]:text-[15px]">Requests</h4>
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

  {isRequestAvailable ? (
    <div className="__friend__status__container mt-[50px]">
      <h6 className="text-[14px] text-[#FFFFFF80]">Recent</h6>
      <FriendStatusCard statusKey="REQ"/>
      <FriendStatusCard statusKey="REQ"/>
      <FriendStatusCard statusKey="REQ"/>

      <h6 className="text-[14px] text-[#FFFFFF80] mt-[50px]">Previous</h6>
      <FriendStatusCard statusKey="REQ"/>
      <FriendStatusCard statusKey="REQ"/>
      <FriendStatusCard statusKey="REQ"/>
      <FriendStatusCard statusKey="REQ"/>
    </div>
  ) : (
    <div className="__default_container mt-[20px] min-h-[300px] flex flex-col justify-center items-center">
      <div className="__no_friend_container flex flex-col">
        <h4 className="text-[16px] text-[#7A7A7A] font-body font-medium">
          No Pending Invites
        </h4>
      </div>
    </div>
  )}
</div>
}

export default Requests