import React from 'react';
import '@testing-library/jest-dom';
import { render, screen, within } from '@testing-library/react';
import Header from '../Index';
import { BrowserRouter } from 'react-router-dom';
import userEvent from '@testing-library/user-event'; 

import BeforeLogin from '../BeforeLogin';
import AfterLogin from '../AfterLogin';


describe('Test case for Navbar', () => {
// Before login Test Cases ---------------------------------------------------------------->>>
  it('renders the logo', () => {
    render(<BeforeLogin />);
    
    // Check if the logo image is rendered
    const logoImage = screen.getByAltText('Network problem');
    expect(logoImage).toBeInTheDocument();
  });

  it('renders "Marketplace" link', () => {
    render(<BeforeLogin />);
    
    // Check if the "Marketplace" link is rendered
    const marketplaceLink = screen.getByText(/Marketplace/i);
    expect(marketplaceLink).toBeInTheDocument();
  });

  // it('renders "Signin" link', () => {
  //   render(<BeforeLogin />);
    
  //   // Check if the "Signin" link is rendered
  //   const signinLink = screen.getByText(/Sign in/i);
  //   expect(signinLink).toBeInTheDocument();
  // });

  // it('renders "Create Account" button', () => {
  //   render(<BeforeLogin />);
    
  //   // Check if the "Create Account" button is rendered
  //   const createAccountButton = screen.getByText(/Create Account/i);
  //   expect(createAccountButton).toBeInTheDocument();
  // });

  // After  login Test cases ---------------------------------------------------------------->

  it('renders the logo', () => {
    render(
      <BrowserRouter>
        <AfterLogin />
      </BrowserRouter>
    );

    // Check if the logo image is rendered
    const logoImage = screen.getByAltText('Network problem');
    expect(logoImage).toBeInTheDocument();
  });



  it('renders menu items', () => {
    render(
      <BrowserRouter>
        <AfterLogin />
      </BrowserRouter>
    );

    const marketplaceItem = screen.getByText(/Marketplace/i);
    expect(marketplaceItem).toBeInTheDocument();

    const assetsItem = screen.getByText(/Assets/i);
    expect(assetsItem).toBeInTheDocument();

    const friendsItem = screen.getByText(/Friends/i);
    expect(friendsItem).toBeInTheDocument();
  });


  it('renders search input and dropdown', () => {
    render(
      <BrowserRouter>
        <AfterLogin />
      </BrowserRouter>
    );

    const searchInput = screen.getByPlaceholderText('Search...');
    expect(searchInput).toBeInTheDocument();

    const searchDropdown = screen.queryByText('Results');
    expect(searchDropdown).not.toBeInTheDocument();
  });
  it('renders shopping cart and user icon', () => {
    render(
      <BrowserRouter>
        <AfterLogin />
      </BrowserRouter>
    );

    const shoppingCartIcon = screen.getByTestId('shopping-cart-icon');
    expect(shoppingCartIcon).toBeInTheDocument();

  });


  // Old test cases -->>>>>>
  // it('logo', () => {
  //   render(
  //     <BrowserRouter>
  //       <Header />
  //     </BrowserRouter>
  //   );

  //   const elementImg = screen.getByRole('img');
  //   expect(elementImg).toBeInTheDocument();
  // });
  // it('Notification', () => {
  //   render(
  //     <BrowserRouter>
  //       <Header />
  //     </BrowserRouter>
  //   );

  //   const elementId = screen.getByTestId('NotificationsNoneIcon');
  //   expect(elementId).toBeInTheDocument();

  //   const elementTxt = screen.getByText(/7/i);
  //   expect(elementTxt).toBeInTheDocument();
  // });
  // it('Search', () => {
  //   render(
  //     <BrowserRouter>
  //       <Header />
  //     </BrowserRouter>
  //   );
  //   const elementId = screen.getByTestId('SearchIcon');
  //   expect(elementId).toBeInTheDocument();
  // });
  // it('Logout', () => {
  //   render(
  //     <BrowserRouter>
  //       <Header />
  //     </BrowserRouter>
  //   );

  //   const elementBtn = screen.getByRole('button', {
  //     name: /logout/i,
  //   });
  //   expect(elementBtn).toBeInTheDocument();
  // });
});
