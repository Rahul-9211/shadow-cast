/**
 * This file is part of FourthStar User Dashboard
 *(c) 2023 ShadowCast.Io <craig@shadowcast.io>
 *------------------------------------------------------
 * @module Large-Card-Components 
 * @developer Sudhanshu
 * type = large
*/
import React from 'react';
import ShadowFrame from "components/shadow-frame";
import { NavLink } from 'react-router-dom';
const LargeCard = ({ item }) => {
    return (
        <div className='group relative overflow-hidden rounded-lg bg-[#1D1D1D]'>
           <ShadowFrame className="w-[200px] md:w-[500px] h-[200px] md:h-[500px] rounded-[200px] md:rounded-[500px] -left-[20px] md:-left-[100px] bottom-0 md:block hidden" />
            <div className='p-3'>
                <div className='bg-[#2D2D2D] aspect-[590/298] md:aspect-[1224/354] relative z-10 overflow-hidden'>
                    <img
                        src={item?.img}
                        className="h-full w-full object-cover group-hover:scale-105 transition duration-300 ease-in-out"
                    />
                </div>
                <div className="flex flex-wrap justify-between relative z-10 gap-5 items-center p-4 my-4">
                    <div className='max-w-2xl xl:max-w-3xl'>
                        <h4 className="font-bold text-base md:text-xl mb-3 md:mb-5">{item?.title}</h4>
                        <p className="leading-sung text-sm md:text-base text-white/[0.90]">{item?.desc}</p>
                    </div>
                    {item?.slug && <NavLink to={item?.slug} className='inline-flex border text-sm md:text-base leading-none rounded-2xl border-sec btn-outline hover:text-black px-6 py-3 md:py-4 md:px-8 font-medium'>See Apartment</NavLink>}
                </div>
            </div>            
           <ShadowFrame className="w-[250px] md:w-[500px] h-[250px] md:h-[500px] rounded-[250px] md:rounded-[500px] right-[50%] translate-x-1/2 md:translate-x-0 md:-right-[100px] bottom-0 !bg-[#FFE9C9] md:!bg-[#FFE9C9]/[0.60]" />
        </div>
    )
}

export default LargeCard;