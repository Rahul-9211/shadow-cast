/**
 * This file is part of FourthStar User Dashboard
 *(c) 2023 ShadowCast.Io <craig@shadowcast.io>
 *------------------------------------------------------
 *@module Local-Redux-Store
 *@developer Aditya P
 *@desc Handling Local state management for FourthStar Project
 */

import { configureStore } from "@reduxjs/toolkit";

import {UserProfile} from "./slicer/userProfile";

// We use all related local API calls for different modules and section of the pages
// Configure the middleware and dynamic reducer function name according to your API needs
export const LocalStore = configureStore({
    reducer: {
        UserProfile: UserProfile
    }
})