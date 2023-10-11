/**
 * This file is part of FourthStar Auth Layout
 *(c) 2023 ShadowCast.Io <craig@shadowcast.io>
 *------------------------------------------------------
 *@module AuthLayout
 *@developer Sudhanshu 
 */

import React, { useEffect, useState } from 'react';
import { useNavigate, useLocation, Outlet } from 'react-router-dom';
import { Box, Grid, Container } from '@mui/material';
import logo from "assets/images/logo.png";
import StorefrontIcon from '@mui/icons-material/Storefront';

import Footer from 'components/footer/Index.jsx';
import ImgTest from 'assets/images/test_bg.png';

/* The code defines a functional component called `Index` that takes in a prop called `children`. */
const Index = () => {
    const navigate = useNavigate();
    const { pathname } = useLocation();


    return (<div className='relative overflow-hidden'>
        <Box className="leftShadow"></Box>
        <Box className="rightShadow"></Box>
        <Grid container className='min-h-auth-m xl:min-h-auth relative'>
            <Container maxWidth="xl" className='!flex flex-wrap items-center justify-center p-36 md:py-32'>
                <img
                    src={logo}
                    className="cursor-pointer auth-logo absolute"
                    alt="Network problem"
                />
                <Outlet />
            </Container>
        </Grid>
        <Footer />
    </div>
    );
};

export default Index;
