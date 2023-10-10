/**
 * This file is part of FourthStar User Dashboard
 *(c) 2023 ShadowCast.Io <craig@shadowcast.io>
 *------------------------------------------------------
 *@module user
 *@developer Sameer <sameer@shadowcast.io>
 */

import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Box, Grid, Tab, Tabs, Typography } from '@mui/material';
import { Fade, Zoom } from 'react-reveal';

import { TabPanel, a11yProps } from 'components/tabs/Index';
import Apartments from 'pages/marketplace/apartments/Index';
import Ships from 'pages/marketplace/ships/Index';
import Entertainments from 'pages/marketplace/entertainments/Index';
import ImgTest from 'assets/images/test_bg.png';

/* The code defines a functional component called `Index` that serves as a marketplace page with tabs. */
const Index = (props) => {
  const navigate = useNavigate();
  const [allCategory] = useState([
    { label: 'Apartment', coming: false },
    { label: 'Ships', coming: false },
    { label: 'Entertainment', coming: false },
    { label: 'Clothing', coming: false },
    { label: 'Games', coming: true },
    { label: 'Companion', coming: true },
  ]);
  const [value, setValue] = useState(0);

  /**
   * The handleChange function is used to navigate to different pages based on the selected value.
   */
  const handleChange = (event, newValue) => {
    switch (newValue) {
      case 0:
        navigate('/marketplace/apartments');
        break;
      case 1:
        navigate('/marketplace/ships');
        break;
      case 2:
        navigate('/marketplace/entertainments/volumetric');
        break;
      default:
        break;
    }
  };

  useEffect(() => {
    if (props?.value) setValue(+props?.value);
  }, [props]);
  return (
    <>
      <Grid container item xs={12} className="fs24px">
        <Grid
          container
          item
          xs={12}
          sx={{ margin: '20px 35px' }}
          className="marketplace_tabs"
        >
          <Box sx={{ width: '100%', zIndex: 5 }}>
            <Box sx={{ borderBottom: 20, borderColor: 'divider', zIndex: 5 }}>
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
                              marginLeft: '5px',
                            }}
                            className="fs10px rounded-md d_color"
                          >
                            Coming soon
                          </span>
                        </Typography>
                      )
                    }
                    {...a11yProps(i)}
                    className="fs14px "
                    key={i}
                    sx={{ zIndex: 5 }}
                  />
                ))}
              </Tabs>
            </Box>
            <TabPanel value={value} index={0}>
              <Apartments />
            </TabPanel>
            <TabPanel value={value} index={1}>
              <Ships />
            </TabPanel>
            <TabPanel value={value} index={2}>
              <Entertainments />
            </TabPanel>
          </Box>
        </Grid>
      </Grid>
    </>
  );
};

export default Index;
