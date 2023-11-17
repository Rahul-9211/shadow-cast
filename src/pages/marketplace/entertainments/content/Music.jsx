/**
 * This file is part of FourthStar User Dashboard
 *(c) 2023 ShadowCast.Io <craig@shadowcast.io>
 *------------------------------------------------------
 *@module Apartment-Detail-Page
 *@developer Sudhanshu
 */

 import React, { useState } from "react";
 import { NavLink, useNavigate } from "react-router-dom";
 import { Zoom } from "react-reveal";

 import GameRoom1 from "assets/images/game-room-1.png";
 import GameRoom2 from "assets/images/game-room-2.png";
 import PremiumApt from "assets/images/Premium-apartment.png";
 import PremiumApt2 from "assets/images/Premium-final-1.png";
 import StandredAppartment from "assets/images/StandredAppartment.png";
 import Thumb1 from "assets/images/StandredAppartment-thum.png";
 import Thumb2 from "assets/images/StandredAppartment-thum2.png";
 import Thumb3 from "assets/images/StandredAppartment-thum3.png";
 import Thumb4 from "assets/images/StandredAppartment-thum4.png";
 import ChannelImage from "assets/images/nureal.png";
 import musicContent from "assets/images/musicContent.png";
 import MusicCard from "components/card/marketplace/entertainment/MusicCard";
 /* The above code is a React component called "Index". It renders a webpage that displays information
   about an apartment, including its image, price, description, themes, gaming and streaming options,
   and suggested apartments. It also includes a dialog box that allows the user to preview the
   apartment in a 3D model. The component uses various React hooks and components, such as useState,
   useNavigate, Grid, Typography, Button, Dialog, AppBar, Toolbar, Canvas, and Stage, to create the
   desired UI and functionality. */
 const MusicContent = () => {
   const navigate = useNavigate();
   const [open, setOpen] = useState(true);

   const entertainmentData = [
     {
       title: "StellarVerse Spectacle: Cosmic Symphony",
       subtitleButton: ` Unlock Premium`,
       tagType: "Premium",
     },
     {
       title: "StellarVerse Spectacle: Cosmic Symphony",
       subtitleButton: "Free",
       tagType: "Free",
     },
     {
       title: "StellarVerse Spectacle: Cosmic Symphony",
       subtitleButton: "US$ 9.99",
       tagType: "Paid",
     },
     {
       title: "StellarVerse Spectacle: Cosmic Symphony",
       subtitleButton: ` Unlock Premium`,
       tagType: "Premium",
     },
     {
       title: "StellarVerse Spectacle: Cosmic Symphony",
       subtitleButton: ` Unlock Premium`,
       tagType: "Premium",
     },
     {
       title: "StellarVerse Spectacle: Cosmic Symphony",
       subtitleButton: ` Unlock Premium`,
       tagType: "Premium",
     },
     {
       title: "StellarVerse Spectacle: Cosmic Symphony",
       subtitleButton: "Free",
       tagType: "Free",
     },
     {
       title: "StellarVerse Spectacle: Cosmic Symphony",
       subtitleButton: "US$ 9.99",
       tagType: "Paid",
     },
     {
       title: "StellarVerse Spectacle: Cosmic Symphony",
       subtitleButton: "Free",
       tagType: "Free",
     },
   ];
  
   const [cardAdded, setcardAdded] = useState(false);
   const handleClick = () => {
     setcardAdded(true);
   };
   return (
     <>
       <div className="px-4 mb-[13px]">
         <button
           onClick={() => navigate(-1)}
           className="inline-flex gap-2 text-white font-semibold text-xs md:text-sm leading-normal bg-white/[0.10] hover:bg-white/[0.90] hover:text-dark rounded-3xl py-1.5 px-1.5 pr-3 items-center  top-3 left-3"
         >
           <svg
             xmlns="http://www.w3.org/2000/svg"
             width="20"
             height="20"
             viewBox="0 0 20 20"
             fill="none"
           >
             <path
               d="M12.5 15L7.5 10L12.5 5"
               stroke="currentColor"
               strokeWidth="2"
               strokeLinecap="round"
               strokeLinejoin="round"
             />
           </svg>
           <span>Back</span>
         </button>
       </div>
       <div className="relative px-4 mb-[140px] flex flex-col lg:flex-row  max-[768px]:p-0 max-[1280px]:py-[25px]  gap-4">
         <div className="w-[100%] lg:w-[59%]  max-[1024px]:w-auto max-[1024px]:p-0 max-[1280px]:p-0 ">
           <div className=" mb-6 md:mb-[19px] z-10 relative rounded flex justify-center items-center">
             <Zoom>
               <img
                 src={musicContent}
                 alt="Network Problem"
                 className="h-full w-full object-cover aspect-[826/380]"
               />
             </Zoom>
             <Zoom delay={500}></Zoom>
           </div>
           <div className="relative">
             {/* <ShadowFrame className="w-[250px] md:w-[775px] h-[250px] md:h-[775px] rounded-[250px] md:rounded-[775px] -left-[80px] md:-left-[300px] -top-[80px] md:-top-[150px]" /> */}
 
             <div className="volumetric-card-left-shadow "></div>
             <div className="lg:flex  jusitfy-between mb-[21px] relative z-10 gap-10 md:gap-8 lg:gap-14">
               <div className="flex-1">
                 <div className="__entertainment_assets_heading mb-[29px] lg:mb-[22px] sm:flex justify-between pt-5 sm:pt-[0px]">
                   <h4 className="font-medium font-heading text-[18px] px-[0]  lg:text-[20px] tracking-[1px]  max-[768px]:p-0 max-[768px]:text-[15px] ">
                     Hold my hands
                   </h4>
                 </div>
                 <div className="">
                   <div className="flex items-center mb-[25px]">
                     <img
                       className="w-[34px] h-[34px]  sm:w-[42px] sm:h-[42px] rounded-full mr-[15px] "
                       src={ChannelImage}
                       alt="load image"
                     />
                     <p className="text-sm sm:text-md font-semibold mr-[10px] sm:mr-[20px] opacity-50">
                       Nureal Entertainment
                     </p>
                   </div>
                 </div>
                 <p className="text-[15px] text-white opacity-90 max-w-[503px] mb-[13px]">
                   This ethereal composition transcends time and space, taking
                   you on a mesmerizing audio journey through the digital cosmos.
                   Immerse yourself in the symphonic beauty of celestial
                   melodies, where each note resonates with the magic of the
                   Metaverse. 'Hold my hands' isn't just a song; it's an
                   experience
                 </p>
                 <span className="text-[14px] opacity-50 text-white font-normal text-opacity-90 ">
                   Duration:{" "}
                 </span>
                 <span className=" text-[14px] text-white opacity-100">
                   1 min 34 secs
                 </span>
               </div>
             </div>
 
             {/* <div className="flex-1 max-w-xl mt-10 lg:mt-0 min-h-180"> */}
             {/* <Popup type="UnlockPremium" status={open} text={`<p class="opacity-70">Unlock the access exclusive content and early releases curated just for you. Subscribe for ,<b>$24.00/Month ( $288.00/year )</b>.</p>`}  btnText="Subscribe now @$24.00/Month" heading="Preview in Market Suite" handleData={() => setOpen(false)} /> */}
             <div className="py-[24px] px-[33px] sm:py-[38px] sm:px-[59px] bg-[#2C2C2C] text-white rounded-lg  max-w-[520px]">
              
               <div className="text-left">
                 {/* <h2 className="font-heading text-2xl mb-[29px]">heading</h2> */}
                 <p className="leading-relaxed ">
                   This content is locked. To access this premium content, Buy{" "}
                   <b>Fourth Star</b> Premium Subscription.
                 </p>
                 <button
                   type="button"
                   onClick={handleClick}
                   className="flex items-center w-full text-[14px] sm:text-[16px] justify-center font-bold rounded-lg btn-gradient leading-none text-black py-3  mt-6"
                 >
                   <svg
                     xmlns="http://www.w3.org/2000/svg"
                     width="24"
                     height="25"
                     viewBox="0 0 24 25"
                     fill="none"
                     className="mr-[10px]"
                   >
                     <path
                       d="M12 17.5C12.5304 17.5 13.0391 17.2893 13.4142 16.9142C13.7893 16.5391 14 16.0304 14 15.5C14 14.9696 13.7893 14.4609 13.4142 14.0858C13.0391 13.7107 12.5304 13.5 12 13.5C11.4696 13.5 10.9609 13.7107 10.5858 14.0858C10.2107 14.4609 10 14.9696 10 15.5C10 16.0304 10.2107 16.5391 10.5858 16.9142C10.9609 17.2893 11.4696 17.5 12 17.5ZM18 8.5C18.5304 8.5 19.0391 8.71071 19.4142 9.08579C19.7893 9.46086 20 9.96957 20 10.5V20.5C20 21.0304 19.7893 21.5391 19.4142 21.9142C19.0391 22.2893 18.5304 22.5 18 22.5H6C5.46957 22.5 4.96086 22.2893 4.58579 21.9142C4.21071 21.5391 4 21.0304 4 20.5V10.5C4 9.96957 4.21071 9.46086 4.58579 9.08579C4.96086 8.71071 5.46957 8.5 6 8.5H7V6.5C7 5.17392 7.52678 3.90215 8.46447 2.96447C9.40215 2.02678 10.6739 1.5 12 1.5C12.6566 1.5 13.3068 1.62933 13.9134 1.8806C14.52 2.13188 15.0712 2.50017 15.5355 2.96447C15.9998 3.42876 16.3681 3.97995 16.6194 4.58658C16.8707 5.19321 17 5.84339 17 6.5V8.5H18ZM12 3.5C11.2044 3.5 10.4413 3.81607 9.87868 4.37868C9.31607 4.94129 9 5.70435 9 6.5V8.5H15V6.5C15 5.70435 14.6839 4.94129 14.1213 4.37868C13.5587 3.81607 12.7956 3.5 12 3.5Z"
                       fill="black"
                     />
                   </svg>
                   Unlock Premium @$24.00/Month
                 </button>
               </div>
             </div>
             {/* Type : BuyNow || Free || Premium || MyAsset */}
 
             {/* {!cardAdded ? (
                 <BuyCards
                   type="addToAssets"
                   handleClick={handleClick}
                   btnText="Add to my Assets"
                   title="This content is available for free. Add to your assets and enjoy."
                 />
               ) : (
                 <BuyCards
                   type="addedToAssets"
                   handleClick={handleClick}
                   btnText="Added to your assets"
                   title="This content is available for free. Add to your assets and enjoy."
                 />
               )} */}
             {/* </div> */}
 
             <div className="volumetric-card-right-shadow"></div>
             {/* <ShadowFrame className="w-[250px] md:w-[775px] h-[250px] md:h-[775px] rounded-[250px] md:rounded-[775px] -right-[80px] md:-right-[300px] -bottom-[80px] md:-bottom-[150px]" /> */}
           </div>{" "}
         </div>
         <div className=" w-[100%] lg:w-[41%]  max-[1024px]:w-auto max-[1024px]:h-auto max-[1024px]:mt-[18px]">
           <div className="__entertainment_assets_heading mb-[16px] lg:mb-[20px] sm:flex justify-between pt-1">
             <h4 className="font-medium font-heading text-[18px] px-[0]  lg:text-[20px] tracking-[1px]  max-[768px]:p-0 max-[768px]:text-[15px] mb-4 sm:mb-0">
               Hold my hands
             </h4>
           </div>
           <div className="grid grid-cols-1  gap-4 ">
             <MusicCard
               type="trending"
               name=""
             />
             <MusicCard
               type="trending"
               name=""
             />
             <MusicCard
               type="trending"
               name=""
             />
             <MusicCard
               type="trending"
               name=""
             />
             <MusicCard
               type="trending"
               name=""
             />
             <MusicCard
               type="trending"
               name=""
             />
           </div>
         </div>
       </div>
     </>
   );
 };
 
 export default MusicContent;
 