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
import AddToAssets from './addToAssets';
import AddedToAssets from './addedToAssets';
const BuyCards = ({ type, card, title, price, plan ,btnText ,  handleClick }) => {
    return (
        <div className='bg-gradient-2 rounded-[20px] py-5 px-7 lg:py-10 lg:px-14'>
            {type === "BuyNow" && <AddToCard type={card} title={title} price={price}/> }
            {type === "Free" && <Free title={title} /> }
            {type === "Premium" && <Premium price={price} plan={plan} title={title} /> }
            {type === "MyAsset" && <InMyAssets price={price} title={title} /> }
            {type === "addToAssets" && <AddToAssets btnText={btnText} title={title} handleClick={handleClick}/> }
            {type === "addedToAssets" && <AddedToAssets btnText={btnText} title={title} handleClick={handleClick}/> }
        </div>
    )
}

export default BuyCards;