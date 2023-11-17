/**
 * This file is part of FourthStar User Dashboard
 *(c) 2023 ShadowCast.Io <craig@shadowcast.io>
 *------------------------------------------------------
 *@module Friends-Home-Test-Page
 *@developer Aditya P
 */

import { BrowserRouter } from "react-router-dom";
import InviteHome from "../InviteHome";
import { screen, render } from "@testing-library/react";
describe("Test Case for Friends Home Page", () => {
  it("should render the component without crashing", () => {
    render(
      <BrowserRouter>
        <InviteHome />
      </BrowserRouter>
    );
  });

  it('should display the friend banner image and text', () => {
    render(
        <BrowserRouter>
          <InviteHome />
        </BrowserRouter>
      );
    const bannerImage = screen.getByAltText('friend_banner_bg');
    const bannerText = screen.getByText('Bring Your Friends to the virtual party');
    expect(bannerImage).toBeInTheDocument();
    expect(bannerText).toBeInTheDocument();
  });
});
