/**
 * This file is part of FourthStar User Dashboard
 *(c) 2023 ShadowCast.Io <craig@shadowcast.io>
 *------------------------------------------------------
 *@module user
 *@developer sudhanshu <sudhanshu@instaacoder.com>
 */

import React, { useEffect, useState, Component } from "react";
import { useNavigate } from "react-router-dom";
// import { Canvas } from '@react-three/fiber';
// import { useGLTF, Stage, PresentationControls } from '@react-three/drei';

import {
  Box,
  Grid,
  Tab,
  Tabs,
  Typography,
  Button,
  Skeleton,
  Container,
} from "@mui/material";
import { Fade, Zoom } from "react-reveal";
import Slider from "react-slick";

import GredientImg from "assets/images/gredient_bg.png";
import PremAptImg from "assets/images/premium_apt.png";
import MarketPlaceCard from "components/card/marketplace";
import TrendingCard from "components/card/marketplace/entertainment/videoCard/Index";
import MusicCard from "components/card/marketplace/entertainment/musicCard/Index";

import TrendingChannelCard from "components/card/marketplace/entertainment/channelCard/Index";

/* The above code is a React component called "Index". It renders a grid layout with various sections
  displaying information about Fourth Star Apartments. */
const Index = () => {
  const navigate = useNavigate();
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);


  useEffect(() => {
    // console.log("navigate->", navigate)
    const url = window.location.href;
    const parts = url.split("/");
    const valueAfterApartments = parts[parts.indexOf("apartments") + 1];
    console.log(valueAfterApartments);
    
  });

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    // Attach the event listener
    window.addEventListener('resize', handleResize);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const settings = {
    className: "slider variable-width",
    // dots: true,
    // infinite: true,
    // centerMode: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    variableWidth: true,
  };
  const customCarouselStyle = {
    width:
    windowWidth < 1350 && windowWidth > 900
      ? `${windowWidth - 75}px`
      : windowWidth < 900 && windowWidth > 580
      ? `${windowWidth - 75}px`
      : `${windowWidth - 45}px`,
    maxWidth : '1350px'
    // Add more conditions as needed
  };
  return (
    <>
      <Box container item xs={12} className="">
        <Box
          container
          item
          xs={12}
          className="relative rounded"
          sx={{ maxHeight: "400px", zIndex: 5 }}
        >
          <p className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-3xl">Welcome to Fourth  Start Apartment</p>
          <Zoom>
            <img
              src={PremAptImg}
              alt="Network Problem"
              className="h-full w-full rounded"
              style={{
                objectFit: "fill",
              }}
            />
          </Zoom>
        </Box>
        <Box>
          <Box
            className="relative"
          >
            <div className="appartment-card-left-shadow "></div>
            <div>
    </div>
            <Box
              className="flex flex-col  mt-24 mb-8"
            >
              <h1 className="text-2xl font-heading  c_white mb-3">
                Explore Categories
              </h1>
              <p className="text-white text-opacity-70  text-md max-w-4xl">
                Explore a Multitude of Captivating Experiences.
              </p>
            </Box>
            <Box className="flex mb-20">
              <a href="#" className="explore-category-btn z-[3] font-heading rounded-lg px-3 py-2 mr-2 text-xs text-center sm:px-6 sm:py-4 sm:text-sm font-normal sm:mr-5">
                Volumetric video
              </a>

              <a href="#" className="explore-category-btn z-[3] font-heading rounded-lg px-3 py-2 mr-2 text-xs text-center sm:px-6 sm:py-4 sm:text-sm font-normal sm:mr-5">360 Video</a>
              <a href="#" className="explore-category-btn z-[3] font-heading rounded-lg px-3 py-2 mr-2 text-xs text-center sm:px-6 sm:py-4 sm:text-sm font-normal sm:mr-5">180 Video</a>
              <a href="#" className="explore-category-btn z-[3] font-heading rounded-lg px-3 py-2 mr-2 text-xs text-center sm:px-6 sm:py-4 sm:text-sm font-normal sm:mr-5">2D Video</a>
              <a href="#" className="explore-category-btn z-[3] font-heading rounded-lg px-3 py-2 mr-2 text-xs text-center sm:px-6 sm:py-4 sm:text-sm font-normal sm:mr-5">Music</a>
              <a href="#" className="explore-category-btn z-[3] font-heading rounded-lg px-3 py-2 mr-2 text-xs text-center sm:px-6 sm:py-4 sm:text-sm font-normal sm:mr-5">Channel</a>
            </Box>

            <Box className="most-trending-carousel" >
              <h1 className="text-2xl font-heading  c_white mb-5">
                Most trending
              </h1>
              <Box style={customCarouselStyle} >
                {/* <h2>Variable width</h2> */}
                <Slider {...settings}>
                  <div className="flex">
                    <TrendingCard
                      title="StellarVerse Spectacle: Cosmic Symphony"
                      labelStatus={true}
                      label="Free"
                      videoURL=""
                      VolcapStatus={false}

                    />
                  </div>
                  <div>
                    <TrendingCard
                      title="StellarVerse Spectacle: Cosmic Symphony"
                      labelStatus={true}
                      label="Free"
                      videoURL=""
                      VolcapStatus={true}

                    />
                  </div>
                  <div>
                    <TrendingCard
                      title="StellarVerse Spectacle: Cosmic Symphony"
                      labelStatus={true}
                      label="Free"
                      videoURL=""
                      VolcapStatus={false}

                    />
                  </div>{" "}
                  <div>
                    <TrendingCard
                      title="StellarVerse Spectacle: Cosmic Symphony"
                      labelStatus={true}
                      label="Free"
                      videoURL=""
                      VolcapStatus={false}

                    />
                  </div>{" "}
                  <div>
                    <TrendingCard
                      title="StellarVerse Spectacle: Cosmic Symphony"
                      labelStatus={true}
                      label="Free"
                      videoURL=""
                      VolcapStatus={false}

                    />
                  </div>
                </Slider>
              </Box>
            </Box>

            <Box className="premium-content-carousel mt-24 relative ">
              <h1 className="text-2xl font-heading  c_white mb-5">
                Premium Content: top picks for you
              </h1>
            <div className="entertainment-card-left-shadow "></div>

              <Box className="" style={customCarouselStyle}>
                <Slider {...settings}>
                  <Box className="flex">
                    <TrendingCard
                      title="StellarVerse Spectacle: Cosmic Symphony"
                      labelStatus={true}
                      label="Unlock Premium"
                      videoURL=""
                      VolcapStatus={true}

                    />
                  </Box>
                  <Box>
                    <TrendingCard
                      title="StellarVerse Spectacle: Cosmic Symphony"
                      labelStatus={true}
                      label="Unlock Premium"
                      videoURL=""
                      VolcapStatus={true}

                    />
                  </Box>
                  <Box>
                    <TrendingCard
                      title="StellarVerse Spectacle: Cosmic Symphony"
                      labelStatus={true}
                      label="Unlock Premium"
                      videoURL=""
                      VolcapStatus={false}

                    />
                  </Box>{" "}
                  <Box>
                    <TrendingCard
                      title="StellarVerse Spectacle: Cosmic Symphony"
                      labelStatus={true}
                      label="Unlock Premium"
                      videoURL=""
                      VolcapStatus={false}

                    />
                  </Box>{" "}
                  <Box>
                    <TrendingCard
                      title="StellarVerse Spectacle: Cosmic Symphony"
                      labelStatus={true}
                      label="Unlock Premium"
                      videoURL=""
                      VolcapStatus={false}

                    />
                  </Box>
                </Slider>
              </Box>
            </Box>

            <Box className="premium-content-carousel mt-24 ">
              <Box className="mb-8 flex justify-between">
                <h1 className="text-2xl font-heading  c_white ">
                  Trending Channels
                </h1>
                <a
                  href="#"
                  className="font-semibold text-md  bg-clip-text text-transparent bg-gradient-to-r from-yellow-300 via-orange-300 to-opacity-60 pr-4 text-amber-500"
                >
                  See more
                </a>
              </Box>

              <Box className="" style={customCarouselStyle}>
                <Slider {...settings}>
                  <Box className="flex">
                    <TrendingChannelCard title="Nureal" />
                  </Box>
                  <Box>
                    <TrendingChannelCard title="Nureal" />
                  </Box>
                  <Box>
                    <TrendingChannelCard title="Nureal" />
                  </Box>{" "}
                  <Box>
                    <TrendingChannelCard title="Nureal" />
                  </Box>{" "}
                  <Box>
                    <TrendingChannelCard title="Nureal" />
                  </Box>
                  <Box className="flex">
                    <TrendingChannelCard title="Nureal" />
                  </Box>
                  <Box>
                    <TrendingChannelCard title="Nureal" />
                  </Box>
                  <Box>
                    <TrendingChannelCard title="Nureal" />
                  </Box>{" "}
                  <Box>
                    <TrendingChannelCard title="Nureal" />
                  </Box>{" "}
                  <Box>
                    <TrendingChannelCard title="Nureal" />
                  </Box>
                  <Box className="flex">
                    <TrendingChannelCard title="Nureal" />
                  </Box>
                  <Box>
                    <TrendingChannelCard title="Nureal" />
                  </Box>
                  <Box>
                    <TrendingChannelCard title="Nureal" />
                  </Box>{" "}
                  <Box>
                    <TrendingChannelCard title="Nureal" />
                  </Box>{" "}
                  <Box>
                    <TrendingChannelCard title="Nureal" />
                  </Box>
                </Slider>
              </Box>
            </Box>

            <Box className="premium-content-carousel mt-24 mb-60">
              <Box className="mb-6 flex justify-between">
                <h1 className="text-2xl font-heading  c_white ">
                  Discover Music
                </h1>
                <a
                  href="#"
                  className="font-semibold text-md  bg-clip-text text-transparent bg-gradient-to-r from-yellow-300 via-orange-300 to-opacity-30 pr-4"
                >
                  See more
                </a>
              </Box>
              <Box className="" style={customCarouselStyle}>
                <Slider {...settings}>
                  <Box className="flex">
                    <MusicCard
                      title="StellarVerse Spectacle: Cosmic Symphony"
                      labelStatus={true}
                      label="US$ 9.99"
                      videoURL=""
                    />
                  </Box>
                  <Box>
                    <MusicCard
                      title="StellarVerse Spectacle: Cosmic Symphony"
                      labelStatus={true}
                      label="US$ 9.99"
                      videoURL=""
                    />
                  </Box>
                  <Box>
                    <MusicCard
                      title="StellarVerse Spectacle: Cosmic Symphony"
                      labelStatus={true}
                      label="US$ 9.99"
                      videoURL=""
                    />
                  </Box>{" "}
                  <Box>
                    <MusicCard
                      title="StellarVerse Spectacle: Cosmic Symphony"
                      labelStatus={true}
                      label="US$ 9.99"
                      videoURL=""
                    />
                  </Box>{" "}
                  <Box>
                    <MusicCard
                      title="StellarVerse Spectacle: Cosmic Symphony"
                      labelStatus={true}
                      label="US$ 9.99"
                      videoURL=""
                    />
                  </Box>
                </Slider>
              </Box>
            </Box>

          </Box>
        </Box>
      </Box>
    </>
  );
};

export default Index;

// OLD CODE ----->>>>>>>>
// /**
//  * This file is part of FourthStar User Dashboard
//  *(c) 2023 ShadowCast.Io <craig@shadowcast.io>
//  *------------------------------------------------------
//  *@module user
//  *@developer Sameer <sameer@shadowcast.io>
//  */

// import React, { useState, useEffect } from 'react';
// import { useNavigate, useParams } from 'react-router-dom';
// import { Grid, Tab, Tabs, Typography, Container } from '@mui/material';
// import { Fade, Zoom } from 'react-reveal';

// import { TabPanel, a11yProps } from 'components/tabs/Index';
// import Content_volumetric from 'pages/marketplace/entertainments/components/volumetric';
// import Content_180 from 'pages/marketplace/entertainments/components/180';
// import Content_360 from 'pages/marketplace/entertainments/components/360';
// import Content_2d from 'pages/marketplace/entertainments/components/2d';
// import Content_music from 'pages/marketplace/entertainments/components/music';
// import Content_channels from 'pages/marketplace/entertainments/components/channels';

// /* The `Index` component is a React functional component that represents a page in the FourthStar User
// Dashboard. It displays a layout of Entertainment Page with category Volumetric, 180, 360, 2D, Music and Channels */
// const Index = () => {
//   const navigate = useNavigate();
//   const { type } = useParams();

//   const [allCategory] = useState([
//     'Volumetric Video',
//     '180 video',
//     '360 Video',
//     '2D Video',
//     'Music',
//     'Channels',
//   ]);
//   const [categoryPage] = useState([
//     <Content_volumetric />,
//     <Content_180 />,
//     <Content_360 />,
//     <Content_2d />,
//     <Content_music />,
//     <Content_channels />,
//   ]);

//   const [value, setValue] = useState(0);

//   const handleChange = (event, newValue) => {
//     switch (newValue) {
//       case 0:
//         navigate('/marketplace/entertainments/volumetric');
//         break;
//       case 1:
//         navigate('/marketplace/entertainments/180');
//         break;
//       case 2:
//         navigate('/marketplace/entertainments/360');
//         break;
//       case 3:
//         navigate('/marketplace/entertainments/2D');
//         break;
//       case 4:
//         navigate('/marketplace/entertainments/music');
//         break;
//       case 5:
//         navigate('/marketplace/entertainments/channels');
//         break;
//       default:
//         break;
//     }
//   };

//   useEffect(() => {
//     if (type == 'volumetric') {
//       setValue(0);
//     } else if (type == '180') {
//       setValue(1);
//     } else if (type == '360') {
//       setValue(2);
//     } else if (type == '2D') {
//       setValue(3);
//     } else if (type == 'music') {
//       setValue(4);
//     } else if (type == 'channels') {
//       setValue(5);
//     }
//   }, [type]);
//   return (
//     <>
//       <Grid container item xs={12} className="fs24px">
//         <Grid
//           container
//           item
//           xs={12}
//           className="relative rounded-2xl "
//           sx={{ maxHeight: '420px' }}
//         >
//           <Zoom>
//             <img
//               src="https://fourthstar-userdashboard.s3.amazonaws.com/entertainments_1.png"
//               alt="Network Problem"
//               className="h-full w-full rounded-2xl"
//               style={{
//                 objectFit: 'cover',
//               }}
//             />
//           </Zoom>
//           <Grid
//             item
//             xs={12}
//             className="absolute top-0 left-0 h-full w-full flex justify-center flex-col gap-10 rounded-2xl"
//             sx={{ background: 'rgba(0, 0, 0, 0.3)' }}
//           >
//             <Typography className="text-center fs32px font-bold">
//               Welcome to Fourth Star Entertainment
//             </Typography>
//             <Typography className="text-center fs18px">
//               Explore a Multitude of Captivating Experiences
//             </Typography>
//           </Grid>
//         </Grid>
//         <Container
//           maxWidth={'xl'}
//           sx={{
//             padding: '0 !important',
//           }}
//         >
//           <Grid
//             container
//             item
//             xs={12}
//             sx={{ margin: '20px 0 30px 0' }}
//             className="justify-between"
//           >
//             <Grid
//               item
//               sm={12}
//               md={2.2}
//               lg={1.8}
//               xl={1.5}
//               className=" items-center gap-y-5 entertainment_tabs"
//               sx={{
//                 flexDirection: 'row',
//               }}
//             >
//               <Grid
//                 sx={{
//                   position: 'sticky',
//                   top: 80,
//                 }}
//               >
//                 <Grid item xs={12} sx={{ marginBottom: '20px' }}>
//                   <Typography className="fs14px c_gray font-bold">
//                     Category
//                   </Typography>
//                 </Grid>
//                 <Grid item xs={12}>
//                   <Tabs
//                     value={value}
//                     onChange={handleChange}
//                     allowScrollButtonsMobile={true}
//                     scrollButtons="auto"
//                     orientation="vertical"
//                     variant="scrollable"
//                     aria-label="scrollable force tabs example"
//                     sx={{ width: '100%' }}
//                   >
//                     {allCategory?.map((category, i) => (
//                       <Tab
//                         label={category}
//                         {...a11yProps(i)}
//                         className="fs14px "
//                         key={i}
//                       />
//                     ))}
//                   </Tabs>
//                 </Grid>
//               </Grid>
//             </Grid>
//             <Grid item sm={12} md={9.6} lg={10} xl={10.3}>
//               {categoryPage?.map((page, i) => (
//                 <TabPanel value={value} index={i} key={i}>
//                   {page}
//                 </TabPanel>
//               ))}
//             </Grid>
//           </Grid>
//         </Container>
//       </Grid>
//     </>
//   );
// };

// export default Index;
