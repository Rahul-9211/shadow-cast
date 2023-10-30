/**
 * This file is part of FourthStar User Dashboard
 *(c) 2023 ShadowCast.Io <craig@shadowcast.io>
 *------------------------------------------------------
 *@module Premium
 *@developer Sudhanshu
 */

import React from 'react';
import CoinIcon from "assets/images/coin-icon.png"
const Premium = ({ title, price, plan }) => {
    return (
        <>
            <h4 className='text-white text-base mb-2' dangerouslySetInnerHTML={{__html: title}}></h4>
            <button type="button" className="font-bold rounded-lg btn-gradient w-full text-black py-3 px-5 mt-10 flex justify-center gap-2 items-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M6 22C5.45 22 4.979 21.804 4.587 21.412C4.195 21.02 3.99934 20.5493 4 20V10C4 9.45 4.196 8.979 4.588 8.587C4.98 8.195 5.45067 7.99933 6 8H7V6C7 4.61667 7.48767 3.43733 8.463 2.462C9.43834 1.48667 10.6173 0.999334 12 1C13.3833 1 14.5627 1.48767 15.538 2.463C16.5133 3.43833 17.0007 4.61733 17 6V8H18C18.55 8 19.021 8.196 19.413 8.588C19.805 8.98 20.0007 9.45067 20 10V20C20 20.55 19.804 21.021 19.412 21.413C19.02 21.805 18.5493 22.0007 18 22H6ZM6 20H18V10H6V20ZM12 17C12.55 17 13.021 16.804 13.413 16.412C13.805 16.02 14.0007 15.5493 14 15C14 14.45 13.804 13.979 13.412 13.587C13.02 13.195 12.5493 12.9993 12 13C11.45 13 10.979 13.196 10.587 13.588C10.195 13.98 9.99934 14.4507 10 15C10 15.55 10.196 16.021 10.588 16.413C10.98 16.805 11.4507 17.0007 12 17ZM9 8H15V6C15 5.16667 14.7083 4.45833 14.125 3.875C13.5417 3.29167 12.8333 3 12 3C11.1667 3 10.4583 3.29167 9.875 3.875C9.29167 4.45833 9 5.16667 9 6V8Z" fill="black" />
                </svg>
                Unlock Premium @{price}/{plan}</button>

        </>
    )
}

export default Premium;