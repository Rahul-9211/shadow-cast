/**
 * This file is part of FourthStar User Dashboard
 *(c) 2023 ShadowCast.Io <craig@shadowcast.io>
 *------------------------------------------------------
 *@module user
 *@developer Sameer <sameer@shadowcast.io>
 */

import React from 'react';
import { Button, Grid } from '@mui/material';
import InstagramIcon from '@mui/icons-material/Instagram';

// footer
const Index = () => {
  return (
    <Grid
      container
      item
      xs={12}
      sx={{
        height: '90px',
        backgroundColor: '#000000',
      }}
      className=" c_white p-5 nav_bg"
    >
      {/* <Container
        // maxWidth={'xl'}
        className="h-full"
      > */}
      <Grid container item xs={12} className="h-full flex justify-center">
        <Grid item className=" fs16px flex gap-x-10 c_white items-center">
          <Button className=" fs16px capitalize footer_btn">
            Privacy Policy
          </Button>
          <Button className=" fs16px capitalize footer_btn">
            Terms & Condition
          </Button>
          <Button className=" fs16px capitalize footer_btn">
            <InstagramIcon className="fs24px footer_btn" />
          </Button>
          <Button className=" fs16px capitalize footer_btn">
            <img
              src="https://fourthstar-userdashboard.s3.amazonaws.com/facebook_icon.png"
              className="footer_btn_img"
            />
          </Button>
          <Button className=" fs16px capitalize footer_btn">
            <img
              src="https://fourthstar-userdashboard.s3.amazonaws.com/twitter_Icon.png"
              className="footer_btn_img"
            />
          </Button>
          <Button className=" fs16px capitalize footer_c_gray">
            <img
              src="https://fourthstar-userdashboard.s3.amazonaws.com/youtube_icon.png"
              className="footer_btn_img"
            />
          </Button>
        </Grid>
      </Grid>
      {/* </Container> */}
    </Grid>
  );
};

export default Index;
