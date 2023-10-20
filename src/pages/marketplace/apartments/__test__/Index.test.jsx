import React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import Apartment from '../Index';
import { BrowserRouter } from 'react-router-dom';

describe('Test case for Apartment Page', () => {
  it('should render apartment page title and description', () => {
    render(
      <BrowserRouter>
        <Apartment />
      </BrowserRouter>
    );

    const titleElement = screen.getByText('Fourth Star Apartments: A New Dimension of Living.');
    expect(titleElement).toBeInTheDocument();

    const descriptionElement = screen.getByText(/Explore ultimate metaverse living experience at Fourth Star Apartments. Our thoughtfully designed spaces combine luxury and cutting-edge technology to create a haven where gaming and entertainment thrive\./i);
    expect(descriptionElement).toBeInTheDocument();
  });

  it('should render featured apartment cards', () => {
    render(
      <BrowserRouter>
        <Apartment />
      </BrowserRouter>
    );

    const featuredCardImages = screen.getAllByAltText('Network Problem');
    const featuredCardTitles = screen.getAllByText(/Ultimate Gaming Experience/i);
    const featuredCardDescriptions = screen.getAllByText(/Our apartments are equipped with everything you need to unleash your gaming prowess\./i);

    expect(featuredCardImages.length).toBeGreaterThan(0);
    expect(featuredCardTitles.length).toBeGreaterThan(0);
    expect(featuredCardDescriptions.length).toBeGreaterThan(0);
  })
});
