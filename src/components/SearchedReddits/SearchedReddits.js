import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
// import Button from '@material-ui/core/Button';
import Chip from '@material-ui/core/Chip';
import { addSearchedReddit, removeSearchedReddit } from 'actions/searchedRedditsActions'
import './SearchedReddits.scss';

const useStyles = makeStyles(theme => ({
  chip: {
    margin: theme.spacing(1),
    minWidth: 100,
    minHeight: 45,
    borderRadius: 25,
    color: 'white',
    background: "linear-gradient(to right, #d9762f, #dd9d25)",
    border: 'none',
  },
}));

function SearchedReddits() {
  const classes = useStyles();
  const dispatch = useDispatch();

  const searchedReddits = useSelector(state => state.searchedReddits)
  return (
    <div className="searched-reddits">
      <div className="searched-reddits__text"> Recently searched</div>
      <div className="searched-reddits__list">
        {searchedReddits.map((item, i) => {
          return (
            <div className="searched-reddits__list-item" key={i}>
              <Chip 
                variant="outlined" 
                color="default" 
                onDelete={() => dispatch(removeSearchedReddit(item))} 
                label={item} 
                clickable 
                className={classes.chip} 
                onClick={() => {console.log(item)}} />
            </div>

          )
        })}
      </div>
    </div>
  )
};


export default SearchedReddits;