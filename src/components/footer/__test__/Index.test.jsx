import React from 'react';
import '@testing-library/jest-dom';
import { render, screen, within } from '@testing-library/react';
import Footer from '../Index';
import { BrowserRouter } from 'react-router-dom';

describe('Test case for footer', () => {
  it('Privacy Policy', () => {
    render(
      <BrowserRouter>
        <Footer />
      </BrowserRouter>
    );

    const elementBtn = screen.getByTestId('link-privacy', { name: 'Privacy Policy' });
    
    expect(elementBtn).toBeInTheDocument();
  });
  it('Terms &amp; Condition', () => {
    render(
      <BrowserRouter>
        <Footer />
      </BrowserRouter>
    );

    const elementBtn = screen.getByTestId('link-terms', { name: 'Terms &amp; Condition' });
    expect(elementBtn).toBeInTheDocument();
  });
  it('Instagram', () => {
    render(
      <BrowserRouter>
        <Footer />
      </BrowserRouter>
    );

    const elementId = screen.getByTestId('Instagram');
    expect(elementId).toBeInTheDocument();
  });
  it('Facebook', () => {
    render(
      <BrowserRouter>
        <Footer />
      </BrowserRouter>
    );

    const elementId = screen.getByTestId('Facebook');
    expect(elementId).toBeInTheDocument();
  });
  it('youtube', () => {
    render(
      <BrowserRouter>
        <Footer />
      </BrowserRouter>
    );

    const elementId = screen.getByTestId('youtube');
    expect(elementId).toBeInTheDocument();
  });
  it('twitter', () => {
    render(
      <BrowserRouter>
        <Footer />
      </BrowserRouter>
    );

    const elementId = screen.getByTestId('twitter');
    expect(elementId).toBeInTheDocument();
  });
});
