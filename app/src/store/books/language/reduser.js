import cloneDeep from "lodash.clonedeep";
import {SET_BOOK_LANGUAGE} from "./actions";

const initialState = {
  languageBooks: []
}

export const languageBookReduser = (state = initialState, action) => {

  switch (action.type) {

    case SET_BOOK_LANGUAGE:

      const newBook = action.data.results.map(item => {
        return item
      })
      const clone = cloneDeep(state);
      clone.languageBooks = newBook;

      return clone;

    default:
      return state
  }
}
