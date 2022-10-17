import { render, screen, fireEvent  } from '@testing-library/react';
import SearchTextField from '../searchTextfield';

test('render search bar', () => {
  render(<SearchTextField />);
  const searchInput = screen.getByTestId("searchInput");
  expect(searchInput).toBeInTheDocument();
  
  const searchButton = screen.getByTestId("searchButton");
  expect(searchButton).toBeInTheDocument();
});

test('render search bar with action', () => {
  const handleSearch = jest.fn()
  render(<SearchTextField  handleSearch={handleSearch}/>);
  const searchInput = screen.getByTestId("searchInput");
  expect(searchInput).toBeInTheDocument();
  fireEvent.change(searchInput, {target: {value: 'c'}})

  const searchButton = screen.getByTestId("searchButton");
  expect(searchButton).toBeInTheDocument();
  fireEvent.submit(searchButton);
  expect(handleSearch).toHaveBeenCalledTimes(1)
});
