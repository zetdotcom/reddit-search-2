import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import SearchedReddits from 'components/SearchedReddits/SearchedReddits';
import { removeSearchedReddit } from 'actions/searchedRedditsActions';
import { fetchRedditsList } from 'actions/redditsListActions';



function SearchedRedditsContainer() {

  const searchedReddits = useSelector(state => state.searchedReddits);
  const dispatch = useDispatch();

  return (
    <SearchedReddits
      searchedReddits={searchedReddits}
      removeSearchedReddit={item => dispatch(removeSearchedReddit(item))}
      fetchRedditsList={item => dispatch(fetchRedditsList(item))}

    />
  )
};

export default SearchedRedditsContainer;