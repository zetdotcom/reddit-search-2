
import { FETCH_REDDITS_PENDING, FETCH_REDDITS_SUCCESS, FETCH_REDDITS_ERROR } from 'constants/redditsListConstants';

const initialState = {
  pending: false,
  reddits: [],
  error: null
}

function redditsListReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_REDDITS_PENDING:
      return {
        ...state,
        pending: true
      }
    case FETCH_REDDITS_SUCCESS:
      const reddits = action.payload.map(item => item.data)
      return {
        ...state,
        pending: false,
        reddits
      }
    case FETCH_REDDITS_ERROR:
      return {
        ...state,
        pending: false,
        error: action.error
      }
    default:
      return state;
  }
}

export default redditsListReducer;