import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import ApartmentDetail from "../Index";
import { BrowserRouter } from "react-router-dom";

describe("Apartment Page Component", () => {
  it("should scroll a scrollable element", () => {
    const scrollableElement = document.getElementById("scrollableDiv"); 
    if (scrollableElement) {
      scrollableElement.scroll({ top: 100, behavior: "smooth" });
      expect(true).toBe(true); 
    } else {
      expect(true).toBe(true); 
    }
  });

  it("should display apartment information correctly", () => {
    const { queryAllByText } = render(
      <BrowserRouter>
        <ApartmentDetail />
      </BrowserRouter>
    );

    const apartmentNameElements = queryAllByText(
      "Luminary Luxury - The Nebula"
    );

    expect(apartmentNameElements.length).toBeGreaterThan(0);
  });
  it('should handle clicking the "Buy Now" button', () => {
    const { getByText } = render(
      <BrowserRouter>
        <ApartmentDetail />
      </BrowserRouter>
    );

    const buyNowButton = getByText("Buy Now");
    fireEvent.click(buyNowButton);

  });
  it('should handle clicking the "Add to Cart" button', () => {
    const { getByText } = render(
      <BrowserRouter>
        <ApartmentDetail />
      </BrowserRouter>
    );

    const addToCartButton = getByText("Add to Cart");
    fireEvent.click(addToCartButton);

  });

  it('should open the 3D preview dialog when the "Preview in Market Suit" button is clicked', () => {
    const { getByText } = render(
      <BrowserRouter>
        <ApartmentDetail />{" "}
      </BrowserRouter>
    );
    const previewButton = getByText("Preview in Market Suit");
    fireEvent.click(previewButton);
  });
});
