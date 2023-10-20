/**
 * This file is part of FourthStar User Dashboard
 *(c) 2023 ShadowCast.Io <craig@shadowcast.io>
 *------------------------------------------------------
 *@module Generic-Assets-Card
 *@developer shudhanshu
 */

 import { Box, Fade } from '@mui/material'
import React from 'react'
 
 const MarketPlaceCard = ({item}) => {
    console.log("Items" , item)
   return (
    <Box
    // item
    // xs={12}
    // sm={5.5}
    // md={5}
    // lg={4}
    // key={i}
    style={{
      Height: "360px",
      backgroundColor: "#FBBC5E0D",
      padding: "0 3rem 3rem",
      zIndex: 5,
    }}
    className="  flex-col gap-y-5  mx-3  my-10 rounded-2xl shadow-lg card-hover_parent cursor-pointer items-center  max-w-md bg-gradient-to-r from-[rgba(251, 188, 94, 0.05)] to-[rgba(243, 161, 81, 0.05)]"
  >
    <Fade style={{ border: "2px solid green" }}>
      <Box className="text-center flex items-center justify-center">
        <img
          src={item?.img}
          className="h-full w-full rounded-xl card-hover_img"
          style={{
            objectFit: "contain",
            // border: '2px solid red',
          }}
        />
      </Box>
      <h1 className=" font-heading text-base  font-normal text-center d_color mb-4">
        {item?.title}
      </h1>
      <p className=" leading-[175.5%] text-xs font-normal text-center c_white">
        {item?.desc}
      </p>
    </Fade>
  </Box>
   )
 }
 
 export default MarketPlaceCard