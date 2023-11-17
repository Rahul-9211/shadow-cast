/**
 * This file is part of FourthStar Auth Layout
 *(c) 2023 ShadowCast.Io <craig@shadowcast.io>
 *------------------------------------------------------
 *@module AuthLayout
 *@developer Sudhanshu 
 */

// import React, { useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';
import { Box, Grid, Container } from '@mui/material';
import logo from "assets/images/logo.png";
import { NavLink } from 'react-router-dom';
// import StorefrontIcon from '@mui/icons-material/Storefront';
import Footer from 'components/footer/Index.jsx';

/* The code defines a functional component called `Index` that render children using outlet */
const Index = () => {
    return (<div className='relative overflow-hidden'>
        <Box className="leftShadow"></Box>
        <Box className="rightShadow"></Box>
        <Grid container className='min-h-auth-m xl:min-h-auth relative'>
            <Container maxWidth="xl" className='!flex flex-wrap items-center justify-center p-36 md:py-32'>
                <NavLink to='/'><img
                    src={logo}
                    className="cursor-pointer auth-logo absolute"
                    alt="Network problem"
                /></NavLink>
                <Outlet />
            </Container>
        </Grid>
        <Footer />
    </div>
    );
};

export default Index;
