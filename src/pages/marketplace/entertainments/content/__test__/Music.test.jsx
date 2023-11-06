import { render, screen, fireEvent } from '@testing-library/react';
import MusicContent from '../Music';
import { MemoryRouter } from 'react-router-dom';

describe("MusicContent Component", () => {

  it("should render the content description", () => {
    render(
      <MemoryRouter>
        <MusicContent />
      </MemoryRouter>
    );

    const contentDescription = screen.getByText(
      "This ethereal composition transcends time and space, taking you on a mesmerizing audio journey through the digital cosmos. Immerse yourself in the symphonic beauty of celestial melodies, where each note resonates with the magic of the Metaverse. 'Hold my hands' isn't just a song; it's an experience"
    );
    expect(contentDescription).toBeInTheDocument();
  });

  it("should render the 'Unlock Premium' button", () => {
    render(
      <MemoryRouter>
        <MusicContent />
      </MemoryRouter>
    );

    const unlockPremiumButton = screen.getByText('Unlock Premium @$24.00/Month');
    expect(unlockPremiumButton).toBeInTheDocument();
  });


  it("should render the 'Back' button", () => {
    render(
      <MemoryRouter>
        <MusicContent />
      </MemoryRouter>
    );

    const backButton = screen.getByText('Back');
    expect(backButton).toBeInTheDocument();
  });

  it("should navigate back when the 'Back' button is clicked", () => {
    const { container } = render(
      <MemoryRouter>
        <MusicContent />
      </MemoryRouter>
    );

    const backButton = screen.getByText('Back');
    fireEvent.click(backButton);

    // You can add assertions related to navigation here.
  });
});
