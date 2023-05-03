import cloneDeep from "lodash.clonedeep";
import {SET_CURRENT_USER, LOG_OUT_USER,LOG_IN_USER} from "./actions";

const initialState = {
  isLogin: false,
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
        clone.isLogin = true;
        return clone;
      }
    case LOG_OUT_USER:
      {
        const clone = cloneDeep(state);
        clone.user = action.data;
        clone.isLogin = false;
        return clone;
      }
      case LOG_IN_USER:
        {
          const clone = cloneDeep(state);
          // clone.user = action.data;
          clone.isLogin = true;
          return clone;
        }
    default:
      return state
  }
}
