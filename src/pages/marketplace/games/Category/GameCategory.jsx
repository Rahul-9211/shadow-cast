import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Zoom } from "react-reveal";
// import { AllGaming, SuiteGaming, EnvironGaming } from "components/assets/myassets/gaming/index";
import SliderCards from "components/partials/SliderCards";
import ShadowFrame from "components/shadow-frame";

/**
 * This file is part of FourthStar User Dashboard
 *(c) 2023 ShadowCast.Io <craig@shadowcast.io>
 *------------------------------------------------------
 *@module Gaming-Category-Page
 *@developer Aditya P
 */

const GamingTabs = [
  { id: 0, key: "all", name: "All" },
  { id: 0, key: "holo-suite-gaming", name: "Holo Suite Gaming" },
  { id: 0, key: "environmental-gaming", name: "Environmental Gaming" },
];

const GamingData = {
    "all": [
        {
            id: 0,
            heading: "Galactic battles: Multiverse War",
            isComing: true
        },
        {
            id: 0,
            heading: "Galactic battles: Multiverse War",
            isComing: true
        },
        {
            id: 0,
            heading: "Galactic battles: Multiverse War",
            isComing: true
        },
        {
            id: 0,
            heading: "Galactic battles: Multiverse War",
            isComing: true
        },
        {
            id: 0,
            heading: "Galactic battles: Multiverse War",
            isComing: true
        },
    ],
    "HoloSuite": [
        {
            id: 0,
            heading: "Galactic battles: Multiverse War",
            isComing: true
        },
        {
            id: 0,
            heading: "Galactic battles: Multiverse War",
            isComing: true
        },
        {
            id: 0,
            heading: "Galactic battles: Multiverse War",
            isComing: true
        },
        {
            id: 0,
            heading: "Galactic battles: Multiverse War",
            isComing: true
        },
        {
            id: 0,
            heading: "Galactic battles: Multiverse War",
            isComing: true
        },
    ],
    "Environment": [
        {
            id: 0,
            heading: "Galactic battles: Multiverse War",
            isComing: true
        },
        {
            id: 0,
            heading: "Galactic battles: Multiverse War",
            isComing: true
        },
        {
            id: 0,
            heading: "Galactic battles: Multiverse War",
            isComing: true
        },
        {
            id: 0,
            heading: "Galactic battles: Multiverse War",
            isComing: true
        },
        {
            id: 0,
            heading: "Galactic battles: Multiverse War",
            isComing: true
        },
    ]
}

const GameCategory = ({defaultRoute}) => {
  const navigate = useNavigate();
  const {category} = useParams()
  const [allCategory] = useState([
    { label: "Apartment", coming: false },
    { label: "Ship", coming: false },
    { label: "Entertainment", coming: false },
    { label: "Clothing", coming: false },
    { label: "Gaming", coming: false },
    { label: "Companion", coming: false },
  ]);
  const [values, setValues] = useState(0);
  const [gamingActiveTab, setgamingActiveTab] = useState({
    id: 0,
    activetabs: category,
  });

  const handleChange = (event, newValue) => {
    event.preventDefault();
    switch (newValue) {
      case 0:
        navigate("/marketplace/apartments");
        break;
      case 1:
        navigate("/marketplace/ships");
        break;
      case 2:
        navigate("/marketplace/entertainments");
        break;
      case 3:
        navigate("/marketplace/clothing/");
        break;
      case 4:
        navigate("/marketplace/gaming/");
        break;
      case 5:
        navigate("/marketplace/companions/");
        break;
      default:
        navigate("/marketplace/");
        break;
    }
  };

  useEffect(() => {
    navigate(`/marketplace/gaming/${gamingActiveTab?.activetabs}`)
  },[gamingActiveTab])
  return (
    <>
    <ShadowFrame data-testid="shadow-frame" className="z-[0] w-[350px] md:w-[250px] h-[350px] md:h-[400px] rounded-[250px] md:rounded-[400px] left-[-10%] max-[768px]:left-[-50%] top-[30%] max-[768px]:top-[10%] translate-x-1/2 bottom-0 !bg-[#FFE9C9]" />
      <ShadowFrame data-testid="shadow-frame" className="z-[0] w-[250px] md:w-[250px] h-[250px] md:h-[400px] rounded-[250px] md:rounded-[400px] right-[20%] max-[768px]:right-[50%] top-[60%] max-[768px]:top-[10%] translate-x-1/2 bottom-0 !bg-[#FFE9C9]" />
      <div className="__game__category__container container app-container mx-auto px-2 md:px-3 xl:px-6 2xl:px-10 relative z-10">
        <ul
          className="flex overflow-x-auto text-sm md:text-base font-semibold text-center py-5 px-4 md:py-8 md:px-4"
          data-testid="tablist"
        >
          {allCategory?.map((category, i) => (
            <li className="mr-8" key={i} role="tab">
              <a
                href="#"
                onClick={(e) => handleChange(e, i)}
                aria-current={values === i ? "page" : ""}
                className={`inline-block text-[#7A7A7A] hover:text-white ${
                  values === i ? "text-white" : ""
                }`}
              >
                {!category?.coming ? (
                  category?.label
                ) : (
                  <>
                    {category?.label}
                    <span className="ml-2 text-xs clip-text font-medium whitespace-nowrap">
                      Coming soon
                    </span>
                  </>
                )}
              </a>
            </li>
          ))}
        </ul>

        <div className="__navigate__back__">
          <Zoom>
            <button
              onClick={() => {
                navigate(-1)
              }}
              className="flex h-[32px] justify-center items-center gap-[8px] ml-3 text-white font-semibold text-xs md:text-sm bg-white/[0.10] hover:bg-white/[0.90] hover:text-dark rounded-3xl py-1.5 px-1.5 pr-3"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
              >
                <path
                  d="M12.5 15L7.5 10L12.5 5"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <span>Back</span>
            </button>
          </Zoom>
        </div>

        {/* Gameing Tabs Section */}
        <div className="__gaming_assets_main py-[50px] pl-[15px] max-[768px]:p-[15px] max-[768px]:py-[30px]">
          <div className="__gaming_assets_heading mb-[10px]">
            <h4 className="font-medium font-heading text-[24px] tracking-[1px] max-[768px]:p-0 max-[768px]:text-[15px]">
              Gaming
            </h4>
          </div>

          <div className="__gaming__tabs_main mt-[22px] max-[768px]:w-auto max-[768px]:p-0 max-[1280px]:p-0">
            <ul
              className=" 
            flex 
            overflow
            gap-[20px] 
            hover:[&>li]:cursor-pointer 
            max-[768px]:overflow-x-scroll 
            max-[768px]:p-0 
            max-[768px]:[&>li]:underline-offset-1
            max-[768px]:[&>li]:text-[12px]
            "
            >
              {GamingTabs?.map((tabs, ind) => {
                return (
                  <li
                    key={tabs?.key}
                    className={`${
                      gamingActiveTab.activetabs === tabs.key
                        ? "text-[#fff] decoration-2 underline underline-offset-8 decoration-[#FBBC5E] font-medium"
                        : "text-[gray]"
                    }`}
                    onClick={() => setgamingActiveTab({ activetabs: tabs.key })}
                  >
                    {tabs?.name}
                  </li>
                );
              })}
            </ul>
          </div>

          <div className="_assets_container grid grid-cols-4 md:grid-cols-4 max-[1200px]:md:grid-cols-3 max-[768px]:grid-cols-1 gap-x-4 gap-y-4 lg:gap-y-8 mb-14 md:mb-28 mx-auto relative z-10 mt-[30px]">
            {/* Entertainment Tabs Container */}
            {gamingActiveTab.activetabs === "all" && <>
                {
                    GamingData.all.map((data) => {
                        return <SliderCards item={data} id="gaming" baseRoute="marketplace" />
                    })
                }
            </>}
            {gamingActiveTab.activetabs === "holo-suite-gaming" && <>
                {
                    GamingData.HoloSuite.map((data) => {
                        return <SliderCards item={data} id="gaming" baseRoute="marketplace" />
                    })
                }
            </>}
            {gamingActiveTab.activetabs === "environmental-gaming" && <>
                {
                    GamingData.Environment.map((data) => {
                        return <SliderCards item={data} id="gaming" baseRoute="marketplace" />
                    })
                }
            </>}
          </div>
        </div>
      </div>
    </>
  );
};

export default GameCategory;
