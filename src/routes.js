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

/* The code is exporting a default function that returns an array of route objects. Each route object
represents a specific route in a web application. */
// eslint-disable-next-line
export default function () {
  const routes = [
    {
      name: 'Home',
      key: 'home',
      route: '/',
      component: <Home />,
    },
    {
      name: 'Marketplace',
      key: 'marketplace',
      route: '/marketplace',
      component: <Marketplace value="0" />,
    },
    {
      name: 'Marketplace-Apartments',
      key: 'marketplace-apartments',
      route: '/marketplace/apartments',
      component: <Marketplace value="0" />,
    },
    {
      name: 'Marketplace-Apartments-Details',
      key: 'marketplace-apartments-details',
      route: '/marketplace/apartments/:apartment_name',
      component: <ApartmentDetail />,
    },
    {
      name: 'Marketplace-Ships',
      key: 'marketplace-ships',
      route: '/marketplace/ships',
      component: <Marketplace value="1" />,
    },
    {
      name: 'Marketplace-Ships-Details',
      key: 'marketplace-ships-details',
      route: '/marketplace/ships/:ship_name',
      component: <ShipsDetail />,
    },
    {
      name: 'Marketplace-Entertainment',
      key: 'marketplace-entertainment',
      route: `/marketplace/entertainments/:type`,
      component: <Marketplace value="2" />,
    },
    {
      name: 'Marketplace-Entertainment',
      key: 'marketplace-entertainment',
      route: `/marketplace/entertainments/:type/:id`,
      component: <EntertainmentDetail />,
    },
    {
      name: 'Marketplace-Channel',
      key: 'marketplace-channel',
      route: `/marketplace/entertainments/:type/:channelId`,
      component: <EntertainmentChannel />,
    },
    {
      name: 'Marketplace-Channel',
      key: 'marketplace-channel',
      route: `/marketplace/entertainments/:type/:channelId/:channelContentId`,
      component: <EntertainmentChannel />,
    },
    {
      name: 'Marketplace-Clothing',
      key: 'marketplace-clothing',
      route: '/marketplace/clothing',
      component: <Marketplace />,
    },
    {
      name: 'Marketplace-Games',
      key: 'marketplace-games',
      route: '/marketplace/games',
      component: <Marketplace />,
    },
    {
      name: 'Marketplace-Companions',
      key: 'marketplace-companions',
      route: '/marketplace/companions',
      component: <Marketplace />,
    },
  ];

  return routes;
}
