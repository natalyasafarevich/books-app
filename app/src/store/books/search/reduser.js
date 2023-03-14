import cloneDeep from "lodash.clonedeep";
import {SEARCH_BOOKS, RESULT_SEARCH_BOOKS} from "./actions";

const initialState = {
  searchBook: [],
  count: 1,

}

export const searchBookReduser = (state = initialState, action) => {

  switch (action.type) {

    case SEARCH_BOOKS:
      {
        const books = action.data.map(item => item);
    
        const clone = cloneDeep(state);
        clone.searchBook = action.data;
 
        clone.count = action.count;
        
        
        return clone;
      }

    case RESULT_SEARCH_BOOKS:
      {
        const clone = cloneDeep(state);
        clone.results = Math.ceil(clone.count / clone.allBooks);
        return clone
      }

    default:
      return state
  }
}
