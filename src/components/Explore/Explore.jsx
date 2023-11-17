import React from "react";
import OutlineButton from "components/buttons/outline-button/OutlineButton";

/**
 * This file is part of FourthStar User Dashboard
 *(c) 2023 ShadowCast.Io <craig@shadowcast.io>
 *------------------------------------------------------
 *@module Explore-Marketplace-Default-button
 *@developer Aditya P
 */

const Explore = () => {
  return (
    <div className="__assets_default_explore_main">
      <div className="__explore_container text-center">
        <p className="font-medium text-[grey]">
          You Don't Have anything in your assets
        </p>
        <OutlineButton
          btnclass="border-[2px] 
                          text-[#fff] 
                            font-medium 
                            border-[#FBBC5E4D] 
                            mt-[25px] 
                            py-[3px] 
                            text-[14px] 
                            px-[30px] 
                            rounded-[7px] 
                            hover:bg-[#FBBC5E4D] 
                            hover:text-[#fff] 
                            hover:border-[#FBBC5E4D]
                            max-[768px]:text-[9px]
                            max-[768px]:px-[15px]
                            max-[768px]:mt-[15px]
                            max-[1280px]:text-[10px]
                            max-[1280px]:px-[13px]
                            max-[1280px]:mt-[15px]
                            "
          btntext="Explore Marketplace"
        />
      </div>
    </div>
  );
};

export default Explore;
