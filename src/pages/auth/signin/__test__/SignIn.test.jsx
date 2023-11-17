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
    const toggleButton = screen.getByTestId('PasswordVisibility');
  
    expect(passwordInput.getAttribute('type')).toBe('password');
  
    fireEvent.click(toggleButton);
    expect(passwordInput.getAttribute('type')).toBe('text');
  
    fireEvent.click(toggleButton);
    expect(passwordInput.getAttribute('type')).toBe('password');
  });

  it('toggles to "Sign In as Creator" when clicked', () => {
    render(<SignIn />);
    const toggleButton = screen.getByText("Sign In as User");
    fireEvent.click(toggleButton);
    const spyScrollTo = jest.fn();
    Object.defineProperty(global.window, 'scrollTo', { value: spyScrollTo });
    const creatorButton = screen.getByText("Sign In as Creator");
    expect(creatorButton).toBeInTheDocument();
  });

  it('toggles back to "Sign In as User" when clicked again', () => {
    render(<SignIn />);
    const toggleButton = screen.getByText("Sign In as Creator");
    fireEvent.click(toggleButton);
    const spyScrollTo = jest.fn();
    Object.defineProperty(global.window, 'scrollTo', { value: spyScrollTo });
    const userButton = screen.getByText("Sign In as User");
    expect(userButton).toBeInTheDocument();
  });
  
});
