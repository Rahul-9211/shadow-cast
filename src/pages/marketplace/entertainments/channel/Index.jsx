import React from "react";
import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

import nureal from "assets/images/nureal.png";
import ChannelImage from "assets/images/channel.png";
import { Fade, Zoom } from "react-reveal";
import PremAptImg from "assets/images/apartment-banner.jpeg";

import { ChannelContentTab } from "constant";
import ShadowFrame from "components/shadow-frame";
import All from "./All";
import Premium from "./Premium";
/**
 * This file is part of FourthStar User Dashboard
 *(c) 2023 ShadowCast.Io <craig@shadowcast.io>
 *------------------------------------------------------
 *@module Channel-Page
 *@developer Sudhanshu
 */

const ChannelContent = () => {
  const navigate = useNavigate();

  const [parentActivetab, setParentActivetab] = useState({
    id: 0,
    activeTab: "all",
  });

  return (
    <>
      <div>
        <div className="lg:min-h-[350px] mb-6 md:mb-9 z-10 relative bg-[#333] rounded flex justify-center items-center">
          <Zoom>
            <img
              src={PremAptImg}
              alt="Network Problem"
              className="max-w-full  "
            />
          </Zoom>
          <Zoom delay={500}>
            <button
              onClick={() => navigate(-1)}
              className="inline-flex gap-2 text-white font-semibold text-xs md:text-sm leading-normal bg-white/[0.10] hover:bg-white/[0.90] hover:text-dark rounded-3xl py-1.5 px-1.5 pr-3 items-center absolute top-3 left-3"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
              >
                <path
                  d="M12.5 15L7.5 10L12.5 5"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <span>Back</span>
            </button>
          </Zoom>
        </div>

        <div className="flex items-center mb-[17px] mt-[10px] sm:mt-[-70px]  pl-4 sm:pl-6">
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


      <div
        data-testid="my-assets-main"
        className="__my_assets_main container mx-auto  relative"
      >
        <ShadowFrame className="w-[250px] md:w-[775px] h-[250px] md:h-[775px] rounded-[250px] md:rounded-[775px] -left-[80px] md:-left-[300px] -top-[80px] md:-top-[250px]" />
        <ShadowFrame className="w-[250px] md:w-[775px] h-[250px] md:h-[775px] rounded-[250px] md:rounded-[775px] -right-[80px] md:-right-[300px] -bottom-[80px] md:top-[450px]" />
        <div
          data-testid="parent-tabs"
          className="__myassets_parentTabs_main 
                      border-gray-50 
                      px-[15px] 
                      py-[15px] 
                      [&>ul]:pb-[15px]
                      max-[768px]:p-0
                      z-10 relative"
        >

          <ul
            className={`flex gap-8 [&>li]:font-semibold [&>li]:cursor-pointer`}
          >
            {ChannelContentTab?.map((tabs, ind) => {
              return (
                <li
                  key={tabs.key}
                  className={`text-[#fff] text-xl max-[768px]:text-[12px] transition-all pb-2 border-b-2 ${parentActivetab.activeTab === tabs.key
                    ? "border-[#FBBC5E]"
                    : "text-[gray] border-transparent"
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
        <div className="relative z-10">
          {/* My Assets Container */}
          {parentActivetab.activeTab === "all" && <All />}

          {/* My Avatar Container */}
          {parentActivetab.activeTab === "premium" && (
            <Premium loginStatus={true} />
          )}
        </div>
      </div>
    </>
  );
};

export default ChannelContent;
