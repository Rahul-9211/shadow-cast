import React from "react";

/**
 * This file is part of FourthStar User Dashboard
 *(c) 2023 ShadowCast.Io <craig@shadowcast.io>
 *------------------------------------------------------
 *@module Companion-Landing-Slider-Header
 *@developer Aditya P
 */

const SliderHeader = ({title}) => {
  return (
    <div className="__slider_main_header mt-[60px] z-[10]">
      <h4 className="text-[24px] font-heading max-[768px]:text-[15px]">{title}</h4>
    </div>
  );
};

export default SliderHeader;
