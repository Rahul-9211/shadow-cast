/**
 * This file is part of FourthStar User Dashboard
 *(c) 2023 ShadowCast.Io <craig@shadowcast.io>
 *------------------------------------------------------
 *@module 2D-List_page
 *@developer Sudhanshu
 */

import React, { useState } from "react";
import Explore from "components/Explore/Explore";
import { EntertainmentCardClass } from "constant";
import PremiumLockIcon from "assets/images/myassets/material-symbols_lock-outline.png";
import AssetCardOpen from "components/card/assets/AssetCardOpen";
import FilterDropdown from "components/FilterDropdown/FilterDropdown";
import VolumetricCard from "components/card/marketplace/entertainment/VolumetricCard";

const Index = () => {
  const [selectedFilter, setSelectedFilter] = useState("All");

  const handleFilterChange = (selectedValue) => {
    setSelectedFilter(selectedValue);
  };
  const IsDataAvailable = true;

  const filterOptions = ["All", "Free", "Premium", "Buy"];

  const entertainmentData = [
    {
      title: "StellarVerse Spectacle: Cosmic Symphony",
      subtitleButton: `<img src=${PremiumLockIcon} class="w-[24px] h-[24px] mr-4 " alt='lockIcon'/> Unlock Premium`,
      cardClass: EntertainmentCardClass,
      tagType: "Premium"
    },
    {
      title: "StellarVerse Spectacle: Cosmic Symphony",
      subtitleButton: "Free",
      cardClass: EntertainmentCardClass,
      tagType: "Free"
    },
    {
      title: "StellarVerse Spectacle: Cosmic Symphony",
      subtitleButton: "US$ 9.99",
      cardClass: EntertainmentCardClass,
      tagType: "Paid"
    },
    {
      title: "StellarVerse Spectacle: Cosmic Symphony",
      subtitleButton: "Free",
      cardClass: EntertainmentCardClass,
      tagType: "Free"
    },
    {
      title: "StellarVerse Spectacle: Cosmic Symphony",
      subtitleButton: "US$ 9.99",
      cardClass: EntertainmentCardClass,
      tagType: "Paid"
    },
    {
      title: "StellarVerse Spectacle: Cosmic Symphony",
      subtitleButton: "Free",
      cardClass: EntertainmentCardClass,
      tagType: "Free"
    },
  ];

  // Filter the entertainmentData based on the selected filter
  const filteredData = entertainmentData.filter((item) => {
    if (selectedFilter === "All") {
      return true;
    } else if (
      selectedFilter === "Free" &&
      item.subtitleButton.includes("Free")
    ) {
      return true;
    } else if (
      selectedFilter === "Premium" &&
      item.subtitleButton.includes("Unlock Premium")
    ) {
      return true;
    } else if (
      selectedFilter === "Buy" &&
      item.subtitleButton.includes("US$")
    ) {
      return true;
    }
    return false;
  });
  const mostTrending = [
    { title: "StellarVerse Spectacle: Cosmic Symphony", productType: "Free", id: "1" },
    { title: "StellarVerse Spectacle: Cosmic Symphony", productType: "Free", id: "2", tags: "Volcap" },
    { title: "StellarVerse Spectacle: Cosmic Symphony", productType: "Paid", price: "US$ 9.99", id: "3" },
    { title: "StellarVerse Spectacle: Cosmic Symphony", productType: "Free", id: "4" },
    { title: "StellarVerse Spectacle: Cosmic Symphony", productType: "Free", id: "5" },
  ]

  return (
    <>
      {IsDataAvailable ? (
        <div className="__entertainment_assets_main  pt-4 max-[768px]:p-0">
          <div className="__entertainment_assets_heading mb-[29px] lg:mb-[39px] sm:flex justify-between">
            <h4 className="font-medium font-heading text-[18px] lg:text-[28px] tracking-[1px]  max-[768px]:p-0 max-[768px]:text-[15px] mb-4 sm:mb-0">
              2D Video
            </h4>
            <div className="pt-3">
              <FilterDropdown
                options={filterOptions}
                onChange={handleFilterChange}
              />
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 ">

            {filteredData.map((item, index) => (
              <VolumetricCard
                key={index}
                // slider ={mostTrending}
                type="trending"
                name=""
                title={item.title}
                subtitleButton={item.subtitleButton}
                tagType={item.tagType}
                // tags ="vol"
                thumbnailIcon={false}
              />
            ))}


          </div>
          <div className="volumetric-card-right-shadow"></div>

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

export default Index;