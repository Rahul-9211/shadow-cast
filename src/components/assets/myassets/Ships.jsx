import React from 'react'
import Explore from 'components/Explore/Explore'
import ShipImg from 'assets/images/myassets/Ship_new.png'
import MarketPlaceCard from 'components/card/marketplace'
/**
 * This file is part of FourthStar User Dashboard
 *(c) 2023 ShadowCast.Io <craig@shadowcast.io>
 *------------------------------------------------------
 *@module Assets-Ships-Module
 *@developer Aditya P
 */
 
 const ShipsData = [
  {
    id: "ap-1",
    img: ShipImg,
    title: "StarHawk",
    desc: "Experience the epitome of luxury in these magnificent mansions inspired by the celestial luminaries, offering a sanctuary of prestige and grandeur.",
  },
  {
    id: "ap-2",
    img: ShipImg,
    title: "StarHawk",
    desc: "Experience the epitome of luxury in these magnificent mansions inspired by the celestial luminaries, offering a sanctuary of prestige and grandeur.",
  },
  {
    id: "ap-3",
    img: ShipImg,
    title: "StarHawk",
    desc: "Experience the epitome of luxury in these magnificent mansions inspired by the celestial luminaries, offering a sanctuary of prestige and grandeur.",
  },
  {
    id: "ap-4",
    img: ShipImg,
    title: "StarHawk",
    desc: "Experience the epitome of luxury in these magnificent mansions inspired by the celestial luminaries, offering a sanctuary of prestige and grandeur.",
  },
  {
    id: "ap-5",
    img: ShipImg,
    title: "StarHawk",
    desc: "Experience the epitome of luxury in these magnificent mansions inspired by the celestial luminaries, offering a sanctuary of prestige and grandeur.",
  },
  {
    id: "ap-6",
    img: ShipImg,
    title: "StarHawk",
    desc: "Experience the epitome of luxury in these magnificent mansions inspired by the celestial luminaries, offering a sanctuary of prestige and grandeur.",
  },
  {
    id: "ap-7",
    img: ShipImg,
    title: "StarHawk",
    desc: "Experience the epitome of luxury in these magnificent mansions inspired by the celestial luminaries, offering a sanctuary of prestige and grandeur.",
  },
];


const Ships = () => {

  // This is just a temp variable for testing
  const IsDataAvailable = true;
  return <>
  {/* This __explore_default_button class is a conditional component and it will appears when user don't have any assets */}

  {IsDataAvailable ? (
    <div className="__ships_assets_main pl-[15px] max-[768px]:p-0">
      <div className="__ships_assets_heading mb-[10px] max-[768px]:pl-0">
        <h4 className="font-medium font-heading text-[18px] tracking-[1px] max-[768px]:p-0 max-[768px]:text-[15px]">
          Ships
        </h4>
      </div>

      <div className="_ships_container grid grid-cols-1 md:grid-cols-2 gap-x-5 gap-y-4 lg:gap-y-8 mb-14 md:mb-28 mx-auto relative z-10 mt-[30px]">
          {
            ShipsData?.map((data) => {
              return <MarketPlaceCard key={data.id} item={data} type="small" />
            })
          }
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

export default Ships