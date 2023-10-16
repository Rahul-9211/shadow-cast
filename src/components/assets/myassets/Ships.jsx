import React from 'react'
import AssetCardClose from 'components/card/assets/AssetCardClose'
import { CardClassObj } from 'constant'
import Explore from 'components/Explore/Explore'
import ShipImg from 'assets/images/myassets/Ship_new.png'
/**
 * This file is part of FourthStar User Dashboard
 *(c) 2023 ShadowCast.Io <craig@shadowcast.io>
 *------------------------------------------------------
 *@module Assets-Ships-Module
 *@developer Aditya P
 */
 
const Ships = () => {

  // This is just a temp variable for testing
  const IsDataAvailable = true;
  return <>
  {/* This __explore_default_button class is a conditional component and it will appears when user don't have any assets */}

  {IsDataAvailable ? (
    <div className="__ships_assets_main pl-[15px] max-[768px]:p-0">
      <div className="__ships_assets_heading mb-[10px]">
        <h4 className="font-medium text-[18px] tracking-[1px] px-[28px] max-[768px]:p-0 max-[768px]:text-[15px] max-[1280px]:px-[20px]">
          Ships
        </h4>
      </div>

      <div className="_assets_container flex flex-wrap justify-around max-[768px]:flex-col">
        <AssetCardClose
          key=""
          name=""
          cardImg={ShipImg}
          cardTitle="StarHawk"
          cardDesc="Experience the epitome of luxury in these magnificent mansions inspired by the celestial luminaries, offering a sanctuary of prestige and grandeur."
          cardClass={CardClassObj}
        />

        <AssetCardClose
          key=""
          name=""
          cardImg={ShipImg}
          cardTitle="StarHawk"
          cardDesc="Experience the epitome of luxury in these magnificent mansions inspired by the celestial luminaries, offering a sanctuary of prestige and grandeur."
          cardClass={CardClassObj}
        />

        <AssetCardClose
          key=""
          name=""
          cardImg={ShipImg}
          cardTitle="StarHawk"
          cardDesc="Experience the epitome of luxury in these magnificent mansions inspired by the celestial luminaries, offering a sanctuary of prestige and grandeur."
          cardClass={CardClassObj}
        />
        <AssetCardClose
          key=""
          name=""
          cardImg={ShipImg}
          cardTitle="StarHawk"
          cardDesc="Experience the epitome of luxury in these magnificent mansions inspired by the celestial luminaries, offering a sanctuary of prestige and grandeur."
          cardClass={CardClassObj}
        />
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