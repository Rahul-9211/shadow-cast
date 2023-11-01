/**
 * This file is part of FourthStar User Dashboard
 *(c) 2023 ShadowCast.Io <craig@shadowcast.io>
 *------------------------------------------------------
 *@module Free
 *@developer Sudhanshu
 */

 import React from 'react';
 import CoinIcon from "assets/images/coin-icon.png"
 const Free = ({ title }) => {
     return (
         <>
             <h4 className='text-white text-base mb-2' dangerouslySetInnerHTML={{__html: title}}></h4>
             <button type="button" className="font-bold rounded-lg border-[1.5px] border-sec justify-center w-full py-3 px-5 flex gap-2 mt-6">Add to my Assets</button>
         </>
     )
 }
 
 export default Free;