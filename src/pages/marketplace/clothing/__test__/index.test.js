/**
 * This file is part of FourthStar User Dashboard
 *(c) 2023 ShadowCast.Io <craig@shadowcast.io>
 *------------------------------------------------------
 *@module Clothing-Landing-Test-Page
 *@developer Aditya P
 */

 import Index from "../Index";
 import { BrowserRouter } from "react-router-dom";
 import { render, screen } from "@testing-library/react";

 describe('test case for marketplace clothing module', () => {
    it('should display a banner image', () => {
        render(<BrowserRouter>
            <Index />
        </BrowserRouter>);
        const bannerImage = screen.getByAltText("Network Problem");
        expect(bannerImage).toBeInTheDocument();
      });

      it('should display a list of clothing categories', () => {
        render(<BrowserRouter>
            <Index />
        </BrowserRouter>);
        const categoryList = screen.getByRole("cloth-category-list");
        expect(categoryList).toBeInTheDocument();
      });
 })