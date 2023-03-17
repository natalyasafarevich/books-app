import cloneDeep from "lodash.clonedeep";
import {LOADING_ON, LOADING_OFF} from "./actions";
const defaultState = {
  isLoading: false
}


export const loadingReduser = (state = defaultState, action) => {

  switch (action.type) {
    case LOADING_ON:
      {
        const clone = cloneDeep(state);
        clone.isLoading = true;
        return clone;
      }
    case LOADING_OFF:
      {
        const clone = cloneDeep(state);
        clone.isLoading = false;
        return clone;
      }
    default:
      return state;
  }
}
