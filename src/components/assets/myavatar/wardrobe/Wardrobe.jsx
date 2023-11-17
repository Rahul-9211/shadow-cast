import React, { useState } from "react";
import SpaceSuitIcon from "assets/images/myavatar/Group 2258.png";
import TopWearIcon from "assets/images/myavatar/mdi_tshirt-crew.png";
import BottomWearIcon from "assets/images/myavatar/track 1.png";
import AccessoriesIcon from "assets/images/myavatar/mdi_hat-fedora.png";
import SpaceSuit1 from "assets/images/myavatar/spaceSuit-1.png";
import SpaceSuit2 from "assets/images/myavatar/SpaceSuit-2.png";
import SpaceSuit3 from "assets/images/myavatar/SpaceSuit-3.png";
import SpaceSuit4 from "assets/images/myavatar/SpaceSuit-4.png";
import SpaceSuit5 from "assets/images/myavatar/SpaceSuit-5.png";
import ShadowFrame from "components/shadow-frame";
import HumanAvatar from "assets/images/myavatar/human_avatar.png";
import HumanAvatarEclipse from "assets/images/myavatar/human_avatar_eclipse.png";

/**
 * This file is part of FourthStar User Dashboard
 *(c) 2023 ShadowCast.Io <craig@shadowcast.io>
 *------------------------------------------------------
 *@module Avatar-wardrobe-component
 *@developer Aditya P
 */

const AvatarCategoryData = [
  {
    id: 0,
    key: "space-suit",
    name: "Space Suit",
    icon: SpaceSuitIcon,
  },
  {
    id: 0,
    key: "top-wear",
    name: "Top Wear",
    icon: TopWearIcon,
  },
  {
    id: 0,
    key: "bottom-wear",
    name: "Bottom Wear",
    icon: BottomWearIcon,
  },
  {
    id: 0,
    key: "accessories",
    name: "Accessories",
    icon: AccessoriesIcon,
  },
];

const CategorySuitData = {
  spaceSuit: [
    {
      id: 0,
      avatarIcon: SpaceSuit1,
    },
    {
      id: 1,
      avatarIcon: SpaceSuit2,
    },
    {
      id: 2,
      avatarIcon: SpaceSuit3,
    },
    {
      id: 3,
      avatarIcon: SpaceSuit4,
    },
    {
      id: 4,
      avatarIcon: SpaceSuit5,
    },
    {
      id: 5,
      avatarIcon: SpaceSuit5,
    },
    {
      id: 6,
      avatarIcon: SpaceSuit5,
    },
    {
      id: 7,
      avatarIcon: SpaceSuit5,
    },
    {
      id: 8,
      avatarIcon: SpaceSuit5,
    },
    {
      id: 9,
      avatarIcon: SpaceSuit5,
    },
    {
      id: 10,
      avatarIcon: SpaceSuit5,
    },
  ],
};

const Wardrobe = () => {
  const [wardrobeCategory, setWardrobeCategory] = useState({
    id: 0,
    key: "space-suit",
    name: "Space Suit",
    icon: SpaceSuitIcon,
  });

  return (
    <div className="__wardrobe__container__main flex max-[768px]:flex-col max-[1280px]:flex-col py-[100px] max-[768px]:py-[30px] relative z-10">
      <div className="__wardrobe__storage__container flex max-[768px]:flex-col">
        <div className="__wardrobe__category__container">
          <ul className="[&>div]:my-[8px] max-[768px]:flex max-[768px]:gap-[8px]">
            {AvatarCategoryData.map((category, ind) => {
              return (
                <div
                  onClick={() => setWardrobeCategory(category)}
                  className={`${
                    wardrobeCategory?.key === category?.key
                      ? "border border-[#F3A151] bg-[#1D1D1D50]"
                      : ""
                  } border-1 hover:border-[#F3A151] w-[65px] h-[65px] max-[768px]:w-[45px] max-[768px]:h-[45px] rounded-[8px] bg-[#1D1D1D] hover:cursor-pointer hover:bg-[#1D1D1D50]`}
                  key={category?.key}
                >
                  <li className="h-full rounded-[8px] flex justify-center items-center">
                    <img
                      src={category?.icon}
                      className={`
                                ${ind === 0 ? "w-[18px] h-[31px]" : ""}
                                ${ind === 1 ? "w-[33.7px] h-[33.7px]" : ""}
                                ${ind === 2 ? "w-[33.7px] h-[33.7px]" : ""}
                                ${ind === 3 ? "w-[33.7px] h-[33.7px]" : ""}
                                `}
                    />
                  </li>
                </div>
              );
            })}
          </ul>
        </div>

        <div className="__wardrobe__category__storage bg-[#1D1D1D] border px-[38px] max-[768px]:px-[20px] border-[#656565] rounded-[8px] ml-[14px] max-[768px]:m-0 mt-[10px] w-[564px] max-[768px]:w-full max-[1280px]:w-full max-[768px]:h-[400px] max-[768px]:min-h-[400px] h-[600px] min-h-[600px] overflow overflow-y-scroll pb-[50px] relative">
          <ShadowFrame className="w-[250px] md:w-[200px] h-[250px] md:h-[400px] rounded-[250px] md:rounded-[400px] right-[50%] translate-x-1/2 bottom-0 !bg-[#FFE9C9]" />

          {wardrobeCategory?.key === "space-suit" && (
            <>
              <h5 className="text-[16px] font-body font-medium pt-[27px]">
                Space Suit
              </h5>
              <div className="__wardrobe__suit__container pt-[40px] grid grid-cols-3 max-[768px]:grid-cols-2 max-[668px]:md:grid-cols-2 md:grid-cols-3 max-[768px]:md:grid-cols-4 max-[1280px]:md:grid-cols-4 gap-y-3 max-[768px]:gap-y-4 max-[768px]:gap-x-3 max-[1280px]:gap-x-7 relative z-10">
                {CategorySuitData?.spaceSuit.map((data) => {
                  return (
                    <div
                      className="__suit__card bg-[#FBBC5E1A] flex justify-center items-center rounded-[8px] w-[150px] h-[150px] hover:border-[#F3A151] hover:cursor-pointer hover:border"
                      key={data?.id}
                    >
                      <img
                        src={data?.avatarIcon}
                        className="w-[100px] h-[148px]"
                      />
                    </div>
                  );
                })}
              </div>
            </>
          )}

          {wardrobeCategory?.key === "top-wear" && (
            <h5 className="text-[16px] font-body font-medium pt-[27px]">
              Top Wear
            </h5>
          )}

          {wardrobeCategory?.key === "bottom-wear" && (
            <h5 className="text-[16px] font-body font-medium pt-[27px]">
              Bottom Wear
            </h5>
          )}

          {wardrobeCategory?.key === "accessories" && (
            <h5 className="text-[16px] font-body font-medium pt-[27px]">
              Accessories
            </h5>
          )}
        </div>
      </div>

      <div className="__wardrobe__humanAvatar__container mt-[10px] w-full flex flex-col justify-center items-center relative">
        <div className="__human__avatar__box w-max flex flex-col justify-center max-[768px]:relative max-[1280px]:relative absolute top-2">
          <img
            src={HumanAvatar}
            alt="human_avatar"
            className="w-[308px] h-[446px] relative top-5"
          />
          <img
            src={HumanAvatarEclipse}
            alt="avatar_eclipse"
            className="w-[330px] h-[58px] relative bottom-6"
          />
        </div>
        <div className="max-[768px]:mt-[15px] max-[768px]:relative max-[1280px]:relative absolute top-[90%]">
          <button className="rounded-[8px] bg-[#F3A151] text-[16px] px-[20px] py-[10px] text-[#000] font-semibold">
            Save this Look
          </button>
        </div>
      </div>
    </div>
  );
};

export default Wardrobe;
