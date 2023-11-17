import React from 'react';
import '@testing-library/jest-dom';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import ShipDetail from '../Index';
import MarketPlaceCard from 'components/card/marketplace';
import BuyCards from 'components/buy-cards';
import SlickSlider from 'components/carousel/SlickSlider';
import { BrowserRouter } from 'react-router-dom';

describe("Apartment Page Component", () => {
    it("should display apartment information correctly", () => {
        render(<BrowserRouter><ShipDetail /></BrowserRouter>);
        const subHeading = screen.getByText('About Ship');
        expect(subHeading).toBeInTheDocument();
        const titleElement = screen.getByText('Prometheus');
        expect(titleElement).toBeInTheDocument();
        const descriptionElement = screen.getByText("Prepare to embark on an epic journey through the virtual cosmos with our state-of-the-art fighter ship, the 'Prometheus.' Designed for fearless space adventurers, 'Prometheus' offers a thrilling blend of speed, power, and precision. With its advanced technology and customizable features, you'll dominate space battles and explore uncharted galaxies like never before.");
        expect(descriptionElement).toBeInTheDocument();
    });

    it('should display apartment buy now information correctly', () => {
        const { getByText } = render(<BuyCards type="BuyNow" card="product" title="Buy this Ship" price="$245.89" />);
        expect(getByText('Buy this Ship')).toBeInTheDocument();
        expect(getByText('$245.89')).toBeInTheDocument();
        expect(getByText('Buy Now')).toBeInTheDocument();
        expect(getByText('Add to Cart')).toBeInTheDocument();

    });
    it('should display apartment added to my assets information correctly', () => {
        const { getByText } = render(<BuyCards type="MyAsset" card="product" title="Buy this Ship" price="$245.89" />);
        expect(getByText('Buy this Ship')).toBeInTheDocument();
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
                <ShipDetail />
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