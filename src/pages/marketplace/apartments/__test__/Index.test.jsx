import React from 'react';
import '@testing-library/jest-dom';
import { render, screen, within, shallow, getByAltText } from '@testing-library/react';
import Apartment from '../Index';
import FeaturedCard from 'components/card/feature';
import MarketPlaceCard from 'components/card/marketplace';
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
