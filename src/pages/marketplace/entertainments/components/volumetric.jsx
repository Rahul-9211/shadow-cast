import React, { useState } from "react";
import Explore from "components/Explore/Explore";
import { EntertainmentCardClass } from "constant";
import PremiumLockIcon from "assets/images/myassets/material-symbols_lock-outline.png";
import AssetCardOpen from "components/card/assets/AssetCardOpen";
import FilterDropdown from "./FilterDropdown";

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
    },
    {
      title: "StellarVerse Spectacle: Cosmic Symphony",
      subtitleButton: "Free",
      cardClass: EntertainmentCardClass,
    },
    {
      title: "StellarVerse Spectacle: Cosmic Symphony",
      subtitleButton: "US$ 9.99",
      cardClass: EntertainmentCardClass,
    },
    {
      title: "StellarVerse Spectacle: Cosmic Symphony",
      subtitleButton: "Free",
      cardClass: EntertainmentCardClass,
    },
    {
      title: "StellarVerse Spectacle: Cosmic Symphony",
      subtitleButton: "US$ 9.99",
      cardClass: EntertainmentCardClass,
    },
    {
      title: "StellarVerse Spectacle: Cosmic Symphony",
      subtitleButton: "Free",
      cardClass: EntertainmentCardClass,
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

  return (
    <>
      {IsDataAvailable ? (
        <div className="__entertainment_assets_main  pt-4 max-[768px]:p-0">
          <div className="__entertainment_assets_heading mb-[39px] flex justify-between">
            <h4 className="font-medium font-heading text-[28px] tracking-[1px]  max-[768px]:p-0 max-[768px]:text-[15px] max-[1280px]:px-[20px]">
              Entertainments
            </h4>
           <div className="pt-3">
           <FilterDropdown
              options={filterOptions}
              onChange={handleFilterChange}
            />
           </div>
          </div>

          <div className="flex flex-wrap justify-between">
            {filteredData.map((item, index) => (
              <AssetCardOpen
                key={index}
                name=""
                title={item.title}
                subtitleButton={item.subtitleButton}
                cardClass={item.cardClass}
              />
            ))}

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

export default Index;
