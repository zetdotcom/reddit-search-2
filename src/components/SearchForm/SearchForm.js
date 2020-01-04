import React, { useState, useEffect, useRef } from 'react';
import {useDispatch} from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
// import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Button from '@material-ui/core/Button';
import {addSearchedReddit, removeSearchedReddit} from 'actions/searchedRedditsActions'
import useForm from 'hooks/useForm';


import './SearchForm.scss';

const useStyles = makeStyles(theme => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 100,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
  button: {
    minHeight: 55,
  }
}));


function SearchForm(props) {

  const classes = useStyles();
  const [labelWidth, setLabelWidth] = useState(200);
  const inputLabel = useRef(null);
  const { values, handleChange, handleSubmit } = useForm(handleRedditSearch);
  const dispatch = useDispatch();

  useEffect(() => {
    setLabelWidth(inputLabel.current.offsetWidth);

    const initialItemsNumber = {
      target: {
        name: 'itemsNumber',
        value: 10
      }
    }
    handleChange(initialItemsNumber)
  }, []);

  function handleRedditSearch(e) {
    console.log('submit', e)
    dispatch(addSearchedReddit(values.searchedReddit))
  }

  function login() {
    console.log('values', values)
  }

  return (
    <div >
      <form className="search-form" onSubmit={handleSubmit}>
        <TextField id="outlined-search" label="Search field" type="search" variant="outlined" name="searchedReddit" value={values.searchedReddit || ''} onChange={handleChange} />
        <FormControl variant="outlined"
          className={classes.formControl}
        >
          <InputLabel ref={inputLabel} id="items-label">
            Items
        </InputLabel>
          <Select
            labelId="items-label"
            id="items-select"
            value={values.itemsNumber || 10}
            name="itemsNumber"
            onChange={handleChange}
            labelWidth={labelWidth}
            // defaultValue={10}
          //   open={open}
          // onClose={handleClose}
          // onOpen={handleOpen}
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
    </div>
  )
}

export default SearchForm;

