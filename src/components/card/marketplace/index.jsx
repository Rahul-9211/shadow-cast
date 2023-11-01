/**
 * This file is part of FourthStar User Dashboard
 *(c) 2023 ShadowCast.Io <craig@shadowcast.io>
 *------------------------------------------------------
 * @module Generic-Assets-Card
 * @developer Sudhanshu
 * type = large || small
*/

import React from 'react'
import LargeCard from './largeCard';
import SmallCard from './smallCard';
const MarketPlaceCard = ({ item, type }) => {
  return type === "large" ? <LargeCard item={item} /> : <SmallCard item={item} />
}

export default MarketPlaceCard