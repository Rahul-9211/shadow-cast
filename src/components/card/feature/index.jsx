/**
 * This file is part of FourthStar User Dashboard
 *(c) 2023 ShadowCast.Io <craig@shadowcast.io>
 *------------------------------------------------------
 * @module Featured
 * @developer Sudhanshu
*/

import React from 'react';
import { Box } from '@mui/material';
const FeaturedCard = ({ item }) => {
    return (
        <div className="box-item card-hover_parent">
            <Box className="text-center flex items-center justify-center card-hover_img">
                <img
                    src={item?.img}
                    className="h-full w-full rounded-xl object-contain"
                />
            </Box>
            <h4 className="font-heading text-base font-normal text-center clip-text mt-3 mb-6">
                {item?.title}
            </h4>
            <p className="leading-[1.775] text-xs font-normal text-center c_white">
                {item?.desc}
            </p>
        </div>
    )
}

export default FeaturedCard