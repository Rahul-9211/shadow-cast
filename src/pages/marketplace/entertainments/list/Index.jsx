import React from "react";
import Video2D from "../components/2d";
import Video180 from "../components/180";
import Video360 from "../components/360";
import Channels from "../components/channels";
import Music from "../components/music";
import Volumetric from "../components/volumetric";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

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
    key: "volumetric-video",
    name: "Volumetric Video",
    children: null,
    component: <Volumetric />,
  },
  {
    id: 1,
    parentId: 0,
    key: "180-video",
    name: "180 Video",
    children: null,
    component: <Video180 />,
  },
  {
    id: 2,
    parentId: 0,
    key: "360-video",
    name: "360 Video",
    children: null,
    component: <Video360 />,
  },
  {
    id: 3,
    parentId: 0,
    key: "2D-video",
    name: "2D Video",
    children: null,
    component: <Video2D />,
  },
  {
    id: 4,
    parentId: 0,
    key: "music",
    name: "Music",
    children: null,
    component: <Music />,
  },
  {
    id: 5,
    parentId: 0,
    key: "channels",
    name: "Channels",
    children: null,
    component: <Channels />,
  },
];

const Index = () => {
  const navigate = useNavigate();

  const handleChange = (event, newValue) => {
    switch (newValue) {
      case 0:
        navigate("/marketplace/entertainments/volumetric-video");
        break;
      case 1:
        navigate("/marketplace/entertainments/180-video");
        break;
      case 2:
        navigate("/marketplace/entertainments/360-video");
        break;
      case 3:
        navigate("/marketplace/entertainments/2D");
        break;
      case 4:
        navigate("/marketplace/entertainments/music");
        break;
      case 5:
        navigate("/marketplace/entertainments/channels");
        break;
      default:
        break;
    }
  };

  const [activeTabs, setActivetab] = useState({
    id: 0,
    parentId: 0,
    key: "volumetric-video",
    name: "VolumetricVideo",
    children: null,
    component: <Volumetric />,
  });

  return (
    <>
      <hr className="border-[0.1px] border-[#5A5A5A80] mx-3" />

      <div className="__myassets_container_main px-[15px] py-[35px] flex flex-col md:flex-row max-[768px]:flex-col max-[768px]:p-0 max-[1280px]:py-[25px]">
        <div className="__assets_category_panel w-[100%] md:w-[20%]  max-[768px]:w-auto max-[768px]:p-0 max-[1280px]:p-0">
          <h5 className="text-[grey] font-body mb-[10px] font-bold tracking-[1px] max-[768px]:hidden text-sm">
            Category
          </h5>
          <div className="volumetric-card-left-shadow "></div>
          <ul
            data-testid="tablist"
            className="overflow-y-scroll
            flex md:flex-col
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
                     "
          >
            {myAssetsTabs?.map((tabs, index) => {
              return (
                <li
                  role="tab"
                  key={tabs.key}
                  className={`mr-8 md:mr-[0] whitespace-nowrap ${
                    activeTabs.key === tabs.key
                      ? "bg-[#FBBC5E4D] hover:bg-[#FBBC5E4D] rounded-[5px]"
                      : ""
                  }`}
                  onClick={() => {
                    setActivetab(tabs);
                    handleChange(tabs.key, index);
                  }}
                >
                  {tabs.name}
                </li>
              );
            })}
          </ul>
        </div>

        <div className="__assets_tabs_container_panel  w-[100%] md:w-[80%] sm:p-[10px] md:pl-[56px] xl:pl-[96px] max-[768px]:w-auto max-[768px]:h-auto max-[768px]:mt-[18px]">
          
          {activeTabs.key === "volumetric-video" && activeTabs.component}
          {activeTabs.key === "180-video" && activeTabs.component}
          {activeTabs.key === "360-video" && activeTabs.component}
          {activeTabs.key === "2D-video" && activeTabs.component}
          {activeTabs.key === "music" && activeTabs.component}
          {activeTabs.key === "channels" && activeTabs.component}
        </div>
      </div>
    </>
  );
};

export default Index;
