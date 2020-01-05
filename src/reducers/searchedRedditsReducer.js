import { ADD_SEARCHED_REDDIT, REMOVE_SEARCHED_REDDIT } from '../constants/searchedRedditsConstants';

export const initialState = ['Javascript', 'Redux', 'React Hooks', 'React Testing Library', 'Cypress js']

export function searchedRedditsReducer(state = initialState, action) {
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