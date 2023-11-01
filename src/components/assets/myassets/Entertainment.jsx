import React, { useState } from "react";
import Explore from "components/Explore/Explore";
import {
  VolumetricVideo,
  _180Video,
  _2DVideo,
  _360Video,
  Music,
  Subscription,
} from "./entertainment/index";
import { EntainTabs } from "constant";

/**
 * This file is part of FourthStar User Dashboard
 *(c) 2023 ShadowCast.Io <craig@shadowcast.io>
 *------------------------------------------------------
 *@module Assets-Entertainment-Module
 *@developer Aditya P
 */

const Entertainment = () => {
  const [entainActiveTab, setentainActiveTab] = useState({
    id: 0,
    activetabs: "volumetric-video",
  });

  // This is just a temp variable for testing
  const IsDataAvailable = true;
  return (
    <>
      {/* This __explore_default_button class is a conditional component and it will appears when user don't have any assets */}

      {IsDataAvailable ? (
        <div className="__entertainment_assets_main pl-[15px] max-[768px]:p-0">
          <div className="__entertainment_assets_heading mb-[10px]">
            <h4 className="font-medium font-heading text-[18px] tracking-[1px] px-[20px] max-[768px]:p-0 max-[768px]:text-[15px] max-[1280px]:px-[20px]">
              Entertainments
            </h4>
          </div>

          <div className="__entertaiments__tabs_main pl-[15px] mt-[22px] max-[768px]:w-auto max-[768px]:p-0 max-[1280px]:p-0">
            <ul
              className="
                pl-[8px] 
                flex 
                overflow
                gap-[20px] 
                hover:[&>li]:cursor-pointer 
                max-[768px]:overflow-x-scroll 
                max-[768px]:p-0 
                max-[768px]:[&>li]:underline-offset-1
                "
            >
              {EntainTabs?.map((tabs, ind) => {
                return (
                  <li
                    key={tabs?.key}
                    className={`${
                      entainActiveTab.activetabs === tabs.key
                        ? "text-[#fff] bg-gradient-to-r from-[#FBBC5E] to-[#F3A151] bg-[length:100%_2px] bg-no-repeat bg-bottom font-medium"
                        : "text-[gray]"
                    }`}
                    onClick={() => setentainActiveTab({ activetabs: tabs.key })}
                  >
                    {tabs?.name}
                  </li>
                );
              })}
            </ul>
          </div>

          <div className="_assets_container mt-[30px] flex flex-wrap justify-around max-[768px]:flex-col">
            {/* Entertainment Tabs Container */}
            {entainActiveTab.activetabs === "volumetric-video" && (
              <VolumetricVideo />
            )}
            {entainActiveTab.activetabs === "360-video" && <_360Video />}
            {entainActiveTab.activetabs === "180-video" && <_180Video />}
            {entainActiveTab.activetabs === "2-d-video" && <_2DVideo />}
            {entainActiveTab.activetabs === "music" && <Music />}
            {entainActiveTab.activetabs === "subs" && <Subscription />}
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

export default Entertainment;
