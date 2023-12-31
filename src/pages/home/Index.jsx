/**
 * This file is part of FourthStar User Dashboard
 *(c) 2023 ShadowCast.Io <craig@shadowcast.io>
 *------------------------------------------------------
 *@module user
 *@developer Sameer <sameer@shadowcast.io>
 */

import React, { useState } from 'react';
import { Container, Grid, Typography } from '@mui/material';
import { Fade, Zoom } from 'react-reveal';

/* The above code is a React component called "Index". It renders a grid layout with multiple sections,
each containing an image and some text. The component uses various React and Material-UI components
and styles to create a visually appealing and responsive layout. The purpose of the code is to
showcase different features and aspects of the Fourth Star platform, such as the experience
marketplace, collectible assets, ultimate gaming, and connecting with friends in the metaverse. */
const Index = () => {
  return (
    <>
      <Grid
        container
        item
        xs={12}
        className="fs24px"
        sx={{ backgroundColor: 'rgba(77,167,255,0.15)' }}
      >
        <Grid
          container
          item
          xs={12}
          className="relative"
          sx={{ height: '50vh' }}
        >
          <Zoom>
            <img
              src="https://fourthstar-userdashboard.s3.amazonaws.com/home_1.png"
              alt="Network Problem"
              className="h-full w-full"
              style={{
                objectFit: 'cover',
              }}
            />
          </Zoom>

          <Grid
            item
            xs={12}
            className="absolute top-0 left-0 h-full w-full flex justify-center flex-col"
            // sx={{ background: 'rgba(0, 0, 0, 0.0)' }}
          >
            <Typography className="text-center fs18px c_white">
              Welcome to Fourth Star
            </Typography>
            <Typography className="text-center fs28px font-bold c_white">
              Create Your Own Reality
            </Typography>
          </Grid>
        </Grid>
        <Container maxWidth={'xl'}>
          <Grid
            container
            item
            xs={12}
            className="gap-10 justify-between p-20 py-52"
          >
            <Grid
              item
              xs={12}
              sm={5.5}
              sx={{ maxHeight: '380px' }}
              className="pl-10 flex flex-col gap-y-10 justify-center"
            >
              <Fade left>
                <Typography className=" fs24px font-bold c_white">
                  Experience Marketplace
                </Typography>
                <Typography className=" fs16px c_white">
                  Customise your Avatar, own your own Luxury Apartment and Space
                  Ship, Access Games and Virtual Concerts or just meet with your
                  friends. Discover unique and immersive virtual experiences
                  that will elevate your journey within the metaverse.
                </Typography>
              </Fade>
            </Grid>
            <Grid
              item
              xs={12}
              sm={6}
              sx={{
                maxHeight: '380px',
                // boxShadow:
                //   '0px 0px 206px 11px rgba(77,167,255,0.15),inset 0px 0px 206px 11px rgba(77,167,255,0.14)',
              }}
              className="rounded-2xl relative"
            >
              <Grid
                className=" absolute w-full h-full z-0"
                sx={{
                  top: 0,
                  borderRadius: '50%',
                  boxShadow: '0px 0px 500px -80px #FFE9C9',
                }}
              ></Grid>
              <Fade>
                <img
                  src="https://fourthstar-userdashboard.s3.amazonaws.com/home_2.png"
                  alt="Network Problem"
                  className="h-full w-full rounded-2xl"
                  style={{
                    objectFit: 'cover',
                  }}
                />
              </Fade>
            </Grid>
          </Grid>
          <Grid
            container
            item
            xs={12}
            className="gap-10 justify-between p-20 py-52"
          >
            <Grid
              item
              xs={12}
              sm={6}
              sx={{
                maxHeight: '380px',
                // boxShadow:
                //   '0px 0px 206px 11px rgba(77,167,255,0.15),inset 0px 0px 206px 11px rgba(77,167,255,0.14)',
              }}
              className="rounded-2xl relative"
            >
              <Grid
                className=" absolute w-full h-full z-0"
                sx={{
                  top: 0,
                  borderRadius: '50%',
                  boxShadow: '0px 0px 500px -80px #FFE9C9',
                }}
              ></Grid>
              <Fade>
                <img
                  src="https://fourthstar-userdashboard.s3.amazonaws.com/home_new_3.png"
                  alt="Network Problem"
                  className="h-full w-full rounded-2xl"
                  style={{
                    objectFit: 'cover',
                  }}
                />
              </Fade>
            </Grid>
            <Grid
              item
              xs={12}
              sm={5.5}
              sx={{
                maxHeight: '380px',
              }}
              className=" flex flex-col gap-y-10 justify-center"
            >
              <Fade right>
                <Typography className=" fs24px font-bold c_white">
                  Collectible Assets
                </Typography>
                <Typography className=" fs16px c_white">
                  Organize and manage your Metaverse Assets effortlessly with
                  our intuitive interface. Easily browse through your avatar
                  collection, swap outfits, and mix and match accessories to
                  create a unique digital persona that represents you.
                </Typography>
              </Fade>
            </Grid>
          </Grid>
          <Grid
            container
            item
            xs={12}
            className="gap-10 justify-between p-20 py-52"
          >
            <Grid
              item
              xs={12}
              sm={5.5}
              sx={{ maxHeight: '380px' }}
              className="pl-10 flex flex-col gap-y-10 justify-center"
            >
              <Fade left>
                <Typography className=" fs24px font-bold c_white ">
                  Ultimate Gaming
                </Typography>
                <Typography className=" fs16px c_white">
                  Dive into a dynamic and interconnected digital universe where
                  you can embark on thrilling adventures, engage in epic quests,
                  and participate in unforgettable multiplayer battles. Get
                  ready to level up your gaming journey like never before!
                </Typography>
              </Fade>
            </Grid>
            <Grid
              item
              xs={12}
              sm={6}
              sx={{
                maxHeight: '380px',
                // boxShadow:
                //   '0px 0px 206px 11px rgba(77,167,255,0.15),inset 0px 0px 206px 11px rgba(77,167,255,0.14)',
              }}
              className="rounded-2xl relative"
            >
              <Grid
                className=" absolute w-full h-full z-0"
                sx={{
                  top: 0,
                  borderRadius: '50%',
                  boxShadow: '0px 0px 500px -80px #FFE9C9',
                }}
              ></Grid>
              <Fade>
                <img
                  src="https://fourthstar-userdashboard.s3.amazonaws.com/home_4.png"
                  alt="Network Problem"
                  className="h-full w-full rounded-2xl"
                  style={{
                    objectFit: 'cover',
                  }}
                />
              </Fade>
            </Grid>{' '}
            .
          </Grid>
          <Grid
            container
            item
            xs={12}
            className="gap-10 justify-between p-20 py-52"
          >
            <Grid
              item
              xs={12}
              sm={6}
              sx={{
                maxHeight: '380px',
              }}
              className="rounded-2xl relative"
            >
              <Grid
                className=" absolute w-full h-full z-0"
                sx={{
                  top: 0,
                  borderRadius: '50%',
                  boxShadow: '0px 0px 500px -80px #FFE9C9',
                }}
              ></Grid>
              <Fade>
                <img
                  src="https://fourthstar-userdashboard.s3.amazonaws.com/home_5.png"
                  alt="Network Problem"
                  className="h-full w-full rounded-2xl z-10"
                  style={{
                    objectFit: 'cover',
                  }}
                />
              </Fade>
            </Grid>
            <Grid
              item
              xs={12}
              sm={5.5}
              sx={{ maxHeight: '380px' }}
              className=" flex flex-col gap-y-10 justify-center"
            >
              <Fade right>
                <Typography className=" fs24px font-bold c_white">
                  {' '}
                  Friends{' '}
                </Typography>
                <Typography className=" fs16px c_white">
                  Connect, explore, and create unforgettable memories with
                  friends in our immersive metaverse. Join forces, embark on
                  epic adventures, and forge unbreakable bonds as you navigate a
                  world beyond imagination. Together, the possibilities are
                  limitless!
                </Typography>
              </Fade>
            </Grid>
          </Grid>
        </Container>
      </Grid>
    </>
  );
};

export default Index;
