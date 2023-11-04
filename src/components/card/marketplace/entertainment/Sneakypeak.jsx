import React, { useState } from "react";
import AssetMusicIcon from "assets/images/myassets/ph_play-fill.png";
import UnlockPremium from "components/popup/unlockPremium";

/**
 * This file is part of FourthStar User Dashboard
 *(c) 2023 ShadowCast.Io <craig@shadowcast.io>
 *------------------------------------------------------
 *@module Generic-Entertainment-card
 *@developer Aditya P
 */

const SneakyPeak = ({
  slide,
  title,
  subtitleButton,
  tagType,
  tags,
  thumbnailIcon,
  handleUnlockPremiumClick
}) => {
  const [premiumModalStatus , setpremiumModalStatus] = useState(false)
  function handlePremiumModal(){
    setpremiumModalStatus(!premiumModalStatus)
  }  

  return (
    <div className="mb-12" data-testid="volumetric-card">
      <div className="aspect-[456/239] relative rounded-2xl bg-[#2B2B2B] mb-2.5 ">
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

      <p className="mb-2 text-sm px-1">{title}</p>

      {tagType === "Free" && <button className="tag-item px-1  text-base md:text-xs lg:text-base">Free</button>}
      {tagType === "Paid" && (
        <button className="tag-item px-1  text-base md:text-xs lg:text-base">{subtitleButton}</button>
      )}
       {tagType === "Unlocked" && (
        <button className="tag-item px-1  text-base md:text-xs lg:text-base text-[#6BFEF6]">{subtitleButton}</button>
      )}
      {tagType === "Premium" && (
        <button className="tag-item flex gap-4 items-center px-1 text-base md:text-xs lg:text-base" onClick={handleUnlockPremiumClick}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="25"
            viewBox="0 0 24 25"
            fill="none"
          >
            <path
              d="M6 22.0356C5.45 22.0356 4.979 21.8396 4.587 21.4476C4.195 21.0556 3.99934 20.585 4 20.0356V10.0356C4 9.48565 4.196 9.01465 4.588 8.62264C4.98 8.23064 5.45067 8.03498 6 8.03565H7V6.03565C7 4.65231 7.48767 3.47298 8.463 2.49765C9.43834 1.52231 10.6173 1.03498 12 1.03565C13.3833 1.03565 14.5627 1.52331 15.538 2.49865C16.5133 3.47398 17.0007 4.65298 17 6.03565V8.03565H18C18.55 8.03565 19.021 8.23165 19.413 8.62365C19.805 9.01565 20.0007 9.48631 20 10.0356V20.0356C20 20.5856 19.804 21.0566 19.412 21.4486C19.02 21.8406 18.5493 22.0363 18 22.0356H6ZM6 20.0356H18V10.0356H6V20.0356ZM12 17.0356C12.55 17.0356 13.021 16.8396 13.413 16.4476C13.805 16.0556 14.0007 15.585 14 15.0356C14 14.4856 13.804 14.0146 13.412 13.6226C13.02 13.2306 12.5493 13.035 12 13.0356C11.45 13.0356 10.979 13.2316 10.587 13.6236C10.195 14.0156 9.99934 14.4863 10 15.0356C10 15.5856 10.196 16.0566 10.588 16.4486C10.98 16.8406 11.4507 17.0363 12 17.0356ZM9 8.03565H15V6.03565C15 5.20231 14.7083 4.49398 14.125 3.91065C13.5417 3.32731 12.8333 3.03565 12 3.03565C11.1667 3.03565 10.4583 3.32731 9.875 3.91065C9.29167 4.49398 9 5.20231 9 6.03565V8.03565Z"
              fill="white"
            />
          </svg>
          Unlock Premium
        </button>
      )}
      {premiumModalStatus ? <UnlockPremium/> : <></>}
    </div>
    
  );
};

export default SneakyPeak;