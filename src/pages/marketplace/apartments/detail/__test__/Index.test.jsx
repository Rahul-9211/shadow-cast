import React from 'react';
import '@testing-library/jest-dom';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import ApartmentDetail from '../Index';
import MarketPlaceCard from 'components/card/marketplace';
import BuyCards from 'components/buy-cards';
import SlickSlider from 'components/carousel/SlickSlider';
import { BrowserRouter } from 'react-router-dom';

describe("Apartment Page Component", () => {
    it("should display apartment information correctly", () => {
        render(<BrowserRouter><ApartmentDetail /></BrowserRouter>);
        const subHeading = screen.getByText('About Apartment');
        expect(subHeading).toBeInTheDocument();
        const titleElement = screen.getByText('Orion Penthouse');
        expect(titleElement).toBeInTheDocument();
        const descriptionElement = screen.getByText('Indulge in the opulence of these towering apartments that capture the essence of a radiant galaxy, offering a sophisticated and cosmopolitan living experience. Immerse yourself in the wonders of virtual living, where every corner is a gateway to adventure, entertainment, and boundless exploration.');
        expect(descriptionElement).toBeInTheDocument();
    });

    it('should display apartment buy now information correctly', () => {
        const { getByText } = render(<BuyCards type="BuyNow" card="product" title="Buy this Apartment" price="$245.89" />);
        expect(getByText('Buy this Apartment')).toBeInTheDocument();
        expect(getByText('$245.89')).toBeInTheDocument();
        expect(getByText('Buy Now')).toBeInTheDocument();
        expect(getByText('Add to Cart')).toBeInTheDocument();

    });
    it('should display apartment added to my assets information correctly', () => {
        const { getByText } = render(<BuyCards type="MyAsset" card="product" title="Buy this Apartment" price="$245.89" />);
        expect(getByText('Buy this Apartment')).toBeInTheDocument();
        expect(getByText('$245.89')).toBeInTheDocument();
        expect(getByText('Added to your assets')).toBeInTheDocument();
    });

    it('should display apartment slider information correctly', () => {
        const slider = [{
            id: 0,
            largeImg: "https://fourthstar-userdashboard.s3.amazonaws.com/new_card_img.png",
            thumbImg: "https://fourthstar-userdashboard.s3.amazonaws.com/new_card_img.png",
        }];
        render(<SlickSlider slider={slider} />);
        expect(document.getElementsByClassName('main-slide')).toHaveLength(1);
        expect(document.getElementsByClassName('thumb-slide')).toHaveLength(1);
    });

    it('should open the 3D preview dialog when the "Preview in Market Suit" button is clicked', async () => {
        const { getByText } = render(
            <BrowserRouter>
                <ApartmentDetail />
            </BrowserRouter>
        );
        const previewButton = getByText("Preview in Market Suite");
        fireEvent.click(previewButton);     
    });

    it('should display apartment suggested information correctly', () => {
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