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
} from '@mui/material';
import { Fade, Zoom } from 'react-reveal';

/* The above code is a React component called "Index". It renders a grid layout with various sections
displaying information about Fourth Star Ships. */
const Index = () => {
  const navigate = useNavigate();

  return (
    <>
      <Grid container item xs={12} className="fs24px">
        <Grid
          container
          item
          xs={12}
          className="relative rounded-2xl"
          sx={{ maxHeight: '400px' }}
        >
          <Zoom>
            <img
              src="https://fourthstar-userdashboard.s3.amazonaws.com/ship_1.png"
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
            className="justify-center"
          >
            <Grid
              item
              sm={12}
              md={10}
              lg={10}
              className="flex flex-col items-center gap-y-5"
            >
              <Typography className="fs28px font-bold text-center width90">
                Fourth Star Apartments: A New Dimension of Living.
              </Typography>
              <Typography className="fs16px text-center width90">
                Explore ultimate metaverse living experience at Fourth Star
                Apartments. Our thoughtfully designed spaces combine luxury and
                cutting-edge technology to create a haven where gaming and
                entertainment thrive.{' '}
              </Typography>
            </Grid>
          </Grid>

          <Grid container item xs={12} className="gap-16 justify-center p-20">
            <Grid
              item
              xs={12}
              sm={5.5}
              md={5}
              lg={4.5}
              sx={{
                minHeight: '360px',
                backgroundColor: '#1A2237',
              }}
              className="p-10 flex flex-col gap-y-5 justify-center rounded-2xl items-center"
            >
              <Fade left>
                <img
                  src="https://fourthstar-userdashboard.s3.amazonaws.com/apt_2.png"
                  className="h-full w-full rounded-xl"
                  style={{
                    objectFit: 'contain',
                    height: '150px',
                    width: '150px',
                  }}
                />
                <Typography className=" fs20px font-bold text-center">
                  Experience Marketplace
                </Typography>
                <Typography className=" fs14px text-center">
                  Customise your Avatar, own your own Luxury Apartment and Space
                  Ship, Access Games and Virtual Concerts or just meet with your
                  friends. Discover unique and immersive virtual experiences .
                </Typography>
              </Fade>
            </Grid>
            <Grid
              item
              xs={12}
              sm={5.5}
              md={5}
              lg={4.5}
              sx={{
                minHeight: '360px',
                backgroundColor: '#1A2237',
              }}
              className="p-10 flex flex-col gap-y-5 justify-center rounded-2xl items-center"
            >
              <Fade right>
                <img
                  src="https://fourthstar-userdashboard.s3.amazonaws.com/apt_3.png"
                  className="h-full w-full rounded-xl"
                  style={{
                    objectFit: 'contain',
                    height: '150px',
                    width: '150px',
                  }}
                />
                <Typography className=" fs20px font-bold text-center">
                  Experience Marketplace
                </Typography>
                <Typography className=" fs14px text-center">
                  Customise your Avatar, own your own Luxury Apartment and Space
                  Ship, Access Games and Virtual Concerts or just meet with your
                  friends. Discover unique and immersive virtual experiences .
                </Typography>
              </Fade>
            </Grid>
            <Grid
              item
              xs={12}
              sm={5.5}
              md={5}
              lg={4.5}
              sx={{
                minHeight: '360px',
                backgroundColor: '#1A2237',
              }}
              className="p-10 flex flex-col gap-y-5 justify-center rounded-2xl items-center"
            >
              <Fade left>
                <img
                  src="https://fourthstar-userdashboard.s3.amazonaws.com/apt_4.png"
                  className="h-full w-full rounded-xl"
                  style={{
                    objectFit: 'contain',
                    height: '150px',
                    width: '150px',
                  }}
                />
                <Typography className=" fs20px font-bold text-center">
                  Experience Marketplace
                </Typography>
                <Typography className=" fs14px text-center">
                  Customise your Avatar, own your own Luxury Apartment and Space
                  Ship, Access Games and Virtual Concerts or just meet with your
                  friends. Discover unique and immersive virtual experiences .
                </Typography>
              </Fade>
            </Grid>
            <Grid
              item
              xs={12}
              sm={5.5}
              md={5}
              lg={4.5}
              sx={{
                minHeight: '360px',
                backgroundColor: '#1A2237',
              }}
              className="p-10 flex flex-col gap-y-5 justify-center rounded-2xl items-center"
            >
              <Fade right>
                <img
                  src="https://fourthstar-userdashboard.s3.amazonaws.com/apt_5.png"
                  className="h-full w-full rounded-xl"
                  style={{
                    objectFit: 'contain',
                    height: '150px',
                    width: '150px',
                  }}
                />
                <Typography className=" fs20px font-bold text-center">
                  Experience Marketplace
                </Typography>
                <Typography className=" fs14px text-center">
                  Customise your Avatar, own your own Luxury Apartment and Space
                  Ship, Access Games and Virtual Concerts or just meet with your
                  friends. Discover unique and immersive virtual experiences .
                </Typography>
              </Fade>
            </Grid>
          </Grid>
          <Grid container item xs={12} className=" gap-10">
            <Grid item xs={12}>
              <Typography className="font-bold fs18px">
                Explore Apartments
              </Typography>
            </Grid>

            {['', ''].map((item, i) => (
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
                className="rounded-xl cursor-pointer"
                key={i}
                onClick={() =>
                  navigate(`/marketplace/ships/Luminary Luxury - The Nebula`)
                }
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
                      Indulge in the opulence of these towering apartments that
                      capture the essence of a radiant galaxy, offering a
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
                  borderRadius: '8px ',
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
        </Container>
      </Grid>
    </>
  );
};

export default Index;
