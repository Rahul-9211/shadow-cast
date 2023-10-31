import React from "react";
import Video2D from "../components/2d";
import Video180 from "../components/180";
import Video360 from "../components/360";
import Channels from "../components/channels";
import Music from "../components/music";
import Volumetric from "../components/volumetric";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

import nureal from "assets/images/nureal.png";
import ChannelImage from "assets/images/channel.png";

import { useParams } from "react-router-dom";
import { Fade, Zoom } from "react-reveal";
import PremAptImg from "assets/images/apartment-banner.jpeg";

import { ChannelContentTab } from "constant";
import ShadowFrame from "components/shadow-frame";
import All from "./All";
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

const ChannelContent = () => {
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
  const { activeTab } = useParams();


  const [activeTabs, setActivetab] = useState(()=>{
    const tab = myAssetsTabs.find((tab) => tab.key === activeTab);
    return tab ? tab : myAssetsTabs[0]; // Default to the first tab if activeTab is not found
  });

  
  const [parentActivetab, setParentActivetab] = useState({
    id: 0,
    activeTab: "all",
  });

  return (
    <>
      {/* <hr className="border-[0.1px] border-[#5A5A5A80] mx-3" />

      <div className="__myassets_container_main px-[15px] py-[35px] flex flex-col md:flex-row max-[768px]:flex-col max-[768px]:p-0 max-[1280px]:py-[25px]">
        <div className="__assets_category_panel w-[100%] md:w-[20%]  max-[768px]:w-auto max-[768px]:p-0 max-[1280px]:p-0">
          <h5 className="text-[grey] font-body mb-[10px] font-bold tracking-[1px] max-[768px]:hidden text-sm">
            Category
          </h5>
          <div className="volumetric-card-left-shadow "></div>
          <div className="overflow-hidden">
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
        </div>

        <div className="__assets_tabs_container_panel  w-[100%] md:w-[80%] sm:p-[10px] md:pl-[56px] xl:pl-[96px] max-[768px]:w-auto max-[768px]:h-auto max-[768px]:mt-[18px]">
          
          {activeTabs.key === "volumetric-video" && activeTabs.component}
          {activeTabs.key === "180-video" && activeTabs.component}
          {activeTabs.key === "360-video" && activeTabs.component}
          {activeTabs.key === "2D-video" && activeTabs.component}
          {activeTabs.key === "music" && activeTabs.component}
          {activeTabs.key === "channels" && activeTabs.component}
        </div>
      </div> */}
<div>
{/* <Zoom>
        <div className="xl:min-h-[350px] bg-[#2D2D2D] h-full  z-10 relative mx-2 rounded">
          <img
            src={PremAptImg}
            alt="Network Problem"
            className="h-full w-full object-cover overflow-hidden"
          />
          <span>Back</span>
        </div>

      </Zoom> */}

      <div className="lg:min-h-[350px] mb-6 md:mb-9 z-10 relative bg-[#333] rounded flex justify-center items-center">
        <Zoom>
          <img
            src={nureal}
            alt="Network Problem"
            className="max-w-full w-auto object-cover"
          />
        </Zoom>
        <Zoom delay={500}>
          <button onClick={() => navigate(-1)} className='inline-flex gap-2 text-white font-semibold text-xs md:text-sm leading-normal bg-white/[0.10] hover:bg-white/[0.90] hover:text-dark rounded-3xl py-1.5 px-1.5 pr-3 items-center absolute top-3 left-3'>
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path d="M12.5 15L7.5 10L12.5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <span>Back</span>
          </button>
        </Zoom>

      </div>

      <div className="flex items-center mb-[17px] mt-[-10px] sm:mt-[-50px]  pl-4 sm:pl-6">
            <img
              className="w-[60px] h-[60px]  sm:w-[154px] sm:h-[154px] border border-2 sm:border-4 border-black rounded-full  mr-[10px] sm:mr-[20px] z-[12]"
              src={ChannelImage}
              alt="load image"
            />
            <p className="text-xs sm:text-2xl font-semibold mr-[10px] sm:mr-[20px]">
              Nureal Entertainment

            </p>
          </div>
</div>

<div data-testid="my-assets-main" className="__my_assets_main container mx-auto  ">
      <div
        data-testid="parent-tabs"
        className="__myassets_parentTabs_main 
                      border-gray-50 
                      px-[15px] 
                      py-[15px] 
                      [&>ul]:pb-[15px]
                      max-[768px]:p-0
                      "
      >
        <ul className={`flex gap-8 [&>li]:font-medium [&>li]:font-body [&>li]:cursor-pointer`}>
          {ChannelContentTab?.map((tabs, ind) => {
            return (
              <li
                key={tabs.key}
                className={`${
                  parentActivetab.activeTab === tabs.key
                    ? "text-[#fff] text-[18px] max-[768px]:text-[12px] transition-all"
                    : "text-[gray]"
                }`}
                onClick={() => setParentActivetab({ activeTab: tabs.key })}
              >
                {tabs.name}
              </li>
            );
          })}
        </ul>
        {/* <hr className="border-[0.1px] border-[#5A5A5A80]" /> */}
      </div>

      {/* My Assets Container */}
      {parentActivetab.activeTab === "all" && <All/>}

      {/* My Avatar Container */}
      {parentActivetab.activeTab === "premium" && <h2>asasdasdasdasdas</h2>}
    </div>
    </>
  );
};

export default ChannelContent;
