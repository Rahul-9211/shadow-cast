/**
 * This file is part of FourthStar User Dashboard
 *(c) 2023 ShadowCast.Io <craig@shadowcast.io>
 *------------------------------------------------------
 *@module Apartment-Detail-Page
 *@developer Sudhanshu 
 */

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import PremAptImg from "assets/images/premium_apt.png";
import { Fade, Zoom } from 'react-reveal';
import SlickSlider from 'components/carousel/SlickSlider';
import MarketPlaceCard from "components/card/marketplace";
import ShadowFrame from "components/shadow-frame";
import GameRoom1 from "assets/images/game-room-1.png";
import GameRoom2 from "assets/images/game-room-2.png";
import PremiumApt from "assets/images/Premium-apartment.png";
import PremiumApt2 from "assets/images/Premium-final-1.png";
import StandredAppartment from "assets/images/StandredAppartment.png";
import BuyCards from 'components/buy-cards';
import Slider from "assets/images/slider-1.png";
import Thumb1 from "assets/images/StandredAppartment-thum.png";
import Thumb2 from "assets/images/StandredAppartment-thum2.png";
import Thumb3 from "assets/images/StandredAppartment-thum3.png";
import Thumb4 from "assets/images/StandredAppartment-thum4.png";
import Popup from 'components/popup';
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
      thumbImg: Thumb1
    },

    {
      id: 1,
      largeImg: Slider,
      thumbImg: Thumb2
    },

    {
      id: 2,
      largeImg: Slider,
      thumbImg: Thumb3
    },
    {
      id: 3,
      largeImg: Slider,
      thumbImg: Thumb4
    }
  ]
  const [open, setOpen] = useState(false);

  const [apartments, setApartments] = useState([
    {
      img: StandredAppartment,
      title: "Nebula Apartment",
      desc: `Find yourself enchanted by the mesmerizing allure of the aurora in these exclusive enclaves, where the ethereal beauty of the night sky is brought to life.`,
      slug: '/marketplace/apartments/nebula-apartment',
    },
    {
      img: "https://fourthstar-userdashboard.s3.amazonaws.com/Apt_7",
      title: "Astral Suite",
      desc: `Find yourself enchanted by the mesmerizing allure of the aurora in these exclusive enclaves, where the ethereal beauty of the night sky is brought to life.`,
      slug: '/marketplace/apartments/astral-suite',
    },
  ]);
  return (
    <div className="relative px-4">
      <div className="lg:min-h-[350px] mb-6 md:mb-9 z-10 relative bg-[#333] rounded flex justify-center items-center">
        <Zoom>
          <img
            src={PremAptImg}
            alt="Network Problem"
            className="h-full w-full object-cover"
          />
        </Zoom>
        <Zoom delay={500}>
          <button onClick={() => navigate(-1)} className='inline-flex gap-2 text-white font-semibold text-xs md:text-sm leading-normal bg-white/[0.10] hover:bg-white/[0.90] hover:text-dark rounded-3xl py-1.5 px-1.5 pr-3 items-center absolute top-3 left-3'>
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path d="M12.5 15L7.5 10L12.5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <span>Back</span>
          </button>
        </Zoom>

      </div>
      <div className="relative">
        <ShadowFrame className="w-[250px] md:w-[775px] h-[250px] md:h-[775px] rounded-[250px] md:rounded-[775px] -left-[80px] md:-left-[300px] -top-[80px] md:-top-[150px]" />
        <div className="flex flex-wrap justify-between mb-7 md:mb-14 relative z-10 gap-10 md:gap-8 lg:gap-14">
          <div className='max-w-xs lg:max-w-lg xl:max-w-xl'>
            <p className="clip-text font-medium mb-3">About Apartment</p>
            <h1 className="font-heading text-md mb-3">
              Orion Penthouse
            </h1>
            <p className="text-sm text-white text-opacity-90">Indulge in the opulence of these towering apartments that capture the essence of a radiant galaxy, offering a sophisticated and cosmopolitan living experience. Immerse yourself in the wonders of virtual living, where every corner is a gateway to adventure, entertainment, and boundless exploration.</p>
          </div>
          <div className='flex-auto max-w-sm lg:max-w-2xl'>
            {/* Type : BuyNow || Free || Premium || MyAsset */}
            <BuyCards type="BuyNow" card="product" title="Buy this Apartment" price="$245.89" />
          </div>
        </div>
        <div className='streaming-section my-10 md:my-20 z-10 relative'>
          <h2 className="font-heading text-lg md:text-2xl mb-5">
            Themes
          </h2>
          <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4'>
            {themes.map((item, i) => (
              <div className='relative' key={i}>
                <div className={`aspect-[247/149] rounded-lg border-2 ${i == 0 ? 'border-sec' : ' border-transparent'} ${!item.active ? 'coming-soon' : ''}`} key={i}>
                  <img
                    src={item.img}
                    alt={item.title}
                    className="h-full w-full object-cover rounded-lg"
                  />
                </div>
                <p className="font-medium mt-3">{item?.title}</p>
              </div>
            ))}
          </div>
        </div>
        <div className='streaming-section my-10 md:my-20 z-10 relative'>
          <h2 className="font-heading text-lg md:text-2xl mb-5">
            Sneaky Peak
          </h2>
          <div className='max-w-4xl'>
            <SlickSlider slider={slider} />
          </div>
          <div className='mt-12'>
            <button type="button" onClick={() => setOpen(true)} className="rounded-lg font-medium bg-gradient-3 border border-sec justify-center py-3 px-5 md:px-10 flex gap-2 mt-4">
              Preview in Market Suite
            </button>
            <Popup status={open} text="To preview the apartment, login to Oculus to have full apartment view inside Marketing Suite." heading="Preview in Market Suite" handleData={() => setOpen(false)} />
          </div>
        </div>
        <ShadowFrame className="w-[250px] md:w-[775px] h-[250px] md:h-[775px] rounded-[250px] md:rounded-[775px] -right-[80px] md:-right-[300px] -bottom-[80px] md:-bottom-[150px]" />
      </div>
      <div className='streaming-section my-12 mt-14 md:my-20 md:mt-28 z-10 relative'>
        <div className='max-w-3xl mb-12'>
          <h2 className='font-heading text-lg md:text-2xl text-white mb-5'>Explore Gaming & Streaming inside Apartment</h2>
          <p className='text-white/[0.90] text-sm md:text-base leading-normal'>Experience next-level gaming and streaming. Dive into immersive worlds, challenge friends in multiplayer battles, or simply relax and enjoy your favorite content. With cutting-edge technology and a vast selection of games and entertainment,</p>
        </div>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4'>
          {gameImage.map((item, i) => (
            <div className='aspect-[403/207] bg-[#EFEFEF]' key={i}>
              <img
                src={item.img}
                alt={item.title}
                className="h-full w-full object-cover"
              />
            </div>
          ))}
        </div>
      </div>
      <div className='h-[1px] bg-[#5a5a5a]/[0.20]'></div>
      <h2 className="font-heading text-lg md:text-2xl mt-10 md:mt-20 mb-7">
        Suggested Apartment
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-5 gap-y-8 lg:gap-y-16 mb-14 md:mb-28 mx-auto relative z-10">
        {apartments.map((item, i) => (
          <Fade key={i}>
            <MarketPlaceCard item={item} type="small" />
          </Fade>
        ))}
      </div>
    </div>
  );
};

export default Index;
