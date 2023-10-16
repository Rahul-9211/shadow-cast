/**
 * This file is part of FourthStar User Dashboard
 *(c) 2023 ShadowCast.Io <craig@shadowcast.io>
 *------------------------------------------------------
 *@module Generic-Assets-Card
 *@developer Aditya P
 */

 import React from 'react'
 
 const AssetCard = ({cardImg, cardTitle, cardDesc, cardClass, name}) => {
   return (
     <div className={cardClass.cardmain}>
        <img src={cardImg} alt={name} />
        <h4 className={cardClass.cardtitle}>{cardTitle}</h4>
        <p className={cardClass.cardDesc}>{cardDesc}</p>
     </div>
   )
 }
 
 export default AssetCard