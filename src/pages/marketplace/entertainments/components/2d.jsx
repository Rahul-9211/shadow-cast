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

import Card from 'components/card/video/index';

/*It defines a
component called `Index` that renders a list of 2D Video cards. */
const Index = () => {
  const navigate = useNavigate();

  const [list, setList] = useState([
    { name: 'StellarVerse Spectacle: Cosmic Symphony', price: '' },
    { name: 'StellarVerse Spectacle: Cosmic Symphony', price: 9.99 },
    { name: 'StellarVerse Spectacle: Cosmic Symphony', price: '' },
    { name: 'StellarVerse Spectacle: Cosmic Symphony', price: 99 },
    { name: 'StellarVerse Spectacle: Cosmic Symphony', price: '' },
    { name: 'StellarVerse Spectacle: Cosmic Symphony', price: '' },
    { name: 'StellarVerse Spectacle: Cosmic Symphony', price: '' },
  ]);

  return (
    <>
      <Grid container item xs={12} className="fs24px justify-center">
        <Grid container item xs={11} sm={12} className="gap-16">
          <Grid item xs={12}>
            <Typography className="fs20px font-bold">2D Video</Typography>
          </Grid>

          {list?.map((item, i) => (
            <Card
              data={item}
              key={i}
              redirect={'/marketplace/entertainments/2D'}
            />
          ))}
        </Grid>
      </Grid>
    </>
  );
};

export default Index;
