/**
 * This file is part of FourthStar User Dashboard
 *(c) 2023 ShadowCast.Io <craig@shadowcast.io>
 *------------------------------------------------------
 *@module user
 *@developer sudhanshu <sudhanshu@instaacoder.com>
 */

import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
// import { Canvas } from '@react-three/fiber';
// import { useGLTF, Stage, PresentationControls } from '@react-three/drei';
import { Fade, Zoom } from "react-reveal";
import PremAptImg from "assets/images/apartment-banner.jpeg";
import Penthouse from "assets/images/premium_apt.png"
import AptImg from "assets/images/apartment-1.png";
import AptImg2 from "assets/images/apartment-2.png";
import FeatureImg1 from "assets/images/feature-icon.png"
import FeatureImg2 from "assets/images/feature-icon-2.png"
import FeatureImg3 from "assets/images/feature-icon-3.png"
import FeatureImg4 from "assets/images/feature-icon-4.png"
import MarketPlaceCard from "components/card/marketplace";
import ShadowFrame from "components/shadow-frame";
import FeaturedCard from "components/card/feature";
// function Model(props) {
//   const { scene } = useGLTF(
//     'https://fourthstar-userdashboard.s3.amazonaws.com/abc.glb'
//   );
//   // https://fourthstar-userdashboard.s3.amazonaws.com/ship.glb
//   return <primitive object={scene} {...props} />;
// }

/* The above code is a React component called "Index". It renders a grid layout with various sections
 displaying information about Fourth Star Apartments. */
const Index = () => {
  const navigate = useNavigate();
  const [aptFeaturedCard, setAptFeaturedCard] = useState([
    {
      img: FeatureImg1,
      title: "Ultimate Gaming Experience",
      desc: `Our apartments and ships are equipped with everything you need to unleash your gaming prowess. Engage in thrilling multiplayer battles, conquer epic quests, and explore immersive virtual worlds, all from the comfort of your own living space.`,
    },
    {
      img: FeatureImg2,
      title: "Exclusive Immersive Streaming",
      desc: `Immerse yourself in a realm of unparalleled entertainment with your choice of 180 and 360 immersive entertainment content. granting you access to an extraordinary selection of movies, shows, virtual travel experiences and live events with your friends.`,
    },
    {
      img: FeatureImg3,
      title: "Volumetric Video",
      desc: `Science Fiction Holograms become a reality. Discover a world of captivating virtual reality content with Volumetric Video. See your favourite Artist standing right in front of you. Relax in your living space with a Personal Performance from the biggest Rock Stars on the Planet.`,
    },
    {
      img: FeatureImg4,
      title: "180 and 360 Entertainment",
      desc: `Dive into captivating 180 and 360-degree VR videos for immersive visual adventures. Explore stunning landscapes, thrilling stories, and captivating narratives in virtual reality. Experience every angle, depth, and action like never before.`,
    },
  ]);
  const [apartments, setApartments] = useState([
    {
      img: Penthouse,
      title: "Orion Penthouse",
      desc: `Indulge in the opulence of these towering apartments that capture the essence of a radiant galaxy, offering a sophisticated and cosmopolitan living experience.`,
      slug: '/marketplace/apartments/orion-penthouse',
    },
    {
      img: AptImg2,
      title: "Astral Suite",
      desc: `Find yourself enchanted by the mesmerizing allure of the aurora in these exclusive enclaves, where the ethereal beauty of the night sky is brought to life.`,
      slug: '/marketplace/apartments/astral-suite',
    },
    {
      img: AptImg,
      title: "Nebula Apartment",
      desc: `Find yourself enchanted by the mesmerizing allure of the aurora in these exclusive enclaves, where the ethereal beauty of the night sky is brought to life.`,
      slug: '/marketplace/apartments/nebula-apartment',
    },
  ]);

  useEffect(() => {
    const url = window.location.href;
    const parts = url.split("/");
    const valueAfterApartments = parts[parts.indexOf("apartments") + 1];
  });
  return (

    <div className="relative px-2 md:px-4">
      <Zoom>
        <div className="xl:min-h-[350px] bg-[#2D2D2D] h-full mb-10 md:mb-20 z-10 relative">
          <img
            src={PremAptImg}
            alt="Network Problem"
            className="h-full w-full object-cover"
          />
        </div>
      </Zoom>
      <div className="relative">
        <ShadowFrame className="w-[250px] md:w-[775px] h-[250px] md:h-[775px] rounded-[250px] md:rounded-[775px] -left-[80px] md:-left-[300px] -top-[80px] md:-top-[150px]" />
        <div className="flex flex-col items-center mb-5 relative z-10">
          <h1 className="text-lg md:text-2xl leading-normal font-heading text-center mb-3">
            Fourth Star Apartments: A New Dimension of Living.
          </h1>
          <p className="text-sm lg:text-base text-white/[0.90] text-center max-w-[972px]">
            Explore ultimate metaverse living experience at Fourth Star
            Apartments. Our thoughtfully designed spaces combine luxury and
            cutting-edge technology to create a haven where gaming and
            entertainment thrive.{" "}
          </p>
        </div>

        <div className="grid md:grid-cols-2 grid-cols-1 gap-x-10 lg:gap-x-14 gap-y-10 lg:gap-y-20 my-14 md:my-20 mx-auto max-w-4xl relative z-10">
          {aptFeaturedCard.map((item, i) => (
            <FeaturedCard item={item} key={i} />
          ))}
        </div>
        <ShadowFrame className="w-[250px] md:w-[775px] h-[250px] md:h-[775px] rounded-[250px] md:rounded-[775px] -right-[80px] md:-right-[300px] -bottom-[80px] md:-bottom-[150px]" />
      </div>
      <h2 className="font-heading text-center text-lg md:text-2xl mt-14 lg:mt-28 mb-8 md:mb-14">
        Explore Apartments
      </h2>
      <div className="grid grid-cols-1 gap-x-5 gap-y-8 lg:gap-y-16 mb-28 mx-auto relative z-10">
        {apartments.map((item, i) => (
          <Fade key={i}>
            <MarketPlaceCard item={item} type="large" />
          </Fade>
        ))}
      </div>
    </div>
  );
};

export default Index;
