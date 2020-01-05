import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import SearchForm from 'components/SearchForm/SearchForm';

function SearchFormContainer() {
  
  const lastSearched = useSelector(state => state.searchedReddits.slice(-1)[0]);
  const dispatch = useDispatch();


  return (
    <SearchForm lastSearched={lastSearched} dispatch={dispatch} />
  )
};

export default SearchFormContainer;
