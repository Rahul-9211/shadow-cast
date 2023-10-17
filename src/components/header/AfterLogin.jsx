/**
 * This file is part of FourthStar User Dashboard
 *(c) 2023 ShadowCast.Io <craig@shadowcast.io>
 *------------------------------------------------------
 *@module AfterLogin
 *@developer Sudhanshu <<sudhanshut@instaacoders.com>>
 */


 import React, { useState, useEffect, useRef } from "react";
 import { useNavigate } from "react-router-dom";
 import { Box } from "@mui/material";
 import logo from "assets/images/logo.png";
 import SearchIcon from "@mui/icons-material/Search";
 
 import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
 
 const SearchResultItem = ({ text, searchTerm, onClick }) => {
     const highlightedText = text.replace(
       new RegExp(searchTerm, "gi"),
       (match) => `<span class="text-gray-500">${match}</span>`
     );
   
     return (
       <li
         onClick={onClick}
         dangerouslySetInnerHTML={{
           __html: `<span class="text-gray-500 pr-2">Go to </span> ${highlightedText}`
         }}
         className="cursor-pointer hover:bg-gray-200 py-1 text-white-700 font-bold text-sm h-10 flex items-center pl-8 c"
       />
     );
   };
   
   
   
 
 const AfterLogin = () => {
   const [searchTerm, setSearchTerm] = useState("");
   const [searchResults, setSearchResults] = useState([]);
   const [showDropdown, setShowDropdown] = useState(false);
   const searchRef = useRef(null);
 
   const handleInputChange = (event) => {
     const value = event.target.value;
     setSearchTerm(value);
 
     const results = [
       "Apple",
       "Banana",
       "Cherry",
       "Date",
       "Fig",
       "Grape",
       "Lemon",
       "Mango",
       "Orange",
     ].filter((item) => item.toLowerCase().includes(value.toLowerCase()));
 
     setSearchResults(results);
     setShowDropdown(!!results.length);
   };
 
   const handleResultClick = (result) => {
     setSearchTerm(result);
     setShowDropdown(false);
   };
 
   const navigate = useNavigate();
 
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
 
   return (
     <Box className="wrapper-container">
       <Box className="h-[100px] flex items-center bg-black backdrop-blur-2 px-6">
         <Box className="logo-image">
           <img
             src={logo}
             className="cursor-pointer w-auto h-auto"
             alt="Network problem"
           />
         </Box>
         <Box className="menu-bar flex justify-between items-center w-full">
           <Box>
             <ul className="flex justify-between items-center text-sm">
               <li className="mx-7 ml-12">Marketplace</li>
               <li className="mx-7">Assets</li>
               <li className="mx-7">Friends</li>
             </ul>
           </Box>
           <Box>
             <ul className="flex justify-between items-center text-sm">
               <li className="mx-4">
                 <div ref={searchRef} className="relative w-70 mx-auto p-4">
                   <div className="relative rounded-full bg-black shadow rounded-full border border-solid border-1 border-gray-700">
                     <div className="absolute top-0 left-2 flex items-center h-full pl-1">
                       <SearchIcon className="text-gray-500" />
                     </div>
                     <input
                       type="text"
                       className="w-full py-2 pl-12 pr-3 text-white-700 outline-none bg-white bg-opacity-5"
                       placeholder="Search..."
                       value={searchTerm}
                       onChange={handleInputChange}
                     />
                     {showDropdown && (
                       <div className="absolute z-[12] top-12 left-0 w-80 rounded-b-lg shadow-lg rounded-md border border-solid border-1 border-gray-700 bg-black">
                         <p className="pt-4 pl-3 text-xs text-gray-600">Results</p>
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
               <li className="mx-4"> 
               <ShoppingCartIcon data-testid="shopping-cart-icon" className="text-white" /></li>
               <li className="mx-4"><div className="p-3 text-white-700 rounded-full text-base font-semibold" style={{backgroundColor:"#40351A"}} >SN</div></li>
             </ul>
           </Box>
         </Box>
       </Box>
     </Box>
   );
 };
 
 export default AfterLogin;