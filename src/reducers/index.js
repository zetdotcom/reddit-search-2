import {combineReducers} from 'redux';
import searchedReddits from './searchedRedditsReducer'

const rootReducer = combineReducers({
  searchedReddits
})

export default rootReducer;