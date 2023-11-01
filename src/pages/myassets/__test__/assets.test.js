/**
 * This file is part of FourthStar User Dashboard
 *(c) 2023 ShadowCast.Io <craig@shadowcast.io>
 *------------------------------------------------------
 *@module MyAssets-Test-Page
 *@developer Aditya P
 */

import { screen, render } from "@testing-library/react";
import MyAssets from "../MyAssets";

it("should render the main container with two ShadowFrame components and a parentTabs section", () => {
  render(<MyAssets />);
  const mainContainer = screen.getByTestId("my-assets-main");
  const shadowFrames = screen.getByTestId("shadow-frame");
  const parentTabs = screen.getByTestId("parent-tabs");

  expect(mainContainer).toBeInTheDocument();
  expect(shadowFrames.length).toBe(2);
  expect(parentTabs).toBeInTheDocument();
});
