/**
 * This file is part of FourthStar User Dashboard
 *(c) 2023 ShadowCast.Io <craig@shadowcast.io>
 *------------------------------------------------------
 *@module user
 *@developer sudhanshu  <sameer@shadowcast.io>
 */


 import { useState } from "react";
 import Explore from "components/Explore/Explore";
 import FilterDropdown from "components/FilterDropdown/FilterDropdown";
 import NotFound from "components/not-found/Index";
 
 
 /*It defines a
 component called `Index` that renders a list of Music cards. */
 
 const Index = () => {
   const [selectedFilter, setSelectedFilter] = useState("All");
 
   const handleFilterChange = (selectedValue) => {
     setSelectedFilter(selectedValue);
   };
   const IsDataAvailable = true;
 
   const filterOptions = ["All", "Free", "Premium", "Buy"];
 
 
   return (
     <>
       {IsDataAvailable ? (
         <div className="__entertainment_assets_main  pt-4 max-[768px]:p-0">
           <div className="__entertainment_assets_heading mb-[29px] lg:mb-[39px] sm:flex justify-between">
             <h4 className="font-medium font-heading text-[18px] px-[0] lg:px-[20px] lg:text-[28px] tracking-[1px]  max-[768px]:p-0 max-[768px]:text-[15px] mb-4 sm:mb-0">
             2D Video
             </h4>
             <div className="pt-3">
              
             </div>
           </div>
          <NotFound/>
           <div className="volumetric-card-right-shadow"></div>
  
         </div>
       ) : (
         <div class="__explore_default_button flex justify-center items-center h-[50vh] max-[768px]:flex-none max-[1280px]:h-[100%]">
           <Explore />
           {/* <Loader/> */}
         </div>
       )}
     </>
   );
 };
 
 export default Index;