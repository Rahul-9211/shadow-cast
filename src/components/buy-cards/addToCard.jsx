/**
 * This file is part of FourthStar User Dashboard
 *(c) 2023 ShadowCast.Io <craig@shadowcast.io>
 *------------------------------------------------------
 *@module AddToCard
 *@developer Sudhanshu
 */

import React from 'react';
import CoinIcon from "assets/images/coin-icon.png"
const AddToCard = ({ title, price, type }) => {
    return (
        <>
            {title && <h4 className='text-white/[0.5] text-base mb-2' dangerouslySetInnerHTML={{__html: title}}></h4> }
            {(price && type === "product") && <div className='my-4 flex gap-2 items-center'>
                <img alt='coin' src={CoinIcon} className='w-auto h-auto' />
                <span className='font-extrabold'>{price}</span>
            </div> }
            <button type="button" className="font-bold text-sm md:text-base rounded-lg btn-gradient hover:text-white w-full text-black py-3 px-5 mt-6">{type==="content" ? 'Buy @'+price : 'Buy Now'}</button>
            <button type="button" className="font-bold text-sm md:text-base rounded-lg border-[1.5px] border-sec justify-center w-full py-2.5 px-5 flex gap-2 mt-5 items-center btn-outline hover:text-dark">
                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 25 25" fill="none">
                    <path d="M22.322 7.931C22.23 7.79808 22.1072 7.68943 21.964 7.61436C21.8209 7.5393 21.6616 7.50006 21.5 7.5H7.833L6.679 4.73C6.52769 4.36523 6.27147 4.05359 5.94282 3.83462C5.61418 3.61564 5.22791 3.49918 4.833 3.5H2.5V5.5H4.833L9.577 16.885C9.65299 17.0672 9.78118 17.2228 9.94542 17.3322C10.1097 17.4416 10.3026 17.5 10.5 17.5H18.5C18.917 17.5 19.29 17.241 19.437 16.852L22.437 8.852C22.4937 8.70063 22.5129 8.53776 22.4928 8.37735C22.4728 8.21695 22.4142 8.06379 22.322 7.931Z" fill="currentColor" />
                    <path d="M11 21.5C11.8284 21.5 12.5 20.8284 12.5 20C12.5 19.1716 11.8284 18.5 11 18.5C10.1716 18.5 9.5 19.1716 9.5 20C9.5 20.8284 10.1716 21.5 11 21.5Z" fill="currentColor" />
                    <path d="M18 21.5C18.8284 21.5 19.5 20.8284 19.5 20C19.5 19.1716 18.8284 18.5 18 18.5C17.1716 18.5 16.5 19.1716 16.5 20C16.5 20.8284 17.1716 21.5 18 21.5Z" fill="currentColor" />
                </svg>
                Add to Cart</button>
        </>
    )
}

export default AddToCard;