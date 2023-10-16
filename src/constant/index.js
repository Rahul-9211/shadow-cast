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
    {id: 0, key: "my-assets", name: "My Assets"},
    {id: 1, key: "my-avatar", name: "My Avatar"},
  ]

export const MyAssetsDummy = [
    {
      id: 0,
      key: 'APART',
      name: "Apartments",
      data: [
        {
          id: 0,
          title: "Nebula Apartment",
          img: "",
          desc: "Experience the epitome of luxury in these magnificent mansions inspired by the celestial luminaries, offering a sanctuary of prestige and grandeur."
        },
        {
          id: 1,
          title: "Nebula Apartment - 1",
          img: "",
          desc: "Experience the epitome of luxury in these magnificent mansions inspired by the celestial luminaries, offering a sanctuary of prestige and grandeur."
        },
        {
          id: 2,
          title: "Nebula Apartment - 2",
          img: "",
          desc: "Experience the epitome of luxury in these magnificent mansions inspired by the celestial luminaries, offering a sanctuary of prestige and grandeur."
        },
        {
          id: 3,
          title: "Nebula Apartment - 3",
          img: "",
          desc: "Experience the epitome of luxury in these magnificent mansions inspired by the celestial luminaries, offering a sanctuary of prestige and grandeur."
        },
      ]
    },
    {
      id: 0,
      key: 'SHIP',
      name: "Ships",
      data: [
        {
          id: 0,
          title: "StarHawk",
          img: "",
          desc: "Experience the epitome of luxury in these magnificent mansions inspired by the celestial luminaries, offering a sanctuary of prestige and grandeur."
        },
        {
          id: 1,
          title: "StarHawk - 1",
          img: "",
          desc: "Experience the epitome of luxury in these magnificent mansions inspired by the celestial luminaries, offering a sanctuary of prestige and grandeur."
        },
        {
          id: 2,
          title: "StarHawk - 2",
          img: "",
          desc: "Experience the epitome of luxury in these magnificent mansions inspired by the celestial luminaries, offering a sanctuary of prestige and grandeur."
        },
        {
          id: 3,
          title: "StarHawk - 3",
          img: "",
          desc: "Experience the epitome of luxury in these magnificent mansions inspired by the celestial luminaries, offering a sanctuary of prestige and grandeur."
        },
      ]
    },
    {
      id: 0,
      key: 'ENTER',
      name: "Entertainment",
      data: [
        {
          id: 0,
          title: "StarHawk",
          img: "",
          desc: "Experience the epitome of luxury in these magnificent mansions inspired by the celestial luminaries, offering a sanctuary of prestige and grandeur."
        },
        {
          id: 1,
          title: "StarHawk - 1",
          img: "",
          desc: "Experience the epitome of luxury in these magnificent mansions inspired by the celestial luminaries, offering a sanctuary of prestige and grandeur."
        },
        {
          id: 2,
          title: "StarHawk - 2",
          img: "",
          desc: "Experience the epitome of luxury in these magnificent mansions inspired by the celestial luminaries, offering a sanctuary of prestige and grandeur."
        },
        {
          id: 3,
          title: "StarHawk - 3",
          img: "",
          desc: "Experience the epitome of luxury in these magnificent mansions inspired by the celestial luminaries, offering a sanctuary of prestige and grandeur."
        }
      ]
    }

]

// Class Object for Assets Cards

export const CardClassObj = {
  cardmain: "__card_view_main flex flex-col w-[45%] p-[7px] bg-[#2f2e2e] rounded-[10px] mt-[20px] hover:cursor-pointer max-[768px]:w-[100%]",
  cardImg: "",
  cardtitle: "py-[12px] font-bold px-[10px] max-[768px]:text-[14px] max-[1280px]:text-[13px] max-[1280px]:px-[7px]",
  cardDesc: "px-[10px] text-[12px] mb-[7px] font-light max-[768px]:text-[10px] max-[1280px]:text-[10px] max-[1280px]:px-[7px]"
}
