import cloneDeep from "lodash.clonedeep";
import {SET_CURRENT_BOOK} from "./actions";

const initialState = {
  currentBook: {}
}
export const currnetBookReduser = (state = initialState, action) => {

  switch (action.type) {
    case SET_CURRENT_BOOK:
      {
        // const newBook = action.data.results.find(item => item);
        const clone = cloneDeep(state);
        clone.currentBook = action.data;
        return clone;
      }
    default:
      return state
  }
}
