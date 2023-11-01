import React from 'react';
import '@testing-library/jest-dom';
import { render, screen, within } from '@testing-library/react';
import Sidebar from '../Index';
import { BrowserRouter } from 'react-router-dom';

describe('Test case for Sidebar', () => {
  it('Marketplace', () => {
    render(
      <BrowserRouter>
        <Sidebar />
      </BrowserRouter>
    );
    const elementTxt = screen.getByText(/merketplace/i);
    expect(elementTxt).toBeInTheDocument();

    const elementBtn = screen.getByRole('button', {
      name: /merketplace/i,
    });
    within(elementBtn).getByRole('img');
  });
  it('Assets', () => {
    render(
      <BrowserRouter>
        <Sidebar />
      </BrowserRouter>
    );
    const elementTxt = screen.getByText(/assets/i);
    expect(elementTxt).toBeInTheDocument();

    const elementBtn = screen.getByRole('button', {
      name: /assets/i,
    });

    within(elementBtn).getByRole('img');
  });
  it('Friends', () => {
    render(
      <BrowserRouter>
        <Sidebar />
      </BrowserRouter>
    );
    const elementTxt = screen.getByText(/friends/i);
    expect(elementTxt).toBeInTheDocument();

    const elementBtn = screen.getByRole('button', {
      name: /friends/i,
    });

    within(elementBtn).getByRole('img');
  });
  it('Setting', () => {
    render(
      <BrowserRouter>
        <Sidebar />
      </BrowserRouter>
    );
    const elementTxt = screen.getByText(/setting/i);
    expect(elementTxt).toBeInTheDocument();

    const elementBtn = screen.getByRole('button', {
      name: /setting/i,
    });

    within(elementBtn).getByRole('img');
  });
});
