/**
 * This file is part of FourthStar User Dashboard
 *(c) 2023 ShadowCast.Io <craig@shadowcast.io>
 *------------------------------------------------------
 *@module Gaming-Landing-Test-Page
 *@developer Aditya P
 */

import { BrowserRouter } from "react-router-dom";
import Index from "../Index";
import { render, screen } from "@testing-library/react";


describe("Test case for marketplace Gaming Landing module", () => {
  // Renders a div with class '__gaming__landing__main'
  it('should render a div with class "__gaming__landing__main"', () => {
    render(
      <BrowserRouter>
        <Index />
      </BrowserRouter>
    );
    const divElement = screen.getByTestId("__gaming__landing__main");
    expect(divElement).toBeInTheDocument();
  });

//   it("should render an img tag with src set to GamingBannerImg", () => {
//     render(
//       <BrowserRouter>
//         <Index />
//       </BrowserRouter>
//     );
//     const imgElement = screen.getByAltText("Network Problem");
//     expect(imgElement).toBeInTheDocument();
//     expect(imgElement.src).toContain('Gaming hero-section-image.jpg');
//   });
});
