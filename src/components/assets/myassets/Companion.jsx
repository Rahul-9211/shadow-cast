import React from "react";
import Explore from "components/Explore/Explore";
import AssetCardOpen from "components/card/assets/AssetCardOpen";

/**
 * This file is part of FourthStar User Dashboard
 *(c) 2023 ShadowCast.Io <craig@shadowcast.io>
 *------------------------------------------------------
 *@module Assets-Companion-Module
 *@developer Aditya P
 */

const CompanionCardClass = {
  cardMainclass:
    "w-full min-h-[257px] pl-[10px] mb-[0px] hover:cursor-pointer hover:scale-[1.024] transition duration-300 ease-in-out max-[768px]:w-[100%] max-[768px]:p-0",
  cardMediaClass: "w-[100%] bg-[#2B2B2B] min-h-[257px] rounded-[10px]",
  cardtitleClass: "py-[12px] text-[14px] font-light pl-[6px] max-[768px]:text-[13px]",
  cardButtonclass: "",
};

const Companion = () => {
  // This is just a temp variable for testing
  const IsDataAvailable = true;
  return (
    <>
      {/* This __explore_default_button class is a conditional component and it will appears when user don't have any assets */}

      {IsDataAvailable ? (
        <div className="__clothing_assets_main pl-[15px] max-[768px]:p-0">
          <div className="__clothing_assets_heading mb-[10px]">
            <h4 className="font-medium font-heading text-[18px] tracking-[1px] px-[10px] max-[768px]:p-0 max-[768px]:text-[15px]">
              Companion
            </h4>
          </div>

          <div className="_assets_container grid grid-cols-4 md:grid-cols-4 max-[1200px]:md:grid-cols-3 max-[768px]:grid-cols-2 gap-x-5 gap-y-4 lg:gap-y-8 mb-14 md:mb-28 mx-auto relative z-10 mt-[30px]">
            <AssetCardOpen title="Robo Dog" cardClass={CompanionCardClass} />
            <AssetCardOpen title="Robo Dog" cardClass={CompanionCardClass} />
            <AssetCardOpen title="Robo Dog" cardClass={CompanionCardClass} />
            <AssetCardOpen title="Robo Dog" cardClass={CompanionCardClass} />
            <AssetCardOpen title="Robo Dog" cardClass={CompanionCardClass} />
            <AssetCardOpen title="Robo Dog" cardClass={CompanionCardClass} />
          </div>
        </div>
      ) : (
        <div class="__explore_default_button flex justify-center items-center h-[50vh] max-[768px]:flex-none max-[1280px]:h-[100%]">
          <Explore />
          {/* <Loader/> */}
        </div>
      )}
    </>
  );
};

export default Companion;
