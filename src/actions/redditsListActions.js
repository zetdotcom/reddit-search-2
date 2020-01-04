import {FETCH_REDDITS_PENDING, FETCH_REDDITS_SUCCESS, FETCH_REDDITS_ERROR} from 'constants/redditsListConstants'

function fetchRedditsPending() {
  return {
    type: FETCH_REDDITS_PENDING
  }
}

function fetchRedditsSuccess(reddits) {
  return {
    type: FETCH_REDDITS_SUCCESS,
    payload: reddits
  }
}

function fetchRedditsError(error) {
  return {
    type: FETCH_REDDITS_ERROR,
    error
  }
}


export function fetchRedditsList(searchTerm, searchLimit) {
  return dispatch => {
    dispatch(fetchRedditsPending());
    fetch(`https://www.reddit.com/search.json?q=${searchTerm}&limit=${searchLimit}`)
      .then(handleErrors)
      .then(res => res.json())
      .then(json => {
        dispatch(fetchRedditsSuccess(json.data.children));
        return json.data.children
      })
      .catch(error => dispatch(fetchRedditsError(error)))
    
  }
}

function handleErrors(response) {
  if (!response.ok) {
    console.log(response)
    throw Error(response.statusText);
  }
  return response;
}
