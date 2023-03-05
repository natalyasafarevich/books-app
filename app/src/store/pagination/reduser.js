import cloneDeep from "lodash.clonedeep";
import {SET_PAGINATION, GET_PAGINATION_COUNT, RESET_PAGE} from "./actions";

const defaultState = {
  page: 1,
  number: 0,
  count: 0,
  allBook: 32,
  result: 1
}


export const paginationReduser = (state = defaultState, action) => {
  switch (action.type) {
    case SET_PAGINATION:
      {

        const clone = cloneDeep(state);
        clone.page = action.number;
        return clone
      }
    case GET_PAGINATION_COUNT:
      {
        const clone = cloneDeep(state);
        clone.count = action.count;
        clone.result = Math.ceil(action.count / clone.allBook)
        return clone
      }
    case RESET_PAGE:
      {
        const clone = cloneDeep(state);
        clone.page = 1;
        return clone
      }
    default:
      return state
  }
}
