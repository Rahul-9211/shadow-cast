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
import ShipTheme from "assets/images/ship-theme.png";
import StandredAppartment from "assets/images/StandredAppartment.png";
import BuyCards from 'components/buy-cards';
import Slider from "assets/images/ship-large.png";
import Thumb1 from "assets/images/ship-thumb-1.png";
import Thumb2 from "assets/images/ship-thumb-2.png";
import Thumb3 from "assets/images/ship-thumb-3.png";
import Popup from 'components/popup';
import Ship1 from "assets/images/ship-1.png";
import Ship2 from "assets/images/ship-2.png";
import Ship3 from "assets/images/ship-3.png";
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
    {
      img: "",
      title: "Ultimate Gaming Experience",
    },
  ]);

  const [themes, setThemes] = useState([
    {
      img: ShipTheme,
      title: "Classic theme",
      active: true,
    }
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
      thumbImg: Thumb1
    },

    {
      id: 4,
      largeImg: Slider,
      thumbImg: Thumb2
    },

    {
      id: 5,
      largeImg: Slider,
      thumbImg: Thumb3
    },
    {
      id: 6,
      largeImg: Slider,
      thumbImg: Thumb1
    },

    {
      id: 7,
      largeImg: Slider,
      thumbImg: Thumb2
    },

    {
      id: 8,
      largeImg: Slider,
      thumbImg: Thumb3
    },
  ]
  const [open, setOpen] = useState(false);

  const [apartments, setApartments] = useState([
    {
      img: Ship1,
      title: "StarHawk",
      desc: `Master the Skies: Take control of our state-of-the-art fighter ships, designed for ultimate agility and precision.`,
      slug: '/marketplace/ships/starHawk',
    },
    {
      img: Ship2,
      title: "Machraider",
      desc: ` Equipped with state-of-the-art weaponry and a stylish, customizable design, 'Machraider' ensures that your Metaverse conquests are as...`,
      slug: '/marketplace/ships/machraider',
    },
  ]);
  return (
    <div className="relative px-4">
      <div className="lg:min-h-[350px] mb-6 md:mb-9 z-10 relative bg-[#333] rounded flex justify-center items-center">
        <Zoom>
          <img
            src={Ship3}
            alt="Network Problem"
            className="max-w-full w-auto object-cover"
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
            <p className="clip-text font-medium mb-3">About Ship</p>
            <h1 className="font-heading text-md mb-3">Prometheus</h1>
            <p className="text-sm text-white text-opacity-90">Prepare to embark on an epic journey through the virtual cosmos with our state-of-the-art fighter ship, the 'Prometheus.' Designed for fearless space adventurers, 'Prometheus' offers a thrilling blend of speed, power, and precision. With its advanced technology and customizable features, you'll dominate space battles and explore uncharted galaxies like never before.</p>
          </div>
          <div className='flex-auto max-w-sm lg:max-w-2xl'>
            {/* Type : BuyNow || Free || Premium || MyAsset */}
            <BuyCards type="BuyNow" card="product" title="Buy this Ship" price="$245.89" />
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
            <button type="button" onClick={() => setOpen(true)} className="rounded-lg font-medium bg-gradient-3 border border-sec text-sm md:text-base justify-center py-3 px-5 md:px-10 flex gap-2 mt-4">
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
          <h4 className='font-heading text-sm md:text-base clip-text mt-10 mb-3'>Explore Holo-Suite gaming</h4>
          <p className='text-white/[0.90] text-sm md:text-base leading-normal'>Embark on thrilling adventures within our Holo Suite, where gaming reaches new dimensions. Immerse yourself in futuristic challenges and interactive experiences like never before right inside your living space.</p>
          <h4 className='font-heading text-sm md:text-base clip-text mt-10 mb-3'>Explore Environmental gaming</h4>
          <p className='text-white/[0.90] text-sm md:text-base leading-normal'>Embark on epic adventures in otherworldly environments with Environmental Gaming. Explore alien planets and futuristic landscapes in a gaming experience like no other.</p>
        </div>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4'>
          {gameImage.map((item, i) => (
            <div className='aspect-[403/207] bg-[#2D2D2D]' key={i}>
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
        Suggested Ship
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
