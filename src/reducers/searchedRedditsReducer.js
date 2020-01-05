import { ADD_SEARCHED_REDDIT, REMOVE_SEARCHED_REDDIT } from '../constants/searchedRedditsConstants';

const initState = ['Javascript', 'Redux', 'React Hooks', 'React Testing Library', 'Cypress js']

function searchedRedditsReducer(state = initState, action) {
  switch (action.type) {
    case ADD_SEARCHED_REDDIT:
      return [...state, action.payload];
    case REMOVE_SEARCHED_REDDIT:
      return state.filter(item => item !== action.payload)
    default:
      return state;
  }

}

export default searchedRedditsReducer;