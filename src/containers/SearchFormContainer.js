import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import SearchForm from 'components/SearchForm/SearchForm';
import { fetchRedditsList } from 'actions/redditsListActions';
import { addSearchedReddit } from 'actions/searchedRedditsActions'


function SearchFormContainer() {

  const lastSearched = useSelector(state => state.searchedReddits.slice(-1)[0]);
  const dispatch = useDispatch();

  function getReddits(searchedReddit, itemsNumber) {
    dispatch(fetchRedditsList(searchedReddit, itemsNumber))
  }

  function addRedditToSearched(searchedReddit) {
    dispatch(addSearchedReddit(searchedReddit));
  }

  return (
    <SearchForm 
      lastSearched={lastSearched} 
      dispatch={dispatch} 
      getReddits={getReddits}
      addSearchedReddit={addRedditToSearched}  
    />
  )
};

export default SearchFormContainer;
