/**
 * This file is part of FourthStar User Dashboard
 *(c) 2023 ShadowCast.Io <craig@shadowcast.io>
 *------------------------------------------------------
 *@module user
 *@developer Sameer <sameer@shadowcast.io>
 */

import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Grid, Typography } from '@mui/material';
import { Fade, Zoom } from 'react-reveal';
import Slider from 'react-slick';

/*It defines a
component called `Index` that renders a list of Channels cards. */
const Index = ({ data, key, width, height, redirect }) => {
  const navigate = useNavigate();

  const settings = {
    className: 'center',
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2.2,
          // slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1.6,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const Card = (i) => (
    <Grid
      container
      item
      xs={12}
      className="flex flex-row gap-y-3  rounded-2xl cursor-pointer"
      key={i}
      onClick={() => navigate(`${redirect}/:id`)}
    >
      <Grid
        item
        xs={12}
        sx={{
          backgroundColor: '#1A2237',
          minHeight: height || '230px',
        }}
        className=" rounded-2xl "
      ></Grid>
      <Grid item xs={12} className="pl-1">
        <Typography className="fs12px">{'Test'}</Typography>
        <Typography className={`fs14px font-bold c_25B39E`}>Free</Typography>
      </Grid>
    </Grid>
  );

  return (
    <>
      <Slider {...settings} style={{ width: width || '93%', margin: '0 auto' }}>
        {data?.map((item, i) => (
          <Card key={i} />
        ))}
      </Slider>
    </>
  );
};

export default Index;
