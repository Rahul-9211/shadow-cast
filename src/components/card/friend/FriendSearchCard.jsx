import React from "react";

const FriendSearchCard = ({
  avtarImg,
  username,
  fullname,
  email,
  statustype,
}) => {
  return (
    <div className="__List_card_view flex border-b-[0.4px] border-[#7A7A7A33] py-[10px]">
      <div className="__list__avatar w-auto">
        <img
          src={avtarImg}
          alt="freinds_avatar"
          className="w-[50px] h-[50px]"
        />
      </div>
      <div className="__user_emailData w-[70%] pl-[10px]">
        <div className="__upperData">
          <span className="text-[15px] max-[768px]:text-xs">{username}</span>
          <span className="text-[#FFFFFF80] text-[13px] max-[768px]:text-xs"> {fullname}</span>
        </div>
        <div className="__lowerData">
          <span className="text-[13px] text-[#FFFFFF99] max-[768px]:text-xs"> {email}</span>
        </div>
      </div>
      <div className="__request_btn w-[30%] text-center">
        {statustype === null ? (
          <button className="text-[13px] max-[768px]:text-xs font-medium text-[#F3A151] px-[8px] rounded-[5px] hover:bg-[#494848]">
            Send Request
          </button>
        ) : (
          ""
        )}

        {statustype === "FULLFILL" ? (
          <button className="text-[13px] max-[768px]:text-xs font-bold text-[#3ca237] hover:cursor-not-allowed">
            Added
          </button>
        ) : (
          ""
        )}

        {statustype === "PENDING" ? (
          <button className="text-[13px] max-[768px]:text-xs font-medium text-[#fff] hover:cursor-not-allowed">
            Requested
          </button>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default FriendSearchCard;
