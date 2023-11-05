import React, { useState } from "react";
import AssetMusicIcon from "assets/images/myassets/ph_play-fill.png";
import UnlockPremium from "components/popup/unlockPremium";
import ChannelImage from "assets/images/nureal.png";

/**
 * This file is part of FourthStar User Dashboard
 *(c) 2023 ShadowCast.Io <craig@shadowcast.io>
 *------------------------------------------------------
 *@module Generic-Entertainment-card
 *@developer Aditya P
 */

const MusicCard = ({
  slide,
  title,
  subtitleButton,
  tagType,
  tags,
  thumbnailIcon,
  handleUnlockPremiumClick,
}) => {
  const [premiumModalStatus, setpremiumModalStatus] = useState(false);
  function handlePremiumModal() {
    setpremiumModalStatus(!premiumModalStatus);
  }

  return (
    <div className=" flex " data-testid="volumetric-card">
      <div className="aspect-[456/239] mr-[10px] sm:mr-[15px] relative rounded-lg bg-[#181818;]  max-h-24 min-w-[152px]">
        {tags && <span className="tags">{tags}</span>}
        {thumbnailIcon && (
          <span className="music-icon">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M21 3V15.5C21 16.4283 20.6313 17.3185 19.9749 17.9749C19.3185 18.6313 18.4283 19 17.5 19C16.5717 19 15.6815 18.6313 15.0251 17.9749C14.3687 17.3185 14 16.4283 14 15.5C14 14.5717 14.3687 13.6815 15.0251 13.0251C15.6815 12.3687 16.5717 12 17.5 12C18.04 12 18.55 12.12 19 12.34V6.47L9 8.6V17.5C9 18.4283 8.63125 19.3185 7.97487 19.9749C7.3185 20.6313 6.42826 21 5.5 21C4.57174 21 3.6815 20.6313 3.02513 19.9749C2.36875 19.3185 2 18.4283 2 17.5C2 16.5717 2.36875 15.6815 3.02513 15.0251C3.6815 14.3687 4.57174 14 5.5 14C6.04 14 6.55 14.12 7 14.34V6L21 3Z"
                fill="white"
              />
            </svg>
          </span>
        )}
      </div>

      <div>
        <div className="__entertainment_assets_heading mb-[10px] lg:mb-[10px] sm:flex justify-between">
          <h4 className=" font-medium font-heading text-[12px] max-[500px]:text-[10px]  px-[0] md:text-[13px] lg:text-[14px] xl:text-[16px] tracking-[1px]  max-[768px]:p-0 max-[768px]:text-[15px] mb-1 sm:mb-0">
            Lady Gaga - Hold my hands
          </h4>
        </div>
        <div className="">
          <div className="flex items-center mb-[10px] sm:mb-[17px]">
            <img
              className="w-[30px] h-[30px]  sm:w-[35px] sm:h-[35px] rounded-full mr-[8px] "
              src={ChannelImage}
              alt="load image"
            />
            <p className="text-[10px] sm:text-[13px] opacity-50   sm:mr-[20px]">
            Nureal Entertainment
            </p>
          </div>
        </div>
      </div>
      {premiumModalStatus ? <UnlockPremium /> : <></>}
    </div>
  );
};

export default MusicCard;
