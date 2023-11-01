import React from "react";
import AssetCardOpen from "components/card/assets/AssetCardOpen";
import PremiumLockIcon from 'assets/images/myassets/material-symbols_lock-outline.png'

const EntertainmentCardClass = {
  cardMainclass:
    "w-[317px] h-[136px] pl-[10px] mb-[100px] hover:cursor-pointer  max-[768px]:w-[100%] max-[768px]:p-0",
  cardMediaClass: "w-[100%] hover:shadow-[0px_0px_5px_0px_rgba(102,102,102,1)] flex justify-center items-center text-center bg-[#2B2B2B] min-h-[110px] rounded-[10px]",
  cardtitleClass:
    "py-[12px] font-body text-[14px] font-light pl-[6px] max-[768px]:text-[13px]",
  cardButtonclass:
    "pl-[6px] [&>img]:w-[23px] gap-[10px] flex font-bold bg-[#FBBC5E0D] px-[15px] py-[7px] rounded-[8px] text-center text-[15px] hover:shadow-[0_0_3px_1px_rgba(251,188,94,0.47)] hover:border-[#FBBC5E] max-[768px]:text-[13px]",
};

const Music = () => {
  return (
    <>
      <AssetCardOpen
        title="Supermassive black hole"
        Mkey="music"
        subtitleButton="US$ 9.99"
        cardClass={EntertainmentCardClass}
      />
      <AssetCardOpen
        title="Supermassive black hole"
        Mkey="music"
        subtitleButton="Free"
        cardClass={EntertainmentCardClass}
      />
      <AssetCardOpen
        title="Supermassive black hole"
        Mkey="music"
        subtitleButton={`<img src=${PremiumLockIcon} alt='lockIcon'/> Unlock Premium`}
        cardClass={EntertainmentCardClass}
      />
      <AssetCardOpen
        title="Supermassive black hole"
        Mkey="music"
        subtitleButton="US$ 9.99"
        cardClass={EntertainmentCardClass}
      />
      <AssetCardOpen
        title="Supermassive black hole"
        Mkey="music"
        subtitleButton="Free"
        cardClass={EntertainmentCardClass}
      />
      <AssetCardOpen
        title="Supermassive black hole"
        Mkey="music"
        subtitleButton={`<img src=${PremiumLockIcon} alt='lockIcon'/> Unlock Premium`}
        cardClass={EntertainmentCardClass}
      />
    </>
  );
};

export default Music;
