import { render, screen, fireEvent } from '@testing-library/react';
import Index from '../Index';
import { BrowserRouter, MemoryRouter } from 'react-router-dom';

describe("Index Component", () => {
  it("should render the welcome message", () => {
    render(
      <BrowserRouter>
        <Index />
      </BrowserRouter>
    );

    const welcomeMessage = screen.getByText('Welcome to Fourth Star Entertainment');
    expect(welcomeMessage).toBeInTheDocument();
  });

  it("should render category links", () => {
    render(
      <BrowserRouter>
        <Index />
      </BrowserRouter>
    );

    const categoryLinks = screen.getAllByRole('link', { name: /Video|Music|Channels/ });
    expect(categoryLinks).toHaveLength(5);
  });

  it("should navigate to the Volumetric Video category page when the link is clicked", () => {
    const { container } = render(
      <MemoryRouter initialEntries={['/marketplace/entertainments/volumetric']}>
        <Index />
      </MemoryRouter>
    );
  
    const categoryLink = screen.getByRole('link', { name: 'Volumetric Video' });
    fireEvent.click(categoryLink);
  
    const categoryPageHeader = screen.getByText('Volumetric Video');
    expect(categoryPageHeader).toBeInTheDocument();
  });
  

  it("should render most trending section", () => {
    render(
      <BrowserRouter>
        <Index />
      </BrowserRouter>
    );

    const mostTrendingSection = screen.getByText('Most trending');
    expect(mostTrendingSection).toBeInTheDocument();
  });

  it("should render premium content section", () => {
    render(
      <BrowserRouter>
        <Index />
      </BrowserRouter>
    );

    const premiumContentSection = screen.getByText('Premium Content: top picks for you');
    expect(premiumContentSection).toBeInTheDocument();
  });

  it("should render trending channels section", () => {
    render(
      <BrowserRouter>
        <Index />
      </BrowserRouter>
    );

    const trendingChannelsSection = screen.getByText('Trending Channels');
    expect(trendingChannelsSection).toBeInTheDocument();
  });

  it("should render discover music section", () => {
    render(
      <BrowserRouter>
        <Index />
      </BrowserRouter>
    );

    const discoverMusicSection = screen.getByText('Discover Music');
    expect(discoverMusicSection).toBeInTheDocument();
  });
});
