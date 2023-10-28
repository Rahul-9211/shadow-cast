/**
 * This file is part of FourthStar User Dashboard
 *(c) 2023 ShadowCast.Io <craig@shadowcast.io>
 *------------------------------------------------------
 *@module Preview
 *@developer Sudhanshu
 */

 import * as React from 'react';
 import Dialog from '@mui/material/Dialog';
 const Preview = ({ status, handleData, heading, text }) => {
     const handleClick = () => {
         handleData(false)
     }
     return (
         <Dialog
             maxWidth={'lg'}
             open={status}
             onClose={handleClick}
             aria-labelledby="responsive-dialog-title"
         >
             <div className='py-14 px-28 bg-[#2C2C2C] text-white'>
                 <div className='text-center max-w-[638px]'>
                     <h2 className='font-heading text-2xl mb-8'>{heading}</h2>
                     <p className="leading-relaxed">{text}</p>
                     <button type="button" onClick={handleClick} className="font-bold rounded-lg btn-gradient leading-none text-black py-3 px-12 mt-6">Got it!</button>
                 </div>
             </div>
         </Dialog>
     )
 }
 
 export default Preview;