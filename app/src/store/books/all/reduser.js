import cloneDeep from "lodash.clonedeep";
import {SET_ALLBOOKS} from "./actions";

const initialState = {
  books: []
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
        return clone;
      }

    default:
      return state
  }
}
