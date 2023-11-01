/**
 * This file is part of FourthStar User Dashboard
 *(c) 2023 ShadowCast.Io <craig@shadowcast.io>
 *------------------------------------------------------
 *@module Generic-Assets-Card
 *@developer Aditya P
 */

const AssetCard = ({ cardImg, cardTitle, cardDesc, cardClass, name }) => {
  return (
    <div className={cardClass.cardmain}>
      <div className="__shawdow-radial absolute z-0 top-[12%] left-[0%]"><div className="shadow-frame w-[180px] md:w-[180px] h-[180px] md:h-[180px] rounded-[50%] md:rounded-[50%] translate-x-1/2 bottom-0 !bg-[#FFE9C9]"></div></div>
      <div className="flex justify-center z-10">
        <img
          className="w-[463px] h-[234px] mt-[10px] max-[768px]:mt-[3px] max-[768px]:p-[10px] max-[768px]:w-auto max-[768px]:h-auto"
          src={cardImg}
          alt={name}
        />
      </div>
      <h4 className={cardClass.cardtitle}>{cardTitle}</h4>
      <p className={cardClass.cardDesc}>{cardDesc}</p>
    </div>
  );
};

export default AssetCard;
