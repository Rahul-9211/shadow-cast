/**
 * This file is part of FourthStar User Dashboard
 *(c) 2023 ShadowCast.Io <craig@shadowcast.io>
 *------------------------------------------------------
 *@module constant-variables-object
 *@developer Aditya P
 */

/**
 * @desc Use to avoid hard coding string in internal codebase and make it easier to update
 */

export const AssetsParentTab = [
  { id: 0, key: "my-assets", name: "My Assets" },
  { id: 1, key: "my-avatar", name: "My Avatar" },
];

export const ChannelContentTab = [
  { id: 0, key: "all", name: "All" },
  { id: 1, key: "premium", name: "Premium Content" },
];

export const MyAssetsDummy = [
  {
    id: 0,
    key: "APART",
    name: "Apartments",
    data: [
      {
        id: 0,
        title: "Nebula Apartment",
        img: "",
        desc: "Experience the epitome of luxury in these magnificent mansions inspired by the celestial luminaries, offering a sanctuary of prestige and grandeur.",
      },
      {
        id: 1,
        title: "Nebula Apartment - 1",
        img: "",
        desc: "Experience the epitome of luxury in these magnificent mansions inspired by the celestial luminaries, offering a sanctuary of prestige and grandeur.",
      },
      {
        id: 2,
        title: "Nebula Apartment - 2",
        img: "",
        desc: "Experience the epitome of luxury in these magnificent mansions inspired by the celestial luminaries, offering a sanctuary of prestige and grandeur.",
      },
      {
        id: 3,
        title: "Nebula Apartment - 3",
        img: "",
        desc: "Experience the epitome of luxury in these magnificent mansions inspired by the celestial luminaries, offering a sanctuary of prestige and grandeur.",
      },
    ],
  },
  {
    id: 0,
    key: "SHIP",
    name: "Ships",
    data: [
      {
        id: 0,
        title: "StarHawk",
        img: "",
        desc: "Experience the epitome of luxury in these magnificent mansions inspired by the celestial luminaries, offering a sanctuary of prestige and grandeur.",
      },
      {
        id: 1,
        title: "StarHawk - 1",
        img: "",
        desc: "Experience the epitome of luxury in these magnificent mansions inspired by the celestial luminaries, offering a sanctuary of prestige and grandeur.",
      },
      {
        id: 2,
        title: "StarHawk - 2",
        img: "",
        desc: "Experience the epitome of luxury in these magnificent mansions inspired by the celestial luminaries, offering a sanctuary of prestige and grandeur.",
      },
      {
        id: 3,
        title: "StarHawk - 3",
        img: "",
        desc: "Experience the epitome of luxury in these magnificent mansions inspired by the celestial luminaries, offering a sanctuary of prestige and grandeur.",
      },
    ],
  },
  {
    id: 0,
    key: "ENTER",
    name: "Entertainment",
    data: [
      {
        id: 0,
        title: "StarHawk",
        img: "",
        desc: "Experience the epitome of luxury in these magnificent mansions inspired by the celestial luminaries, offering a sanctuary of prestige and grandeur.",
      },
      {
        id: 1,
        title: "StarHawk - 1",
        img: "",
        desc: "Experience the epitome of luxury in these magnificent mansions inspired by the celestial luminaries, offering a sanctuary of prestige and grandeur.",
      },
      {
        id: 2,
        title: "StarHawk - 2",
        img: "",
        desc: "Experience the epitome of luxury in these magnificent mansions inspired by the celestial luminaries, offering a sanctuary of prestige and grandeur.",
      },
      {
        id: 3,
        title: "StarHawk - 3",
        img: "",
        desc: "Experience the epitome of luxury in these magnificent mansions inspired by the celestial luminaries, offering a sanctuary of prestige and grandeur.",
      },
    ],
  },
];

// Assets Entertainment Tabs
export const EntainTabs = [
  { id: 0, key: "volumetric-video", name: "Volumetric Videos" },
  { id: 1, key: "360-video", name: "360 Video" },
  { id: 2, key: "180-video", name: "180 Video" },
  { id: 3, key: "2-d-video", name: "2D Video" },
  { id: 4, key: "music", name: "Music" },
  { id: 5, key: "subs", name: "Subscription" },
];

// Assets Entertainment classes

export const EntertainmentCardClass = {
  cardMainclass:
    "w-full min-h-[256px] hover:cursor-pointer hover:rounded-[16px] hover:scale-[1.024] transition duration-300 ease-in-out max-[668px]:w-[100%] max-[768px]:p-0 max-[1366px]:p-0 ",
  cardMediaClass: "w-[100%] bg-[#2B2B2B] h-[256px] min-h-[180px] rounded-[16px] max-[1366px]:h-[200px] max-[1200px]:h-[180px] ",
  cardtitleClass: "py-[12px] font-light pl-[6px] max-[768px]:text-[13px]",
  cardButtonclass:
    "pl-[6px] font-bold bg-[#FBBC5E0D] px-[15px] py-[7px] rounded-[8px] text-center text-[15px] hover:shadow-[0_0_3px_1px_rgba(251,188,94,0.47)] hover:border-[#FBBC5E] max-[768px]:text-[13px]",
};


// Assets Clothing Tabs
export const ClothTabs = [
  { id: 0, key: "Space-suits", name: "Space suits" },
  { id: 1, key: "Top-Wear", name: "TopWear" },
  { id: 2, key: "Bottom-Wear", name: "Bottom Wear" },
  { id: 3, key: "accessories", name: "Accessories" },
];

export const ClothingCardClass = {
  cardMainclass:
    "w-full min-h-[257px] pl-[10px] mb-[0px] hover:cursor-pointer hover:scale-[1.024] transition duration-300 ease-in-out max-[768px]:w-[100%] max-[768px]:p-0",
  cardMediaClass: "w-[100%] bg-[#2B2B2B] min-h-[257px] rounded-[10px]",
  cardtitleClass: "py-[12px] font-light pl-[6px] max-[768px]:text-[13px]",
  cardButtonclass: "",
};

export const GamingCardClass = {
  cardMainclass:
    "w-full min-h-[257px] mb-[0px] hover:cursor-pointer hover:scale-[1.024] transition duration-300 ease-in-out max-[768px]:w-[100%] max-[768px]:p-0",
  cardMediaClass: "w-[100%] bg-[#2B2B2B] min-h-[257px] rounded-[10px]",
  cardtitleClass: "py-[12px] font-light pl-[6px] max-[768px]:text-[13px]",
  cardButtonclass: "",
};

export const FriendSearchList = [
    {
      userId: "USER-1",
      username: "xavier29",
      name: "Xavier Samuel",
      email: "xasa@gmail.com",
      status: 'FULLFILL',
    },
    {
      userId: "USER-2",
      username: "xavier29",
      name: "Xavier Samuel",
      email: "xasa@gmail.com",
      status: 'PENDING',
    },
    {
      userId: "USER-3",
      username: "xavier29",
      name: "Xavier Samuel",
      email: "xasa@gmail.com",
      status: null,
    },
    {
      userId: "USER-4",
      username: "xavier29",
      name: "Xavier Samuel",
      email: "xasa@gmail.com",
      status: null,
    },
    {
      userId: "USER-5",
      username: "xavier29",
      name: "Xavier Samuel",
      email: "xasa@gmail.com",
      status: null,
    },
    {
      userId: "USER-6",
      username: "xavier29",
      name: "Xavier Samuel",
      email: "xasa@gmail.com",
      status: null,
    },
    {
      userId: "USER-7",
      username: "xavier29",
      name: "Xavier Samuel",
      email: "xasa@gmail.com",
      status: null,
    },
    {
      userId: "USER-8",
      username: "xavier29",
      name: "Xavier Samuel",
      email: "xasa@gmail.com",
      status: null,
    },
    {
      userId: "USER-9",
      username: "xavier29",
      name: "Xavier Samuel",
      email: "xasa@gmail.com",
      status: null,
    },
]