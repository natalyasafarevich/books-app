import cloneDeep from "lodash.clonedeep";
import {SET_ALLBOOKS} from "./actions";

const initialState = {
  books: [],
  count: 1,
  allBooks: 32,
  results: 1
}


export const allBookReduser = (state = initialState, action) => {

  switch (action.type) {
    case SET_ALLBOOKS:
      {
        const newBook = action.data.map(res => {
          return res
        })
        const clone = cloneDeep(state);
        clone.books = newBook;
        clone.count = action.count;
        clone.allBooks = newBook.length;
        clone.results = Math.ceil(action.count / newBook.length);
        return clone;
      }

    default:
      return state
  }
}
