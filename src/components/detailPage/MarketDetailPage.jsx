import React, { useState, useEffect } from "react";
import { NavLink, useNavigate, useParams } from "react-router-dom";
import { Zoom } from "react-reveal";
import CoinIcon from "assets/images/coin-icon.png";
import SliderHeader from "components/partials/SliderHeader";
import SliderCards from "components/partials/SliderCards";
import ShadowFrame from "components/shadow-frame";

/**
 * This file is part of FourthStar User Dashboard
 *(c) 2023 ShadowCast.Io <craig@shadowcast.io>
 *------------------------------------------------------
 *@module Market-Detail-Page-Clothing&Companion
 *@developer Aditya P
 */

const SuggestedItem = [
  {
    id: 0,
    heading: "NebulaWalker Armor",
    isComing: true,
  },
  {
    id: 1,
    heading: "NebulaWalker Armor",
    isComing: true,
  },
  {
    id: 2,
    heading: "NebulaWalker Armor",
    isComing: true,
  },
  {
    id: 3,
    heading: "NebulaWalker Armor",
    isComing: true,
  },
  {
    id: 4,
    heading: "NebulaWalker Armor",
    isComing: true,
  },
  {
    id: 5,
    heading: "NebulaWalker Armor",
    isComing: true,
  },
  {
    id: 6,
    heading: "NebulaWalker Armor",
    isComing: true,
  },
  {
    id: 7,
    heading: "NebulaWalker Armor",
    isComing: true,
  },
];

const MarketDetailPage = ({ id, value }) => {
  const navigate = useNavigate();
  const { categorytype, item } = useParams();
  const [allCategory] = useState([
    { label: "Apartment", coming: false },
    { label: "Ship", coming: false },
    { label: "Entertainment", coming: false },
    { label: "Clothing", coming: false },
    { label: "Gaming", coming: false },
    { label: "Companion", coming: false },
  ]);
  const [values, setValues] = useState(0);

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
    if (value) setValues(+value);
  }, [value]);

  return (
    <>
    <ShadowFrame data-testid="shadow-frame" className="z-[0] w-[350px] md:w-[250px] h-[350px] md:h-[400px] rounded-[250px] md:rounded-[400px] left-[-10%] max-[768px]:left-[-50%] top-[30%] max-[768px]:top-[10%] translate-x-1/2 bottom-0 !bg-[#FFE9C9]" />
      <ShadowFrame data-testid="shadow-frame" className="z-[0] w-[250px] md:w-[250px] h-[250px] md:h-[400px] rounded-[250px] md:rounded-[400px] right-[20%] max-[768px]:right-[50%] top-[60%] max-[768px]:top-[10%] translate-x-1/2 bottom-0 !bg-[#FFE9C9]" />
      <div className="container app-container mx-auto px-2 md:px-3 xl:px-6 2xl:px-10 relative z-10">
        <ul
          className="flex overflow-x-auto text-sm md:text-base font-semibold text-center py-5 px-2 md:py-8 md:px-4"
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
        {/* <div className='marketplace_tabs'>
        {element ? element :
          <div className='flex h-screen flex-col gap-3 items-center justify-center'>
            <p className='font-heading font-semibold clip-text'>Coming Soon</p>
            <p className='text-[#7A7A7A] font-semibold'>Try exploring other exciting contents in marketplace.</p>
            <NavLink to="/marketplace" className="border-[1.5px] border-sec text-sm mt-4 rounded-lg max-w-[250px] hover:bg-sec hover:text-dark font-bold text-center w-full py-3 px-4">Browse other content</NavLink>
          </div>}

      </div> */}

        <div className="__navigate__back__">
          <Zoom>
            <button
              onClick={() => navigate(-1)}
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

        {/* Item Detail Section */}

        <div className="__details__data__container ml-3 mt-[20px] relative z-[10]">
          <div className="__detail__page__container flex gap-[50px] max-[668px]:flex-col max-[1280px]:flex-col max-[668px]:gap-[30px]">
            <div className="__image__section bg-[#242424] w-full h-[532px] max-[668px]:h-[300px] rounded-[20px]"></div>
            <div className="__item__content__section mt-[10px] flex flex-col max-[668px]:mt-[5px]">
              <h4 className="text-[24px] font-heading max-[668px]:text-[18px]">
                {item?.split("-").join(" ")}
              </h4>
              <div className="__tag_line pt-[20px]">
                <span className="font-body px-[10px] py-[8px] rounded-3xl text-[15px] max-[668px]:text-[13px] bg-white/[0.10]">
                  {categorytype?.split("-").join(" ")}
                </span>
              </div>
              <p className="w-[80%] max-[668px]:w-[100%] pt-[30px] text-[#FFFFFFE5] text-[15px]">
                Indulge in the timeless charm of our Office Suit Female
                collection, where refined craftsmanship meets cutting-edge
                virtual fashion. Embrace confidence and grace as you navigate
                the metaverse in this sophisticated ensemble, perfect for
                conquering virtual boardrooms and social gatherings alike.
              </p>
              <a
                href="#"
                className="text-[16px] font-body text-[#FFFFFF80] hover:underline underline-offset-4 pt-[44px]"
              >
                Buy this Clothing
              </a>
              <div className="__price__section pt-[30px] flex items-center gap-[10px]">
                <img
                  src={CoinIcon}
                  alt="__coin__icon"
                  className="w-[32px] h-[32px] max-[668px]:w-[28px] max-[668px]:h-[28px]"
                />
                <span className="text-[16px] text-[#FFFFFF80] font-body">
                  $99.00
                </span>
              </div>
              <span className="text-[#F3A151] text-[18px] font-body pt-[24px] max-[668px]:text-[15px]">
                Coming Soon
              </span>
            </div>
          </div>

          {/* Content Divider Section */}
          <div className="__content__divider py-[120px] max-[668px]:py-[80px]">
            <hr className="border-[0.1px] border-[#5A5A5A80]" />
          </div>

          {/* Suggested Item Slider Section */}

          <div className="__suggested__items__container">
            <SliderHeader title={`${id === 'CLOTHING' ? 'Suggested Clothing' : 'Suggested Companion'}`} />
            <div className="__pets__slider__container py-[40px] max-[768px]:py-[10px] relative z-[10]">
              <div className="__slider_card_container flex gap-[20px] overflow-x-scroll py-[10px]">
                {SuggestedItem.map((data) => {
                  return <SliderCards item={data} id={categorytype} baseRoute={id === 'CLOTHING' ? 'marketplace/clothing' : 'marketplace/companions'} />;
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MarketDetailPage;
