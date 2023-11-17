/**
 * This file is part of FourthStar User Dashboard
 *(c) 2023 ShadowCast.Io <craig@shadowcast.io>
 *------------------------------------------------------
 *@module user
 *@developer Sameer <sameer@shadowcast.io>
 */

import React, { useState } from "react";
import { Box, Container, Grid, Typography } from "@mui/material";
import { Fade, Zoom } from "react-reveal";
import ShadowFrame from "components/shadow-frame";
import LandingBannerImg from "assets/images/Landing-page-hero-section-image.png";
import Landing_1 from "assets/images/home_2.png";
import Landing_2 from "assets/images/Frame 31.png";
import Landing_3 from "assets/images/Frame 55.png";
import Landing_4 from "assets/images/home_5.png";
import imageMobile from "assets/images/mobile-bg-image.png";

/* The above code is a React component called "Index". It renders a grid layout with multiple sections,
each containing an image and some text. The component uses various React and Material-UI components
and styles to create a visually appealing and responsive layout. The purpose of the code is to
showcase different features and aspects of the Fourth Star platform, such as the experience
marketplace, collectible assets, ultimate gaming, and connecting with friends in the metaverse. */
const Index = () => {
  return (
    <>
      <Box className="container-fluid w-[100%]">
        <Box className="bg-gradient-to-b w-[100%] from-black via-transparent to-[#1F1E21] relative z-10">
          <picture>
            <source media="(max-width: 799px)" srcSet={imageMobile} />
            <source media="(min-width: 800px)" srcSet={LandingBannerImg} />
            <img src={LandingBannerImg} alt="shadowcast" className="cursor-pointer w-[100%] h-auto" />
          </picture>
          <div className="shadow-bottom" />
        </Box>

        <Box className="h-100 flex max-[768px]:flex-col-reverse justify-between pl-16 pr-16 pt-16 pb-12 sm:pl-48 sm:pr-32 sm:pt-40 sm:pb-32 relative ">

          <Box className="flex-1 flex flex-col justify-center max-[768px]:mt-[30px]">
            <Fade bottom>
              <h1 className=" text-xl sm:text-4xl font-heading mb-[10px] sm:mb-[28px]">
                Experience
                <br /> Marketplace
              </h1>
              <p className="text-sm sm:text-base pr-20 font-thin max-[768px]:w-[100%] max-[768px]:text-lg max-[768px]:pr-0">
                Customize your Avatar, own your own Luxury Apartment and Space
                Ship, Access Games and Virtual Concerts or just meet with your
                friends. Discover unique and immersive virtual experiences that
                will elevate your journey within the metaverse.
              </p>
            </Fade>
          </Box>

          <Box className="flex-1 relative">
            <div className="landingPage-rightShadow"></div>{" "}
            <div className="flex h-full">
              <Fade duration={3000}>
                <img
                  src={Landing_1}
                  className="cursor-pointer w-[100%] h-auto relative rounded-[20px]"
                  alt="Network problem"
                />
              </Fade>
            </div>
          </Box>
        </Box>

        <Box className="h-100 flex max-[768px]:flex-col justify-between pl-16 pr-16 pt-16 pb-12 sm:pl-48 sm:pr-32 sm:pt-40 sm:pb-32 ">
          <Box className="flex-1 relative">
            <Box className="landingPage-leftShadow"></Box>

            <div className="flex h-full">
              <Fade duration={3000}>
                <img
                  src={Landing_2}
                  className="cursor-pointer w-[100%] h-auto relative rounded-[20px]"
                  alt="Network problem"
                />
              </Fade>
            </div>
          </Box>
          <Box className="flex-1 flex flex-col items-start justify-center max-[768px]:mt-[30px]">
            <Fade bottom>
              <h1 className="text-xl sm:text-4xl pr-4  font-heading mb-[10px] sm:mb-[28px]  pl-20 max-[768px]:pl-0">
                Collectible
                <br /> Assets
              </h1>
              <p className="text-sm sm:text-base pr-4 font-thin  pl-20 max-[768px]:pl-0 max-[768px]:w-[100%] max-[768px]:text-lg max-[768px]:pr-0">
                Organize and manage your Metaverse Assets effortlessly with our
                intuitive interface. Easily browse through your avatar collection,
                swap outfits, and mix and match accessories to create a unique
                digital persona that represents you.
              </p>
            </Fade>
          </Box>
        </Box>
        <Box className="h-100 flex max-[768px]:flex-col-reverse justify-between pl-16 pr-16 pt-16 pb-12 sm:pl-48 sm:pr-32 sm:pt-40 sm:pb-32 relative ">
          <Box className="flex-1 flex flex-col justify-center max-[768px]:mt-[30px]">
            <Fade bottom>
              <h1 className=" text-xl sm:text-4xl font-heading mb-[10px] sm:mb-[28px]">
                Ultimate
                <br /> Gaming
              </h1>
              <p className="text-sm sm:text-base pr-20 font-thin max-[768px]:w-[100%] max-[768px]:text-lg max-[768px]:pr-0">
                Dive into a dynamic and interconnected digital universe where you
                can embark on thrilling adventures, engage in epic quests, and
                participate in unforgettable multiplayer battles. Get ready to
                level up your gaming journey like never before!
              </p>
            </Fade>
          </Box>
          <Box className="flex-1 relative">
            <div className="landingPage-rightShadow"></div>{" "}
            <div className="flex  h-full">
              <Fade duration={3000}>
                <img
                  src={Landing_3}
                  className="cursor-pointer w-[100%] h-auto relative rounded-[20px]"
                  alt="Network problem"
                />
              </Fade>
            </div>
          </Box>
        </Box>

        <Box className="h-100  flex max-[768px]:flex-col max-[768px]:mb-[50px] justify-between pl-16 pr-16 pt-16 pb-12 sm:pl-48 sm:pr-32 sm:pt-40 sm:pb-32 ">
          <Box className="flex-1 relative">
            <Box className="landingPage-leftShadow"></Box>
            <div className="flex  h-full ">
              <Fade duration={3000}>
                <img
                  src={Landing_4}
                  className="cursor-pointer w-[100%] h-auto relative rounded-[20px]"
                  alt="Network problem"
                />
              </Fade>
            </div>
          </Box>
          <Box className="flex-1 flex flex-col items-start justify-center max-[768px]:mt-[30px]">
            <Fade bottom>
              <h1 className="text-xl sm:text-4xl pr-4  font-heading mb-[10px] sm:mb-[28px]  pl-20 max-[768px]:pl-0">
                Connect
                <br /> Friends
              </h1>
              <p className="text-sm sm:text-base pr-4 font-thin  pl-20 max-[768px]:pl-0 max-[768px]:w-[100%] max-[768px]:text-lg max-[768px]:pr-0">
                Connect, explore, and create unforgettable memories with friends
                in our immersive metaverse. Join forces, embark on epic
                adventures, and forge unbreakable bonds as you navigate a world
                beyond imagination. Together, the possibilities are limitless!
              </p>
            </Fade>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default Index;
