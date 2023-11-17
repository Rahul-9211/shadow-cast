import React from 'react';
import '@testing-library/jest-dom';
import { render, screen, within, shallow, getByAltText } from '@testing-library/react';
import Ship from '../Index';
import FeaturedCard from 'components/card/feature';
import MarketPlaceCard from 'components/card/marketplace';
import { BrowserRouter } from 'react-router-dom';
describe('Test case for Apartment Page', () => {
  it('apartment title', () => {
    render(
      <BrowserRouter>
        <Ship />
      </BrowserRouter>
    );
    const elementTxt = screen.getByText('Cruise in Style: Luxury Ships for Discerning Adventures');
    expect(elementTxt).toBeInTheDocument();
    const elementTxt2 = screen.getByText('Discover a world of gaming, streaming, and immersive entertainment as you navigate the digital seas in style.');
    expect(elementTxt2).toBeInTheDocument();
  });

  it('apartment feature', () => {
    const item = {
      img: "https://fourthstar-userdashboard.s3.amazonaws.com/new_card_img.png",
      title: "Ultimate Gaming Experience",
      desc: `Dummy Text`,
    }
    render(<FeaturedCard item={item} />);
    expect(screen.getByText('Ultimate Gaming Experience')).toBeInTheDocument();
    expect(screen.getByText('Dummy Text')).toBeInTheDocument();
    expect(screen.getByRole('img')).toBeInTheDocument();
  });

  it('Explore Apartments', () => {
    const item = {
      img: "https://fourthstar-userdashboard.s3.amazonaws.com/new_card_img.png",
      title: "Ultimate Gaming Experience",
      desc: `Dummy Text`,
    }
    render(<MarketPlaceCard item={item} />);
    expect(screen.getByText('Ultimate Gaming Experience')).toBeInTheDocument();
    expect(screen.getByText('Dummy Text')).toBeInTheDocument();
    expect(screen.getByRole('img')).toBeInTheDocument();
  });

});
