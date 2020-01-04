import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {addSearchedReddit, removeSearchedReddit} from 'actions/searchedRedditsActions'
import Button from '@material-ui/core/Button';

function SearchedReddits() {
  const dispatch = useDispatch();
  const searchedReddits = useSelector(state => state.searchedReddits)
  return (
    <div>
      {searchedReddits.map((item, i) => <div key={i}>{item}</div>)}
    </div>
  )
};


export default SearchedReddits;