import { render, screen } from '@testing-library/react';
import ErrorMsg from '../errorMsg';

test('render header', () => {
  render(<ErrorMsg error="test" />);
  const errorElement = screen.getByTestId("errorMsg");
  expect(errorElement).toBeInTheDocument();  
});
