import React from 'react';
import '@testing-library/jest-dom';
import { render, screen, within } from '@testing-library/react';
import Header from '../Index';
import { BrowserRouter } from 'react-router-dom';

describe('Test case for Navbar', () => {
  it('logo', () => {
    render(
      <BrowserRouter>
        <Header />
      </BrowserRouter>
    );

    const elementImg = screen.getByRole('img');
    expect(elementImg).toBeInTheDocument();
  });
  it('Notification', () => {
    render(
      <BrowserRouter>
        <Header />
      </BrowserRouter>
    );

    const elementId = screen.getByTestId('NotificationsNoneIcon');
    expect(elementId).toBeInTheDocument();

    const elementTxt = screen.getByText(/7/i);
    expect(elementTxt).toBeInTheDocument();
  });
  it('Search', () => {
    render(
      <BrowserRouter>
        <Header />
      </BrowserRouter>
    );
    const elementId = screen.getByTestId('SearchIcon');
    expect(elementId).toBeInTheDocument();
  });
  it('Logout', () => {
    render(
      <BrowserRouter>
        <Header />
      </BrowserRouter>
    );

    const elementBtn = screen.getByRole('button', {
      name: /logout/i,
    });
    expect(elementBtn).toBeInTheDocument();
  });
});
