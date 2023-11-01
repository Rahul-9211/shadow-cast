/**
 * This file is part of FourthStar User Dashboard
 *(c) 2023 ShadowCast.Io <craig@shadowcast.io>
 *------------------------------------------------------
 *@module user
 *@developer Sameer <sameer@shadowcast.io>
 */

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Grid, Typography, Button, Container, Slide } from '@mui/material';
import { Fade, Zoom } from 'react-reveal';

import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import SlickCard from 'components/slick/Index';

/* The above code is a React component called "Index". It renders a webpage that displays information
about an entertainment detail content, including its image, price, description,
and suggested related content. The component uses various React hooks and components, such as useState,
useNavigate, Grid, Typography, Button, Dialog, AppBar, and Stage, to create the
desired UI and functionality. */
const Index = () => {
  const navigate = useNavigate();

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
              src="https://fourthstar-userdashboard.s3.amazonaws.com/apt_4.png"
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
            sx={{ margin: '20px 0 5% 0' }}
            className="justify-between gap-x-5"
          >
            <Grid item sm={12} md={5.5} className="flex flex-col gap-y-4 pt-3">
              <Typography className="font-bold fs20px">
                Luminary Luxury - The Nebula
              </Typography>
              <Grid
                className="flex items-center gap-6"
                sx={{ marginBottom: '10px' }}
              >
                <img
                  src=""
                  className="d-border"
                  style={{
                    height: '50px',
                    width: '50px',
                    borderRadius: '50%',
                  }}
                />
                <Typography className="fs14px font-bold">
                  Fourth Star Entertainment
                </Typography>
              </Grid>
              <Typography className="fs14px">
                Now imagine this, you enter a medieval-decorated room with eerie
                walls and wooden beams. You’re surrounded by crystal pawns in
                abnormal sizes and notice that you’re standing on a giant
                checkerboard. What’s your next move? Once you open the door,
                there’s a liminal hallway with a pendant lamp swinging on top of
                you, your shadow swings in the same direction.
              </Typography>
            </Grid>
            <Grid
              item
              sm={12}
              md={5.5}
              sx={{ backgroundColor: '#1A2237' }}
              className="flex flex-col gap-y-10 rounded-2xl p-16  justify-center"
            >
              <Grid className="flex items-center gap-x-3">
                <MonetizationOnIcon
                  className="fs28px"
                  sx={{ color: 'yellow' }}
                />
                <Typography className="font-bold fs14px">
                  To access this premium content, subscribe to the channel.
                </Typography>
              </Grid>
              <Grid>
                <Button
                  className="capitalize w-full bg_btn c_white fs14px"
                  sx={{ marginBottom: '13px' }}
                >
                  Subscribe @2.1 XFS (23 US$)
                </Button>
              </Grid>
            </Grid>
          </Grid>

          <Grid
            container
            item
            xs={12}
            sx={{ marginBottom: '8rem' }}
            className="gap-8 justify-start"
          >
            <Grid item xs={12}>
              <Typography className="font-bold fs20px">Highlights</Typography>
            </Grid>

            {['', '', ''].map((item, i) => (
              <Grid container item xs={12} className="gap-y-2 flex-col ">
                <Typography className="fs16px font-bold">
                  witness celestial wonders
                </Typography>
                <Typography className="fs12px width70">
                  Celestial melodies by Ariana will take you on an interstellar
                  journey. Experience her enchanting performance that transcends
                  galaxies. Get ready to be captivated by her celestial talent.
                  Celestial melodies by Ariana will take you on an interstellar
                  journey. Experience her enchanting performance that transcends
                  galaxies. Get ready to be captivated by her celestial talent.
                </Typography>
              </Grid>
            ))}
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
            <Grid container item xs={12} className="gap-7">
              {['', '', ''].map((item, i) => (
                <Grid
                  item
                  xs={5.5}
                  sx={{
                    backgroundColor: '#1A2237',
                    minHeight: '280px',
                  }}
                  className=" rounded-2xl "
                ></Grid>
              ))}
            </Grid>
          </Grid>
          <Grid
            container
            item
            xs={12}
            sx={{ margin: '5rem 0' }}
            className=" gap-y-10"
          >
            <Grid item xs={12} sx={{ margin: '2rem 0' }}>
              <Typography className="font-bold fs20px ">
                Suggested Video
              </Typography>
            </Grid>

            <Grid container item xs={12}>
              <SlickCard
                data={['', '', '', '', '']}
                width="100%"
                height="250px"
              />
            </Grid>
          </Grid>
        </Container>
      </Grid>
    </>
  );
};

export default Index;
