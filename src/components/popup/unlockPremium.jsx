/**
 * This file is part of FourthStar User Dashboard
 *(c) 2023 ShadowCast.Io <craig@shadowcast.io>
 *------------------------------------------------------
 *@module UnlockPremium
 *@developer Sudhanshu
 */

import * as React from 'react';
import Dialog from '@mui/material/Dialog';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
const UnlockPremium = ({ status, handleData, heading, text }) => {
    const theme = useTheme();
    const fullScreen = useMediaQuery(theme.breakpoints.down('md'));
    const handleClick = () => {
        handleData(false)
    }
    return (
        <Dialog
            fullScreen={fullScreen}
            open={status}
            onClose={handleClick}
            aria-labelledby="responsive-dialog-title"
        >
            <div className='py-8 px-9 bg-[#2C2C2C] text-white'>
                <div className='text-left'>
                    <h2 className='font-heading text-2xl mb-8'>{heading}</h2>
                    <p className="leading-relaxed" dangerouslySetInnerHTML={{ __html: text }}></p>
                    <button type="button" onClick={handleClick} className="font-bold rounded-lg btn-gradient leading-none text-black py-3 px-12 mt-6">Got it!</button>
                </div>
            </div>
        </Dialog>
    )
}

export default UnlockPremium;