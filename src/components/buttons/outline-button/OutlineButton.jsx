import React from 'react'

/**
 * This file is part of FourthStar User Dashboard
 *(c) 2023 ShadowCast.Io <craig@shadowcast.io>
 *------------------------------------------------------
 *@module Generic-Outline-Button
 *@developer Aditya P
 */

const OutlineButton = ({btnclass, btntext}) => {
  return <button className={btnclass}>{btntext}</button>

}

export default OutlineButton