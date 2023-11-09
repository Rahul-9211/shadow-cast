import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import NotificationDropdown from '../Index';

describe('NotificationDropdown Component', () => {
  it('should not render notifications when open is false', () => {
    render(
      <NotificationDropdown open={false} onClose={() => {}} notifications={[]} />
    );

    const component = screen.queryByTestId('notification-dropdown-content');
    expect(component).toBeNull();
  });

  it('should not render the search form when showSearch is false', () => {
    render(<NotificationDropdown />);

    const searchForm = screen.queryByTestId('search-form'); 
    expect(searchForm).toBeNull();
  });

});
