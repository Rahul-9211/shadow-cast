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

import SlickCard from 'components/slick/Index.jsx';

/*It defines a
component called `Index` that renders a list of Channels cards. */
const Index = ({ data, key, redirect }) => {
  const navigate = useNavigate();

  const [list, setList] = useState([
    { name: 'StellarVerse Spectacle: Cosmic Symphony', price: 9.99 },
    { name: 'StellarVerse Spectacle: Cosmic Symphony', price: '' },
    { name: 'StellarVerse Spectacle: Cosmic Symphony', price: 99 },
    { name: 'StellarVerse Spectacle: Cosmic Symphony', price: 99 },
    { name: 'StellarVerse Spectacle: Cosmic Symphony', price: 99 },
    { name: 'StellarVerse Spectacle: Cosmic Symphony', price: 99 },
  ]);

  return (
    <>
      <Grid container item xs={12} className="fs24px justify-center">
        <Grid container item xs={12} className="gap-8">
          <Grid
            // container
            item
            xs={12}
            className="flex items-center gap-x-20"
          >
            <Grid className="flex items-center gap-6">
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
            <Typography
              className="fs10px d_color cursor-pointer font-bold"
              onClick={() =>
                navigate(`${redirect}/fourth-star-entertainment/volumetric`)
              }
            >
              See more
            </Typography>
          </Grid>
          <SlickCard data={list} redirect={redirect} />
        </Grid>
      </Grid>
    </>
  );
};

export default Index;
