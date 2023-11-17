/**
 * This file is part of FourthStar User Dashboard
 *(c) 2023 ShadowCast.Io <craig@shadowcast.io>
 *------------------------------------------------------
 *@module MyAssets-Test-Page
 *@developer Aditya P
 */

import { render, screen, fireEvent } from "@testing-library/react";
import { MyAssetsHome } from "../myassets";
import { MyAvatarHome } from "../myavatar";
import { BrowserRouter } from "react-router-dom";

describe("Test case for My assets including Myassets and MyAvatar", () => {
  it("should render MyAssetsHome component without crashing", () => {
    render(
      <BrowserRouter>
        <MyAssetsHome />
      </BrowserRouter>
    );
  });

  it("should display the category panel with the list of asset categories", () => {
    render(
      <BrowserRouter>
        <MyAssetsHome />
      </BrowserRouter>
    );

    expect(screen.getByTestId("my-assetsHome-main")).toBeInTheDocument();
    const categoryPanel = screen.getByTestId("myAssets-category-main");
    expect(categoryPanel).toBeInTheDocument();
  });

  it("should render the main container with tabs and wardrobe content by default", () => {
    render(
      <BrowserRouter>
        <MyAvatarHome />
      </BrowserRouter>
    );
    const mainContainer = screen.getByTestId("my-avatarHome-main");
    expect(mainContainer).toBeInTheDocument();
  });

  it("should update the content when clicking on a tab", () => {
    render(
      <BrowserRouter>
        <MyAvatarHome />
      </BrowserRouter>
    );
    const customizeTab = screen.getByText("Customize look");
    fireEvent.click(customizeTab);
    const customizeContent = screen.getByText("CustomizeAvatar");
    expect(customizeContent).toBeInTheDocument();
  });

  it("should update the wardrobe content when clicking on a category", () => {
    render(
      <BrowserRouter>
        <MyAvatarHome />
      </BrowserRouter>
    );
    const spaceSuitCategory = screen.getByText("Space Suit");
    fireEvent.click(spaceSuitCategory);
    const spaceSuitContent = screen.getByText("Space Suit");
    expect(spaceSuitContent).toBeInTheDocument();
  });
});
