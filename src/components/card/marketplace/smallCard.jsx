/**
 * This file is part of FourthStar User Dashboard
 *(c) 2023 ShadowCast.Io <craig@shadowcast.io>
 *------------------------------------------------------
 * @module Small-Card-Components 
 * @developer Sudhanshu
 * type = small
*/

import React from 'react';
import ShadowFrame from "components/shadow-frame";
import { NavLink } from 'react-router-dom';
const SmallCard = ({ item }) => {
    return (
        <NavLink className='group relative overflow-hidden rounded-xl lg:rounded-[20px] bg-[#1D1D1D] block h-full' to={item?.slug}>
            <div className='p-3'>
                <div className='bg-[#2D2D2D] aspect-[590/298] rounded-lg relative z-10 overflow-hidden'>
                    <img
                        src={item?.img}
                        className="h-full w-full rounded-lg object-cover group-hover:scale-105 transition duration-300 ease-in-out"
                    />
                </div>
                <div className="flex flex-wrap justify-between relative z-10 gap-5 items-center px-2 lg:px-4 py-4 pb-2">
                    <div className='max-w-3xl'>
                        <h4 className="font-bold text-base lg:text-xl mb-3 md:mb-4">{item?.title}</h4>
                        <p className="leading-sung text-sm text-white/[0.90]">{item?.desc}</p>
                    </div>
                </div>
            </div>            
            <ShadowFrame className="w-[250px] md:w-[400px] h-[250px] md:h-[400px] rounded-[250px] md:rounded-[400px] right-[50%] translate-x-1/2 bottom-0 !bg-[#FFE9C9]" />
        </NavLink>
    )
}

export default SmallCard;