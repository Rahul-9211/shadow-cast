import React from 'react';
import '@testing-library/jest-dom';
import { render, screen, within } from '@testing-library/react';
import Marketplace from '../Index';
import { BrowserRouter } from 'react-router-dom';

describe('Test case for Marketplace Page', () => {
  it('tab list in marketplace', () => {
    render(
      <BrowserRouter>
        <Marketplace />
      </BrowserRouter>
    );
    const element = screen.getByTestId('tablist');
    expect(element).toBeInTheDocument();
  });

  it('Apartment tab', () => {
    render(
      <BrowserRouter>
        <Marketplace />
      </BrowserRouter>
    );
    const element = screen.getByRole('tab', {
      name: /apartment/i,
    });
    expect(element).toBeInTheDocument();
  });

  it('Ships tab', () => {
    render(
      <BrowserRouter>
        <Marketplace />
      </BrowserRouter>
    );
    const element = screen.getByRole('tab', {
      name: /ships/i,
    });
    expect(element).toBeInTheDocument();
  });

  it('Entertainments tab', () => {
    render(
      <BrowserRouter>
        <Marketplace />
      </BrowserRouter>
    );
    const element = screen.getByRole('tab', {
      name: /entertainment/i,
    });
    expect(element).toBeInTheDocument();
  });

  it('Clothing tab', () => {
    render(
      <BrowserRouter>
        <Marketplace />
      </BrowserRouter>
    );
    const element = screen.getByRole('tab', {
      name: /clothing/i,
    });
    expect(element).toBeInTheDocument();
  });

  it('Games tab', () => {
    render(
      <BrowserRouter>
        <Marketplace />
      </BrowserRouter>
    );
    const element = screen.getByRole('tab', {
      name: /games coming soon/i,
    });
    expect(element).toBeInTheDocument();

    const view = screen.getByText(/games/i);

    within(view).getByText(/coming soon/i);
  });

  it('Companion tab', () => {
    render(
      <BrowserRouter>
        <Marketplace />
      </BrowserRouter>
    );
    const element = screen.getByRole('tab', {
      name: /companion coming soon/i,
    });
    expect(element).toBeInTheDocument();
    const view = screen.getByText(/companion/i);

    within(view).getByText(/coming soon/i);
  });

  // it('apartment hero', () => {
  //   render(
  //     <BrowserRouter>
  //       <Marketplace />
  //     </BrowserRouter>
  //   );
  //   const tabpanel = screen.getByRole('tabpanel', {
  //     name: /apartment/i,
  //   });
  //   within(tabpanel).getByRole('img', {
  //     name: /network problem/i,
  //   });
  // });
});
