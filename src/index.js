/**
 * This file is part of FourthStar User Dashboard
 *(c) 2023 ShadowCast.Io <craig@shadowcast.io>
 *------------------------------------------------------
 *@module user
 *@developer Sameer <sameer@shadowcast.io>
 */

import React from "react";
import { BrowserRouter } from "react-router-dom";
import ReactDOM from "react-dom/client";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

import "assets/css/style.css";
import "assets/css/media.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { GlobalStore } from "store/GlobalStore.js";
import { Provider } from "react-redux";

const root = ReactDOM.createRoot(document.getElementById("root"));
/* The `root.render()` method is rendering the main component of the application, `<App />`, inside a
`<BrowserRouter>` component. The `<BrowserRouter>` component is used for client-side routing in
React applications. The `<React.StrictMode>` component is a development mode only feature that helps
identify potential problems in the application. It performs additional checks and warnings to ensure
that the code follows best practices. */
root.render(
  <React.StrictMode>
    <Provider store={GlobalStore}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
