import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
// import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Button from '@material-ui/core/Button';

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
  const [items, setItems] = useState(10);
  const inputLabel = React.useRef(null);

  const [labelWidth, setLabelWidth] = React.useState(200);
  React.useEffect(() => {
    setLabelWidth(inputLabel.current.offsetWidth);
  }, []);

  function handleSubmit(e) {
    e.preventDefault();
    console.log('submit', e)
  }

  return (
    <div >
      <form className="search-form" onSubmit={handleSubmit}>

        <TextField id="outlined-search" label="Search field" type="search" variant="outlined" />
        <FormControl variant="outlined"
          className={classes.formControl}
        >
          <InputLabel ref={inputLabel} id="items-label">
            Items
        </InputLabel>
          <Select
            labelId="items-label"
            id="items-select"
            value={items}
            onChange={(e) => setItems(e.target.value)}
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
    </div>
  )
}

export default SearchForm;

