/**
 * This file is part of FourthStar User Dashboard
 *(c) 2023 ShadowCast.Io <craig@shadowcast.io>
 *------------------------------------------------------
 *@module user
 *@developer Sameer <sameer@shadowcast.io>
 */

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Canvas } from "@react-three/fiber";
import { useGLTF, Stage, PresentationControls } from "@react-three/drei";
import {
  Box,
  Grid,
  Tab,
  Tabs,
  Typography,
  Button,
  Skeleton,
  Container,
  Dialog,
  AppBar,
  Toolbar,
  IconButton,
  Slide,
  List,
  ListItem,
  ListItemText,
  Divider,
} from "@mui/material";
import { Fade, Zoom } from "react-reveal";

import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";
import CloseIcon from "@mui/icons-material/Close";
import IndexC from "components/carousel/Index";
import PremAptImg from "../../../../assets/images/premium_apt.png";
import { ShoppingCart } from "@mui/icons-material";
import GredientImg from "../../../../assets/images/gredient_bg.png";


const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});
/**
 * The Model function returns a primitive object with props that represents a 3D model loaded from a
 * GLB file.
 */
function Model(props) {
  const { scene } = useGLTF(
    "https://fourthstar-userdashboard.s3.amazonaws.com/Medium+Apartment_3.glb"
  );
  return <primitive object={scene} {...props} />;
}
/* The above code is a React component called "Index". It renders a webpage that displays information
about an apartment, including its image, price, description, themes, gaming and streaming options,
and suggested apartments. It also includes a dialog box that allows the user to preview the
apartment in a 3D model. The component uses various React hooks and components, such as useState,
useNavigate, Grid, Typography, Button, Dialog, AppBar, Toolbar, Canvas, and Stage, to create the
desired UI and functionality. */
const Index = () => {
  const navigate = useNavigate();

  const [gameImage, setGameImage] = useState([
    "https://fourthstar-userdashboard.s3.amazonaws.com/apt_d_8.png",
    "https://fourthstar-userdashboard.s3.amazonaws.com/apt_d_9.png",
    "https://fourthstar-userdashboard.s3.amazonaws.com/apt_d_10.png",
  ]);

  const [streamImage, setStreamImage] = useState([
    "https://fourthstar-userdashboard.s3.amazonaws.com/apt_d_11.png",
    "https://fourthstar-userdashboard.s3.amazonaws.com/apt_d_12.png",
    "https://fourthstar-userdashboard.s3.amazonaws.com/apt_d_13.png",
  ]);

  const [open, setOpen] = React.useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <>
      <Box
        // sx={{ padding: '1.5rem 3rem' }}
        className=""
      >
        <Box
          xs={12}
          sx={{ padding: "0 0 10px 0px" }}
          className="relative z-[2] bg-red"
        >
          <Typography
            className=" flex items-center cursor-pointer absolute font-inter text-xs  rounded-3xl"
            sx={{
              bottom: `-50px`,
              left: "12px",
              fontFamily: "Inter",
              padding: "5px 12px 6px 8px",
              background: "rgba(255, 255, 255, 0.10);",
            }}
            onClick={() => navigate(-1)}
          >
            <ArrowBackIcon fontSize="small" className="mr-2" />
            Back
          </Typography>
        </Box>
        <Box className="relative rounded" sx={{ height: "400px" }}>
          <Zoom>
            <img
              src={PremAptImg}
              alt="Network Problem"
              className="h-full w-full rounded"
              style={{
                objectFit: "cover",
              }}
            />
          </Zoom>
        </Box>
        <Box>
          <Box
            // sx={{ margin: '20px 0 30px 0' }}
            className="justify-between gap-x-5 flex mt-5 mb-8 relative"
          >
            <div className="appartment-card-left-shadow "></div>
            <Grid item sm={12} md={5.5} className="flex flex-col pt-3">
              <p className="text-sm  c_gray clip-text pb-3">About Apartment</p>
              <p className="font-heading text-md pb-3">
                Luminary Luxury - The Nebula
              </p>
              <p className="text-sm font-normal  text-white text-opacity-70">
                Now imagine this, you enter a medieval-decorated room with eerie
                walls and wooden beams. You’re surrounded by crystal pawns in
                abnormal sizes and notice that you’re standing on a giant
                checkerboard. What’s your next move? Once you open the door,
                there’s a liminal hallway with a pendant lamp swinging on top of
                you, your shadow swings in the same direction.
              </p>
            </Grid>
            <Grid
              item
              sm={12}
              md={6.5}
              sx={{
                background:
                  "linear-gradient(90deg, rgba(251, 188, 94, 0.20) 0.13%, rgba(243, 161, 81, 0.20) 99.89%)",
              }}
              className="flex flex-col gap-y-10 rounded-2xl py-9 px-12"
            >
              <Grid>
                <p
                  className="text-md c_gray pb-7"
                  sx={{ marginBottom: "13px" }}
                >
                  Buy this Apartment
                </p>
                <Grid className="flex items-center gap-x-3">
                  <MonetizationOnIcon
                    className="text-md"
                    sx={{ color: "yellow" }}
                  />
                  <p className="font-bold text-md">2.4 XFS ($245.89)</p>
                </Grid>
              </Grid>
              <Grid>
                <button className="capitalize font-bold rounded-lg btn-gradient w-full text-black py-3 px-5  rounded text-md">
                  Buy Now
                </button>
                <button className="capitalize font-bold rounded-lg   bg-opacity-100 border border-solid border-amber-500 border-1.5 w-full text-white py-3 px-5 mt-6 rounded text-md">
                  <ShoppingCart
                    data-testid="shopping-cart-icon"
                    className="text-white text-md "
                  />{" "}
                  Add to Cart
                </button>
              </Grid>
            </Grid>
          </Box>

          <Box
            // container
            // item
            // xs={12}
            // sx={{ marginBottom: '8rem' }}
            className="gap-5 justify-start mb-24"
          >
            <Box>
              <p className="text-xl font-heading mb-5">Themes</p>
            </Box>
            <Box
              // container item xs={12}
              className="gap-x-7 flex"
            >
              <Box
                // item
                // xs={12}
                // sm={3.5}
                // md={3.3}
                // lg={3}
                className=" flex flex-col  "
              >
                <img
                  src="https://fourthstar-userdashboard.s3.amazonaws.com/apt_2.png"
                  className="h-full w-full rounded-xl mb-3 border border-solid border-amber-500 border-2"
                  style={{
                    objectFit: "cover",
                    height: "149px",
                    width: "263px",
                    backgroundColor: "#1A2237",
                  }}
                />
                <p className=" text-md ">Experience Marketplace</p>
              </Box>
              <Box
                // item
                // xs={12}
                // sm={3.5}
                // md={3.3}
                // lg={3}
                className=" flex flex-col relative "
              >
                <img
                  src="https://fourthstar-userdashboard.s3.amazonaws.com/apt_d_3.png"
                  className="h-full w-full rounded-xl mb-3"
                  style={{
                    objectFit: "cover",
                    height: "149px",
                    width: "263px",
                    backgroundColor: "#1A2237",
                    filter: "brightness(0.3)",
                  }}
                />
                <p className=" text-md ">Experience Marketplace</p>
                <p
                  className="absolute text-md font-normal text-amber-500"
                  style={{ top: "73px", left: "70px" }}
                >
                  Comming Soon
                </p>
              </Box>
            </Box>
          </Box>

          <Box
            // container
            // item
            // xs={12}
            // sx={{ marginBottom: '8rem' }}
            className="gap-y-10"
          >
            <Box className="mb-5">
              <p className="text-2xl font-heading">Sneaky Peak</p>
            </Box>
            <Box className="mb-12" style={{ maxWidth: "883px" }}>
              <IndexC />
            </Box>
            <Box item xs={12}>
              <button
                style={{
                  background:
                    "linear-gradient(90deg, rgba(251, 188, 94, 0.10) 0.13%, rgba(243, 161, 81, 0.10) 99.89%)",
                }}
                onClick={handleClickOpen}
                className="capitalize max-w-xs font-bold rounded-lg   bg-opacity-100 border border-solid border-amber-500 border-1.5 w-full text-white py-3 px-5  rounded text-md"
              >
                Preview in Market Suit
              </button>
              {/* <Button
                className="c_white capitalize fs14px btn_hover_effect"
                sx={{
                  border: '1px solid white',
                }}
              >
                Preview in Market Suit
              </Button> */}
            </Box>
          </Box>

          <Box
            // container
            // item
            // xs={12}
            // sx={{ marginBottom: '8rem' }}
            className="mt-32"
          >
            <Box className="mb-5">
              <p className="font-heading text-2xl">Gaming</p>
            </Box>
            <Box className="max-w-3xl mb-12">
              <p className=" text-md font-inter text-white text-opacity-60">
                Experience next-level gaming and streaming. Dive into immersive
                worlds, challenge friends in multiplayer battles, or simply
                relax and enjoy your favorite content. With cutting-edge
                technology and a vast selection of games and entertainment,
              </p>
            </Box>
            <Grid container item xs={12} className="gap-7">
              {["", ""].map((item, i) => (
                <Box
                  className=" flex flex-col rounded"
                  sx={{
                    height: "230px",
                    width: "400px",
                  }}
                  key={i}
                >
                  <img
                    src={gameImage[i]}
                    className="h-full w-full rounded-xl"
                    style={{
                      objectFit: "cover",
                      backgroundColor: "#1A2237",
                    }}
                  />
                </Box>
              ))}
              <Grid
                container
                item
                xs={12}
                sm={3.5}
                md={3}
                lg={2.8}
                className="rounded-xl"
              >
                   <Box
                  className=" flex flex-col rounded"
                  sx={{
                    height: "230px",
                    width: "400px",
                  }}
                >
                   <Skeleton
                    variant="rectangular"
                    width="400px"
                    height="230px"
                    sx={{
                      bgcolor: "#1A2237",
                      width: "100%",
                    }}
                    className="rounded-xl"
                  />
                </Box>
               
              </Grid>
            </Grid>
            {/* <Grid item xs={12} sx={{ marginTop: "3rem" }}>
              <Typography className="font-bold fs20px">Streaming</Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography className=" fs12px c_gray">
                Stream Movies, Shows, and More Inside Your Apartment.
              </Typography>
            </Grid>
            <Grid container item xs={12} className="gap-7">
              {["", "", ""].map((item, i) => (
                <Grid
                  item
                  xs={12}
                  sm={3.5}
                  md={3}
                  lg={2.8}
                  className=" flex flex-col gap-y-3"
                  sx={{
                    minHeight: "310px",
                    maxHeight: "340px",
                    minWidth: "250px",
                  }}
                  key={i}
                >
                  <img
                    src={streamImage[i]}
                    className="h-full w-full rounded-xl"
                    style={{
                      objectFit: "cover",

                      backgroundColor: "#1A2237",
                    }}
                  />
                </Grid>
              ))}
              <Grid
                container
                item
                xs={12}
                sm={3.5}
                md={3}
                lg={2.8}
                className="rounded-xl"
              >
                <Grid
                  item
                  xs={12}
                  sx={{
                    minHeight: "310px",
                    maxHeight: "340px",
                    minWidth: "250px",
                    background: "#2D2D2D",
                  }}
                  className="rounded-xl"
                >
                  <Skeleton
                    variant="rectangular"
                    width="100%"
                    height="100%"
                    sx={{
                      bgcolor: "#1A2237",
                      width: "100%",
                    }}
                    className="rounded-xl"
                  />
                </Grid>
              </Grid>
            </Grid> */}
          </Box>
        </Box>
        <div style={{ height: "1px", background: "rgba(90, 90, 90, 0.20)" }} className="bg-red-500 mt-24 w-full"></div>
        <Box>
          <Box
            className=" mt-20"
          >
            <Box className="font-heading mb-16">
              <p className="text-2xl">
                Suggested Apartment
              </p>
            </Box>

            <Box container item xs={12} className="justify-between flex">
              {[""].map((item, i) => (
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
                     src="https://fourthstar-userdashboard.s3.amazonaws.com/apt_d_15.png"
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
                     className="text-xl font-bold c_white mt-4 mb-4 font-bold font-heading"
                     // sx={{ marginBottom: '10px' }}
                   >
                     Luminary Luxury - The Nebula
                   </h1>
                   <Box className="flex justify-between items-start c_white">
                     <p
                       className="text-sm max-w-xl text-white text-opacity-70"
                     >
                        Indulge in the opulence of these towering apartments
                         that capture the essence of a radiant galaxy, offering a
                         sophisticated and cosmopolitan living experience.{" "}
                     </p>
                   </Box>
                 </Box>
               </Box>
                // <Grid
                //   container
                //   item
                //   xs={12}
                //   sm={5.5}
                //   sx={{
                //     height: "400px",
                //     padding: "15px ",
                //     backgroundColor: "#1A2237",
                //   }}
                //   className="rounded-xl"
                //   key={i}
                // >
                //   <Grid
                //     item
                //     xs={12}
                //     sx={{
                //       height: "270px",
                //       background: "#2D2D2D",
                //       borderRadius: "8px",
                //       overflow: "hidden",
                //     }}
                //   >
                //     <img
                //       src="https://fourthstar-userdashboard.s3.amazonaws.com/apt_d_15.png"
                //       className="h-full w-full"
                //       style={{ objectFit: "cover" }}
                //     />
                //   </Grid>
                //   <Grid
                //     item
                //     xs={12}
                //     sx={{
                //       borderRadius: "0px 0px 10px 10px ",
                //     }}
                //   >
                //     <Typography
                //       className="fs16px font-bold"
                //       sx={{ marginBottom: "10px" }}
                //     >
                //       Luminary Luxury - The Nebula
                //     </Typography>
                //     <Grid className="flex justify-between items-start">
                //       <Typography className="fs14px" sx={{ width: "100%" }}>
                //         Indulge in the opulence of these towering apartments
                //         that capture the essence of a radiant galaxy, offering a
                //         sophisticated and cosmopolitan living experience.{" "}
                //       </Typography>
                //     </Grid>
                //   </Grid>
                // </Grid>
              ))}

<Box
                 // container
                 // item
                 // xs={12}
                 className="rounded-xl "
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
                   {/* <img
                     src="https://fourthstar-userdashboard.s3.amazonaws.com/apt_d_15.png"
                     className="h-full w-full relative"
                     style={{ objectFit: "fill" }}
                   /> */}
                    <Skeleton
                    className="h-full w-full relative"
                    style={{ objectFit: "fill" }}
                    variant="rectangular"
                    width="100%"
                    height="100%"
                    sx={{
                      objectFit:"fill",
                      bgcolor: "#1A2237",
                      width: "100%",
                      borderRadius: "10px 10px 0 0 ",
                    }}
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
                   <Skeleton width="40%" sx={{ bgcolor: "grey.600" }} />
                   <Box className="flex justify-between items-start c_white">
                   <Skeleton sx={{ bgcolor: "grey.600" }} width="100%" />
                   </Box>
                 </Box>
               </Box>

              {/* <Grid
                container
                item
                xs={12}
                sm={5.5}
                className="rounded-xl"
                sx={{
                  height: "400px",
                  padding: "15px ",
                  backgroundColor: "#1A2237",
                }}
              >
                <Grid
                  item
                  xs={12}
                  sx={{
                    height: "270px",
                    background: "#2D2D2D",
                    borderRadius: "8px",
                  }}
                >
                  <Skeleton
                    variant="rectangular"
                    width="100%"
                    height="100%"
                    sx={{
                      bgcolor: "#1A2237",
                      width: "100%",
                      borderRadius: "10px 10px 0 0 ",
                    }}
                  />
                </Grid>
                <Grid
                  item
                  xs={12}
                  sx={{
                    backgroundColor: "#1A2237",
                    borderRadius: "0px 0px 10px 10px ",
                  }}
                >
                  <Skeleton width="40%" sx={{ bgcolor: "grey.600" }} />

                  <Grid className="flex justify-between items-start">
                    <Skeleton sx={{ bgcolor: "grey.600" }} width="100%" />
                  </Grid>
                </Grid>
              </Grid> */}
            </Box>
          </Box>
        </Box>
      </Box>

      <Dialog
        fullScreen
        open={open}
        onClose={handleClose}
        TransitionComponent={Transition}
        sx={{ zIndex: "99999999" }}
      >
        <AppBar sx={{ position: "relative", background: "#1A1A28" }}>
          <Toolbar>
            <Typography
              sx={{ ml: 2, flex: 1 }}
              variant="h6"
              component="div"
              className="font-bold fs14px"
            >
              Apartment name
            </Typography>
            <Button autoFocus color="inherit" onClick={handleClose}>
              <CloseIcon />
            </Button>
          </Toolbar>
        </AppBar>
        <Grid
          className="h-full"
          sx={{
            background: "#131420",
          }}
        >
          <Canvas
            dpr={[1, 2]}
            shadows
            camera={{ fov: 45 }}
            // style={{ position: 'absolute' }}
          >
            <color attach="background" args={["#131420"]} />
            <PresentationControls
              // speed={1.5}
              speed={5}
              global
              zoom={3}
              // polar={[-0.1, Math.PI / 4]}
              polar={[0, Math.PI / 10]}
            >
              <Stage environment={"sunset"}>
                <Model scale={0.01} />
              </Stage>
            </PresentationControls>
          </Canvas>
        </Grid>
      </Dialog>
    </>
  );
};

export default Index;
