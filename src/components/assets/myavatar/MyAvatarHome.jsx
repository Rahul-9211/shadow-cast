import React from "react";
import { useState } from "react";
import Wardrobe from "./wardrobe/Wardrobe";
import CustomizeAvatar from "./customize/CustomizeAvatar";

/**
 * This file is part of FourthStar User Dashboard
 *(c) 2023 ShadowCast.Io <craig@shadowcast.io>
 *------------------------------------------------------
 *@module Avatar-Home-Component
 *@developer Aditya P
 */

const AvatarTabs = [
  {
    id: 0,
    key: "wardrobe",
    name: "Wardrobe",
    isComing: false,
  },
  {
    id: 0,
    key: "customize",
    name: "Customize look",
    isComing: true,
  },
];

const MyAvatarHome = () => {
  const [CurrentavatarTab, setavatarTab] = useState({
    id: 0,
    key: "wardrobe",
    name: "Wardrobe",
    isComing: false,
  });

  return (
    <div className="__myavatar_container_main px-[15px] py-[35px] flex flex-col max-[768px]:flex-col max-[768px]:p-0 max-[1280px]:py-[25px]">
      <div className="__myavatar__tabs__container w-max max-[768px]:w-full max-[768px]:pt-[20px]">
        <h4 className="font-heading text-[24px] max-[768px]:text-[15px]">Edit avatar</h4>
        <p className="font-body text-[16px] pt-[14px] text-[#FFFFFFB2] max-[768px]:text-[13px]">
          Elevate Your Style: Personalize Your Avatar's look and wardrobe.
        </p>

        <div className="__tabs__container pt-[35px] max-[768px]:pt-[25px] border-b-[1px] border-[#383838] relative z-10">
          <ul className="flex gap-6">
            {AvatarTabs.map((tab) => {
              return (
                <li
                  onClick={() => setavatarTab(tab)}
                  key={tab?.key}
                  className={`hover:cursor-pointer text-[16px] max-[768px]:text-[13px] font-medium ${
                    CurrentavatarTab?.key === tab?.key
                      ? "border-[#F3A151] transition-all"
                      : "text-[#7A7A7A] border-transparent border-b-0 transition-all"
                  } border-b-[2px] font-body px-[10px]`}
                >
                  {tab?.name}{" "}
                  {tab?.isComing ? (
                    <span className="text-[#F3A151] text-[14px] max-[768px]:text-[11px]">
                      Coming Soon
                    </span>
                  ) : (
                    <></>
                  )}
                </li>
              );
            })}
          </ul>
        </div>
      </div>

      <div className="__tabs__contents__container w-full">
        {CurrentavatarTab?.key === "wardrobe" && <Wardrobe />}
        {CurrentavatarTab?.key === "customize" && <CustomizeAvatar />}
      </div>
    </div>
  );
};

export default MyAvatarHome;
