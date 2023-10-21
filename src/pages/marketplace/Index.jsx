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
 
 const customTabsStyle = {
  '& .MuiTabs-indicator': {
    backgroundColor: 'transparent',
    border: 'none',
  },
};

 /* The code defines a functional component called `Index` that serves as a marketplace page with tabs. */
 const Index = (props) => {
   const navigate = useNavigate();
   const [allCategory] = useState([
     { label: 'Apartment', coming: false },
     { label: 'Ships', coming: false },
     { label: 'Entertainment', coming: false },
     { label: 'Clothing', coming: true },
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
     <Box className="wrapper-container">
       <Box >
         <Box
           container
           item
           xs={12}
           sx={{ margin: '20px 35px' }}
           className="marketplace_tabs font-text"
         >
           <Box sx={{ width: '100%', zIndex: 5 }}>
             <Box sx={{ borderColor: 'divider', zIndex: 5 }}>
               <Tabs
                 value={value}
                 onChange={handleChange}
                 aria-label="scrollable auto basic tabs example"
                 allowScrollButtonsMobile={true}
                 scrollButtons="auto"
                 style={customTabsStyle}
                 className="custom-tabs mb-8 font-text px-1"
               >
                 {allCategory?.map((category, i) => (
                   <Tab
                     label={ !category?.coming ?   <p className='font-normal text-sm font-text'>{category?.label}</p>  : (
                         <p className="font-normal text-sm font-text">
                           {category?.label}
                           <span
                             style={{
                               marginLeft: '5px',
                             }}
                             className=" rounded-md d_color text-xs font-text"
                           >
                             Coming soon
                           </span>
                         </p>
                       )
                     }
                     {...a11yProps(i)}
                     className="text-lg  font-normal "
                     key={i}
                     sx={{ zIndex: 1 }}
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
         </Box>
       </Box>
 
     </Box>
     </>
   );
 };
 
 export default Index;