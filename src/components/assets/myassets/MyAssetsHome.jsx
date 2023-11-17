import React from "react";
import Apartments from "./Apartments";
import Ships from "./Ships";
import Entertainment from "./Entertainment";
import Gaming from "./Gaming";
import Clothing from "./Clothing";
import Companion from "./Companion";
import { useState } from "react";

/**
 * This file is part of FourthStar User Dashboard
 *(c) 2023 ShadowCast.Io <craig@shadowcast.io>
 *------------------------------------------------------
 *@module Assets-Home-Module
 *@developer Aditya P
 */

const myAssetsTabs = [
  {
    id: 0,
    parentId: 0,
    key: "apartments",
    name: "Apartments",
    children: null,
    component: <Apartments />,
  },
  {
    id: 1,
    parentId: 0,
    key: "ships",
    name: "Ships",
    children: null,
    component: <Ships />,
  },
  {
    id: 2,
    parentId: 0,
    key: "entertain",
    name: "Entertainment",
    children: null,
    component: <Entertainment />,
  },
  {
    id: 3,
    parentId: 0,
    key: "clothing",
    name: "Clothing",
    children: [
      {
        id: 0,
        key: "space-suits",
        name: "Space Suits",
      },
      {
        id: 1,
        key: "top-wear",
        name: "Top Wear",
      },
      {
        id: 2,
        key: "bottom-wear",
        name: "Bottom Wear",
      },
      {
        id: 3,
        key: "accessories",
        name: "Accessories",
      },
    ],
    component: <Clothing />,
  },
  {
    id: 4,
    parentId: 0,
    key: "companion",
    name: "Companion",
    children: null,
    component: <Companion />,
  },
  {
    id: 5,
    parentId: 0,
    key: "game",
    name: "Gaming",
    children: null,
    component: <Gaming />,
  },
];

const MyAssetsHome = () => {
  const [activeTabs, setActivetab] = useState({
    id: 0,
    parentId: 0,
    key: "apartments",
    name: "Apartments",
    children: [],
    component: <Apartments />,
  });

  return (
    <div data-testid="my-assetsHome-main" className="__myassets_container_main px-[15px] py-[35px] flex max-[768px]:flex-col max-[768px]:p-0 max-[1280px]:py-[25px]">
      <div data-testid="myAssets-category-main" className="__assets_category_panel w-[20%] py-[20px] max-[768px]:w-auto max-[768px]:p-0 max-[1280px]:p-0">
        <h5 className="text-[grey] font-body font-bold tracking-[1px] max-[768px]:hidden">
          My Assets
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
          {myAssetsTabs?.map((tabs, index) => {
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

      <div className="__assets_tabs_container_panel w-[80%] p-[10px] max-[768px]:w-auto max-[768px]:h-auto max-[768px]:mt-[18px]">
        {activeTabs.key === "apartments" && activeTabs.component}
        {activeTabs.key === "ships" && activeTabs.component}
        {activeTabs.key === "entertain" && activeTabs.component}
        {activeTabs.key === "clothing" && activeTabs.component}
        {activeTabs.key === "companion" && activeTabs.component}
        {activeTabs.key === "game" && activeTabs.component}
      </div>
    </div>
  );
};

export default MyAssetsHome;
