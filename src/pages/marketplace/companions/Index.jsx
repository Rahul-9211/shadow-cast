/**
 * This file is part of FourthStar User Dashboard
 *(c) 2023 ShadowCast.Io <craig@shadowcast.io>
 *------------------------------------------------------
 *@module Companion-Landing-Component
 *@developer Aditya P
 */

import React from "react";
import { Zoom } from "react-reveal";
import SliderHeader from "components/partials/SliderHeader";
import ShadowFrame from "components/shadow-frame";
import SliderCards from "components/partials/SliderCards";

const SliderData = {
  butler: [
    {
      id: 0,
      heading: "Butler",
      isComing: true,
    },
    {
      id: 1,
      heading: "Butler",
      isComing: true,
    },
    {
      id: 2,
      heading: "Butler",
      isComing: true,
    },
    {
      id: 3,
      heading: "Butler",
      isComing: true,
    },
    {
      id: 4,
      heading: "Butler",
      isComing: true,
    },
    {
      id: 5,
      heading: "Butler",
      isComing: true,
    },
    {
      id: 6,
      heading: "Butler",
      isComing: true,
    },
    {
      id: 7,
      heading: "Butler",
      isComing: true,
    },
  ],
  pets: [
    {
      id: 0,
      heading: "Master",
      isComing: true,
    },
    {
      id: 1,
      heading: "Master",
      isComing: true,
    },
    {
      id: 2,
      heading: "Master",
      isComing: true,
    },
    {
      id: 3,
      heading: "Master",
      isComing: true,
    },
    {
      id: 4,
      heading: "Master",
      isComing: true,
    },
    {
      id: 5,
      heading: "Master",
      isComing: true,
    },
    {
      id: 6,
      heading: "Master",
      isComing: true,
    },
    {
      id: 7,
      heading: "Master",
      isComing: true,
    },
  ],
  masters: [
    {
      id: 0,
      heading: "Master",
      isComing: true,
    },
    {
      id: 1,
      heading: "Master",
      isComing: true,
    },
    {
      id: 2,
      heading: "Master",
      isComing: true,
    },
    {
      id: 3,
      heading: "Master",
      isComing: true,
    },
    {
      id: 4,
      heading: "Master",
      isComing: true,
    },
    {
      id: 5,
      heading: "Master",
      isComing: true,
    },
    {
      id: 6,
      heading: "Master",
      isComing: true,
    },
    {
      id: 7,
      heading: "Master",
      isComing: true,
    },
  ],
};

const Index = () => {
  return (
    <div className="__companion_landing_page px-2">
      <ShadowFrame
        data-testid="shadow-frame"
        className="z-[0] w-[350px] md:w-[250px] h-[350px] md:h-[400px] rounded-[250px] md:rounded-[400px] left-[-10%] max-[768px]:left-[-50%] top-[50%] max-[768px]:top-[10%] translate-x-1/2 bottom-0 !bg-[#FFE9C9]"
      />
      <ShadowFrame
        data-testid="shadow-frame"
        className="z-[0] w-[250px] md:w-[250px] h-[250px] md:h-[400px] rounded-[250px] md:rounded-[400px] right-[10%] max-[768px]:right-[50%] top-[60%] max-[768px]:top-[10%] translate-x-1/2 bottom-0 !bg-[#FFE9C9]"
      />
      <Zoom>
        <div className="xl:min-h-[350px] bg-[#2D2D2D] h-full mb-10 md:mb-20 z-10 max-[768px]:h-[200px] max-[1200px]:h-[300px] relative flex justify-center items-center rounded-[4px]">
          <h2 className="font-heading text-[#F3A151] text-[32px] max-[768px]:text-[20px]">
            Coming Soon
          </h2>
          {/* <img
            src={ClothingBannerImg}
            alt="Network Problem"
            className="h-full w-full object-cover"
          /> */}
        </div>
      </Zoom>

      {/* Slider Section */}

      {/* Butlers and Bodyguards slider Section */}
      <SliderHeader title="Butlers and Bodyguards" />
      <div className="__butler__slider__container py-[40px] max-[768px]:py-[10px] relative z-[10]">
        <div className="__slider_card_container flex gap-[20px] overflow-x-scroll py-[10px]">
          {SliderData?.butler.map((data) => {
            return <SliderCards item={data} id="Butler" baseRoute="marketplace/companions" />;
          })}
        </div>
      </div>

      {/* Pets */}
      <SliderHeader title="Pets" />
      <div className="__pets__slider__container py-[40px] max-[768px]:py-[10px] relative z-[10]">
        <div className="__slider_card_container flex gap-[20px] overflow-x-scroll py-[10px]">
          {SliderData?.pets.map((data) => {
            return <SliderCards item={data} id="pets" baseRoute="marketplace/companions" />;
          })}
        </div>
      </div>

      {/* Msaters slider Section */}
      <SliderHeader title="Masters" />
      <div className="__masters__slider__container py-[40px] max-[768px]:py-[10px] relative z-[10]">
        <div className="__slider_card_container flex gap-[20px] overflow-x-scroll py-[10px]">
          {SliderData?.masters.map((data) => {
            return <SliderCards item={data} id="master" baseRoute="marketplace/companions" />;
          })}
        </div>
      </div>
    </div>
  );
};

export default Index;
