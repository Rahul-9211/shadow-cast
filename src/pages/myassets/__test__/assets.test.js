/**
 * This file is part of FourthStar User Dashboard
 *(c) 2023 ShadowCast.Io <craig@shadowcast.io>
 *------------------------------------------------------
 *@module MyAssets-Test-Page
 *@developer Aditya P
 */

 import { render} from "@testing-library/react";
 import MyAssets from "../MyAssets";
 import { MyAssetsHome } from "components/assets/myassets";


 describe('Render Parent Assets', () => {
    it('It should be able to switch correctly between parent tabs', () => {
        render(<MyAssets/>)
    })
 })

 describe('Render Parent Tabs', () => {
    it('It should be able to switch correctly between parent tabs', () => {
        render(<MyAssetsHome/>)
    })
 })

