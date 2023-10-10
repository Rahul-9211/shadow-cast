import React from 'react';
import '@testing-library/jest-dom';
import { render, screen, within } from '@testing-library/react';
import Apartment from '../Index';
import { BrowserRouter } from 'react-router-dom';

describe('Test case for Apartment Page', () => {
  it('apartment title', () => {
    render(
      <BrowserRouter>
        <Apartment />
      </BrowserRouter>
    );
    const elementTxt = screen.getByText(
      /fourth star apartments: a new dimension of living\./i
    );
    expect(elementTxt).toBeInTheDocument();
    const elementTxt2 = screen.getByText(
      /explore ultimate metaverse living experience at fourth star apartments\. our thoughtfully designed spaces combine luxury and cutting\-edge technology to create a haven where gaming and entertainment thrive\./i
    );
    expect(elementTxt2).toBeInTheDocument();
  });
});
