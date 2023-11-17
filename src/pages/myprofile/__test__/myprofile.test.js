/**
 * This file is part of FourthStar User Dashboard
 *(c) 2023 ShadowCast.Io <craig@shadowcast.io>
 *------------------------------------------------------
 *@module MyProfile-Test-Page
 *@developer Aditya P
 */

 import MyProfile from "../MyProfile";
 import { BrowserRouter } from "react-router-dom";
 import { render, screen } from "@testing-library/react";

 describe('Test Case for MyProfile Page', () => {
    it('render My Profile page without error', () => {
        render(<BrowserRouter>
            <MyProfile />
        </BrowserRouter>);
      });
 })