/**
 * This file is part of FourthStar User Dashboard
 *(c) 2023 ShadowCast.Io <craig@shadowcast.io>
 *------------------------------------------------------
 *@module Clothing-Landing-component
 *@developer Aditya P
 */

import React, { useState } from "react";
import { Zoom } from "react-reveal";
import ClothingBannerImg from "assets/images/clothing-banner-image.png";
import {
  TopWear,
  SpaceSuit,
  BottomWear,
  Accessories,
} from "components/assets/myassets/clothing/index";
import ShadowFrame from "components/shadow-frame";

const ClothingTabs = [
  {
    id: 0,
    key: "space-suits",
    name: "Space Suits",
    component: <SpaceSuit type="CLOTHLAN" belongTo="space-suits" />,
  },
  {
    id: 1,
    key: "top-wear",
    name: "Top Wear",
    component: <TopWear type="CLOTHLAN" belongTo="top-wear" />,
  },
  {
    id: 2,
    key: "bottom-wear",
    name: "Bottom Wear",
    component: <BottomWear type="CLOTHLAN" belongTo="bottom-wear" />,
  },
  {
    id: 3,
    key: "footwear",
    name: "Footwear",
    component: <></>,
  },
  {
    id: 4,
    key: "accessories",
    name: "Accessories",
    component: <Accessories type="CLOTHLAN" belongTo="accessories" />,
  },
];

const Index = () => {
  const [activeTabs, setActivetab] = useState({
    id: 0,
    key: "space-suits",
    name: "Space Suits",
    component: <SpaceSuit type="CLOTHLAN" belongTo="space-suits" />,
  });
  return (
    <div className="px-2">
      <Zoom>
        <div className="xl:min-h-[350px] bg-[#2D2D2D] h-full mb-10 md:mb-20 z-10 relative">
          <img
            src={ClothingBannerImg}
            alt="Network Problem"
            className="h-full w-full object-cover"
          />
        </div>
      </Zoom>

      {/* Clothing Content Tabs and Data Cards */}

      <div className="flex max-[768px]:flex-col max-[768px]:p-0">
      <ShadowFrame data-testid="shadow-frame" className="z-[0] w-[350px] md:w-[250px] h-[350px] md:h-[400px] rounded-[250px] md:rounded-[400px] left-[-10%] max-[768px]:left-[-50%] top-[50%] max-[768px]:top-[10%] translate-x-1/2 bottom-0 !bg-[#FFE9C9]" />
      <ShadowFrame data-testid="shadow-frame" className="z-[0] w-[250px] md:w-[250px] h-[250px] md:h-[400px] rounded-[250px] md:rounded-[400px] right-[10%] max-[768px]:right-[50%] top-[60%] max-[768px]:top-[10%] translate-x-1/2 bottom-0 !bg-[#FFE9C9]" />
        <div className="__clothing_landing_category_panel w-[20%] py-[20px] max-[768px]:w-auto max-[768px]:p-0 max-[1280px]:p-0 relative">
          <h5 className="text-[grey] font-body font-bold tracking-[1px] max-[768px]:hidden">
            Category
          </h5>
          <ul
            className="overflow-y-scroll
                     px-[0px]
                     [&>li]:px-[12px] 
                     [&>li]:py-[10px] 
                     [&>li]:font-light 
                     [&>li]:font-body
                     [&>li]:my-[15px] 
                     hover:[&>li]:bg-[#FBBC5E1A]
                     hover:[&>li]:rounded-[5px]
                     hover:[&>li]:cursor-pointer
                     max-[768px]:overflow-x-scroll
                     max-[768px]:flex
                     max-[768px]:[&>li]:py-[5px]
                     max-[768px]:[&>li]:my-[10px]
                     max-[768px]:px-0
                     max-[768px]:text-[11px]
                     "
          >
            {ClothingTabs?.map((tabs, index) => {
              return (
                <li
                  key={tabs.key}
                  className={`hover:bg-[#FBBC5E4D] rounded-[5px] ${
                    activeTabs.key === tabs.key
                      ? "!bg-[#FBBC5E4D]"
                      : ""
                  }`}
                  onClick={() => setActivetab(tabs)}
                >
                  {tabs.name}
                </li>
              );
            })}
          </ul>
        </div>

        {/* Tabs container data */}
        
        <div className="__clothing_landing_tabs_container_panel pl-[50px] max-[768px]:pl-0 pt-[20px] max-[768px]:pt-0 w-[80%] p-[10px] max-[768px]:w-auto max-[768px]:h-auto max-[768px]:mt-[0px]">
        <div className="font-heading font-bold tracking-[1px] text-[20px] max-[768px]:text-[15px] max-[768px]:mt-[15px] pl-[10px]">
          <h4>{activeTabs.name}</h4>
        </div>
          <div className="grid grid-cols-4 md:grid-cols-4 max-[1200px]:md:grid-cols-3 max-[768px]:grid-cols-2 gap-x-5 gap-y-4 lg:gap-y-8 mb-14 md:mb-28 mx-auto relative z-10 mt-[30px]">
            {activeTabs.key === "space-suits" && activeTabs.component}
            {activeTabs.key === "top-wear" && activeTabs.component}
            {activeTabs.key === "bottom-wear" && activeTabs.component}
            {activeTabs.key === "footwear" && activeTabs.component}
            {activeTabs.key === "accessories" && activeTabs.component}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
