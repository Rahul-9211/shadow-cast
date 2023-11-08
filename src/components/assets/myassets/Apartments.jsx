import React from "react";
import Loader from "components/Loader/Loader";
import Explore from "components/Explore/Explore";
import ApartmentImg from "assets/images/myassets/card_img.png";
import MarketPlaceCard from "components/card/marketplace";
/**
 * This file is part of FourthStar User Dashboard
 *(c) 2023 ShadowCast.Io <craig@shadowcast.io>
 *------------------------------------------------------
 *@module Assets-Apartments-Module
 *@developer Aditya P
 */

const apartmentData = [
  {
    id: "ap-1",
    img: ApartmentImg,
    title: "Nebula Apartment",
    desc: "Experience the epitome of luxury in these magnificent mansions inspired by the celestial luminaries, offering a sanctuary of prestige and grandeur.",
  },
  {
    id: "ap-2",
    img: ApartmentImg,
    title: "Nebula Apartment",
    desc: "Experience the epitome of luxury in these magnificent mansions inspired by the celestial luminaries, offering a sanctuary of prestige and grandeur.",
  },
  {
    id: "ap-3",
    img: ApartmentImg,
    title: "Nebula Apartment",
    desc: "Experience the epitome of luxury in these magnificent mansions inspired by the celestial luminaries, offering a sanctuary of prestige and grandeur.",
  },
  {
    id: "ap-4",
    img: ApartmentImg,
    title: "Nebula Apartment",
    desc: "Experience the epitome of luxury in these magnificent mansions inspired by the celestial luminaries, offering a sanctuary of prestige and grandeur.",
  },
  {
    id: "ap-5",
    img: ApartmentImg,
    title: "Nebula Apartment",
    desc: "Experience the epitome of luxury in these magnificent mansions inspired by the celestial luminaries, offering a sanctuary of prestige and grandeur.",
  },
  {
    id: "ap-6",
    img: ApartmentImg,
    title: "Nebula Apartment",
    desc: "Experience the epitome of luxury in these magnificent mansions inspired by the celestial luminaries, offering a sanctuary of prestige and grandeur.",
  },
  {
    id: "ap-7",
    img: ApartmentImg,
    title: "Nebula Apartment",
    desc: "Experience the epitome of luxury in these magnificent mansions inspired by the celestial luminaries, offering a sanctuary of prestige and grandeur.",
  },
];

const Apartments = () => {
  // This is just a temp variable for testing
  const IsDataAvailable = true;

  return (
    <>
      {/* This __explore_default_button class is a conditional component and it will appears when user don't have any assets */}

      {IsDataAvailable ? (
        <div className="__apartment_assets_main pl-[15px] max-[768px]:p-0">
          <div className="__apartment_assets_heading mb-[10px] pt-[10px] max-[768px]:pl-0">
            <h4 className="font-medium font-heading text-[18px] tracking-[1px] max-[768px]:p-0 max-[768px]:text-[15px]">
              Apartments
            </h4>
          </div>

          <div className="_apartment_container grid grid-cols-1 md:grid-cols-2 gap-x-5 gap-y-4 lg:gap-y-8 mb-14 md:mb-28 mx-auto relative z-10 mt-[30px]">  
            {
              apartmentData?.map((data) => {
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
  );
};

export default Apartments;
