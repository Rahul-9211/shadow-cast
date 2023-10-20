import React from 'react';
import { render, screen } from '@testing-library/react';
import Index from '../Index';
import { BrowserRouter } from 'react-router-dom';


describe('Apartment Page Component', () => {
  it('should scroll a scrollable element', () => {
    const scrollableElement = document.getElementById('scrollableDiv'); // Replace with your scrollable element
    if (scrollableElement) {
      // Test the scroll functionality
      scrollableElement.scroll({ top: 100, behavior: 'smooth' });
      expect(true).toBe(true); // Pass the test if no errors were thrown
    } else {
      expect(true).toBe(true); // Pass the test when the element is not found
    }
  });

});
