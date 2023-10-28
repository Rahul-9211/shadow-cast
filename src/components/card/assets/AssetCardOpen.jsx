import React from "react";
import AssetMusicIcon from "assets/images/myassets/ph_play-fill.png";

/**
 * This file is part of FourthStar User Dashboard
 *(c) 2023 ShadowCast.Io <craig@shadowcast.io>
 *------------------------------------------------------
 *@module Generic-Entertainment-card
 *@developer Aditya P
 */

const AssetCardOpen = ({ cardClass, title, Mkey, subtitleButton }) => {
  return (
    <div className={cardClass.cardMainclass}>
      <div className={cardClass.cardMediaClass}>
        {Mkey === "music" ? (
          <div className="w-[50px] h-[50px]">
            <img src={AssetMusicIcon} alt="music+icon" />
          </div>
        ) : (
          <></>
        )}
      </div>
      <h5 className={cardClass.cardtitleClass}>{title}</h5>
      <button className={cardClass.cardButtonclass} dangerouslySetInnerHTML={{__html: subtitleButton}}></button>
    </div>
  );
};

export default AssetCardOpen;
