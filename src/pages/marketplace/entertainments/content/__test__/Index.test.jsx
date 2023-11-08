import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Index from '../Index'; // Replace with the correct path to your component
import { MemoryRouter } from 'react-router-dom';

describe('Index Component', () => {
  it('should render the component without errors', () => {
    render(
      <MemoryRouter>
        <Index />
      </MemoryRouter>
    );
  });

  it('should render the apartment title', () => {
    render(
      <MemoryRouter>
        <Index />
      </MemoryRouter>
    );
    const titleElement = screen.getByText('Starry Night Exclusive');
    expect(titleElement).toBeInTheDocument();
  });

  it('should render the entertainment description', () => {
    render(
        <MemoryRouter>
          <Index />
        </MemoryRouter>
      );
    const descriptionElement = screen.getByText(/Indulge in the opulence of these towering apartments/);
    expect(descriptionElement).toBeInTheDocument();
  });
  

  it('should render a "Back" button', () => {
    render(
      <MemoryRouter>
        <Index />
      </MemoryRouter>
    );
    const backButton = screen.getByText('Back');
    expect(backButton).toBeInTheDocument();
  });

  it('should show a confirmation dialog when the "Back" button is clicked', () => {
    render(
      <MemoryRouter>
        <Index />
      </MemoryRouter>
    );
    const backButton = screen.getByText('Back');
    fireEvent.click(backButton);

  });

});
