/**
 * This file is part of FourthStar User Dashboard
 *(c) 2023 ShadowCast.Io <craig@shadowcast.io>
 *------------------------------------------------------
 *@module user
 *@developer Sameer <sameer@shadowcast.io>
 */

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import {
  Box,
  Grid,
  Tab,
  Tabs,
  Typography,
  Button,
  Skeleton,
  Container,
  Slide,
  Dialog,
  AppBar,
  Toolbar,
  Divider,
} from '@mui/material';
import { Fade, Zoom } from 'react-reveal';
import { Canvas } from '@react-three/fiber';
import { useGLTF, Stage, PresentationControls } from '@react-three/drei';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import CloseIcon from '@mui/icons-material/Close';
import IndexC from 'components/carousel/Index';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});
/**
 * The Model function returns a primitive object with props that represents a 3D ship model.
 */
function Model(props) {
  const { scene } = useGLTF(
    'https://fourthstar-userdashboard.s3.amazonaws.com/ship.glb'
  );
  return <primitive object={scene} {...props} />;
}

const Index = () => {
  const navigate = useNavigate();

  const [gameDetail, setGameDetail] = useState([
    {
      title: 'Holo Suite Gaming',
      img: 'https://fourthstar-userdashboard.s3.amazonaws.com/ship_d_game-1.png',
      description: `Embark on the ultimate gaming experience with Holo Suite
                      Gaming, where virtual worlds come to life within your own
                      apartment or ship . Embark on the ultimate gaming
                      experience with Holo Suite Gaming, where virtual worlds
                      come to life within your own apartment or ship. Embark on
                      the ultimate gaming experience with Holo Suite Gaming.`,
      btn_name: 'Explore Holo Suite Game',
    },
    {
      title: 'Environmental gaming',
      img: 'https://fourthstar-userdashboard.s3.amazonaws.com/ship_d_game-2.png',
      description: `Explore Environmental Gaming, where you'll be transported to breathtaking virtual environments to conquer thrilling challenges and embark on epic quests. Explore new worlds, face formidable foes, and forge unforgettable memories with friends..`,
      btn_name: 'Explore Environmental Gaming',
    },
  ]);

  const [streamImage, setStreamImage] = useState([
    'https://fourthstar-userdashboard.s3.amazonaws.com/apt_d_11.png',
    'https://fourthstar-userdashboard.s3.amazonaws.com/apt_d_12.png',
    'https://fourthstar-userdashboard.s3.amazonaws.com/apt_d_13.png',
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
      <Grid
        container
        item
        xs={12}
        sx={{ padding: '1.5rem 3rem' }}
        className="fs24px"
      >
        <Grid container item xs={12} sx={{ padding: '0 0 10px 0px' }}>
          <Typography
            className="fs16px flex items-center cursor-pointer"
            onClick={() => navigate(-1)}
          >
            <ArrowBackIcon fontSize="large" />
            Back
          </Typography>
        </Grid>
        <Grid
          container
          item
          xs={12}
          className="relative rounded-2xl"
          sx={{ height: '400px' }}
        >
          <Zoom>
            <img
              src="https://fourthstar-userdashboard.s3.amazonaws.com/ship_d_1.png"
              alt="Network Problem"
              className="h-full w-full rounded-2xl"
              style={{
                objectFit: 'cover',
              }}
            />
          </Zoom>
        </Grid>
        <Container maxWidth={'xl'}>
          <Grid
            container
            item
            xs={12}
            sx={{ margin: '20px 0 30px 0' }}
            className="justify-between gap-x-5"
          >
            <Grid item sm={12} md={5.5} className="flex flex-col gap-y-4 pt-3">
              <Typography className="fs14px c_gray">About Ship</Typography>
              <Typography className="font-bold fs20px">
                Supreme Infinity Voyager
              </Typography>
              <Typography className="fs14px">
                Step into the cutting-edge realm of the Techno-Fusion Nexus
                spaceship interior. Immerse yourself in a dazzling fusion of
                holographic displays, cyberpunk aesthetics, and advanced
                artificial intelligence. Discover an unparalleled blend of
                technology and style that promises thrilling escapades.
              </Typography>
            </Grid>
            <Grid
              item
              sm={12}
              md={5.5}
              sx={{ backgroundColor: '#1A2237' }}
              className="flex flex-col gap-y-10 rounded-2xl p-16"
            >
              <Grid>
                <Typography
                  className="fs14px c_gray"
                  sx={{ marginBottom: '13px' }}
                >
                  Buy this Ship
                </Typography>
                <Grid className="flex items-center gap-x-3">
                  <MonetizationOnIcon
                    className="fs28px"
                    sx={{ color: 'yellow' }}
                  />
                  <Typography className="font-bold fs14px">
                    2.4 XFS ($245.89)
                  </Typography>
                </Grid>
              </Grid>
              <Grid>
                <Button
                  className="capitalize w-full bg_btn c_white fs14px"
                  sx={{ marginBottom: '13px' }}
                >
                  Buy with coin
                </Button>
                <Button className="capitalize w-full d-border c_white fs14px btn_hover_effect">
                  Buy with card
                </Button>
              </Grid>
            </Grid>
          </Grid>

          <Grid
            container
            item
            xs={12}
            sx={{ marginBottom: '8rem' }}
            className="gap-5 justify-start"
          >
            <Grid item xs={12}>
              <Typography className="font-bold fs20px">
                Interior Themes
              </Typography>
            </Grid>
            <Grid container item xs={12} className="gap-x-7">
              <Grid
                item
                xs={12}
                sm={3.5}
                md={3.3}
                lg={3}
                className=" flex flex-col gap-y-3"
              >
                <img
                  src="https://fourthstar-userdashboard.s3.amazonaws.com/apt_2.png"
                  className="h-full w-full rounded-xl"
                  style={{
                    objectFit: 'cover',
                    minHeight: '170px',
                    maxHeight: '190px',
                    backgroundColor: '#1A2237',
                  }}
                />
                <Typography className=" fs14px ">Classic theme ship</Typography>
              </Grid>
            </Grid>
          </Grid>

          <Grid
            container
            item
            xs={12}
            sx={{ marginBottom: '8rem' }}
            className="gap-y-10"
          >
            <Grid item xs={12}>
              <Typography className="font-bold fs20px">Sneaky Peak</Typography>
            </Grid>
            <Grid container item xs={12} md={9} className="gap-x-7">
              <IndexC />
            </Grid>
            <Grid item xs={12}>
              <Button
                className="c_white capitalize fs14px btn_hover_effect"
                sx={{
                  border: '1px solid white',
                }}
                onClick={handleClickOpen}
              >
                Preview in Market Suit
              </Button>
            </Grid>
          </Grid>

          <Grid
            container
            item
            xs={12}
            sx={{ marginBottom: '8rem' }}
            className="gap-5 justify-start"
          >
            {/* <Grid item xs={12}>
              <Typography className="font-bold fs16px">
                Explore Inside Apartment
              </Typography>
            </Grid> */}
            <Grid item xs={12} sx={{ marginTop: '4rem' }}>
              <Typography className="font-bold fs20px">Gaming</Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography className=" fs12px c_gray">
                Make your journey through space a canvas for epic gameplay.
              </Typography>
            </Grid>
            <Grid container item xs={12} className="gap-10">
              {gameDetail &&
                gameDetail.map((item, i) => (
                  <Grid
                    container
                    item
                    xs={12}
                    sm={5.5}
                    className=" gap-16 relative"
                    sx={{
                      maxHeight: '400px',
                      alignItems: 'center',
                    }}
                    key={i}
                  >
                    <Grid
                      item
                      xs={12}
                      // sm={6}
                      // md={5}
                      sx={
                        {
                          // border: '2px solid green',
                        }
                      }
                      className="h-full "
                    >
                      <img
                        src={item?.img}
                        className="h-full w-full rounded-xl "
                        style={{
                          objectFit: 'cover',

                          backgroundColor: '#1A2237',
                        }}
                      />
                    </Grid>
                    <Grid
                      className="flex flex-col h-full absolute w-full rounded-xl justify-center items-center "
                      sx={{ backgroundColor: 'rgba(1,1,1,0.65)' }}
                    >
                      <Button
                        className="c_white capitalize fs14px btn_hover_effect "
                        sx={{
                          border: '1px solid white',
                          borderRadius: '10px',
                          width: '300px',
                        }}
                      >
                        {item?.btn_name}
                      </Button>
                    </Grid>
                  </Grid>
                ))}
              {/* <Grid
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
                    minHeight: '310px',
                    maxHeight: '340px',
                    minWidth: '250px',

                    background: '#2D2D2D',
                  }}
                  className="rounded-xl"
                >
                  <Skeleton
                    variant="rectangular"
                    width="100%"
                    height="100%"
                    sx={{
                      bgcolor: '#1A2237',
                      width: '100%',
                    }}
                    className="rounded-xl"
                  />
                </Grid>
              </Grid> */}
            </Grid>
            <Grid item xs={12} sx={{ marginTop: '6rem' }}>
              <Typography className="font-bold fs20px">Streaming</Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography className=" fs12px c_gray">
                Engage in a new dimension of entertainment right inside your
                ship.
              </Typography>
            </Grid>
            <Grid container item xs={12} className="gap-7">
              {['', '', ''].map((item, i) => (
                <Grid
                  item
                  xs={12}
                  sm={3.5}
                  md={3}
                  lg={2.8}
                  className=" flex flex-col gap-y-3"
                  sx={{
                    minHeight: '310px',
                    maxHeight: '340px',
                    minWidth: '250px',
                  }}
                  key={i}
                >
                  <img
                    src={streamImage[i]}
                    className="h-full w-full rounded-xl"
                    style={{
                      objectFit: 'cover',

                      backgroundColor: '#1A2237',
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
                    minHeight: '310px',
                    maxHeight: '340px',
                    minWidth: '250px',

                    background: '#2D2D2D',
                  }}
                  className="rounded-xl"
                >
                  <Skeleton
                    variant="rectangular"
                    width="100%"
                    height="100%"
                    sx={{
                      bgcolor: '#1A2237',
                      width: '100%',
                    }}
                    className="rounded-xl"
                  />
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Container>
        <Divider sx={{ border: '1px solid #282828', width: '100%' }} />
        <Container maxWidth={'xl'}>
          <Grid
            container
            item
            xs={12}
            sx={{ margin: '5rem 0' }}
            className=" gap-y-10"
          >
            <Grid item xs={12} sx={{ margin: '2rem 0' }}>
              <Typography className="font-bold fs20px text-center">
                Suggested Ship
              </Typography>
            </Grid>

            <Grid container item xs={12} className="justify-between gap-20">
              {[''].map((item, i) => (
                <Grid
                  container
                  item
                  xs={12}
                  sm={5.5}
                  sx={{
                    height: '400px',
                    padding: '15px ',
                    backgroundColor: '#1A2237',
                  }}
                  className="rounded-xl"
                  key={i}
                  gap={2}
                >
                  <Grid
                    item
                    xs={12}
                    sx={{
                      height: '270px',
                      background: '#2D2D2D',
                      borderRadius: '8px',
                      overflow: 'hidden',
                    }}
                  >
                    <img
                      src="https://fourthstar-userdashboard.s3.amazonaws.com/ship_2.png"
                      className="h-full w-full"
                      style={{ objectFit: 'cover' }}
                    />
                  </Grid>
                  <Grid
                    item
                    xs={12}
                    sx={{
                      borderRadius: '0px 0px 10px 10px ',
                    }}
                  >
                    <Typography
                      className="fs16px font-bold"
                      sx={{ marginBottom: '10px' }}
                    >
                      Luminary Luxury - The Nebula
                    </Typography>
                    <Grid className="flex justify-between items-start">
                      <Typography className="fs14px" sx={{ width: '100%' }}>
                        Indulge in the opulence of these towering apartments
                        that capture the essence of a radiant galaxy, offering a
                        sophisticated and cosmopolitan living experience.{' '}
                      </Typography>
                    </Grid>
                  </Grid>
                </Grid>
              ))}
              <Grid
                container
                item
                xs={12}
                sm={5.5}
                className="rounded-xl"
                sx={{
                  height: '400px',
                  padding: '15px ',
                  backgroundColor: '#1A2237',
                }}
              >
                <Grid
                  item
                  xs={12}
                  sx={{
                    height: '270px',
                    background: '#2D2D2D',
                    borderRadius: '8px',
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
                    borderRadius: '0px 0px 10px 10px ',
                  }}
                >
                  <Skeleton width="40%" sx={{ bgcolor: 'grey.600' }} />

                  <Grid className="flex justify-between items-start">
                    <Skeleton sx={{ bgcolor: 'grey.600' }} width="100%" />
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Container>
      </Grid>
      <Dialog
        fullScreen
        open={open}
        onClose={handleClose}
        TransitionComponent={Transition}
        sx={{ zIndex: '99999999' }}
      >
        <AppBar sx={{ position: 'relative', background: '#1A1A28' }}>
          <Toolbar>
            <Typography
              sx={{ ml: 2, flex: 1 }}
              variant="h6"
              component="div"
              className="font-bold fs14px"
            >
              Ship name
            </Typography>
            <Button autoFocus color="inherit" onClick={handleClose}>
              <CloseIcon />
            </Button>
          </Toolbar>
        </AppBar>
        <Grid
          className="h-full"
          sx={{
            background: '#131420',
          }}
        >
          <Canvas
            dpr={[1, 2]}
            shadows
            camera={{ fov: 45 }}
            // style={{ position: 'absolute' }}
          >
            <color attach="background" args={['#131420']} />
            <PresentationControls
              // speed={1.5}
              speed={5}
              global
              zoom={3}
              // polar={[-0.1, Math.PI / 4]}
              polar={[0, Math.PI / 10]}
            >
              <Stage environment={'sunset'}>
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
