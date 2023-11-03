/**
 * This file is part of FourthStar User Dashboard
 *(c) 2023 ShadowCast.Io <craig@shadowcast.io>
 *------------------------------------------------------
 *@module Apartment-Detail-Page
 *@developer Sudhanshu
 */

import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import PremAptImg from "assets/images/premium_apt.png";
import { Fade, Zoom } from "react-reveal";
import SlickSlider from "components/carousel/SlickSlider";
import MarketPlaceCard from "components/card/marketplace";
import ShadowFrame from "components/shadow-frame";
import GameRoom1 from "assets/images/game-room-1.png";
import GameRoom2 from "assets/images/game-room-2.png";
import PremiumApt from "assets/images/Premium-apartment.png";
import PremiumApt2 from "assets/images/Premium-final-1.png";
import StandredAppartment from "assets/images/StandredAppartment.png";
import BuyCards from "components/buy-cards";
import Slider from "assets/images/slider-1.png";
import Thumb1 from "assets/images/StandredAppartment-thum.png";
import Thumb2 from "assets/images/StandredAppartment-thum2.png";
import Thumb3 from "assets/images/StandredAppartment-thum3.png";
import Thumb4 from "assets/images/StandredAppartment-thum4.png";
import Popup from "components/popup";

import ChannelImage from "assets/images/channel.png";
import SneakyPeak from "components/card/marketplace/entertainment/Sneakypeak";
import SneakyPeek from "components/carousel/SneakyPeak";
import LargeCarousel from "components/carousel/MostTreading";
/* The above code is a React component called "Index". It renders a webpage that displays information
 about an apartment, including its image, price, description, themes, gaming and streaming options,
 and suggested apartments. It also includes a dialog box that allows the user to preview the
 apartment in a 3D model. The component uses various React hooks and components, such as useState,
 useNavigate, Grid, Typography, Button, Dialog, AppBar, Toolbar, Canvas, and Stage, to create the
 desired UI and functionality. */
const Index = () => {
  const navigate = useNavigate();

  const [gameImage, setGameImage] = useState([
    {
      img: GameRoom1,
      title: "Ultimate Gaming Experience",
    },
    {
      img: GameRoom2,
      title: "Ultimate Gaming Experience",
    },
  ]);

  const [themes, setThemes] = useState([
    {
      img: PremiumApt,
      title: "Classic theme apartment",
      active: true,
    },
    {
      img: PremiumApt2,
      title: "Sci-Fi theme apartment",
      active: false,
    },
  ]);

  const slider = [
    {
      id: 0,
      largeImg: Slider,
      thumbImg: Thumb1,
    },

    {
      id: 1,
      largeImg: Slider,
      thumbImg: Thumb2,
    },

    {
      id: 2,
      largeImg: Slider,
      thumbImg: Thumb3,
    },
    {
      id: 3,
      largeImg: Slider,
      thumbImg: Thumb4,
    },
  ];
  const [open, setOpen] = useState(false);

  const [apartments, setApartments] = useState([
    {
      img: StandredAppartment,
      title: "Nebula Apartment",
      desc: `Find yourself enchanted by the mesmerizing allure of the aurora in these exclusive enclaves, where the ethereal beauty of the night sky is brought to life.`,
      slug: "/marketplace/apartments/nebula-apartment",
    },
    {
      img: "https://fourthstar-userdashboard.s3.amazonaws.com/Apt_7",
      title: "Astral Suite",
      desc: `Find yourself enchanted by the mesmerizing allure of the aurora in these exclusive enclaves, where the ethereal beauty of the night sky is brought to life.`,
      slug: "/marketplace/apartments/astral-suite",
    },
  ]);

  const entertainmentData = [
    {
      title: "StellarVerse Spectacle: Cosmic Symphony",
      subtitleButton: ` Unlock Premium`,
      tagType: "Premium",
    },
    {
      title: "StellarVerse Spectacle: Cosmic Symphony",
      subtitleButton: "Free",
      tagType: "Free",
    },
    {
      title: "StellarVerse Spectacle: Cosmic Symphony",
      subtitleButton: "US$ 9.99",
      tagType: "Paid",
    },
    {
      title: "StellarVerse Spectacle: Cosmic Symphony",
      subtitleButton: ` Unlock Premium`,
      tagType: "Premium",
    },
    {
      title: "StellarVerse Spectacle: Cosmic Symphony",
      subtitleButton: ` Unlock Premium`,
      tagType: "Premium",
    },
    {
      title: "StellarVerse Spectacle: Cosmic Symphony",
      subtitleButton: ` Unlock Premium`,
      tagType: "Premium",
    },
    {
      title: "StellarVerse Spectacle: Cosmic Symphony",
      subtitleButton: "Free",
      tagType: "Free",
    },
    {
      title: "StellarVerse Spectacle: Cosmic Symphony",
      subtitleButton: "US$ 9.99",
      tagType: "Paid",
    },
    {
      title: "StellarVerse Spectacle: Cosmic Symphony",
      subtitleButton: "Free",
      tagType: "Free",
    },
  ];
  const mostTrending = [
    {
      title: "StellarVerse Spectacle: Cosmic Symphony",
      productType: "Paid",
      price: "Buy @US$ 9.99",
      id: "1",
    },
    {
      title: "StellarVerse Spectacle: Cosmic Symphony",
      productType: "Paid",
      price: "Buy @US$ 9.99",
      id: "2",
    },
    {
      title: "StellarVerse Spectacle: Cosmic Symphony",
      productType: "Paid",
      price: "Buy @US$ 9.99",
      id: "3",
    },
    {
      title: "StellarVerse Spectacle: Cosmic Symphony",
      productType: "Paid",
      price: "Buy @US$ 9.99",
      id: "4",
    },
    {
      title: "StellarVerse Spectacle: Cosmic Symphony",
      productType: "Paid",
      price: "Buy @US$ 9.99",
      id: "5",
    },
  ];
  return (
    <div className="relative px-4 mb-[140px]">
      <div className="lg:min-h-[350px] mb-6 md:mb-9 z-10 relative bg-[#333] rounded flex justify-center items-center">
        <Zoom>
          <img
            src={PremAptImg}
            alt="Network Problem"
            className="h-full w-full object-cover"
          />
        </Zoom>
        <Zoom delay={500}>
          <button
            onClick={() => navigate(-1)}
            className="inline-flex gap-2 text-white font-semibold text-xs md:text-sm leading-normal bg-white/[0.10] hover:bg-white/[0.90] hover:text-dark rounded-3xl py-1.5 px-1.5 pr-3 items-center absolute top-3 left-3"
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
      <div className="relative">
        <ShadowFrame className="w-[250px] md:w-[775px] h-[250px] md:h-[775px] rounded-[250px] md:rounded-[775px] -left-[80px] md:-left-[300px] -top-[80px] md:-top-[150px]" />

        <div className="lg:flex  jusitfy-between mb-[72px] relative z-10 gap-10 md:gap-8 lg:gap-14">
          <div className="flex-1">
            <div className="__entertainment_assets_heading mb-[29px] lg:mb-[39px] sm:flex justify-between pt-5">
              <h4 className="font-medium font-heading text-[18px] px-[0]  lg:text-[28px] tracking-[1px]  max-[768px]:p-0 max-[768px]:text-[15px] mb-4 sm:mb-0">
                Starry Night Exclusive
              </h4>
            </div>
            <div className="">
              <div className="flex items-center mb-[17px]">
                <img
                  className="w-[39px] h-[39px]  sm:w-[59px] sm:h-[59px] rounded-full mr-[20px] "
                  src={ChannelImage}
                  alt="load image"
                />
                <p className="text-sm sm:text-xl font-semibold mr-[10px] sm:mr-[20px]">
                  Fourth Star Entertainment
                </p>
                {/* <NavLink
              to="volumetric-video"
              className={`clip-text text-[12px] sm:text-[15px] font-semibold`}
            >
              See More
            </NavLink> */}
              </div>
            </div>
            <p className="text-sm text-white text-opacity-90">
              Indulge in the opulence of these towering apartments that capture
              the essence of a radiant galaxy, offering a sophisticated and
              cosmopolitan living experience. Immerse yourself in the wonders of
              virtual living, where every corner is a gateway to adventure,
              entertainment, and boundless exploration.
            </p>
          </div>
          <div className="flex-1 max-w-xl mt-10 lg:mt-0 min-h-180" >
            {/* Type : BuyNow || Free || Premium || MyAsset */}
            <BuyCards
              type="addToAssets"
            //   card="product"
              title="This content is available for free. Add to your assets and enjoy."
            //   price="$245.89"
            />
          </div>
        </div>
        <div className="  mb-7 md:mb-[21px] relative z-10 ">
        <div className="__entertainment_assets_heading mb-[16px] lg:mb-[25px] sm:flex justify-between">
              <h4 className="font-medium font-heading text-[16px] px-[0]  lg:text-[24px] tracking-[1px]  max-[768px]:p-0 max-[768px]:text-[15px] mb-4 sm:mb-0">
                Highlights
              </h4>
            </div>
          <div className="">
         
            <p
              className={`clip-text text-[12px] sm:text-[16px] font-semibold mb-[13px]`}
            >
              witness celestial wonders
            </p>

            <p className="text-sm text-white text-opacity-90 max-w-2xl">
            Celestial melodies by artist will take you on an interstellar journey. Experience her enchanting performance that transcends galaxies. Get ready to be captivated by her celestial talent.
            </p>
          </div>
        </div>

        <div className=" mb-7 md:mb-[21px] relative z-10 gap-10 md:gap-8 lg:gap-14">
          <div className="">
            <p
              className={`clip-text text-[12px] sm:text-[16px] font-semibold mb-[13px]`}
            >
             Galactic Soundscapes
            </p>

            <p className="text-sm text-white text-opacity-90 max-w-2xl">
            Celestial melodies by artist will take you on an interstellar journey. Experience her enchanting performance that transcends galaxies. Get ready to be captivated by her celestial talent.
            </p>
          </div>
        </div>

        <div className=" mb-7 md:mb-[21px] relative z-10 gap-10 md:gap-8 lg:gap-14">
          <div className="">
            <p
              className={`clip-text text-[12px] sm:text-[16px] font-semibold mb-[13px]`}
            >
           Dynamic Perspectives
            </p>

            <p className="text-sm text-white text-opacity-90  max-w-2xl">
            Experience a new level of storytelling with dynamic perspectives. As the viewer, you have control over where to look, allowing you to focus on the details that interest you the most.
            </p>
          </div>
        </div>
        <div className="streaming-section my-14 md:my-28 z-10 relative ">
          <h2 className="font-heading text-lg md:text-2xl mb-5">Sneaky Peak</h2>

          <SneakyPeek
            slider={mostTrending}
            SlideToShow={3}
            type="trending"
            sneakyPeek="sneakyPeek"
          ></SneakyPeek>
          {/* {  entertainmentData.map((item, index) => (
                  <SneakyPeak
                    key={index}
                    // slider ={mostTrending}
                    // type="trending"
                    // name=""
                    // title={item.title}
                    // subtitleButton={item.subtitleButton}
                    // tagType={item.tagType}
                    // tags ="vol"
                    // thumbnailIcon={false}
                    // handleUnlockPremiumClick={handleUnlockPremiumClick()}
                  />
                ))} */}
        </div>
        <ShadowFrame className="w-[250px] md:w-[775px] h-[250px] md:h-[775px] rounded-[250px] md:rounded-[775px] -right-[80px] md:-right-[300px] -bottom-[80px] md:-bottom-[150px]" />
      </div>
      <div className="h-[1px] bg-[#5a5a5a]/[0.20]"></div>
      <h2 className="font-heading text-lg md:text-2xl mt-12 md:mt-24 mb-7">
        Suggested Volumetric Videos
      </h2>
      <SneakyPeek
        slider={mostTrending}
        SlideToShow={3}
        type="trending"
      ></SneakyPeek>
    </div>
  );
};

export default Index;
