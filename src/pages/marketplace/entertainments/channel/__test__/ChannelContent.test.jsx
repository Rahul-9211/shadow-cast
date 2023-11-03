import { render, screen, fireEvent } from '@testing-library/react';
import ChannelContent from '../Index';
import { MemoryRouter } from 'react-router-dom';

describe("ChannelContent Component", () => {
  it("should render the channel name", () => {
    render(
      <MemoryRouter>
        <ChannelContent />
      </MemoryRouter>
    );

    const channelName = screen.getByText('Nureal Entertainment');
    expect(channelName).toBeInTheDocument();
  });

  it("should switch to 'All' tab when clicked", () => {
    render(
      <MemoryRouter>
        <ChannelContent />
      </MemoryRouter>
    );

    const allTab = screen.getByText('All');
    fireEvent.click(allTab);

    const allTabContent = screen.getByText('All');
    expect(allTabContent).toBeInTheDocument();
  });

  // it("should switch to 'Premium' tab when clicked", () => {
  //   render(
  //     <MemoryRouter>
  //       <ChannelContent />
  //     </MemoryRouter>
  //   );

  //   const premiumTab = screen.getByText('Premium');
  //   fireEvent.click(premiumTab);

  //   const premiumTabContent = screen.getByText('Premium Content: top picks for you');
  //   expect(premiumTabContent).toBeInTheDocument();
  // });

  it("should render the 'Back' button", () => {
    render(
      <MemoryRouter>
        <ChannelContent />
      </MemoryRouter>
    );

    const backButton = screen.getByText('Back');
    expect(backButton).toBeInTheDocument();
  });
  
  it("should navigate back when the 'Back' button is clicked", () => {
    const { container } = render(
      <MemoryRouter>
        <ChannelContent />
      </MemoryRouter>
    );

    const backButton = screen.getByText('Back');
    fireEvent.click(backButton);

    // You can add assertions related to navigation here.
  });
});
