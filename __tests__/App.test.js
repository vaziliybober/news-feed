import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'
import React from 'react';
import App from '../src/components/App';

test('test boilerplate', () => {
  render(<App>test text</App>);
  const textElement = screen.getByText(/test text/i);
  expect(textElement).toBeInTheDocument();
});