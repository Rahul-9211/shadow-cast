/**
 * This file is part of FourthStar User Dashboard
 *(c) 2023 ShadowCast.Io <craig@shadowcast.io>
 *------------------------------------------------------
 *@module Channel;
 *@developer sudhanshu
 */

import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import LargeCarousel from "components/carousel/MostTreading";
import ChannelImage from "assets/images/channel.png";
import nureal from "assets/images/nureal.png";
import bigBang from "assets/images/bigBang.png";
/*It defines a
component called `Index` that renders a list of volumetric cards. */
const Index = () => {

  const mostTrending = [
    {
      title: "StellarVerse Spectacle: Cosmic Symphony",
      productType: "Free",
      id: "1",
    },
    {
      title: "StellarVerse Spectacle: Cosmic Symphony",
      productType: "Paid",
      price: "US$ 9.99",
      id: "3",
    },
    {
      title: "StellarVerse Spectacle: Cosmic Symphony",
      productType: "Free",
      id: "2",
      tags: "",
    },
    {
      title: "StellarVerse Spectacle: Cosmic Symphony",
      productType: "Free",
      id: "4",
    },
    {
      title: "StellarVerse Spectacle: Cosmic Symphony",
      productType: "Free",
      id: "5",
    },
  ];
  return (
    <>
      <div className="__entertainment_assets_main  pt-4 max-[768px]:p-0">
        <div className="__entertainment_assets_heading mb-[29px] lg:mb-[39px] sm:flex justify-between">
          <h4 className="font-medium font-heading text-[18px] lg:text-[28px] tracking-[1px]  max-[768px]:p-0 max-[768px]:text-[15px] mb-4 sm:mb-0">
            Channel
          </h4>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 "></div>
        <div className="volumetric-card-right-shadow"></div>
        <div className="">
          <div className="flex items-center mb-[17px]">
            <img
              className="w-[39px] h-[39px]  sm:w-[59px] sm:h-[59px] rounded-full mr-[20px] "
              src={ChannelImage}
              alt="load image"
            />
            <p className="text-sm sm:text-xl font-semibold mr-[10px] sm:mr-[20px]">
              Fourth Star Entertainment
            </p>
            <NavLink
              to="/marketplace/entertainments/channels/fourth-star-entertainment"
              className={`clip-text text-[12px] sm:text-[15px] font-semibold`}
            >
              See More
            </NavLink>
          </div>
          <div className="item-section  relative z-10">
            <LargeCarousel
              slider={mostTrending}
              SlideToShow={2}
              type="trending"
            ></LargeCarousel>
          </div>
        </div>

        <hr className="border-[0.1px] border-[#5A5A5A80] my-[35px] sm:mt-[40px] sm:mb-[56px]" />
        <div className="">
          <div className="flex items-center mb-[17px]">
            <img
              className="w-[39px] h-[39px]  sm:w-[59px] sm:h-[59px] rounded-full mr-[20px] "
              src={nureal}
              alt="load image"
            />
            <p className="text-sm sm:text-xl font-semibold mr-[10px] sm:mr-[20px]">
              Nureal Entertainment

            </p>
            <NavLink
              to="/marketplace/entertainments/channels/fourth-star-entertainment"
              className={`clip-text text-[12px] sm:text-[15px] font-semibold`}
            >
              See More
            </NavLink>
          </div>
          <div className="item-section  relative z-10">
            <LargeCarousel
              slider={mostTrending}
              SlideToShow={2}
              type="trending"
            ></LargeCarousel>
          </div>
        </div>

        <hr className="border-[0.1px] border-[#5A5A5A80] my-[35px] sm:mt-[40px] sm:mb-[56px]" />
        <div className="">
          <div className="flex items-center mb-[17px]">
            <img
              className="w-[39px] h-[39px]  sm:w-[59px] sm:h-[59px] rounded-full mr-[20px] "
              src={bigBang}
              alt="load image"
            />
            <p className="text-sm sm:text-xl font-semibold mr-[10px] sm:mr-[20px]">
              Big Bang Entertainment

            </p>
            <NavLink
              to="/marketplace/entertainments/channels/fourth-star-entertainment"
              className={`clip-text text-[12px] sm:text-[15px] font-semibold`}
            >
              See More
            </NavLink>
          </div>
          <div className="item-section  relative z-10">
            <LargeCarousel
              slider={mostTrending}
              SlideToShow={2}
              type="trending"
            ></LargeCarousel>
          </div>
        </div>
      </div>
      {/* <div className="">
             <div className="flex h-screen flex-col gap-3 items-center ">
               <p className="font-heading font-semibold clip-text">
                 Coming Soon
               </p>
               <p className="text-[#7A7A7A] font-semibold">
                 Try exploring other exciting contents in marketplace.
               </p>
               <a
                 to="/marketplace"
                 className="border-[1.5px] border-sec text-sm mt-4 rounded-lg max-w-[250px] hover:bg-sec hover:text-dark font-bold text-center w-full py-3 px-4"
               >
                 Browse other content
               </a>
             </div>
           </div> */}
    </>
  );
};

export default Index;
