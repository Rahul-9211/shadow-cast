/**
 * This file is part of FourthStar User Dashboard
 *(c) 2023 ShadowCast.Io <craig@shadowcast.io>
 *------------------------------------------------------
 *@module user
 *@developer Sameer <sameer@shadowcast.io>
 */

import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import {
  Box,
  Button,
  Container,
  Grid,
  Typography,
  Tab,
  Tabs,
} from '@mui/material';
import { Fade, Zoom } from 'react-reveal';
import LockIcon from '@mui/icons-material/Lock';
import { TabPanel, a11yProps } from 'components/tabs/Index';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

import Content_volumetric from 'pages/marketplace/entertainments/components/volumetric';
import Content_180 from 'pages/marketplace/entertainments/components/180';
import Content_360 from 'pages/marketplace/entertainments/components/360';
import Content_2d from 'pages/marketplace/entertainments/components/2d';
import Content_music from 'pages/marketplace/entertainments/components/music';

/* The above code is a React component called "Index". It is rendering a page that displays different
categories of channels content. */
const Index = () => {
  const navigate = useNavigate();
  const { type, channelId, channelContentId } = useParams();
  const [allCategory] = useState([
    { label: 'Volumetric video', coming: false },
    { label: '180 video', coming: false },
    { label: '360 video', coming: false },
    { label: '2D video', coming: false },
    { label: 'Music', coming: false },
  ]);
  const [categoryPage] = useState([
    <Content_volumetric />,
    <Content_180 />,
    <Content_360 />,
    <Content_2d />,
    <Content_music />,
  ]);
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    switch (newValue) {
      case 0:
        navigate(`/marketplace/entertainments/${type}/${channelId}/volumetric`);
        break;
      case 1:
        navigate(`/marketplace/entertainments/${type}/${channelId}/180`);
        break;
      case 2:
        navigate(`/marketplace/entertainments/${type}/${channelId}/360`);
        break;
      case 3:
        navigate(`/marketplace/entertainments/${type}/${channelId}/2D`);
        break;
      case 4:
        navigate(`/marketplace/entertainments/${type}/${channelId}/music`);
        break;
      default:
        break;
    }
  };

  useEffect(() => {
    if (channelContentId == 'volumetric') {
      setValue(0);
    } else if (channelContentId == '180') {
      setValue(1);
    } else if (channelContentId == '360') {
      setValue(2);
    } else if (channelContentId == '2D') {
      setValue(3);
    } else if (channelContentId == 'music') {
      setValue(4);
    } else if (channelContentId == 'channels') {
      setValue(5);
    }
  }, [channelContentId]);

  return (
    <>
      <Grid container item xs={12} className="fs24px">
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
            sx={{
              background:
                'linear-gradient(0deg, rgba(19,20,32,1) 0%, rgba(255,255,255,0) 100%)',
            }}
          >
            {/* <Typography className="text-center fs18px">
              Welcome to Fourth Star
            </Typography>
            <Typography className="text-center fs28px font-bold">
              Create Your Own Reality
            </Typography> */}
          </Grid>
          <Button
            className=" fs14px capitalize c_white"
            sx={{
              position: 'absolute',
              top: '7%',
              left: '3%',
              background: '#979797',
              borderRadius: '20px',
            }}
            onClick={() => navigate(`/marketplace/entertainments/${type}`)}
          >
            <ArrowBackIcon className="fs16px mr-3" /> back
          </Button>
        </Grid>
        <Container
          maxWidth={'xl'}
          sx={{
            padding: '0',
            marginTop: '-4%',
            zIndex: 999,
            marginBottom: '3rem',
          }}
          className="p-0"
        >
          <Grid container item xs={12} className="marketplace_tabs">
            <Box sx={{ width: '100%', borderBottom: 'none' }}>
              <Box
                sx={{
                  borderBottom: 20,
                  borderColor: 'divider',
                  position: 'sticky',
                  top: '75px',
                  border: 'none',
                  margin: '0 0 20px',
                  // backgroundColor: '#131420',
                  // background: 'rgb(34,193,195)',
                  background:
                    'linear-gradient(0deg, rgba(19,20,32,1) 0%, rgba(255,255,255,0) 100%)',
                }}
              >
                <Grid
                  container
                  item
                  xs={12}
                  className="flex items-center gap-x-20 justify-between"
                  sx={{
                    // margin: '20px 0px',
                    marginBottom: '15px',
                  }}
                >
                  <Grid className="flex items-center gap-6">
                    <img
                      src=""
                      className="d-border"
                      style={{
                        height: '150px',
                        width: '150px',
                        borderRadius: '50%',
                      }}
                    />
                    <Typography className="fs24px font-bold">
                      Fourth Star Entertainment
                    </Typography>
                  </Grid>
                  <Grid>
                    <Button className="capitalize w-full d-border c_white fs14px btn_hover_effect font-bold">
                      <LockIcon className="mr-3 fs18px" /> Subscribe @2.4 XFS
                      ($24.89)
                    </Button>
                  </Grid>
                </Grid>
                <Tabs
                  value={value}
                  onChange={handleChange}
                  aria-label="scrollable auto basic tabs example"
                  allowScrollButtonsMobile={true}
                  scrollButtons="auto"
                >
                  {allCategory?.map((category, i) => (
                    <Tab
                      label={
                        !category?.coming ? (
                          category?.label
                        ) : (
                          <Typography className="fs14px">
                            {category?.label}
                            <span
                              style={{
                                background: '#6863FF',
                                padding: '2px 6px',
                                marginLeft: '5px',
                              }}
                              className="c_white rounded-md"
                            >
                              Coming soon
                            </span>
                          </Typography>
                        )
                      }
                      {...a11yProps(i)}
                      className="fs16px "
                      key={i}
                    />
                  ))}
                </Tabs>
              </Box>
              {categoryPage?.map((page, i) => (
                <TabPanel value={value} index={i} key={i}>
                  {page}
                </TabPanel>
              ))}
            </Box>
          </Grid>
        </Container>
      </Grid>
    </>
  );
};

export default Index;
