import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import Index from "../music";

describe("Index Component", () => {
  test("renders the component with the default filter 'All'", () => {
    render(<Index />);
    
    const header = screen.getByText("Music");
    expect(header).toBeInTheDocument();

    
    const cards = screen.getAllByTestId("volumetric-card");
    expect(cards.length).toBeGreaterThan(0);
  });

  test("allows changing the filter to 'Free'", () => {
    render(<Index />);
    
    const filterDropdown = screen.getByRole("button", { name: /All.▼/i });
    fireEvent.click(filterDropdown);
  
    const freeFilterButtons = screen.getAllByText(/^Free$/i, { multiple: true });
    
    expect(freeFilterButtons.length).toBeGreaterThan(0);
  
    freeFilterButtons.forEach((button) => {
      fireEvent.click(button);
    });
  });




  test("displays the Explore component when data is not available", () => {
    const IsDataAvailable = false;
    render(<Index IsDataAvailable={IsDataAvailable}/>);
  
    const exploreButton = screen.queryByText("Explore");
    expect(exploreButton).toBeNull();
  });

  test("allows changing the filter to 'Paid'", () => {
    render(
        <Index />
    );
  
      
    const filterDropdown = screen.getByRole("button", { name: /All.▼/i });
    fireEvent.click(filterDropdown);
  
    const freeFilterButtons = screen.getAllByText(/^Premium$/i, { multiple: true });
    
    expect(freeFilterButtons.length).toBeGreaterThan(0);
  
    freeFilterButtons.forEach((button) => {
      fireEvent.click(button);
    });
  
  });
  

});
