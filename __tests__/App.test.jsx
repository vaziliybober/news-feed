import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import React from 'react';
import App from '../src/components/App.jsx';

test('boilerplate', () => {
  render(<App />);
  const textElement = screen.getByText(/News/i);
  expect(textElement).toBeInTheDocument();
});
