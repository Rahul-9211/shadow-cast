/**
 * This file is part of FourthStar User Dashboard
 *(c) 2023 ShadowCast.Io <craig@shadowcast.io>
 *------------------------------------------------------
 *@module BeforeLogin
 *@developer Sudhanshu <<sudhanshut@instaacoders.com>>
 */

import React, { useState, useEffect, useRef } from "react";
import { useNavigate, useLocation, NavLink } from "react-router-dom";
import { Box, Menu } from "@mui/material";
import logo from "assets/images/logo.png";
import ShadowFrame from "components/shadow-frame";

const BeforeLogin = () => {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const [handleToggleHamburger, sethandleToggleHamburger] = useState(false);
  const handleHamburger = () => {
    sethandleToggleHamburger(!handleToggleHamburger);
  }
  useEffect(() => {
    sethandleToggleHamburger(false);
  }, [navigate])
  const [sticky, setSticky] = useState({ isSticky: false, offset: 0 });
  const headerRef = useRef(null);
  // handle scroll event
  const handleScroll = (elTopOffset, elHeight) => {
    // if (window.pageYOffset > (elTopOffset + elHeight)) {
    if (window.pageYOffset > 10) {
      setSticky({ isSticky: true, offset: elHeight });
    } else {
      setSticky({ isSticky: false, offset: 0 });
    }
  };
  // add/remove scroll event listener

  useEffect(() => {
    let header = headerRef.current.getBoundingClientRect();
    const handleScrollEvent = () => {
      handleScroll(header.top, header.height)
    }

    window.addEventListener('scroll', handleScrollEvent);

    return () => {
      window.removeEventListener('scroll', handleScrollEvent);
    };
  }, []);
  return (
    // header before login
    <>
      <Box className={`w-full ${pathname == "/" ? 'bg-black' : 'border-white/[0.1] border-[0.6px]'} ${sticky.isSticky ? "bg-dark/[0.90] " : ""}py-2 md:py-4 px-4 lg:px-6 transition-all backdrop-blur-[2px] sticky top-0 z-50`} ref={headerRef}>
        <Box className="container mx-auto header-wrapper">
          <Box className="flex justify-between items-center">
            <Box className="logo-image">
              <NavLink to="/">
                <img
                  src={logo}
                  className="cursor-pointer w-auto h-auto"
                  alt="Network problem"
                />
              </NavLink>
            </Box>
            <Box className="menu-bar-before">
              <ul className="flex justify-between items-center text-sm">
                <li className="mx-1 lg:mx-3.5">
                  <NavLink to="/marketplace" className="text-white font-semibold py-2 px-1 border-b-2 border-transparent inline-block">Marketplace</NavLink>
                </li>
                <li className="mx-1 lg:mx-3.5">
                  <NavLink to="/signin" className="text-white font-semibold py-2 px-1 border-b-2 border-transparent inline-block">Sign in</NavLink>
                </li>
                <li className="mx-1 lg:mx-3.5">
                  <NavLink to="/signup" className="text-white font-semibold text-xs py-2.5 px-4 rounded-3xl border border-sec inline-flex btn-outline hover:text-dark">Create Account</NavLink>
                </li>
              </ul>
            </Box>
            <Box className="menu-bar-after flex justify-between items-center w-full">
              <Box className="ml-auto">
                <ul className="flex justify-end items-center text-sm">
                  {/* <li className="ml-3">
                    <a href="" data-testid="shopping-cart-icon">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path d="M2.85024 2C2.62474 2 2.40848 2.0878 2.24903 2.24408C2.08958 2.40036 2 2.61232 2 2.83333C2 3.05435 2.08958 3.26631 2.24903 3.42259C2.40848 3.57887 2.62474 3.66667 2.85024 3.66667H3.26856C3.45318 3.66698 3.63269 3.72618 3.77994 3.83533C3.9272 3.94448 4.0342 4.09764 4.08479 4.27167L6.78176 13.5217C6.93429 14.0437 7.25609 14.5028 7.69849 14.8297C8.14089 15.1565 8.67984 15.3333 9.23385 15.3333H17.0034C17.5132 15.3334 18.0114 15.1837 18.4337 14.9036C18.8559 14.6234 19.1828 14.2257 19.3721 13.7617L21.8786 7.61833C21.9817 7.36554 22.02 7.09186 21.9902 6.82122C21.9604 6.55057 21.8634 6.2912 21.7077 6.06576C21.552 5.84033 21.3424 5.65571 21.0971 5.52803C20.8518 5.40035 20.5783 5.33351 20.3006 5.33333H6.16278L5.71895 3.81333C5.56681 3.29129 5.2454 2.83198 4.80331 2.50483C4.36123 2.17768 3.8225 2.00047 3.26856 2H2.85024ZM8.41762 13.0617L6.64912 7H20.2989L17.7924 13.1433C17.7292 13.2978 17.6203 13.4302 17.4797 13.5235C17.3391 13.6168 17.1732 13.6666 17.0034 13.6667H9.23385C9.04923 13.6664 8.86973 13.6071 8.72247 13.498C8.57521 13.3889 8.46821 13.2357 8.41762 13.0617ZM9.65217 22C9.98714 22 10.3188 21.9353 10.6283 21.8097C10.9378 21.6841 11.2189 21.4999 11.4558 21.2678C11.6927 21.0356 11.8805 20.76 12.0087 20.4567C12.1369 20.1534 12.2029 19.8283 12.2029 19.5C12.2029 19.1717 12.1369 18.8466 12.0087 18.5433C11.8805 18.24 11.6927 17.9644 11.4558 17.7322C11.2189 17.5001 10.9378 17.3159 10.6283 17.1903C10.3188 17.0647 9.98714 17 9.65217 17C8.97568 17 8.32689 17.2634 7.84854 17.7322C7.37018 18.2011 7.10145 18.837 7.10145 19.5C7.10145 20.163 7.37018 20.7989 7.84854 21.2678C8.32689 21.7366 8.97568 22 9.65217 22ZM9.65217 20.3333C9.42667 20.3333 9.21041 20.2455 9.05096 20.0893C8.89151 19.933 8.80193 19.721 8.80193 19.5C8.80193 19.279 8.89151 19.067 9.05096 18.9107C9.21041 18.7545 9.42667 18.6667 9.65217 18.6667C9.87767 18.6667 10.0939 18.7545 10.2534 18.9107C10.4128 19.067 10.5024 19.279 10.5024 19.5C10.5024 19.721 10.4128 19.933 10.2534 20.0893C10.0939 20.2455 9.87767 20.3333 9.65217 20.3333ZM16.4541 22C16.7891 22 17.1208 21.9353 17.4302 21.8097C17.7397 21.6841 18.0209 21.4999 18.2577 21.2678C18.4946 21.0356 18.6825 20.76 18.8107 20.4567C18.9388 20.1534 19.0048 19.8283 19.0048 19.5C19.0048 19.1717 18.9388 18.8466 18.8107 18.5433C18.6825 18.24 18.4946 17.9644 18.2577 17.7322C18.0209 17.5001 17.7397 17.3159 17.4302 17.1903C17.1208 17.0647 16.7891 17 16.4541 17C15.7776 17 15.1288 17.2634 14.6505 17.7322C14.1721 18.2011 13.9034 18.837 13.9034 19.5C13.9034 20.163 14.1721 20.7989 14.6505 21.2678C15.1288 21.7366 15.7776 22 16.4541 22ZM16.4541 20.3333C16.2286 20.3333 16.0123 20.2455 15.8529 20.0893C15.6934 19.933 15.6039 19.721 15.6039 19.5C15.6039 19.279 15.6934 19.067 15.8529 18.9107C16.0123 18.7545 16.2286 18.6667 16.4541 18.6667C16.6796 18.6667 16.8959 18.7545 17.0553 18.9107C17.2148 19.067 17.3043 19.279 17.3043 19.5C17.3043 19.721 17.2148 19.933 17.0553 20.0893C16.8959 20.2455 16.6796 20.3333 16.4541 20.3333Z" fill="currentColor" />
                      </svg>
                    </a>
                  </li> */}
                  <li className="ml-3" >
                    <button onClick={handleHamburger} data-testid="menu-icon" className={`menu-icon text-white w-[34px] h-[34px] flex item-center gap-[0.563rem] flex-col items-center justify-center focus:outline-none ${handleToggleHamburger ? 'active' : ''}`}>
                      <span className="block w-[28px] h-[2px] bg-white"></span>
                      <span className="block w-[28px] h-[2px] bg-white"></span>
                    </button>
                  </li>
                </ul>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
      <div className={`overlay ${handleToggleHamburger ? 'open' : ''}`}>
        <div className="inner-content relative mt-28 md:mt-32">
          <ul className="flex flex-col gap-5 justify-between items-center relative z-50">
            <li>
              <NavLink to="/marketplace" className="text-white font-semibold" onClick={() => sethandleToggleHamburger(false)} >Marketplace</NavLink>
            </li>
            <li>
              <NavLink to="/signin" className="text-white font-semibold">Sign in</NavLink>
            </li>
            <li className="mt-8">
              <NavLink to="/signup" className="text-white font-semibold text-xs py-2.5 px-4 rounded-3xl border border-sec inline-flex btn-outline hover:text-dark">Create Account</NavLink>
            </li>
          </ul>
          <ShadowFrame className="w-[436px] h-[436px] rounded-[250px] rounded-[436px] left-[50%] top-[50%] -translate-y-1/2 -translate-x-1/2 !blur-[150px]" />
        </div>
      </div>
    </>
  );
};

export default BeforeLogin;
