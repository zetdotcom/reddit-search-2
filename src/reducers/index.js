import {combineReducers} from 'redux';
import searchedReddits from './searchedRedditsReducer'
import redditsList from './redditsListReducer'

const rootReducer = combineReducers({
  searchedReddits,
  redditsList
})

export default rootReducer;