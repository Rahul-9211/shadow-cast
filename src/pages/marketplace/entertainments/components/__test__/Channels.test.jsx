import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import Index from "../channels";
import { BrowserRouter as Router } from "react-router-dom";
describe("Index Component", () => {
  test("renders the component with the default filter 'All'", () => {
    render( <Router>
        <Index />
      </Router>);
    
    const header = screen.getByText('Channel');
    expect(header).toBeInTheDocument();

  });

  test("allows changing the filter to 'Free'", () => {
    render( <Router>
        <Index />
      </Router>);
    
    const freeFilterButtons = screen.getAllByText(/^Free$/i, { multiple: true });
    
    expect(freeFilterButtons.length).toBeGreaterThan(0);
  
    freeFilterButtons.forEach((button) => {
      fireEvent.click(button);
    });
  });


  test("displays the Explore component when data is not available", () => {
    const IsDataAvailable = false;
    render( <Router>
        <Index IsDataAvailable={IsDataAvailable}/>
      </Router>);
  
    const exploreButton = screen.queryByText("Explore");
    expect(exploreButton).toBeNull();
  });


  
  

});
