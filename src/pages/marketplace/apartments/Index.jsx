/**
 * This file is part of FourthStar User Dashboard
 *(c) 2023 ShadowCast.Io <craig@shadowcast.io>
 *------------------------------------------------------
 *@module user
 *@developer Sameer <sameer@shadowcast.io>
 */

 import React, { useState } from "react";
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
 
 import GredientImg from "assets/images/gredient_bg.png";
 import PremAptImg from "assets/images/premium_apt.png";
 
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
       img: "https://fourthstar-userdashboard.s3.amazonaws.com/new_card_img.png",
       title: "Ultimate Gaming Experience",
       desc: `Our apartments are equipped with everything you need to
                   unleash your gaming prowess. Engage in thrilling multiplayer
                   battles, conquer epic quests, and explore immersive virtual
                   worlds, all from the comfort of your own living space.`,
     },
     {
       img: "https://fourthstar-userdashboard.s3.amazonaws.com/new_card_img.png",
       title: "Exclusive Immersive Streaming",
       desc: `Immerse yourself in a realm of unparalleled entertainment with
                   your choice of 180 and 360 immersive entertainment content.
                   Unlock a curated collection of premium content, granting you
                   access to an extraordinary selection of movies, shows, virtual
                   travel experiences.`,
     },
     {
       img: "https://fourthstar-userdashboard.s3.amazonaws.com/new_card_img.png",
       title: "Volumetric Video",
       desc: `Science Fiction Holograms become a reality. Discover a world
                   of captivating virtual reality content with Volumetric Video.
                   See your favourite Artist standing right in front of you.
                   Relax in your Apartment with a Personal Performance from the
                   biggest Rock Stars on the Planet.`,
     },
     {
       img: "https://fourthstar-userdashboard.s3.amazonaws.com/new_card_img.png",
       title: "180 and 360 Entertainment",
       desc: `Immerse yourself in breathtaking visual journeys with our
                   collection of 180 and 360-degree VR videos. Step into a world
                   of stunning landscapes, all brought to life in immersive virtual reality.
                   Explore every angle, feel the depth, and be part of the action
                   like never before. `,
     },
   ]);
   const [apartments, setApartments] = useState([
     {
       img: "https://fourthstar-userdashboard.s3.amazonaws.com/Apt_6",
       title: "Luminary Luxury Apartment",
       desc: ` Indulge in the opulence of these towering apartments that capture the essence of a radiant galaxy, offering a sophisticated and cosmopolitan living experience.`,
     },
     {
       img: "https://fourthstar-userdashboard.s3.amazonaws.com/Apt_7",
       title: "Cosmic Starlight Apartment",
       desc: `Find yourself enchanted by the mesmerizing allure of the aurora in these exclusive enclaves, where the ethereal beauty of the night sky is brought to life.`,
     },
     {
       img: "https://fourthstar-userdashboard.s3.amazonaws.com/Apt_8",
       title: "Nebula Nexus Apartment",
       desc: `Experience the epitome of luxury in these magnificent mansions inspired by the celestial luminaries, offering a sanctuary of prestige and grandeur.`,
     },
     {
       img: "https://fourthstar-userdashboard.s3.amazonaws.com/Apt_7",
       title: "Cosmic Starlight Apartment",
       desc: `Find yourself enchanted by the mesmerizing allure of the aurora in these exclusive enclaves, where the ethereal beauty of the night sky is brought to life.`,
     },
     {
       img: "https://fourthstar-userdashboard.s3.amazonaws.com/Apt_8",
       title: "Nebula Nexus Apartment",
       desc: `Experience the epitome of luxury in these magnificent mansions inspired by the celestial luminaries, offering a sanctuary of prestige and grandeur.`,
     },
   ]);
 
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
             container
             item
             xs={12}
             sx={
               {
                 // margin: '8rem 0 30px 0',
                 // border: '2px solid red',
                 // position: '',
               }
             }
             className="justify-center check_gg relative"
           >
             <div className="appartment-card-left-shadow "></div>
 
             <Box
               item
               sm={12}
               md={10}
               lg={10}
               className="flex flex-col items-center mt-24 mb-4"
             >
               <h1 className="text-2xl font-heading text-center  c_white mb-3">
                 Fourth Star Apartments: A New Dimension of Living.
               </h1>
               <p className="text-white text-opacity-70 text-center text-sm max-w-4xl">
                 Explore ultimate metaverse living experience at Fourth Star
                 Apartments. Our thoughtfully designed spaces combine luxury and
                 cutting-edge technology to create a haven where gaming and
                 entertainment thrive.{" "}
               </p>
             </Box>
             <Grid
               sx={
                 {
                   // position: 'absolute',
                   // backgroundImage: `url()`,
                   // border: '2px solid red',
                   // top: '-650%',
                   // left: '-55%',
                   // bottom: 0,
                   // height: '975px',
                   // width: '975px',
                   // border: '3px solid green',
                 }
               }
             >
               {/* <img
                 src={GredientImg}
                 style={{ objectFit: 'cover', height: '100%', width: '100%' }}
               /> */}
             </Grid>
             <div className="appartment-card-right-shadow "></div>
 
           </Box>
 
           <Box
             // container
             // item
             // xs={12}
             className="justify-center p-18 flex flex-wrap mt-10 mb-32 overflow-hidden"
             // rowGap={12}
             // columnGap={5}
             // sx={{ margin: '10rem 0 15rem' }}
           >
 
             {aptFeaturedCard.map((item, i) => (
               <Box
                 // item
                 // xs={12}
                 // sm={5.5}
                 // md={5}
                 // lg={4}
                 // key={i}
                 style={{
                   Height: "360px",
                   backgroundColor: "#FBBC5E0D",
                   padding: "0 3rem 3rem",
                   zIndex: 5,
                 }}
                 className="  flex-col gap-y-5  mx-3  my-10 rounded-2xl shadow-lg card-hover_parent cursor-pointer items-center  max-w-md bg-gradient-to-r from-[rgba(251, 188, 94, 0.05)] to-[rgba(243, 161, 81, 0.05)]"
               >
                 <Fade style={{ border: "2px solid green" }}>
                   <Box className="text-center flex items-center justify-center">
                     <img
                       src={item?.img}
                       className="h-full w-full rounded-xl card-hover_img"
                       style={{
                         objectFit: "contain",
                         // border: '2px solid red',
                       }}
                     />
                   </Box>
                   <h1 className=" font-heading text-base  font-normal text-center d_color mb-4">
                     {item?.title}
                   </h1>
                   <p className=" leading-[175.5%] text-xs font-normal text-center c_white">
                     {item?.desc}
                   </p>
                 </Fade>
               </Box>
             ))}
           </Box>
           <Box
             // container
             // item
             // xs={12}
             className=" gap-y-10"
             // sx={{ position: 'relative' }}
           >
             <Box
             // sx={{
             //   position: 'absolute',
             //   // backgroundImage: `url()`,
             //   // border: '2px solid red',
             //   top: '-54%',
             //   right: '-58%',
             //   // left: '-30%',
             //   // bottom: 0,
             //   // height: '1000px',
             //   // width: '1000px',
             //   zIndex: 0,
             // }}
             >
               {/* <img
                 src={GredientImg}
                 style={{
                   objectFit: 'cover',
                   height: '100%',
                   width: '100%',
                   // border: '3px solid red',
                 }}
               /> */}
             </Box>
             <h1 className="font-heading text-center text-2xl c_white mb-14">
               Explore Apartments
             </h1>
             {apartments.map((item, i) => (
               <Box
                 // container
                 // item
                 // xs={12}
                 className="rounded-xl "
                 key={i}
                 sx={{
                   padding: "15px",
                   backgroundColor: "#32302D",
                   marginBottom: "70px",
                   zIndex: 5,
                   // boxShadow: 'inset 26px 0px 138px 4px rgba(255,233,201,.3)',
                   position: "relative",
                   overflow: "hidden",
                 }}
                 gap={3}
               >
                 <Grid
                   sx={{
                     position: "absolute",
                     // backgroundImage: `url()`,
                     // border: '2px solid red',
                     top: "-57%",
                     // right: '-58%',
                     left: "-25%",
                     // bottom: 0,
                     height: "875px",
                     width: "875px",
                     zIndex: 0,
                   }}
                 >
                   <img
                     src={GredientImg}
                     style={{
                       objectFit: "cover",
                       height: "100%",
                       width: "100%",
                       // border: '3px solid red',
                     }}
                   />
                 </Grid>
                 <Grid
                   sx={{
                     position: "absolute",
                     // backgroundImage: `url()`,
                     // border: '2px solid red',
                     top: "-57%",
                     // right: '-58%',
                     right: "-25%",
                     // bottom: 0,
                     height: "875px",
                     width: "875px",
                     zIndex: 0,
                   }}
                 >
                   <img
                     src={GredientImg}
                     style={{
                       objectFit: "cover",
                       height: "100%",
                       width: "100%",
                       // border: '3px solid red',
                     }}
                   />
                 </Grid>
                 <Box
                   item
                   xs={12}
                   // sx={{
                   //   height: '310px',
                   //   background: '#2D2D2D',
                   //   borderRadius: '10px 10px 0 0 ',
                   //   zIndex: 5,
                   // }}
                 >
                   <img
                     src={PremAptImg}
                     className="h-full w-full relative"
                     style={{ objectFit: "fill" }}
                   />
                 </Box>
                 <Box
                   item
                   xs={12}
                   sx={{
                     // backgroundColor: '#1A2237',
                     // padding: '22px 15px ',
                     padding: "5px 10px 15px 10px",
 
                     // borderRadius: '0px 0px 10px 10px ',
                   }}
                 >
                   <h1
                     className="text-xl font-bold c_white mt-6 mb-4"
                     // sx={{ marginBottom: '10px' }}
                   >
                     {item?.title}
                   </h1>
                   <Box className="flex justify-between items-start c_white">
                     <p
                       className="text-sm max-w-3xl text-white text-opacity-70"
                       sx={{ width: "70%" }}
                     >
                       {item?.desc}
                     </p>
                     <Button
                       className="c_white capitalize  rounded-3xl   btn_hover_effect text-white font-inter font-medium text-base p-8 "
                       sx={{
                         border: "1px solid #FBBC5E",
                         padding: "5px 16px",
                       }}
                       onClick={() =>
                         navigate(`/marketplace/apartments/${item?.title}`)
                       }
                     >
                       See Apartment
                     </Button>
                   </Box>
                 </Box>
               </Box>
             ))}
 
             {/* <Grid container item xs={12} className="rounded-xl">
               <Grid
                 item
                 xs={12}
                 sx={{
                   height: '310px',
                   background: '#2D2D2D',
                   borderRadius: '10px 10px 0 0 ',
                   overflow: 'hidden',
                 }}
               ></Grid>
               <Grid
                 item
                 xs={12}
                 sx={{
                   backgroundColor: '#1A2237',
                   padding: '22px 15px ',
                   borderRadius: '0px 0px 10px 10px ',
                 }}
               >
                 <Typography
                   className="fs16px font-bold "
                   sx={{ marginBottom: '10px' }}
                 >
                   Luminary Luxury - The Nebula
                 </Typography>
                 <Grid className="flex justify-between items-start">
                   <Typography className="fs14px" sx={{ width: '70%' }}>
                     Indulge in the opulence of these towering apartments that
                     capture the essence of a radiant galaxy, offering a
                     sophisticated and cosmopolitan living experience. offering a
                     sophisticated and cosmopolitan living experience.
                   </Typography>
                   <Button
                     className="c_white capitalize fs14px rounded-3xl btn_hover_effect"
                     sx={{
                       border: '1px solid white',
                       padding: '5px 15px',
                     }}
                     onClick={() =>
                       navigate(
                         '/marketplace/apartments/Luminary Luxury - The Nebula'
                       )
                     }
                   >
                     See Apartment
                   </Button>
                 </Grid>
               </Grid>
             </Grid> */}
             {/* ------------------------------------------------------------------- */}
             {/* <Grid container item xs={12} className="rounded-xl">
               <Grid
                 item
                 xs={12}
                 sx={{
                   height: '310px',
                   background: '#2D2D2D',
                   borderRadius: '10px 10px 0 0 ',
                 }}
               >
                 <Skeleton
                   variant="rectangular"
                   width="100%"
                   height="100%"
                   sx={{
                     bgcolor: '#1A2237',
                     width: '100%',
                     borderRadius: '10px 10px 0 0 ',
                   }}
                 />
               </Grid>
               <Grid
                 item
                 xs={12}
                 sx={{
                   backgroundColor: '#1A2237',
                   padding: '22px 15px ',
                   borderRadius: '0px 0px 10px 10px ',
                 }}
               >
                 <Skeleton width="30%" sx={{ bgcolor: 'grey.600' }} />
 
                 <Grid className="flex justify-between items-start">
                   <Skeleton sx={{ bgcolor: 'grey.600' }} width="70%" />
                   <Skeleton sx={{ bgcolor: 'grey.600', width: '15%' }} />
                 </Grid>
               </Grid>
             </Grid> */}
           </Box>
         </Box>
       </Box>
     </>
   );
 };
 
 export default Index;