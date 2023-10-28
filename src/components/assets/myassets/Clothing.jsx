import React, {useState} from 'react'
import { ClothTabs } from 'constant';
import {SpaceSuit, TopWear, Accessories, BottomWear} from './clothing/index';
import Explore from 'components/Explore/Explore';

/**
 * This file is part of FourthStar User Dashboard
 *(c) 2023 ShadowCast.Io <craig@shadowcast.io>
 *------------------------------------------------------
 *@module Assets-Clothing-Module
 *@developer Aditya P
 */
 

const Clothing = () => {

  const [clothActiveTab, setclothActiveTab] = useState({
    id: 0,
    activetabs: "Space-suits",
  });

  // This is just a temp variable for testing
  const IsDataAvailable = true;
  return  <>
  {/* This __explore_default_button class is a conditional component and it will appears when user don't have any assets */}

  {IsDataAvailable ? (
    <div className="__clothing_assets_main pl-[15px] max-[768px]:p-0">
      <div className="__clothing_assets_heading mb-[10px]">
        <h4 className="font-medium font-heading text-[18px] tracking-[1px] px-[28px] max-[768px]:p-0 max-[768px]:text-[15px] max-[1280px]:px-[20px]">
          Clothing
        </h4>
      </div>

      <div className="__entertaiments__tabs_main pl-[15px] mt-[22px] max-[768px]:w-auto max-[768px]:p-0 max-[1280px]:p-0">
        <ul
          className="
            pl-[15px] 
            flex 
            overflow
            gap-[20px] 
            hover:[&>li]:cursor-pointer 
            max-[768px]:overflow-x-scroll 
            max-[768px]:p-0 
            max-[768px]:[&>li]:underline-offset-1
            "
        >
          {ClothTabs?.map((tabs, ind) => {
            return (
              <li
                key={tabs?.key}
                className={`${
                  clothActiveTab.activetabs === tabs.key
                    ? "text-[#fff] bg-gradient-to-r from-[#FBBC5E] to-[#F3A151] bg-[length:100%_2px] bg-no-repeat bg-bottom font-medium"
                    : "text-[gray]"
                }`}
                onClick={() => setclothActiveTab({ activetabs: tabs.key })}
              >
                {tabs?.name}
              </li>
            );
          })}
        </ul>
      </div>

      <div className="_assets_container mt-[30px] flex flex-wrap justify-around max-[768px]:flex-col">
        {/* Entertainment Tabs Container */}
        {clothActiveTab.activetabs === "Space-suits" && (
          <SpaceSuit />
        )}
        {clothActiveTab.activetabs === "Top-Wear" && <TopWear />}
        {clothActiveTab.activetabs === "Bottom-Wear" && <BottomWear />}
        {clothActiveTab.activetabs === "accessories" && <Accessories />}
      </div>
    </div>
  ) : (
    <div class="__explore_default_button flex justify-center items-center h-[50vh] max-[768px]:flex-none max-[1280px]:h-[100%]">
      <Explore />
      {/* <Loader/> */}
    </div>
  )}
</>
}

export default Clothing