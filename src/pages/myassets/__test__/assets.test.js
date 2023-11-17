/**
 * This file is part of FourthStar User Dashboard
 *(c) 2023 ShadowCast.Io <craig@shadowcast.io>
 *------------------------------------------------------
 *@module MyAssets-Test-Page
 *@developer Aditya P
 */

import { screen, render, within, fireEvent } from "@testing-library/react";
import MyAssets from "../MyAssets";
import { BrowserRouter } from "react-router-dom";

describe("Test case for My Assets Landing Page", () => {
  it("Check for assets parent tab", () => {
    render(
      <BrowserRouter>
        <MyAssets />
      </BrowserRouter>
    );
    const assetsTabEle = screen.getByTestId("parenttab");
    expect(assetsTabEle).toBeInTheDocument();
  });

  it("Check for parent tab length (should be greater than 0)", () => {
    render(
      <BrowserRouter>
        <MyAssets />
      </BrowserRouter>
    );
    const assetsTabEle = screen.getByTestId("parenttab");
    const tabItem = within(assetsTabEle).getAllByRole("parent-list-item");
    expect(tabItem.length).toBeGreaterThan(0);
  });

  it("should render parent tabs and active tab content correctly", () => {
    render(
      <BrowserRouter>
        <MyAssets />
      </BrowserRouter>
    );

    expect(screen.getByTestId("my-assets-main")).toBeInTheDocument();
    // Assert that parent tabs are rendered
    expect(screen.getByTestId("parent-tabs")).toBeInTheDocument();

    // Assert that active tab content is rendered correctly based on state
    expect(screen.getByTestId("my-assetsHome-main")).toBeInTheDocument();
    expect(screen.queryByTestId("my-avatarHome-main")).not.toBeInTheDocument();

    // Click on a different parent tab
    fireEvent.click(screen.getByText("My Avatar"));

    // Assert that active tab content is updated correctly based on state
    expect(screen.getByTestId("my-avatarHome-main")).toBeInTheDocument();
    expect(screen.queryByTestId("my-assetsHome-main")).not.toBeInTheDocument();
  });

  it('should update active tab state and render corresponding content when clicking on a parent tab', () => {
    render(
      <BrowserRouter>
        <MyAssets />
      </BrowserRouter>
    );

    // Click on a different parent tab
    fireEvent.click(screen.getByText('My Avatar'));

    // Assert that active tab state is updated correctly
    expect(screen.getByText('My Avatar')).toHaveClass('text-[#fff]');
    expect(screen.getByText('My Assets')).toHaveClass('text-[gray]');

    // Assert that corresponding content is rendered
    expect(screen.getByTestId('my-avatarHome-main')).toBeInTheDocument();
    expect(screen.queryByTestId('my-assetsHome-main')).not.toBeInTheDocument();
  })
});
