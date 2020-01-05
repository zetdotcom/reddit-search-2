import React, { useState, useEffect, useRef } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
// import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Button from '@material-ui/core/Button';
import { addSearchedReddit } from 'actions/searchedRedditsActions'
import { fetchRedditsList } from 'actions/redditsListActions'


import './SearchForm.scss';

const useStyles = makeStyles(theme => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 100,
  },
  button: {
    minHeight: 55,
    background: "linear-gradient(to right, #4880EC, #019CAD)"
  }
}));


function SearchForm(props) {

  const {lastSearched, dispatch} = props;

  const classes = useStyles();
  const [labelWidth, setLabelWidth] = useState(200);
  const [searchedReddit, setSearchedReddit] = useState('');
  const [itemsNumber, setItemsNumber] = useState(10);
  const inputLabel = useRef(null);


  useEffect(() => {
    setLabelWidth(inputLabel.current.offsetWidth);
  }, []);

  useEffect(() => {
    !!searchedReddit && getReddits();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [itemsNumber])

  function isSearchModified() {
    return (lastSearched !== searchedReddit) ? true : false;
  }

  function getReddits() {
    dispatch(fetchRedditsList(searchedReddit, itemsNumber))
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (isSearchModified() && !!searchedReddit) {
      dispatch(addSearchedReddit(searchedReddit));
      getReddits();
    }
  };

  return (
      <form className="search-form" onSubmit={handleSubmit}>
        <TextField
          id="outlined-search"
          label="Search field"
          type="search" variant="outlined"
          name="searchedReddit"
          value={searchedReddit}
          onChange={e => setSearchedReddit(e.target.value)}
        />
        <FormControl variant="outlined"
          className={classes.formControl}
        >
          <InputLabel ref={inputLabel} id="items-label">
            Items
        </InputLabel>
          <Select
            labelId="items-label"
            id="items-select"
            value={itemsNumber}
            name="itemsNumber"
            onChange={e => setItemsNumber(e.target.value)}
            labelWidth={labelWidth}
          >
            <MenuItem value={10}>10</MenuItem>
            <MenuItem value={20}>20</MenuItem>
            <MenuItem value={30}>30</MenuItem>
          </Select>
        </FormControl>
        <Button onClick={handleSubmit} className={classes.button} variant="contained" color="primary" size="large">
          Get Reddits
        </Button>
      </form>
  )
};

export default SearchForm;

