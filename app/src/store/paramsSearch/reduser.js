import cloneDeep from "lodash.clonedeep";
import {GET_SEARCH_PARAMS, SET_SEARCH_PARAMS, SET_CURRENT_BOOKS} from "./actions";


const defaultState = {
  search_by: 'book',
  language: ['en'],
  books: [],
}


export const ParamsReduser = (state = defaultState, action) => {
  switch (action.type) {
    case GET_SEARCH_PARAMS:
      {

        const clone = cloneDeep(state);
        clone.search_by = action.search_by;
        clone.language = action.language;

        return clone
      }
    case SET_SEARCH_PARAMS:
      {
        const clone = cloneDeep(state);
        return clone
      }
    case SET_CURRENT_BOOKS:
      {
        const clone = cloneDeep(state);
        clone.books = action.data;
        return clone
      }

    default:
      return state
  }
}
