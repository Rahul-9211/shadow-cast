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
    "w-[20%] pl-[25px] mb-[15px] hover:cursor-pointer max-[768px]:w-[100%] max-[768px]:p-0",
  cardMediaClass: "w-[100%] hover:shadow-[0px_0px_5px_0px_rgba(102,102,102,1)] bg-[#2B2B2B] min-h-[200px] rounded-[10px]",
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
            <h4 className="font-medium font-heading text-[18px] tracking-[1px] px-[28px] max-[768px]:p-0 max-[768px]:text-[15px] max-[1280px]:px-[20px]">
              Companion
            </h4>
          </div>

          <div className="_assets_container mt-[30px] flex flex-wrap justify-around max-[768px]:flex-col">
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
