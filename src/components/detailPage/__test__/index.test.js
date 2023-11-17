/**
 * This file is part of FourthStar User Dashboard
 *(c) 2023 ShadowCast.Io <craig@shadowcast.io>
 *------------------------------------------------------
 *@module Market-Detail-Test-Page-Clothing&Companion
 *@developer Aditya P
 */

import MarketDetailPage from "../MarketDetailPage";
import { BrowserRouter } from "react-router-dom";
import { render } from "@testing-library/react";

describe("Test Case For Clothing and companion detail page", () => {
  it("should render the MarketDetailPage component without crashing", () => {
    render(
      <BrowserRouter>
        <MarketDetailPage />
      </BrowserRouter>
    );
  });

//   it('should navigate to the correct category page when a tab is clicked', () => {
//     render(
//         <BrowserRouter>
//           <MarketDetailPage />
//         </BrowserRouter>
//       );
//     const tabList = screen.getByTestId('tablist');
//     const apartmentTab = tabList.children[0].firstChild;
//     fireEvent.click(apartmentTab);
//     expect(navigate).toHaveBeenCalledWith('/marketplace/apartments');
//   });
});
