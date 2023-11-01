/**
 * This file is part of FourthStar User Dashboard
 *(c) 2023 ShadowCast.Io <craig@shadowcast.io>
 *------------------------------------------------------
 *@module Header
 *@developer Sudhanshu <sudhanshut@instaacoders.com>>
 */

import React from "react";
// import { useNavigate } from "react-router-dom";
// import { Avatar, Badge, Button, Grid, Container, Box } from "@mui/material";
// import { LightSpeed } from "react-reveal";

// import SearchIcon from "@mui/icons-material/Search";
// // import AccountCircleIcon from '@mui/icons-material/AccountCircle';
// import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
// import logo from "assets/images/logo.png";
import AfterLogin from "./AfterLogin";
import BeforeLogin from "./BeforeLogin";
/* nav bar */
const Index = () => {
  // const navigate = useNavigate();
  return (
    // header before login 
    // <BeforeLogin/>
    // headerżafter login 
    <AfterLogin/>
  );
};

export default Index;
