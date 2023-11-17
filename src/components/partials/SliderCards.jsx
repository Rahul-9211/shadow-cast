import React from "react";
import { Link } from "react-router-dom";

/**
 * This file is part of FourthStar User Dashboard
 *(c) 2023 ShadowCast.Io <craig@shadowcast.io>
 *------------------------------------------------------
 *@module Companion-Landing-SliderCard
 *@developer Aditya P
 */

const SliderCards = ({ item, id, baseRoute }) => {
  return (
    <Link to={`/${baseRoute}/${id}/${item?.heading.split(" ").join('-')}`}>
      <div
      
        key={item?.id}
        className={`__card_body hover:cursor-pointer hover:scale-[1.024] transition duration-300 ease-in-out`}
      >
        <div className={`__card_banner bg-[#242424] ${id === "gaming" ? 'w-auto h-[337px] max-[768px]:w-[100%] max-[1200px]:w-auto': ''} w-[297px] h-[327px] rounded-[16px]`}></div>
        <div className="__card_heading mt-[8px] pl-[5px]">
          <h5 className="text-[14px] font-body">{item?.heading}</h5>
        </div>
        <div className="__card_exception_main pl-[5px]">
          {item?.isComing ? (
            <span className="text-[14px] font-body text-[#F3A151] font-medium">
              Coming Soon
            </span>
          ) : (
            ""
          )}
        </div>
      </div>
    </Link>
  );
};

export default SliderCards;
