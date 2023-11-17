/**
 * This file is part of FourthStar User Dashboard
 *(c) 2023 ShadowCast.Io <craig@shadowcast.io>
 *------------------------------------------------------
 *@module Gaming-Landing-Page
 *@developer Aditya P
 */

import React from "react";
import { Zoom } from "react-reveal";
import GamingBannerImg from "assets/images/Gaming hero-section-image.jpg";
import SliderCards from "components/partials/SliderCards";

import EnvironmentGamingImg from "assets/images/Environmental -Gaming.png";
import HoloSuiteImg from "assets/images/game_landingPage-1.png";
import { Link } from "react-router-dom";

const TopGameData = [
  {
    id: 0,
    heading: "Galactic battles: Multiverse War",
    isComing: true,
  },
  {
    id: 0,
    heading: "Galactic battles: Multiverse War",
    isComing: true,
  },
  {
    id: 0,
    heading: "Galactic battles: Multiverse War",
    isComing: true,
  },
  {
    id: 0,
    heading: "Galactic battles: Multiverse War",
    isComing: true,
  },
  {
    id: 0,
    heading: "Galactic battles: Multiverse War",
    isComing: true,
  },
];

const Index = () => {
  return (
    <div data-testid="__gaming__landing__main" className="__gaming__landing__main px-2">
      <Zoom>
        <div className="xl:min-h-[350px] bg-[#2D2D2D] h-full mb-10 md:mb-20 z-10 relative rounded-[4px]">
          <img
            src={GamingBannerImg}
            alt="Network Problem"
            className="h-full w-full object-cover rounded-[4px]"
          />
        </div>
      </Zoom>

      {/* Game Category Content Section */}
      <div className="__holoSuite__gaming__container flex justify-center gap-[50px] pt-[50px] max-[668px]:pt-[30px] max-[668px]:flex-col max-[768px]:gap-[30px]">
        <div className="__holosuite__image__section w-[60%] max-[1280px]:w-max max-[768px]:w-[100%]">
          <img
            src={HoloSuiteImg}
            alt="environ_game_img"
            className="w-[85%] max-[768px]:w-[100%] max-[1280px]:w-[100%]"
          />
        </div>
        <div className="__holosuite__content__section py-[20px] flex flex-col justify-center w-[40%] max-[768px]:w-[100%] max-[1280px]:w-[50%]">
          <div className="__content__heading">
            <h4 className="font-heading text-[34px] leading-10 max-[768px]:text-[24px] max-[1280px]:text-[24px] max-[768px]:leading-7">
              <span>Holo Suite Gaming: </span>
              <span>Gaming Inside</span>
              <span>Apartment and Ships</span>
            </h4>
          </div>
          <div className="__content__description py-[40px] font-light w-[70%] max-[768px]:w-[100%] max-[1280px]:w-[100%]">
            <p>
              With a wide range of games and adventures awaiting you, get ready
              to level up your gaming experience. whether you're exploring
              virtual apartments or commanding powerful ships.
            </p>
          </div>
          <div className="__content__explore__link">
            <Link
              to="/marketplace/gaming/holo-suite-gaming"
              className="underline text-[16px] text-[#F3A151] font-body"
            >
              Explore Holo Suite Gaming
            </Link>
          </div>
        </div>
      </div>

      <div className="__holoSuite__gaming__container flex justify-center max-[668px]:flex-col-reverse pt-[200px] max-[768px]:pt-10">
        <div className="__holosuite__content__section flex flex-col justify-center w-[40%] px-[30px] max-[768px]:px-0 max-[768px]:w-[100%]">
          <div className="__content__heading">
            <h4 className="font-heading text-[34px] leading-10 max-[768px]:text-[24px] max-[1280px]:text-[24px] max-[768px]:leading-7">
              Environmental Gaming
            </h4>
          </div>
          <div className="__content__description py-[40px] font-light w-[70%] max-[768px]:w-[100%] max-[1280px]:w-[100%]">
            <p>
              Unleash your gaming prowess in breathtaking environments. Conquer
              challenges, battle foes, and create unforgettable memories. Coming
              soon, prepare for immersive adventures beyond imagination.
            </p>
          </div>
          <div className="__content__explore__link">
            <Link
              to="/marketplace/gaming/environmental-gaming"
              className="underline text-[16px] text-[#F3A151] font-body"
            >
              Explore Envrionmental Gaming
            </Link>
          </div>
        </div>

        <div className="__environ__image__section w-[60%] max-[768px]:w-[100%]">
          <img
            src={EnvironmentGamingImg}
            alt="environ_game_img"
            className="w-[85%] max-[768px]:w-[100%]"
          />
        </div>
      </div>

      {/* Top Games Section */}
      <div className="__top_games__slider__container pt-[200px] max-[768px]:pt-20 max-[1280px]:pt-16">
        <div className="__slider__header flex justify-between">
          <h4 className="font-heading text-[24px] max-[768px]:text-[15px]">
            Top Pick Games for you
          </h4>
          <Link to="/marketplace/gaming/all">
            <span className="font-body max-[768px]:text-[14px] text-[#F3A151] font-medium hover:cursor-pointer hover:underline underline-offset-4">
              See more
            </span>
          </Link>
        </div>
        <div className="__slider_card__container flex gap-[20px] overflow-x-scroll py-[30px]">
          {TopGameData.map((data) => {
            return <SliderCards item={data} id="top-game" />;
          })}
        </div>
      </div>
    </div>
  );
};

export default Index;
