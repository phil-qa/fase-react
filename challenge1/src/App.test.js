// src/pages/Home.test.js
import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Home from './pages/Home';

// Mock the Link component from react-router-dom
jest.mock('react-router-dom', () => ({
  Link: ({ children, to }) => <a href={to}>{children}</a>,
}));

describe('Home Component', () =>
{
  test('renders homepage content correctly', () =>
  {
    render(<Home />);

    // Check for the main headline
    expect(screen.getByText(/Bring your home to life/i)).toBeInTheDocument();

    // Check for the subheadline
    expect(screen.getByText(/Elevate your living space with a touch of nature/i)).toBeInTheDocument();

    // Check for the "Browse Plants" button
    const browseButton = screen.getByRole('link', { name: /Browse Plants/i });
    expect(browseButton).toBeInTheDocument();
    expect(browseButton).toHaveAttribute('href', '/shop');

    // Check for the image
    const image = screen.getByAltText(/Picture of a houseplant/i);
    expect(image).toBeInTheDocument();
  });
});