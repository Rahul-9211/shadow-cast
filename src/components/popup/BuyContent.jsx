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
const BuyContent = ({ status, handleData, heading, text }) => {
    const theme = useTheme();
    const fullScreen = useMediaQuery(theme.breakpoints.down('md'));
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
            <div className='py-7 lg:py-14 px-6 lg:px-28 bg-[#2C2C2C] text-white'>
                <div className='text-center max-w-[638px]'>
                    <h2 className='font-heading text-lg md:text-2xl mb-4 lg:mb-8'>{heading}</h2>
                    <p className="text-sm lg:text-base leading-relaxed">{text}</p>
                    <button type="button" onClick={handleClick} className="font-bold rounded-lg btn-gradient leading-none text-black py-3 px-12 mt-6">Got it!</button>
                </div>
            </div>
        </Dialog>
    )
}

export default BuyContent;