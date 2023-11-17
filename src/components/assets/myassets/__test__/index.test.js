/**
 * This file is part of FourthStar User Dashboard
 *(c) 2023 ShadowCast.Io <craig@shadowcast.io>
 *------------------------------------------------------
 *@module MyAssets-Category-Test-Case
 *@developer Aditya P
 */
import { render, screen, fireEvent } from "@testing-library/react";
import Apartments from "../Apartments";
import Ships from "../Ships";
import Entertainment from "../Entertainment";
import Clothing from "../Clothing";
import Companion from "../Companion";
import Gaming from "../Gaming";
import { BrowserRouter } from "react-router-dom";

describe("Test Case for MyAssets category Components", () => {
  // Apartments Component
  it("should render the component without crashing", () => {
    render(
      <BrowserRouter>
        <Apartments />
      </BrowserRouter>
    );
  });

  it('should display the heading "Apartments"', () => {
    render(
      <BrowserRouter>
        <Apartments />
      </BrowserRouter>
    );
    const heading = screen.getByText(/Apartments/i);
    expect(heading).toBeInTheDocument();
  });

  // Ships component
  it('should display the heading "Ships"', () => {
    render(
      <BrowserRouter>
        <Ships />
      </BrowserRouter>
    );
    expect(screen.getByText("Ships")).toBeInTheDocument();
  });

  it("should render the component with an empty ShipsData array", () => {
    const emptyShipsData = [];
    render(
      <BrowserRouter>
        <Ships item={emptyShipsData} />
      </BrowserRouter>
    );
    expect(screen.getByText("Ships")).toBeInTheDocument();
    expect(screen.queryByTestId("marketplace-card")).not.toBeInTheDocument();
  });

  it("should render the component with null ShipsData", () => {
    const nullShipsData = null;
    render(
      <BrowserRouter>
        <Ships item={nullShipsData} />
      </BrowserRouter>
    );
    expect(screen.getByText("Ships")).toBeInTheDocument();
    expect(screen.queryByTestId("marketplace-card")).not.toBeInTheDocument();
  });

  it("should render the component with undefined ShipsData", () => {
    const undefinedShipsData = undefined;
    render(
      <BrowserRouter>
        <Ships ShipsData={undefinedShipsData} />
      </BrowserRouter>
    );
    expect(screen.getByText("Ships")).toBeInTheDocument();
    expect(screen.queryByTestId("marketplace-card")).not.toBeInTheDocument();
  });

  //   Entertainment Component
  it('should display the default tab "volumetric-video" when data is available', () => {
    render(
      <BrowserRouter>
        <Entertainment />
      </BrowserRouter>
    );
    const defaultTab = screen.getByText("Volumetric Videos");
    expect(defaultTab).toBeInTheDocument();
  });

  it("should allow the user to switch between tabs", () => {
    render(
      <BrowserRouter>
        <Entertainment />
      </BrowserRouter>
    );
    const switchtab = screen.getByText("180 Video");
    fireEvent.click(switchtab);
    const activeTab = screen.getByText("180 Video");
    expect(activeTab).toBeInTheDocument();
  });

  //  Clothing Component
  it("should render the Clothing component without errors", () => {
    render(
      <BrowserRouter>
        <Clothing />
      </BrowserRouter>
    );
  });

  it("should display the Clothing heading", () => {
    render(
      <BrowserRouter>
        <Clothing />
      </BrowserRouter>
    );
    const heading = screen.getByText("Clothing");
    expect(heading).toBeInTheDocument();
  });

  it("should display the Space-suits tab by default", () => {
    render(
      <BrowserRouter>
        <Clothing />
      </BrowserRouter>
    );
    const spaceSuitsTab = screen.getByText("Space suits");
    expect(spaceSuitsTab).toBeInTheDocument();
  });

  //   Companion Component
  it("should display the Companion heading", () => {
    render(
      <BrowserRouter>
        <Companion />
      </BrowserRouter>
    );
    const heading = screen.getByText("Companion");
    expect(heading).toBeInTheDocument();
  });

  //   Gaming Component
  it("should render the component without crashing", () => {
    render(
      <BrowserRouter>
        <Gaming />
      </BrowserRouter>
    );
  });

  it('should display a heading with the text "Gaming"', () => {
    render(
      <BrowserRouter>
        <Gaming />
      </BrowserRouter>
    );
    expect(screen.getByText("Gaming")).toBeInTheDocument();
  });

  it("should display a tab list with three tabs", () => {
    render(
      <BrowserRouter>
        <Gaming />
      </BrowserRouter>
    );
    expect(screen.getByText("All")).toBeInTheDocument();
    expect(screen.getByText("Holo Suite Gaming")).toBeInTheDocument();
    expect(screen.getByText("Environmental Gaming")).toBeInTheDocument();
  });
});
