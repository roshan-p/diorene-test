import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Diorene tech', () => {
  render(<App />);
  const linkElement = screen.getByText(/Diorene tech/i);
  expect(linkElement).toBeInTheDocument();
});
