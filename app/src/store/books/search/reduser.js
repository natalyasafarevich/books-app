import cloneDeep from "lodash.clonedeep";
import {SEARCH_BOOKS} from "./actions";

const initialState = {
  searchBook: {}
}

export const searchBookReduser = (state = initialState, action) => {

  switch (action.type) {

    case SEARCH_BOOKS:
      {
        const clone = cloneDeep(state);
        clone.searchBook = action.data;
        return clone;
      }
    default:
      return state
  }
}
