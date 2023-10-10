/**
 * This file is part of FourthStar User Dashboard
 *(c) 2023 ShadowCast.Io <craig@shadowcast.io>
 *------------------------------------------------------
 *@module user
 *@developer Sameer <sameer@shadowcast.io>
 */

import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Avatar, Badge, Button, Grid } from '@mui/material';
import { LightSpeed } from 'react-reveal';

import SearchIcon from '@mui/icons-material/Search';
// import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';

/* nav bar */
const Index = () => {
  const navigate = useNavigate();
  return (
    <Grid
      container
      item
      xs={12}
      sx={{
        height: '85px',
        zIndex: '9999',
        background: '#000000',
      }}
      className=" c_white p-6 fixed top-0 nav_bg"
    >
      <Grid container item xs={12} className="h-full justify-between">
        <Grid
          container
          item
          xs={12}
          sm={6}
          className="h-full"
          sx={{ gap: '3rem', alignItems: 'center' }}
        >
          <LightSpeed>
            <img
              src="https://fourthstar-userdashboard.s3.amazonaws.com/logo.png"
              className="cursor-pointer w-96"
              alt="Network problem"
              onClick={() => navigate('/')}
            />
          </LightSpeed>
          <LightSpeed>
            <Button
              className="capitalize c_white fs14px"
              // sx={{ padding: '5px 15px' }}
              onClick={() => navigate('/marketplace/apartments')}
            >
              Marketplace
            </Button>
          </LightSpeed>
        </Grid>

        <Grid item className="flex items-center gap-x-10">
          <Badge badgeContent={7} color="secondary">
            <NotificationsNoneIcon className="fs24px cursor-pointer icon_hover_effect" />
          </Badge>
          <SearchIcon className="fs24px cursor-pointer icon_hover_effect " />
          <Button
            className="capitalize c_white bg_btn fs12px rounded-3xl btn_hover_effect_opposite d-border"
            sx={{ padding: '5px 15px' }}
          >
            Logout
          </Button>

          <Avatar sx={{ backgroundColor: '#44345F' }}>NE</Avatar>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Index;
