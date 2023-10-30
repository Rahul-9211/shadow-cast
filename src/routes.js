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
import ApartmentPage from 'pages/marketplace/apartments/Index';
import ShipPage from "pages/marketplace/ships/Index";
import ApartmentDetail from 'pages/marketplace/apartments/detail/Index.jsx';
import ShipsDetail from 'pages/marketplace/ships/detail/Index.jsx';
import EntertainmentPage from "pages/marketplace/entertainments/Index";
import EntertainmentDetail from 'pages/marketplace/entertainments/detail/Index.jsx';
import EntertainmentChannel from 'pages/marketplace/entertainments/channel/Index.jsx';
import SignUp from 'pages/auth/signup';
import Layout from 'layout/Index.jsx';
import AuthLayout from 'AuthLayout/index';
import SignIn from "pages/auth/signin";
import OtpVerification from 'pages/auth/forgot-password/otp-verification';
import ConfirmPassword from 'pages/auth/forgot-password/confirm-password';
import { MyAssets } from 'pages/myassets';
import InviteHome from 'pages/friends/InviteHome';
import MyProfile from 'pages/myprofile/MyProfile';
import EntertainmentVideo  from 'pages/marketplace/entertainments/list/Index'
// import { Ships } from 'components/assets/myassets';

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
    component: <Marketplace value="0" element={<ApartmentPage />} />,
    useLayout: <Layout />,
  },
  {
    name: 'Marketplace-Apartments',
    key: 'marketplace-apartments',
    route: '/marketplace/apartments',
    component: <Marketplace value="0" element={<ApartmentPage />} />,
    useLayout: <Layout />,
  },
  {
    name: 'Marketplace-Apartments-Details',
    key: 'marketplace-apartments-details',
    route: '/marketplace/apartments/:apartment_name',
    component: <Marketplace value="0" element={<ApartmentDetail />} />,
    useLayout: <Layout />,
  },
  {
    name: 'Marketplace-Ships',
    key: 'marketplace-ships',
    route: '/marketplace/ships',
    component: <Marketplace value="1" element={<ShipPage />} />,
    useLayout: <Layout />,
  },
  {
    name: 'Marketplace-Ships-Details',
    key: 'marketplace-ships-details',
    route: '/marketplace/ships/:ship_name',
    component: <Marketplace value="1" element={<ShipsDetail />} />,
    useLayout: <Layout />,
  },
  {
    name: 'Marketplace-Entertainment',
    key: 'marketplace-entertainment',
    route: `/marketplace/entertainments/`,
    component: <Marketplace value="2" element={<EntertainmentPage />} />,
    useLayout: <Layout />,
  },
  {
    name: 'Marketplace-Entertainment',
    key: 'marketplace-entertainment',
    route: `/marketplace/entertainments/:type`,
    component: <Marketplace value="2" element={<EntertainmentVideo />} />,
    // component: <EntertainmentVideo value="2" />,
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
    component: <Marketplace value="3" />,
    useLayout: <Layout />,
  },
  {
    name: 'Marketplace-Games',
    key: 'marketplace-games',
    route: '/marketplace/gaming',
    component: <Marketplace value="4" />,
    useLayout: <Layout />,
  },
  {
    name: 'Marketplace-Companions',
    key: 'marketplace-companions',
    route: '/marketplace/companions',
    component: <Marketplace value="5" />,
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
    useLayout: <Layout />,
  },
  {
    name: 'MyFriend',
    key: 'my-friend',
    route: '/friend-invite',
    component: <InviteHome />,
    useLayout: <Layout />,
  },
  {
    name: 'MyProfile',
    key: 'my-profile',
    route: '/me',
    component: <MyProfile />,
    useLayout: <Layout />,
  },
];

export { routes };
// }
