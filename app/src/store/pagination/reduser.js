import cloneDeep from "lodash.clonedeep";
import {SET_PAGINATION} from "./actions";

const defaultState = {
  page: 1
}


export const paginationReduser = (state = defaultState, action) => {
  switch (action.type) {
    case SET_PAGINATION:
      {

        const clone = cloneDeep(state);
        clone.page = action.number;
        return clone
      }

    default:
      return state
  }
}
