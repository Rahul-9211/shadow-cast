import React from 'react'
import Explore from 'components/Explore/Explore'

/**
 * This file is part of FourthStar User Dashboard
 *(c) 2023 ShadowCast.Io <craig@shadowcast.io>
 *------------------------------------------------------
 *@module Assets-Entertainment-Module
 *@developer Aditya P
 */
 

const Entertainment = () => {

  // This is just a temp variable for testing
  const IsDataAvailable = true;
  return <>
  {/* This __explore_default_button class is a conditional component and it will appears when user don't have any assets */}

  {IsDataAvailable ? (
    <div className="__entertainment_assets_main pl-[15px] max-[768px]:p-0">
      <div className="__entertainment_assets_heading mb-[10px]">
        <h4 className="font-medium text-[18px] tracking-[1px] px-[28px] max-[768px]:p-0 max-[768px]:text-[15px] max-[1280px]:px-[20px]">
          Entertainments
        </h4>
      </div>

      <div className='__entertaiments__tabs_main pl-[15px]'>
          <ul className='pl-[15px] flex gap-[20px] decoration-2 [&>li]:underline [&>li]:underline-offset-8 [&>li]:decoration-[#FBBC5E4D]'>
            <li>Volumetric Videos</li>
            <li>360 Video</li>
            <li>180 Video</li>
            <li>2D Video</li>
            <li>Music</li>
            <li>Subscription</li>
          </ul>
      </div>

      <div className="_assets_container flex flex-wrap justify-around max-[768px]:flex-col">
        
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

export default Entertainment