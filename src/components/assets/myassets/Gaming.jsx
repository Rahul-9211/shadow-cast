import React, {useState} from 'react'
import Explore from 'components/Explore/Explore';
import {AllGaming, SuiteGaming, EnvironGaming} from './gaming/index';

/**
 * This file is part of FourthStar User Dashboard
 *(c) 2023 ShadowCast.Io <craig@shadowcast.io>
 *------------------------------------------------------
 *@module Assets-Gaming-Module
 *@developer Aditya P
 */
 

 const GamingTabs = [
  {id:0, key: "all", name: "All"},
  {id:0, key: "suite-gaming", name: "Holo Suite Gaming"},
  {id:0, key: "environ-gaming", name: "Environmental Gaming"},
 ]

const Gaming = () => {

  const [gamingActiveTab, setgamingActiveTab] = useState({
    id: 0,
    activetabs: "all",
  });

  // This is just a temp variable for testing
  const IsDataAvailable = true;

  return <>
  {/* This __explore_default_button class is a conditional component and it will appears when user don't have any assets */}

  {IsDataAvailable ? (
    <div className="__gaming_assets_main pl-[15px] max-[768px]:p-0">
      <div className="__gaming_assets_heading mb-[10px]">
        <h4 className="font-medium font-heading text-[18px] tracking-[1px] px-[28px] max-[768px]:p-0 max-[768px]:text-[15px] max-[1280px]:px-[20px]">
          Gaming
        </h4>
      </div>

      <div className="__gaming__tabs_main pl-[15px] mt-[22px] max-[768px]:w-auto max-[768px]:p-0 max-[1280px]:p-0">
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
          {GamingTabs?.map((tabs, ind) => {
            return (
              <li
                key={tabs?.key}
                className={`${
                  gamingActiveTab.activetabs === tabs.key
                    ? "text-[#fff] decoration-2 underline underline-offset-8 decoration-[#FBBC5E] font-medium"
                    : "text-[gray]"
                }`}
                onClick={() => setgamingActiveTab({ activetabs: tabs.key })}
              >
                {tabs?.name}
              </li>
            );
          })}
        </ul>
      </div>

      <div className="_assets_container mt-[30px] flex flex-wrap justify-around max-[768px]:flex-col">
        {/* Entertainment Tabs Container */}
        {gamingActiveTab.activetabs === "all" && (
          <AllGaming />
        )}
        {gamingActiveTab.activetabs === "suite-gaming" && <SuiteGaming />}
        {gamingActiveTab.activetabs === "environ-gaming" && <EnvironGaming />}
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


export default Gaming