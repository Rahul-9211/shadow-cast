/**
 * This file is part of FourthStar User Dashboard
 *(c) 2023 ShadowCast.Io <craig@shadowcast.io>
 *------------------------------------------------------
 *@module InMyAssets
 *@developer Sudhanshu
 */

import React from 'react';
import CoinIcon from "assets/images/coin-icon.png"
const InMyAssets = ({ title, price }) => {
    return (
        <>
            <h4 className='text-white/[0.5] text-base mb-2' dangerouslySetInnerHTML={{__html: title}}></h4>
            {price &&  <div className='my-4 flex gap-2 items-center mb-14'>
                <img alt='coin' src={CoinIcon} className='w-auto h-auto' />
                <span className='font-extrabold'>{price}</span>
            </div>}
            <button type="button" className="font-bold rounded-lg border-[1.5px] border-[#4ECBC3] justify-center w-full py-3 px-5 flex gap-2 mt-5 items-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 25 24" fill="none">
                    <path d="M21.5 6.99984L9.5 18.9998L4 13.4998L5.41 12.0898L9.5 16.1698L20.09 5.58984L21.5 6.99984Z" fill="currentColor" />
                </svg>
                Added to your assets</button>
        </>
    )
}

export default InMyAssets;