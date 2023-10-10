import React from 'react';
import '@testing-library/jest-dom';
import { render, screen, within } from '@testing-library/react';
import Footer from '../Index';
import { BrowserRouter } from 'react-router-dom';

describe('Test case for footer', () => {
  it('privacy policy', () => {
    render(
      <BrowserRouter>
        <Footer />
      </BrowserRouter>
    );

    const elementBtn = screen.getByRole('button', {
      name: /privacy policy/i,
    });
    expect(elementBtn).toBeInTheDocument();
  });
  it('terms & condition', () => {
    render(
      <BrowserRouter>
        <Footer />
      </BrowserRouter>
    );

    const elementBtn = screen.getByRole('button', {
      name: /terms & condition/i,
    });
    expect(elementBtn).toBeInTheDocument();
  });
  it('instagram', () => {
    render(
      <BrowserRouter>
        <Footer />
      </BrowserRouter>
    );

    const elementId = screen.getByTestId('InstagramIcon');
    expect(elementId).toBeInTheDocument();
  });
});
