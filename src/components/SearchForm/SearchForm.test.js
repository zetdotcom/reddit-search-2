import React from 'react';
import { render } from '@testing-library/react';
import { createStore } from 'redux'
import { Provider } from 'react-redux';
import '@testing-library/jest-dom/extend-expect'
import {searchedRedditsReducer, initialState} from '../../reducers/searchedRedditsReducer';
import SearchForm from './SearchForm';

function renderWithRedux(
  ui,
  { initialState, store = createStore(searchedRedditsReducer, initialState) } = {}
) {
  return {
    ...render(<Provider store={store}>{ui}</Provider>),
    // adding `store` to the returned utilities to allow us
    // to reference it in our tests (just try to avoid using
    // this to test implementation details).
    store,
  }
}

test('renders learn react link', () => {
  const { getByText } = renderWithRedux(<SearchForm />);
  const linkElement = getByText(/get reddits/i);
  expect(linkElement).toBeInTheDocument();
});
