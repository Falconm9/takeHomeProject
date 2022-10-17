import { render, screen } from '@testing-library/react';
import Header from '../header';

test('render header', () => {
  render(<Header />);
  const headerElement = screen.getByText(/GitHub Topic Explorer/i);
  expect(headerElement).toBeInTheDocument();
});
