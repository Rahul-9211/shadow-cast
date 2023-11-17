import React from 'react';
import '@testing-library/jest-dom';
import { render, screen, within } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Marketplace from '../Index';

describe('Marketplace Component', () => {
  it('renders the tab list', () => {
    render(
      <BrowserRouter>
        <Marketplace />
      </BrowserRouter>
    );

    const tabList = screen.getByTestId('tablist');
    expect(tabList).toBeInTheDocument();
  });

  it('renders the Apartment tab', () => {
    render(
      <BrowserRouter>
        <Marketplace />
      </BrowserRouter>
    );

    const volumetricTab = screen.getByRole('tab', {
      name: /Volumetric/i,
    });
    expect(volumetricTab).toBeInTheDocument();
  });

  it('renders the Ships tab', () => {
    render(
      <BrowserRouter>
        <Marketplace />
      </BrowserRouter>
    );

    const video180Tab = screen.getByRole('tab', {
      name: /180 video/i,
    });
    expect(video180Tab).toBeInTheDocument();
  });

  it('renders the Entertainments tab', () => {
    render(
      <BrowserRouter>
        <Marketplace />
      </BrowserRouter>
    );

    const video360Tab = screen.getByRole('tab', {
      name: /360 video/i,
    });
    expect(video360Tab).toBeInTheDocument();
  });


//   it('renders the Companion tab and verifies "coming soon"', () => {
//     render(
//       <BrowserRouter>
//         <Marketplace />
//       </BrowserRouter>
//     );

//     const companionTab = screen.getByRole('tab', {
//       name: /companion coming soon/i,
//     });

//     expect(companionTab).toBeInTheDocument();
//     const view = screen.getByText(/companion/i);
//     within(view).getByText(/coming soon/i);
//   });
});
