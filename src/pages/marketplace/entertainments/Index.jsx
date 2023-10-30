/**
 * This file is part of FourthStar User Dashboard
 *(c) 2023 ShadowCast.Io <craig@shadowcast.io>
 *------------------------------------------------------
 *@module user
 *@developer Sameer <sameer@shadowcast.io>
 */

import React, { useState, useEffect } from 'react';
import { NavLink, useNavigate, useParams } from 'react-router-dom';
import { Fade, Zoom } from 'react-reveal';
import ShadowFrame from 'components/shadow-frame';
import Content_volumetric from 'pages/marketplace/entertainments/components/volumetric';
import Content_180 from 'pages/marketplace/entertainments/components/180';
import Content_360 from 'pages/marketplace/entertainments/components/360';
import Content_2d from 'pages/marketplace/entertainments/components/2d';
import Content_music from 'pages/marketplace/entertainments/components/music';
import Content_channels from 'pages/marketplace/entertainments/components/channels';
import LargeCarousel from 'components/carousel/MostTreading';
import ChannelImage from "assets/images/channel.png"
/* The `Index` component is a React functional component that represents a page in the FourthStar User
Dashboard. It displays a layout of Entertainment Page with category Volumetric, 180, 360, 2D, Music and Channels */
const Index = () => {
  const navigate = useNavigate();
  const { type } = useParams();

  const [allCategory] = useState([
    { name: 'Volumetric Video', slug: 'volumetric-video' },
    { name: '180 video', slug: '180-video' },
    { name: '360 Video', slug: '360-video' },
    { name: '2D Video', slug: '2d-video' },
    { name: 'Music', slug: 'music' },
    { name: 'Channels', slug: 'channels' }
  ]);
  const [categoryPage] = useState([
    <Content_volumetric />,
    <Content_180 />,
    <Content_360 />,
    <Content_2d />,
    <Content_music />,
    <Content_channels />,
  ]);

  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    switch (newValue) {
      case 0:
        navigate('/marketplace/entertainments/volumetric');
        break;
      case 1:
        navigate('/marketplace/entertainments/180-video');
        break;
      case 2:
        navigate('/marketplace/entertainments/360');
        break;
      case 3:
        navigate('/marketplace/entertainments/2D');
        break;
      case 4:
        navigate('/marketplace/entertainments/music');
        break;
      case 5:
        navigate('/marketplace/entertainments/channels');
        break;
      default:
        break;
    }
  };

  useEffect(() => {
    if (type == 'volumetric') {
      setValue(0);
    } else if (type == '180') {
      setValue(1);
    } else if (type == '360') {
      setValue(2);
    } else if (type == '2D') {
      setValue(3);
    } else if (type == 'music') {
      setValue(4);
    } else if (type == 'channels') {
      setValue(5);
    }
  }, [type]);


  const mostTrending = [
    { title: "StellarVerse Spectacle: Cosmic Symphony", productType: "Free", id: "1"},
    { title: "StellarVerse Spectacle: Cosmic Symphony", productType: "Free", id: "2", tags: "Volcap"},
    { title: "StellarVerse Spectacle: Cosmic Symphony", productType: "Paid", price: "US$ 9.99", id: "3"},
    { title: "StellarVerse Spectacle: Cosmic Symphony", productType: "Free", id: "4"},
    { title: "StellarVerse Spectacle: Cosmic Symphony", productType: "Free", id: "5"},
  ]

  const PremiumContent = [
    { title: "StellarVerse Spectacle: Cosmic Symphony", productType: "Premium", id: "1"},
    { title: "StellarVerse Spectacle: Cosmic Symphony", productType: "Premium", id: "2", tags: "Volcap"},
    { title: "StellarVerse Spectacle: Cosmic Symphony", productType: "Premium", id: "3"},
    { title: "StellarVerse Spectacle: Cosmic Symphony", productType: "Premium", id: "4"},
    { title: "StellarVerse Spectacle: Cosmic Symphony", productType: "Premium", id: "5"},
  ]

  const Music = [
    { title: "Supermassive black hole", productType: "Paid", id: "1", price: "US$ 9.99"},
    { title: "Supermassive black hole", productType: "Paid", id: "2", price: "US$ 9.99"},
    { title: "Supermassive black hole", productType: "Paid", id: "3", price: "US$ 9.99"},
    { title: "Supermassive black hole", productType: "Paid", id: "4", price: "US$ 9.99"},
    { title: "Supermassive black hole", productType: "Paid", id: "5", price: "US$ 9.99"},
  ]


  const Channel = [
    { title: "Nureal", id: "1", url: ChannelImage},
    { title: "Nureal", id: "2", url: ChannelImage},
    { title: "Nureal", id: "3", url: ChannelImage},
    { title: "Nureal", id: "4", url: ChannelImage},
    { title: "Nureal", id: "4", url: ChannelImage},
    { title: "Nureal", id: "4", url: ChannelImage},
    { title: "Nureal", id: "4", url: ChannelImage},
    { title: "Nureal", id: "5", url: ChannelImage},
  ]
  return (
    <div className="relative px-2 md:px-4 mb-14 lg:mb-28">
      <Zoom>
        <div className="min-h-[200px] xl:min-h-[390px] bg-[#2D2D2D] h-full mb-10 md:mb-20 z-10 relative rounded">
          <div className='absolute top-0 left-0 w-full h-full flex flex-col items-center justify-center p-4'>
            <h1 className='font-heading text-xl md:text-2xl lg:text-3xl text-center'>Welcome to Fourth Star Entertainment</h1>
          </div>
        </div>
      </Zoom>
      <div className="relative">
        <ShadowFrame className="w-[250px] md:w-[775px] h-[250px] md:h-[775px] rounded-[250px] md:rounded-[775px] -left-[80px] md:-left-[300px] -top-[80px] md:-top-[150px]" />
        <div className='mb-20 heading relative z-10'>
          <h3 className='font-heading text-lg md:text-2xl mb-2'>Explore Categories</h3>
          <p className='text-white text-opacity-90'>Explore a Multitude of Captivating Experiences.</p>
          <div className='mt-5 md:mt-8'>
            <ul className='flex gap-5 overflow-x-auto'>
              {allCategory?.map((category, i) => (
                <li key={i}>
                  <NavLink to={category?.slug}  onClick={e => handleChange(e, i)} className="link-item">{category?.name}</NavLink>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className='item-section mb-12 md:mb-24 relative z-10'>
          <h3 className='font-heading text-lg md:text-2xl mb-5'>Most trending</h3>
          <LargeCarousel slider={mostTrending} type="trending"></LargeCarousel>
        </div>
        <div className='item-section mb-12 md:mb-24 relative z-10'>
          <h3 className='font-heading text-lg md:text-2xl mb-5'>Premium Content: top picks for you</h3>
          <LargeCarousel slider={PremiumContent} type="premium"></LargeCarousel>
        </div>
        <ShadowFrame className="w-[250px] md:w-[775px] h-[250px] md:h-[775px] rounded-[250px] md:rounded-[775px] -right-[80px] md:-right-[300px] -bottom-[80px] md:-bottom-[150px]" />
      </div>
      <div className='relative'>
        <div className='item-section mb-12 md:mb-24'>
          <div className='flex flex-wrap justify-between items-center mb-5 gap-4'>
            <h3 className='font-heading text-lg md:text-2xl'>Trending Channels</h3>
            <NavLink to="" className={`clip-text text-[15px] font-semibold`}>See More</NavLink>
          </div>
          <LargeCarousel slider={Channel} type="channel"></LargeCarousel>
        </div>
        <div className='item-section mb-12 md:mb-24'>
          <div className='flex flex-wrap justify-between items-center mb-5 gap-4'>
            <h3 className='font-heading text-lg md:text-2xl'>Discover Music</h3>
            <NavLink to="" className={`clip-text text-[15px] font-semibold`}>See More</NavLink>
          </div>
          <LargeCarousel slider={Music} type="music"></LargeCarousel>
        </div>
      </div>
    </div>
    // <>
    //   <Grid container item xs={12} className="fs24px">
    //     <Grid
    //       container
    //       item
    //       xs={12}
    //       className="relative rounded-2xl "
    //       sx={{ maxHeight: '420px' }}
    //     >
    //       <Zoom>
    //         <img
    //           src="https://fourthstar-userdashboard.s3.amazonaws.com/entertainments_1.png"
    //           alt="Network Problem"
    //           className="h-full w-full rounded-2xl"
    //           style={{
    //             objectFit: 'cover',
    //           }}
    //         />
    //       </Zoom>
    //       <Grid
    //         item
    //         xs={12}
    //         className="absolute top-0 left-0 h-full w-full flex justify-center flex-col gap-10 rounded-2xl"
    //         sx={{ background: 'rgba(0, 0, 0, 0.3)' }}
    //       >
    //         <Typography className="text-center fs32px font-bold">
    //           Welcome to Fourth Star Entertainment
    //         </Typography>
    //         <Typography className="text-center fs18px">
    //           Explore a Multitude of Captivating Experiences
    //         </Typography>
    //       </Grid>
    //     </Grid>
    //     <Container
    //       maxWidth={'xl'}
    //       sx={{
    //         padding: '0 !important',
    //       }}
    //     >
    //       <Grid
    //         container
    //         item
    //         xs={12}
    //         sx={{ margin: '20px 0 30px 0' }}
    //         className="justify-between"
    //       >
    //         <Grid
    //           item
    //           sm={12}
    //           md={2.2}
    //           lg={1.8}
    //           xl={1.5}
    //           className=" items-center gap-y-5 entertainment_tabs"
    //           sx={{
    //             flexDirection: 'row',
    //           }}
    //         >
    //           <Grid
    //             sx={{
    //               position: 'sticky',
    //               top: 80,
    //             }}
    //           >
    //             <Grid item xs={12} sx={{ marginBottom: '20px' }}>
    //               <Typography className="fs14px c_gray font-bold">
    //                 Category
    //               </Typography>
    //             </Grid>
    //             <Grid item xs={12}>
    //               <Tabs
    //                 value={value}
    //                 onChange={handleChange}
    //                 allowScrollButtonsMobile={true}
    //                 scrollButtons="auto"
    //                 orientation="vertical"
    //                 variant="scrollable"
    //                 aria-label="scrollable force tabs example"
    //                 sx={{ width: '100%' }}
    //               >
    //                 {allCategory?.map((category, i) => (
    //                   <Tab
    //                     label={category}
    //                     {...a11yProps(i)}
    //                     className="fs14px "
    //                     key={i}
    //                   />
    //                 ))}
    //               </Tabs>
    //             </Grid>
    //           </Grid>
    //         </Grid>
    //         <Grid item sm={12} md={9.6} lg={10} xl={10.3}>
    //           {categoryPage?.map((page, i) => (
    //             <TabPanel value={value} index={i} key={i}>
    //               {page}
    //             </TabPanel>
    //           ))}
    //         </Grid>
    //       </Grid>
    //     </Container>
    //   </Grid>
    // </>
  );
};

export default Index;
