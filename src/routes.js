/**
 * This file is part of FourthStar User Dashboard
 *(c) 2023 ShadowCast.Io <craig@shadowcast.io>
 *------------------------------------------------------
 *@module user
 *@developer Sameer <sameer@shadowcast.io>
 */

// /* eslint-disable no-unused-vars */

import Home from 'pages/home/Index';
import Marketplace from 'pages/marketplace/Index';
import ApartmentDetail from 'pages/marketplace/apartments/detail/Index.jsx';
import ShipsDetail from 'pages/marketplace/ships/detail/Index.jsx';
import EntertainmentDetail from 'pages/marketplace/entertainments/detail/Index.jsx';
import EntertainmentChannel from 'pages/marketplace/entertainments/channel/Index.jsx';
import SignUp from 'pages/auth/signup';
import Layout from 'layout/Index.jsx';
import AuthLayout from 'AuthLayout/index';
import SignIn from "pages/auth/signIn/index";
import OtpVerification from 'pages/auth/forgot-password/otp-verification';
import ConfirmPassword from 'pages/auth/forgot-password/confirm-password';
import { MyAssets } from 'pages/myassets';
import DetailPage from 'pages/marketplace/detailTab/DetailTab';

/* The code is exporting a default function that returns an array of route objects. Each route object
represents a specific route in a web application. */
// eslint-disable-next-line
// export default function () {
const routes = [
  {
    name: 'Home',
    key: 'home',
    route: '/',
    component: <Home />,
    useLayout: <Layout />,
  },
  {
    name: 'Marketplace',
    key: 'marketplace',
    route: '/marketplace',
    component: <Marketplace value="0" />,
    useLayout: <Layout />,
  },
  {
    name: 'Marketplace-Apartments',
    key: 'marketplace-apartments',
    route: '/marketplace/apartments',
    component: <Marketplace value="0" />,
    useLayout: <Layout />,
  },
  {
    name: 'Marketplace-Apartments-Details',
    key: 'marketplace-apartments-details',
    route: '/marketplace/apartments/:apartment_name',
    // component: <ApartmentDetail />,
    component: <DetailPage value="0" />,
    useLayout: <Layout />,
  },
  {
    name: 'Marketplace-Ships',
    key: 'marketplace-ships',
    route: '/marketplace/ships',
    component: <Marketplace value="1" />,
    useLayout: <Layout />,
  },
  {
    name: 'Marketplace-Ships-Details',
    key: 'marketplace-ships-details',
    route: '/marketplace/ships/:ship_name',
    // component: <ShipsDetail />,
    component: <DetailPage value="1" />,
    useLayout: <Layout />,
  },

  {
    name: 'Marketplace-Ships',
    key: 'marketplace-ships',
    route: '/marketplace/ships',
    component: <Marketplace value="2" />,
    useLayout: <Layout />,
  },
  {
    name: 'Marketplace-Entertainment',
    key: 'marketplace-entertainment',
    route: `/marketplace/entertainments`,
    component: <Marketplace value="2" />,
    useLayout: <Layout />,
  },
  {
    name: 'Marketplace-Entertainment',
    key: 'marketplace-entertainment',
    route: `/marketplace/entertainments/:type/:id`,
    component: <EntertainmentDetail />,
    useLayout: <Layout />,
  },
  {
    name: 'Marketplace-Channel',
    key: 'marketplace-channel',
    route: `/marketplace/entertainments/:type/:channelId`,
    component: <EntertainmentChannel />,
    useLayout: <Layout />,
  },
  {
    name: 'Marketplace-Channel',
    key: 'marketplace-channel',
    route: `/marketplace/entertainments/:type/:channelId/:channelContentId`,
    component: <EntertainmentChannel />,
    useLayout: <Layout />,
  },
  {
    name: 'Marketplace-Clothing',
    key: 'marketplace-clothing',
    route: '/marketplace/clothing',
    component: <Marketplace />,
    useLayout: <Layout />,
  },
  {
    name: 'Marketplace-Games',
    key: 'marketplace-games',
    route: '/marketplace/games',
    component: <Marketplace />,
    useLayout: <Layout />,
  },
  {
    name: 'Marketplace-Companions',
    key: 'marketplace-companions',
    route: '/marketplace/companions',
    component: <Marketplace />,
    useLayout: <Layout />,
  },
  {
    name: 'Create-Account',
    key: 'Create-Account',
    route: '/signup',
    component: <SignUp />,
    useLayout: <AuthLayout />,
  },
  {
    name: 'Login',
    key: 'Login',
    route: '/signin',
    component: <SignIn />,
    useLayout: <AuthLayout />,
  },
  {
    name: 'OTP-Verify',
    key: 'OTP-Verify',
    route: '/otp-verification',
    component: <OtpVerification />,
    useLayout: <AuthLayout />,
  },
  {
    name: 'Reset-Password',
    key: 'Reset-Password',
    route: '/reset-password',
    component: <ConfirmPassword />,
    useLayout: <AuthLayout />,
  },
  {
    name: 'MyAssets',
    key: 'my-assets',
    route: '/my-assets',
    component: <MyAssets />,
    useLayout: <Layout/>,
  },
];

export { routes };
// }
