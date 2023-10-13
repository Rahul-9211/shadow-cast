import { render, screen, fireEvent } from '@testing-library/react';
import SignIn from '../index'; 

describe('SignIn Component', () => {
  it('renders the initial form', () => {
    render(<SignIn />);
    expect(screen.getByLabelText('Email')).toBeInTheDocument();
    expect(screen.getByLabelText('Password')).toBeInTheDocument();
    expect(screen.getByText('Sign In')).toBeInTheDocument();
  });

  it('toggles password visibility', () => {
    render(<SignIn />);
    const passwordInput = screen.getByLabelText('Password');
    const toggleButton = screen.getByRole('button', { name: 'Toggle Password Visibility' });
  
    expect(passwordInput.getAttribute('type')).toBe('password');
  
    fireEvent.click(toggleButton);
    expect(passwordInput.getAttribute('type')).toBe('text');
  
    fireEvent.click(toggleButton);
    expect(passwordInput.getAttribute('type')).toBe('password');
  });
  
});
