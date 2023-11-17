/**
 * This file is part of FourthStar User Dashboard
 *(c) 2023 ShadowCast.Io <craig@shadowcast.io>
 *------------------------------------------------------
 *@module Popup
 *@developer Sudhanshu
 */

import * as React from 'react';
import Preview from './Preview';
import UnlockPremium from './unlockPremium';
import BuyContent from './BuyContent';
const Popup = ({ status, handleData, heading, text, button }) => {
    const handleClick = () => {
        handleData(false)
    }
    return <BuyContent status={status} text={text} heading={heading} buttonTxt={button} handleData={handleClick}/>
}

export default Popup;