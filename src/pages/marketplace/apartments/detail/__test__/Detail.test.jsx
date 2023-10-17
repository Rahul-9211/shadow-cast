import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Deta from './Index';

test('should render the page title', () => {
  render(
    <BrowserRouter>
      <Index />
    </BrowserRouter>
  );

  const titleElement = screen.getByText(/Fourth Star Apartments: A New Dimension of Living./i);
  expect(titleElement).toBeInTheDocument();
});

test('should render the featured apartment cards', () => {
  render(
    <BrowserRouter>
      <Index />
    </BrowserRouter>
  );

  const featuredCardImages = screen.getAllByAltText('Network Problem');
  const featuredCardTitles = screen.getAllByText(/Ultimate Gaming Experience|Exclusive Immersive Streaming|Volumetric Video|180 and 360 Entertainment/i);
  const featuredCardDescriptions = screen.getAllByText(/Our apartments are equipped with everything you need to unleash your gaming prowess/i);

  expect(featuredCardImages.length).toBe(4);
  expect(featuredCardTitles.length).toBe(4);
  expect(featuredCardDescriptions.length).toBe(4);
});

test('should render the individual apartment cards', () => {
  render(
    <BrowserRouter>
      <Index />
    </BrowserRouter>
  );

  const apartmentImages = screen.getAllByAltText(/Indulge in the opulence of these towering apartments|Find yourself enchanted by the mesmerizing allure of the aurora|Experience the epitome of luxury in these magnificent mansions/i);
  const apartmentTitles = screen.getAllByText(/Luminary Luxury Apartment|Cosmic Starlight Apartment|Nebula Nexus Apartment/i);
  const apartmentDescriptions = screen.getAllByText(/Indulge in the opulence of these towering apartments that capture the essence of a radiant galaxy/i);

  expect(apartmentImages.length).toBe(5);
  expect(apartmentTitles.length).toBe(5);
  expect(apartmentDescriptions.length).toBe(5);
});
