/**
 * This file is part of FourthStar User Dashboard
 *(c) 2023 ShadowCast.Io <craig@shadowcast.io>
 *------------------------------------------------------
 *@module Global-Redux-Store
 *@developer Aditya P
 *@desc Handling Global state management for FourthStar Project
 */

import { configureStore } from "@reduxjs/toolkit";

import { UserAuthSlice } from "./slicer/userAuth";
// import { counterSlice } from "./slicer/userAuth/counter";

import counterReducer from './slicer/userAuth/counter';
import userData from "./slicer/userAuth/userData";

// Only Public Data and User Authentication will be used under this Store
// Configure the middleware and dynamic reducer function name according to your API needs



// Combine reducers if you have multiple slices
const rootReducer = {
    UserAuth: UserAuthSlice,
    counter : counterReducer,
    userData : userData
  };


export const GlobalStore = configureStore({
    reducer: rootReducer
})
