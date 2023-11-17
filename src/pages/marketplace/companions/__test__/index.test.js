/**
 * This file is part of FourthStar User Dashboard
 *(c) 2023 ShadowCast.Io <craig@shadowcast.io>
 *------------------------------------------------------
 *@module Companion-Landing-Test-Page
 *@developer Aditya P
 */

import Index from "../Index";
import { BrowserRouter } from "react-router-dom";
import { render, screen } from "@testing-library/react";

describe("Test case for marketplace companion module", () => {
  it('should render a div with class "__companion_landing_page"', () => {
    render(
      <BrowserRouter>
        <Index />
      </BrowserRouter>
    );
    const divElement = screen.getByTestId("__companion_landing_page");
    expect(divElement).toBeInTheDocument();
  });

  it('should render SliderCards with SliderData more than 0', () => {
    render(
        <BrowserRouter>
          <Index />
        </BrowserRouter>
      );
    const sliderCards = screen.getAllByTestId('slider-card');
    expect(sliderCards.length).toBeGreaterThan(0);
  });
});
