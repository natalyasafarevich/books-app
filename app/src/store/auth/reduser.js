import cloneDeep from "lodash.clonedeep";
import {SET_CURRENT_USER} from "./actions";

const initialState = {
  user: {
    name: null,
    email: null,
    avatar: null
  }
}
export const currnetIdReduser = (state = initialState, action) => {

  switch (action.type) {
    case SET_CURRENT_USER:
      {
        const clone = cloneDeep(state);
        clone.user = action.data;
        // console.log(action.user)
        return clone;
      }
    default:
      return state
  }
}
