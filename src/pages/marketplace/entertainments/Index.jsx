/**
 * This file is part of FourthStar User Dashboard
 *(c) 2023 ShadowCast.Io <craig@shadowcast.io>
 *------------------------------------------------------
 *@module user
 *@developer Sameer <sameer@shadowcast.io>
 */

import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Grid, Tab, Tabs, Typography, Container } from '@mui/material';
import { Fade, Zoom } from 'react-reveal';

import { TabPanel, a11yProps } from 'components/tabs/Index';
import Content_volumetric from 'pages/marketplace/entertainments/components/volumetric';
import Content_180 from 'pages/marketplace/entertainments/components/180';
import Content_360 from 'pages/marketplace/entertainments/components/360';
import Content_2d from 'pages/marketplace/entertainments/components/2d';
import Content_music from 'pages/marketplace/entertainments/components/music';
import Content_channels from 'pages/marketplace/entertainments/components/channels';

/* The `Index` component is a React functional component that represents a page in the FourthStar User
Dashboard. It displays a layout of Entertainment Page with category Volumetric, 180, 360, 2D, Music and Channels */
const Index = () => {
  const navigate = useNavigate();
  const { type } = useParams();

  const [allCategory] = useState([
    'Volumetric Video',
    '180 video',
    '360 Video',
    '2D Video',
    'Music',
    'Channels',
  ]);
  const [categoryPage] = useState([
    <Content_volumetric />,
    <Content_180 />,
    <Content_360 />,
    <Content_2d />,
    <Content_music />,
    <Content_channels />,
  ]);

  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    switch (newValue) {
      case 0:
        navigate('/marketplace/entertainments/volumetric');
        break;
      case 1:
        navigate('/marketplace/entertainments/180');
        break;
      case 2:
        navigate('/marketplace/entertainments/360');
        break;
      case 3:
        navigate('/marketplace/entertainments/2D');
        break;
      case 4:
        navigate('/marketplace/entertainments/music');
        break;
      case 5:
        navigate('/marketplace/entertainments/channels');
        break;
      default:
        break;
    }
  };

  useEffect(() => {
    if (type == 'volumetric') {
      setValue(0);
    } else if (type == '180') {
      setValue(1);
    } else if (type == '360') {
      setValue(2);
    } else if (type == '2D') {
      setValue(3);
    } else if (type == 'music') {
      setValue(4);
    } else if (type == 'channels') {
      setValue(5);
    }
  }, [type]);
  return (
    <>
      <Grid container item xs={12} className="fs24px">
        <Grid
          container
          item
          xs={12}
          className="relative rounded-2xl "
          sx={{ maxHeight: '420px' }}
        >
          <Zoom>
            <img
              src="https://fourthstar-userdashboard.s3.amazonaws.com/entertainments_1.png"
              alt="Network Problem"
              className="h-full w-full rounded-2xl"
              style={{
                objectFit: 'cover',
              }}
            />
          </Zoom>
          <Grid
            item
            xs={12}
            className="absolute top-0 left-0 h-full w-full flex justify-center flex-col gap-10 rounded-2xl"
            sx={{ background: 'rgba(0, 0, 0, 0.3)' }}
          >
            <Typography className="text-center fs32px font-bold">
              Welcome to Fourth Star Entertainment
            </Typography>
            <Typography className="text-center fs18px">
              Explore a Multitude of Captivating Experiences
            </Typography>
          </Grid>
        </Grid>
        <Container
          maxWidth={'xl'}
          sx={{
            padding: '0 !important',
          }}
        >
          <Grid
            container
            item
            xs={12}
            sx={{ margin: '20px 0 30px 0' }}
            className="justify-between"
          >
            <Grid
              item
              sm={12}
              md={2.2}
              lg={1.8}
              xl={1.5}
              className=" items-center gap-y-5 entertainment_tabs"
              sx={{
                flexDirection: 'row',
              }}
            >
              <Grid
                sx={{
                  position: 'sticky',
                  top: 80,
                }}
              >
                <Grid item xs={12} sx={{ marginBottom: '20px' }}>
                  <Typography className="fs14px c_gray font-bold">
                    Category
                  </Typography>
                </Grid>
                <Grid item xs={12}>
                  <Tabs
                    value={value}
                    onChange={handleChange}
                    allowScrollButtonsMobile={true}
                    scrollButtons="auto"
                    orientation="vertical"
                    variant="scrollable"
                    aria-label="scrollable force tabs example"
                    sx={{ width: '100%' }}
                  >
                    {allCategory?.map((category, i) => (
                      <Tab
                        label={category}
                        {...a11yProps(i)}
                        className="fs14px "
                        key={i}
                      />
                    ))}
                  </Tabs>
                </Grid>
              </Grid>
            </Grid>
            <Grid item sm={12} md={9.6} lg={10} xl={10.3}>
              {categoryPage?.map((page, i) => (
                <TabPanel value={value} index={i} key={i}>
                  {page}
                </TabPanel>
              ))}
            </Grid>
          </Grid>
        </Container>
      </Grid>
    </>
  );
};

export default Index;
