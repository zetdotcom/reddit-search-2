import React from 'react';
import {useDispatch} from 'react-redux';
import {addSearchedReddit, removeSearchedReddit} from '../../actions/searchedRedditsActions'
import Button from '@material-ui/core/Button';

function SearchedReddits() {
  const dispatch = useDispatch();
  return (
    <div>
      <div onClick={() => dispatch(addSearchedReddit('asdasd'))}>reddit</div>
    </div>
  )
};


export default SearchedReddits;