/**
 * This file is part of FourthStar User Dashboard
 *(c) 2023 ShadowCast.Io <craig@shadowcast.io>
 *------------------------------------------------------
 *@module user
 *@developer Sameer <sameer@shadowcast.io>
 */

 import React, { useEffect, useState } from 'react';
 import { useNavigate, useLocation, Outlet } from 'react-router-dom';
 import { Button, Grid, Typography } from '@mui/material';
 
 import StorefrontIcon from '@mui/icons-material/Storefront';
 
 import Header from 'components/header/Index';
 import Footer from 'components/footer/Index.jsx';
 import ImgTest from 'assets/images/test_bg.png';
 
 /* The code defines a functional component called `Index` that takes in a prop called `children`. */
 const Index = () => {
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
 
     {/* {console.log('cleideren',children)} */}
       <Header />
       <Outlet/>
       {/* <Grid 
         container
         item
         xs={12}
         className="h-full flex relative d_bg"
         sx={{
           // borderBottom: '1px solid red',
           marginTop: '85px',
         }}
       >
         <Grid
           container
           item
           sm={12}
           md={12}
           lg={12}
           className=""
           sx={{ width: '100vw', overflow: 'hidden' }}
         >
           {children} // chooose one either child or Outlet
           <Outlet/>
         </Grid>
       </Grid> */}
       {/* </div> */}
       {/* </Container> */}
       {/* </Grid> */}
       <Footer />
     </>
   );
 };
 
 export default Index;