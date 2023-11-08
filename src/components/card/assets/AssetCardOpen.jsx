import React from "react";
import AssetMusicIcon from "assets/images/myassets/ph_play-fill.png";
import { Link } from "react-router-dom";

/**
 * This file is part of FourthStar User Dashboard
 *(c) 2023 ShadowCast.Io <craig@shadowcast.io>
 *------------------------------------------------------
 *@module Generic-Entertainment-card
 *@developer Aditya P
 */

const AssetCardOpen = ({ cardClass, title, Mkey, category, baseRoute }) => {
  return (
    <Link to={`${baseRoute}/${title.split(" ").join("-")}`}>
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
      {
        category === 'CLOTHLAN' ? <span className="pl-[6px] font-body text-[#F3A151] font-medium">Coming Soon</span> : <></>
      }
      
    </div>
    </Link>
  );
};

export default AssetCardOpen;
