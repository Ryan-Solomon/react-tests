import Counter from './Counter';
import { render, screen } from '@testing-library/react';
import React from 'react';

it('renders to the page', () => {
  render(<Counter />);
  expect(screen.getByText('Count: 0')).toBeInTheDocument();
});
