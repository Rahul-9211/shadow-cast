/**
 * This file is part of FourthStar User Dashboard
 *(c) 2023 ShadowCast.Io <craig@shadowcast.io>
 *------------------------------------------------------
 *@module AfterLogin
 *@developer Sudhanshu <<sudhanshut@instaacoders.com>>
 */


import React, { useState, useEffect, useRef } from "react";
import { useNavigate, useLocation, NavLink } from "react-router-dom";
import { Box, Menu, MenuItem } from "@mui/material";
import logo from "assets/images/logo.png";
import SearchIcon from "@mui/icons-material/Search";
import ShadowFrame from "components/shadow-frame";
const SearchResultItem = ({ text, searchTerm, onClick }) => {
  const highlightedText = text.replace(
    new RegExp(searchTerm, "gi"),
    (match) => `${match}`
  );


  return (
    <li
      onClick={onClick}
      dangerouslySetInnerHTML={{
        __html: `<span class="text-[#7A7A7A] pr-2 inline-block">Go to</span> ${highlightedText}`
      }}
      className="cursor-pointer hover:bg-white/[0.2] py-1 text-white font-bold text-sm h-10 flex items-center pl-8 c"
    />
  );
};

const AfterLogin = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [showDropdown, setShowDropdown] = useState(false);
  const searchRef = useRef(null);
  const [showSearch, setShowSearch] = useState(false);
  const handleInputChange = (event) => {
    const value = event.target.value;
    setSearchTerm(value);

    const results = [
      "Apartments",
      "My Assets",
    ].filter((item) => item.toLowerCase().includes(value.toLowerCase()));

    setSearchResults(results);
    setShowDropdown(true);
  };

  const handleResultClick = (result) => {
    setSearchTerm(result);
    setShowDropdown(false);
  };

  const navigate = useNavigate();
  const [handleToggleHamburger, sethandleToggleHamburger] = useState(false);
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        searchRef.current &&
        !searchRef.current.contains(event.target) &&
        searchTerm === ""
      ) {
        setShowDropdown(false);
      }
    };

    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [searchTerm]);
  const handleSearch = () => {
    setShowSearch(!showSearch);
    sethandleToggleHamburger(false);
  }
  const handleHamburger = () => {
    sethandleToggleHamburger(!handleToggleHamburger);
    setShowSearch(false);
  }
  const { pathname } = useLocation();
  useEffect(() => {
    sethandleToggleHamburger(false);
  }, [pathname])
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

  //profile menu \
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <>
      <Box className={`w-full ${pathname == "/" ? 'bg-black' : 'border-white/[0.1] border-[0.6px]'} ${sticky.isSticky ? "bg-dark/[0.90] " : ""} py-2 md:py-4 px-4 lg:px-6 transition-all backdrop-blur-[2px] sticky top-0 z-50`} ref={headerRef}>
        <Box className="container mx-auto header-wrapper">
          <Box className="flex items-center">
            <Box className="logo-image">
              <NavLink to="/">
                <img
                  src={logo}
                  className="cursor-pointer w-auto h-auto"
                  alt="Network problem"
                /></NavLink>
            </Box>
            <Box className="menu-bar-before flex justify-between items-center w-full">
              <Box>
                <ul className="flex justify-between items-center text-sm">
                  <li className="mx-2 lg:mx-4 xl:mx-7"><NavLink to="/marketplace" className="text-white font-semibold py-2 px-1 border-b-2 border-transparent inline-block">Marketplace</NavLink></li>
                  <li className="mx-2 lg:mx-4 xl:mx-7"><NavLink to="/my-assets" className="text-white font-semibold py-2 px-1 border-b-2 border-transparent inline-block">Assets</NavLink></li>
                  <li className="mx-2 lg:mx-4 xl:mx-7"><NavLink to="/friend-invite" className="text-white font-semibold py-2 px-1 border-b-2 border-transparent inline-block">Friends</NavLink></li>
                </ul>
              </Box>
              <Box>
                <ul className="flex justify-between items-center text-sm">
                  <li className="mx-2 lg:mx-4">
                    <div ref={searchRef} className="relative w-30 lg:w-72 mx-auto py-4">
                      <div className="relative rounded-lg bg-black shadow border border-solid border-1 border-[#7A7A7A]">
                        <div className="absolute top-0 left-2 flex items-center h-full pl-1">
                          <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 15 15" fill="currentColor">
                            <path d="M10.4167 9.16667H9.75834L9.525 8.94167C10.3699 7.96169 10.8343 6.71058 10.8333 5.41667C10.8333 4.34535 10.5157 3.2981 9.92046 2.40733C9.32527 1.51656 8.4793 0.822296 7.48954 0.412322C6.49977 0.00234696 5.41066 -0.104921 4.35993 0.104082C3.3092 0.313085 2.34404 0.828973 1.58651 1.58651C0.828973 2.34404 0.313085 3.3092 0.104082 4.35993C-0.104921 5.41066 0.00234696 6.49977 0.412322 7.48954C0.822296 8.4793 1.51656 9.32527 2.40733 9.92046C3.2981 10.5157 4.34535 10.8333 5.41667 10.8333C6.75834 10.8333 7.99167 10.3417 8.94167 9.525L9.16667 9.75834V10.4167L13.3333 14.575L14.575 13.3333L10.4167 9.16667ZM5.41667 9.16667C3.34167 9.16667 1.66667 7.49167 1.66667 5.41667C1.66667 3.34167 3.34167 1.66667 5.41667 1.66667C7.49167 1.66667 9.16667 3.34167 9.16667 5.41667C9.16667 7.49167 7.49167 9.16667 5.41667 9.16667Z" fill="#777777" />
                          </svg>
                        </div>
                        <input
                          type="text"
                          className="w-full py-2 pl-8 pr-3 text-sm leading-none text-white-700 outline-none bg-white bg-opacity-5 rounded-lg"
                          placeholder="Search"
                          value={searchTerm}
                          onChange={handleInputChange}
                        />
                        {showDropdown && (
                          <div className="absolute z-[12] top-12 left-0 w-80 rounded-b-lg shadow-lg rounded-md border border-solid border-1 border-gray-700 bg-black">
                            <p className="pt-4 pl-3 text-xs text-gray-600">{!!searchResults.length ? 'Results' : 'No Result'}</p>
                            <ul className="py-2">
                              {searchResults.map((result, index) => (
                                <SearchResultItem
                                  key={index}
                                  text={result}
                                  searchTerm={searchTerm}
                                  onClick={() => handleResultClick(result)}
                                />
                              ))}
                            </ul>
                          </div>
                        )}
                      </div>
                    </div>
                  </li>
                  <li className="mx-4 flex">
                    <button>
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path d="M15 17V18C15 18.7956 14.6839 19.5587 14.1213 20.1213C13.5587 20.6839 12.7956 21 12 21C11.2044 21 10.4413 20.6839 9.87868 20.1213C9.31607 19.5587 9 18.7956 9 18V17M15 17H9M15 17H18.59C18.973 17 19.165 17 19.32 16.948C19.4658 16.8986 19.5982 16.8163 19.707 16.7074C19.8157 16.5984 19.8979 16.4659 19.947 16.32C20 16.164 20 15.972 20 15.586C20 15.417 20 15.333 19.986 15.252C19.9614 15.1006 19.9022 14.9568 19.813 14.832C19.765 14.765 19.705 14.705 19.586 14.586L19.196 14.196C19.1338 14.1337 19.0845 14.0598 19.0508 13.9785C19.0172 13.8972 18.9999 13.81 19 13.722V10C19 9.08075 18.8189 8.1705 18.4672 7.32122C18.1154 6.47194 17.5998 5.70026 16.9497 5.05025C16.2997 4.40024 15.5281 3.88463 14.6788 3.53284C13.8295 3.18106 12.9193 3 12 3C11.0807 3 10.1705 3.18106 9.32122 3.53284C8.47194 3.88463 7.70026 4.40024 7.05025 5.05025C6.40024 5.70026 5.88463 6.47194 5.53284 7.32122C5.18106 8.1705 5 9.08075 5 10V13.722C5.00006 13.81 4.98279 13.8972 4.94915 13.9785C4.91552 14.0598 4.8662 14.1337 4.804 14.196L4.414 14.586C4.294 14.706 4.235 14.765 4.188 14.831C4.09803 14.956 4.03814 15.1001 4.013 15.252C4 15.332 4 15.417 4 15.586C4 15.972 4 16.164 4.052 16.32C4.10133 16.4661 4.18378 16.5988 4.29289 16.7077C4.40201 16.8167 4.53484 16.8989 4.681 16.948C4.836 17 5.027 17 5.41 17H9" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                      </svg>
                    </button>
                  </li>
                  <li className="mx-4">
                    <a href="" data-testid="shopping-cart-icon">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path d="M2.85024 2C2.62474 2 2.40848 2.0878 2.24903 2.24408C2.08958 2.40036 2 2.61232 2 2.83333C2 3.05435 2.08958 3.26631 2.24903 3.42259C2.40848 3.57887 2.62474 3.66667 2.85024 3.66667H3.26856C3.45318 3.66698 3.63269 3.72618 3.77994 3.83533C3.9272 3.94448 4.0342 4.09764 4.08479 4.27167L6.78176 13.5217C6.93429 14.0437 7.25609 14.5028 7.69849 14.8297C8.14089 15.1565 8.67984 15.3333 9.23385 15.3333H17.0034C17.5132 15.3334 18.0114 15.1837 18.4337 14.9036C18.8559 14.6234 19.1828 14.2257 19.3721 13.7617L21.8786 7.61833C21.9817 7.36554 22.02 7.09186 21.9902 6.82122C21.9604 6.55057 21.8634 6.2912 21.7077 6.06576C21.552 5.84033 21.3424 5.65571 21.0971 5.52803C20.8518 5.40035 20.5783 5.33351 20.3006 5.33333H6.16278L5.71895 3.81333C5.56681 3.29129 5.2454 2.83198 4.80331 2.50483C4.36123 2.17768 3.8225 2.00047 3.26856 2H2.85024ZM8.41762 13.0617L6.64912 7H20.2989L17.7924 13.1433C17.7292 13.2978 17.6203 13.4302 17.4797 13.5235C17.3391 13.6168 17.1732 13.6666 17.0034 13.6667H9.23385C9.04923 13.6664 8.86973 13.6071 8.72247 13.498C8.57521 13.3889 8.46821 13.2357 8.41762 13.0617ZM9.65217 22C9.98714 22 10.3188 21.9353 10.6283 21.8097C10.9378 21.6841 11.2189 21.4999 11.4558 21.2678C11.6927 21.0356 11.8805 20.76 12.0087 20.4567C12.1369 20.1534 12.2029 19.8283 12.2029 19.5C12.2029 19.1717 12.1369 18.8466 12.0087 18.5433C11.8805 18.24 11.6927 17.9644 11.4558 17.7322C11.2189 17.5001 10.9378 17.3159 10.6283 17.1903C10.3188 17.0647 9.98714 17 9.65217 17C8.97568 17 8.32689 17.2634 7.84854 17.7322C7.37018 18.2011 7.10145 18.837 7.10145 19.5C7.10145 20.163 7.37018 20.7989 7.84854 21.2678C8.32689 21.7366 8.97568 22 9.65217 22ZM9.65217 20.3333C9.42667 20.3333 9.21041 20.2455 9.05096 20.0893C8.89151 19.933 8.80193 19.721 8.80193 19.5C8.80193 19.279 8.89151 19.067 9.05096 18.9107C9.21041 18.7545 9.42667 18.6667 9.65217 18.6667C9.87767 18.6667 10.0939 18.7545 10.2534 18.9107C10.4128 19.067 10.5024 19.279 10.5024 19.5C10.5024 19.721 10.4128 19.933 10.2534 20.0893C10.0939 20.2455 9.87767 20.3333 9.65217 20.3333ZM16.4541 22C16.7891 22 17.1208 21.9353 17.4302 21.8097C17.7397 21.6841 18.0209 21.4999 18.2577 21.2678C18.4946 21.0356 18.6825 20.76 18.8107 20.4567C18.9388 20.1534 19.0048 19.8283 19.0048 19.5C19.0048 19.1717 18.9388 18.8466 18.8107 18.5433C18.6825 18.24 18.4946 17.9644 18.2577 17.7322C18.0209 17.5001 17.7397 17.3159 17.4302 17.1903C17.1208 17.0647 16.7891 17 16.4541 17C15.7776 17 15.1288 17.2634 14.6505 17.7322C14.1721 18.2011 13.9034 18.837 13.9034 19.5C13.9034 20.163 14.1721 20.7989 14.6505 21.2678C15.1288 21.7366 15.7776 22 16.4541 22ZM16.4541 20.3333C16.2286 20.3333 16.0123 20.2455 15.8529 20.0893C15.6934 19.933 15.6039 19.721 15.6039 19.5C15.6039 19.279 15.6934 19.067 15.8529 18.9107C16.0123 18.7545 16.2286 18.6667 16.4541 18.6667C16.6796 18.6667 16.8959 18.7545 17.0553 18.9107C17.2148 19.067 17.3043 19.279 17.3043 19.5C17.3043 19.721 17.2148 19.933 17.0553 20.0893C16.8959 20.2455 16.6796 20.3333 16.4541 20.3333Z" fill="currentColor" />
                      </svg>
                    </a>
                  </li>
                  <li className="mx-4 cursor-pointer"><div className="p-3 text-white-700 rounded-full text-base font-semibold" style={{ backgroundColor: "#40351A" }} onClick={handleClick} aria-controls={open ? 'account-menu' : undefined}
                    aria-haspopup="true"
                    aria-expanded={open ? 'true' : undefined}>SN</div></li>
                </ul>
                <Menu
                  anchorEl={anchorEl}
                  id="account-menu"
                  open={open}
                  onClose={handleClose}
                  onClick={handleClose}
                  PaperProps={{
                    elevation: 0,
                    sx: {
                      overflow: 'visible',
                      mt: 1.5,
                      backgroundColor: "#000",
                      border: "1px solid #383838",
                      borderRadius: "8px;",
                      width: "245px",
                      padding: "20px 24px",
                      maxHeight: "initial",

                    },
                  }}
                  transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                  anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}

                >
                  <div className="flex flex-col">
                    <div className="mb-5">
                      <h5 className="text-sm font-semibold text-white mb-1">John Doe</h5>
                      <p className="text-[#7A7A7A] text-sm font-medium">johndoe@gmail.com</p>
                    </div>
                    <ul className="flex flex-col gap-4 border-t border-[#383838] pt-3">
                      <li>
                        <NavLink to="/me" className="font-semibold text-white block py-3 px-3.5 rounded hover:bg-white/[0.10]">My Profile</NavLink>
                      </li>
                      <li>
                        <NavLink to="/" className="font-semibold text-white block py-3 px-3.5 rounded hover:bg-white/[0.10]">Sign out</NavLink>
                      </li>
                    </ul>
                  </div>
                </Menu>
              </Box>
            </Box>

            <Box className="menu-bar-after flex justify-between items-center w-full">
              <Box className="ml-auto">
                <ul className="flex justify-end items-center text-sm">
                  <li className="ml-3">
                    <button className="flex focus:outline-none" onClick={() => handleSearch()}>
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path d="M21.3187 20.0273L15.232 13.9406C16.1766 12.7195 16.6875 11.2266 16.6875 9.65625C16.6875 7.77656 15.9539 6.01406 14.6273 4.68516C13.3008 3.35625 11.5336 2.625 9.65625 2.625C7.77891 2.625 6.01172 3.35859 4.68516 4.68516C3.35625 6.01172 2.625 7.77656 2.625 9.65625C2.625 11.5336 3.35859 13.3008 4.68516 14.6273C6.01172 15.9562 7.77656 16.6875 9.65625 16.6875C11.2266 16.6875 12.7172 16.1766 13.9383 15.2344L20.025 21.3187C20.0428 21.3366 20.064 21.3508 20.0874 21.3604C20.1107 21.3701 20.1357 21.3751 20.1609 21.3751C20.1862 21.3751 20.2112 21.3701 20.2345 21.3604C20.2578 21.3508 20.279 21.3366 20.2969 21.3187L21.3187 20.2992C21.3366 20.2814 21.3508 20.2602 21.3604 20.2369C21.3701 20.2135 21.3751 20.1885 21.3751 20.1633C21.3751 20.138 21.3701 20.113 21.3604 20.0897C21.3508 20.0664 21.3366 20.0452 21.3187 20.0273ZM13.3688 13.3688C12.375 14.3602 11.0578 14.9062 9.65625 14.9062C8.25469 14.9062 6.9375 14.3602 5.94375 13.3688C4.95234 12.375 4.40625 11.0578 4.40625 9.65625C4.40625 8.25469 4.95234 6.93516 5.94375 5.94375C6.9375 4.95234 8.25469 4.40625 9.65625 4.40625C11.0578 4.40625 12.3773 4.95 13.3688 5.94375C14.3602 6.9375 14.9062 8.25469 14.9062 9.65625C14.9062 11.0578 14.3602 12.3773 13.3688 13.3688Z" fill="white" />
                      </svg>
                    </button>
                  </li>
                  <li className="ml-3">
                    <a href="" data-testid="shopping-cart-icon">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path d="M2.85024 2C2.62474 2 2.40848 2.0878 2.24903 2.24408C2.08958 2.40036 2 2.61232 2 2.83333C2 3.05435 2.08958 3.26631 2.24903 3.42259C2.40848 3.57887 2.62474 3.66667 2.85024 3.66667H3.26856C3.45318 3.66698 3.63269 3.72618 3.77994 3.83533C3.9272 3.94448 4.0342 4.09764 4.08479 4.27167L6.78176 13.5217C6.93429 14.0437 7.25609 14.5028 7.69849 14.8297C8.14089 15.1565 8.67984 15.3333 9.23385 15.3333H17.0034C17.5132 15.3334 18.0114 15.1837 18.4337 14.9036C18.8559 14.6234 19.1828 14.2257 19.3721 13.7617L21.8786 7.61833C21.9817 7.36554 22.02 7.09186 21.9902 6.82122C21.9604 6.55057 21.8634 6.2912 21.7077 6.06576C21.552 5.84033 21.3424 5.65571 21.0971 5.52803C20.8518 5.40035 20.5783 5.33351 20.3006 5.33333H6.16278L5.71895 3.81333C5.56681 3.29129 5.2454 2.83198 4.80331 2.50483C4.36123 2.17768 3.8225 2.00047 3.26856 2H2.85024ZM8.41762 13.0617L6.64912 7H20.2989L17.7924 13.1433C17.7292 13.2978 17.6203 13.4302 17.4797 13.5235C17.3391 13.6168 17.1732 13.6666 17.0034 13.6667H9.23385C9.04923 13.6664 8.86973 13.6071 8.72247 13.498C8.57521 13.3889 8.46821 13.2357 8.41762 13.0617ZM9.65217 22C9.98714 22 10.3188 21.9353 10.6283 21.8097C10.9378 21.6841 11.2189 21.4999 11.4558 21.2678C11.6927 21.0356 11.8805 20.76 12.0087 20.4567C12.1369 20.1534 12.2029 19.8283 12.2029 19.5C12.2029 19.1717 12.1369 18.8466 12.0087 18.5433C11.8805 18.24 11.6927 17.9644 11.4558 17.7322C11.2189 17.5001 10.9378 17.3159 10.6283 17.1903C10.3188 17.0647 9.98714 17 9.65217 17C8.97568 17 8.32689 17.2634 7.84854 17.7322C7.37018 18.2011 7.10145 18.837 7.10145 19.5C7.10145 20.163 7.37018 20.7989 7.84854 21.2678C8.32689 21.7366 8.97568 22 9.65217 22ZM9.65217 20.3333C9.42667 20.3333 9.21041 20.2455 9.05096 20.0893C8.89151 19.933 8.80193 19.721 8.80193 19.5C8.80193 19.279 8.89151 19.067 9.05096 18.9107C9.21041 18.7545 9.42667 18.6667 9.65217 18.6667C9.87767 18.6667 10.0939 18.7545 10.2534 18.9107C10.4128 19.067 10.5024 19.279 10.5024 19.5C10.5024 19.721 10.4128 19.933 10.2534 20.0893C10.0939 20.2455 9.87767 20.3333 9.65217 20.3333ZM16.4541 22C16.7891 22 17.1208 21.9353 17.4302 21.8097C17.7397 21.6841 18.0209 21.4999 18.2577 21.2678C18.4946 21.0356 18.6825 20.76 18.8107 20.4567C18.9388 20.1534 19.0048 19.8283 19.0048 19.5C19.0048 19.1717 18.9388 18.8466 18.8107 18.5433C18.6825 18.24 18.4946 17.9644 18.2577 17.7322C18.0209 17.5001 17.7397 17.3159 17.4302 17.1903C17.1208 17.0647 16.7891 17 16.4541 17C15.7776 17 15.1288 17.2634 14.6505 17.7322C14.1721 18.2011 13.9034 18.837 13.9034 19.5C13.9034 20.163 14.1721 20.7989 14.6505 21.2678C15.1288 21.7366 15.7776 22 16.4541 22ZM16.4541 20.3333C16.2286 20.3333 16.0123 20.2455 15.8529 20.0893C15.6934 19.933 15.6039 19.721 15.6039 19.5C15.6039 19.279 15.6934 19.067 15.8529 18.9107C16.0123 18.7545 16.2286 18.6667 16.4541 18.6667C16.6796 18.6667 16.8959 18.7545 17.0553 18.9107C17.2148 19.067 17.3043 19.279 17.3043 19.5C17.3043 19.721 17.2148 19.933 17.0553 20.0893C16.8959 20.2455 16.6796 20.3333 16.4541 20.3333Z" fill="currentColor" />
                      </svg>
                    </a>
                  </li>
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
          {showSearch && <div className="search-form absolute top-0 bg-dark bottom-0 left-0 right-0">
            <div className="container flex realtive items-center px-4 h-full gap-4">
              <div ref={searchRef} className="relative mx-auto flex-1">
                <div className="relative rounded-full bg-black shadow border border-solid border-1 border-gray-700">
                  <div className="absolute top-0 left-2 flex items-center h-full pl-1 ">
                    <SearchIcon className="text-gray-500" />
                  </div>
                  <input
                    type="text"
                    className="w-full py-2 pl-12 pr-3 text-xs text-white-700 outline-none bg-white bg-opacity-5 rounded-full"
                    placeholder="Search"
                    value={searchTerm}
                    onChange={handleInputChange}
                  />
                  {showDropdown && (
                    <div className="absolute z-[12] top-12 left-0 w-full max-w-80 rounded-b-lg shadow-lg rounded-md border border-solid border-1 border-gray-700 bg-black">
                      <p className="pt-4 pl-3 text-xs text-gray-600">{!!searchResults.length ? 'Results' : 'No Result'}</p>
                      <ul className="py-2">
                        {searchResults.map((result, index) => (
                          <SearchResultItem
                            key={index}
                            text={result}
                            searchTerm={searchTerm}
                            onClick={() => handleResultClick(result)}
                          />
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </div>
              <div className="search-right w-8 flex items-center justify-center">
                <button type="button" className="focus:outline-none" onClick={() => handleSearch()}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
                    <path d="M17 17L1 1M17 1L1 17" stroke="white" strokeWidth="2" strokeLinecap="round" />
                  </svg>
                </button>
              </div>
            </div>
          </div>}
        </Box>
      </Box>
      <div className={`overlay ${handleToggleHamburger ? 'open' : ''}`}>
        <div className="inner-content relative mt-28 md:mt-32">
          <ul className="flex flex-col gap-5 justify-between items-center relative z-50">
            <li><NavLink to="/marketplace" onClick={() => sethandleToggleHamburger(false)} className="text-white font-semibold">Marketplace</NavLink></li>
            <li><NavLink to="/my-assets" onClick={() => sethandleToggleHamburger(false)} className="text-white font-semibold">Assets</NavLink></li>
            <li><NavLink to="/friend-invite" onClick={() => sethandleToggleHamburger(false)} className="text-white font-semibold">Friends</NavLink></li>
            <li><NavLink to="/my-profile" onClick={() => sethandleToggleHamburger(false)} className="text-white font-semibold">My Profile</NavLink></li>
            <li><NavLink to="/" className="text-white font-semibold">Sign Out</NavLink></li>
          </ul>
          <ShadowFrame className="w-[436px] h-[436px] rounded-[250px] rounded-[436px] left-[50%] top-[50%] -translate-y-1/2 -translate-x-1/2 !blur-[150px]" />
        </div>
      </div>
    </>
  );
};

export default AfterLogin;