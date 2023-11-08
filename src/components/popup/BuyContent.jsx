/**
 * This file is part of FourthStar User Dashboard
 *(c) 2023 ShadowCast.Io <craig@shadowcast.io>
 *------------------------------------------------------
 *@module BuyContent
 *@developer Sudhanshu
 */

import * as React from 'react';
import Dialog from '@mui/material/Dialog';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
const BuyContent = ({ status, handleData, heading, text, buttonTxt }) => {
    const theme = useTheme();
    const fullScreen = useMediaQuery(theme.breakpoints.down('md'));
    const handleClick = () => {
        handleData(false)
    }
    return (
        <Dialog
            maxWidth={fullScreen}
            open={status}
            onClose={handleClick}
            aria-labelledby="responsive-dialog-title"
        >
            <div className='py-8 px-9 bg-[#2C2C2C] text-white lg:w-[650px]'>
                <div className='text-left'>
                    <h2 className='font-heading text-lg md:text-2xl mb-4 lg:mb-8'>{heading}</h2>
                    <p className="text-sm lg:text-base leading-relaxed">{text}</p>
                    <button type="button" onClick={handleClick} className="font-bold rounded-lg w-full btn-gradient leading-none text-black py-3 px-12 mt-6">{buttonTxt || "Got it!"}</button>
                </div>
            </div>
        </Dialog>
    )
}

export default BuyContent;