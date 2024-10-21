import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Home from './pages/Home';

// Mock the react-router-dom module
jest.mock('react-router-dom', () => ({
  Link: ({ children, to }: { children: React.ReactNode; to: string }) => (
    <a href={to}>{children}</a>
  ),
  BrowserRouter: ({ children }: { children: React.ReactNode }) => <>{children}</>,
}));

describe('Home Component', () => {
  beforeEach(() => {
    render(<Home />);
  });

  test('renders headline text', () => {
    const headlineElement = screen.getByText(/Bring your home to life/i);
    expect(headlineElement).toBeInTheDocument();
  });

  test('renders lead text', () => {
    const leadTextElement = screen.getByText(/Elevate your living space with a touch of nature/i);
    expect(leadTextElement).toBeInTheDocument();
  });

  test('renders "Browse Plants" button', () => {
    const browseButton = screen.getByRole('link', { name: /Browse Plants/i });
    expect(browseButton).toBeInTheDocument();
    expect(browseButton).toHaveAttribute('href', '/shop');
  });

  test('renders plant image', () => {
    const imageElement = screen.getByAltText(/Picture of a houseplant/i);
    expect(imageElement).toBeInTheDocument();
    expect(imageElement).toHaveAttribute('src', expect.stringContaining('user-images'));
  });
});