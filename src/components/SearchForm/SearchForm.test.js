import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'
import SearchForm from './SearchForm';


describe('<SearchFrom />', () => {
  const searchForm = () => render(<SearchForm />);

  test('renders get reddits button', () => {
    const { getByText } = searchForm();
    const button = getByText(/get reddits/i);
    expect(button).toBeInTheDocument();
  });

  test('renders empty text field', () => {
    const {getByLabelText} = searchForm();
    const textField = getByLabelText('Search field');
    expect(textField).toBeInTheDocument();
    expect(textField).toHaveTextContent('');
  });
  test('render select with 10 value', () => {
    const {getByLabelText} = searchForm();
    const selectField = getByLabelText('Items');
    expect(selectField).toBeInTheDocument();
    expect(selectField).toHaveTextContent('10');
  });

})

