/**
 * This file is part of FourthStar User Dashboard
 *(c) 2023 ShadowCast.Io <craig@shadowcast.io>
 *------------------------------------------------------
 *@module user
 *@developer Sameer <sameer@shadowcast.io>
 */

import React, { useEffect, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Button, Grid, Typography } from '@mui/material';

import StorefrontIcon from '@mui/icons-material/Storefront';

import Header from '../header/Index';
import Footer from 'components/footer/Index.jsx';

/* The code defines a functional component called `Index` that takes in a prop called `children`. */
const Index = ({ children }) => {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const [active, setActive] = useState('');

  useEffect(() => {
    console.log('sidebar', pathname);
    if (pathname) {
      let arr = pathname.split('/');
      setActive(arr.includes('marketplace') ? 'marketplace' : '');
    }
  }, [pathname]);
  return (
    <>
      <Header />
      <Grid container item xs={12} className="bg_black c_white">
        {/* <Container
          // maxWidth={'xl'}
          className="h-full"
          xs={4}
          md={3}
          lg={2}
          sx={{
            padding: '0 !important',
          }}
        > */}
        <Grid container item xs={12} className="h-full flex relative">
          <Grid
            item
            sm={1.5}
            md={1}
            lg={0.8}
            className=" fs16px flex gap-y-7 flex-col "
            flexDirection="column"
            sx={{
              backgroundColor: '#1A1A28',
              minHeight: '93vh',
              // maxWidth: '115px !important',
            }}
          >
            <Grid
              className=" fs16px flex gap-y-7 flex-col sticky left-3 p-3"
              flexDirection="column"
              sx={{
                top: '80px',
              }}
            >
              <Button
                className="  capitalize c_white flex flex-col gap-y-2"
                sx={
                  {
                    // top: '80px !important',
                  }
                }
                onClick={() => navigate('/marketplace/apartments')}
              >
                <img
                  src={
                    active == 'marketplace'
                      ? 'https://fourthstar-userdashboard.s3.amazonaws.com/marketplace_active.png'
                      : 'https://fourthstar-userdashboard.s3.amazonaws.com/marketplace.png'
                  }
                  style={{ height: '35px' }}
                />
                {/* <marketPlacePng className="fs28px" /> */}
                <Typography className="fs12px font-bold">
                  Merketplace
                </Typography>
              </Button>
              <Button className="  capitalize c_white flex flex-col gap-y-2">
                {/* <StorefrontIcon className="fs28px c_gray" /> */}
                <img
                  src="https://fourthstar-userdashboard.s3.amazonaws.com/asset.png"
                  style={{ height: '35px' }}
                />
                <Typography className="fs12px font-bold">Assets</Typography>
              </Button>
              <Button className="  capitalize c_white flex flex-col gap-y-2">
                {/* <StorefrontIcon className="fs28px" /> */}
                <img
                  src="https://fourthstar-userdashboard.s3.amazonaws.com/friends.png"
                  style={{ height: '30px' }}
                />

                <Typography className="fs12px font-bold">Friends</Typography>
              </Button>
              <Button className="  capitalize c_white flex flex-col gap-y-2">
                {/* <StorefrontIcon className="fs28px" /> */}
                <img
                  src="https://fourthstar-userdashboard.s3.amazonaws.com/settings.png"
                  style={{ height: '35px' }}
                />

                <Typography className="fs12px font-bold">Setting</Typography>
              </Button>
            </Grid>
          </Grid>
          <Grid
            container
            item
            sm={10.4}
            md={11}
            lg={11.2}
            className=""
            sx={{ marginTop: '70px' }}
          >
            {children}
          </Grid>
        </Grid>
        {/* </Container> */}
      </Grid>
      <Footer />
    </>
  );
};

export default Index;
