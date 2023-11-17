/**
 * This file is part of FourthStar User Dashboard
 *(c) 2023 ShadowCast.Io <craig@shadowcast.io>
 *------------------------------------------------------
 *@module BuyCards
 *@developer Sudhanshu

 Type : BuyNow || Free || Premium || MyAsset
 Card : content || product

 */

import React from 'react';
import AddToCard from './addToCard';
import Free from './free';
import Premium from './premium';
import InMyAssets from './myAssets';
const BuyCards = ({ type, card, title, price, plan, handleData }) => {    
    const handleClick = (e) => {
        handleData(e)
    }
    return (
        <div className='bg-gradient-2 rounded-[20px] py-5 px-7 lg:py-10 lg:px-14'>
            {type === "BuyNow" && <AddToCard type={card} title={title} price={price} handleData={handleClick}/> }
            {type === "Free" && <Free title={title}  handleData={handleClick}/> }
            {type === "Premium" && <Premium price={price} plan={plan} title={title} handleData={handleClick}/> }
            {type === "MyAsset" && <InMyAssets price={price} title={title} handleData={handleClick}/> }
        </div>
    )
}

export default BuyCards;