import {ADD_SEARCHED_REDDIT, REMOVE_SEARCHED_REDDIT} from '../constants/searchedRedditsConstants';

export function addSearchedReddit(payload) {
  return {
    type: ADD_SEARCHED_REDDIT,
    payload
  }
}

export function removeSearchedReddit(payload) {
  return {
    type: REMOVE_SEARCHED_REDDIT,
    payload
  }
}