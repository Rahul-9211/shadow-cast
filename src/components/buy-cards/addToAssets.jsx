/**
 * This file is part of FourthStar User Dashboard
 *(c) 2023 ShadowCast.Io <craig@shadowcast.io>
 *------------------------------------------------------
 *@module AddToAssets
 *@developer Sudhanshu
 */

 import React from 'react';
 import CoinIcon from "assets/images/coin-icon.png"
 const AddToAssets = ({ title, price }) => {
     return (
         <>
             <h4 className='text-white/[0.5] text-base mb-2' dangerouslySetInnerHTML={{__html: title}}></h4>
             <button type="button" className="font-bold rounded-lg border-[1.5px] border-sec justify-center w-full py-3 px-5 flex gap-2 mt-5 items-center">
                 Added to your assets</button>
         </>
     )
 }
 
 export default AddToAssets;