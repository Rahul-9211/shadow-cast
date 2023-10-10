/**
 * This file is part of FourthStar User Dashboard
 *(c) 2023 ShadowCast.Io <craig@shadowcast.io>
 *------------------------------------------------------
 *@module user
 *@developer Sameer <sameer@shadowcast.io>
 */

import { useEffect } from 'react';
import { Routes, Route, Navigate, useLocation } from 'react-router-dom';
import { createTheme } from '@mui/material';

import routes from './routes';
import Header from 'components/header/Index.jsx';
import SideBar from 'components/sidebar/Index.jsx';
import Layout from 'layout/Index.jsx';
import Footer from 'components/footer/Index.jsx';

/**
 * The App function is a React component that renders a sidebar and routes based on the current
 * pathname.
 * @returns The App component is returning JSX code. It includes a SideBar component with children that
 * consist of a Routes component. Inside the Routes component, there are multiple Route components
 * being rendered based on the result of the getRoutes function. Additionally, there is a Route
 * component with a path of "/*" that renders a Navigate component.
 */

function App() {
  const { pathname } = useLocation();
  const getRoutes = (allRoutes) =>
    allRoutes.map((route) => {
      return (
        <Route path={route.route} element={route.component} key={route.key} />
      );
    });

  useEffect(() => {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
  }, [pathname]);
  return (
    <>
      {/* <SideBar
        children={
          <Routes>
            {getRoutes(routes())}
            <Route path="/*" element={<Navigate replace to="/" />} />
          </Routes>
        }
      ></SideBar> */}
      <Layout
        children={
          <Routes>
            {getRoutes(routes())}
            <Route path="/*" element={<Navigate replace to="/" />} />
          </Routes>
        }
      />
    </>
  );
}

export default App;
