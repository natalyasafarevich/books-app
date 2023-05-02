import cloneDeep from "lodash.clonedeep";
import {setCurrentId} from "./actions";

const initialState = {
  id: ''
}
export const currnetIdReduser = (state = initialState, action) => {

  switch (action.type) {
    case setCurrentId:
      {
        const clone = cloneDeep(state);
        clone.id = action.id;

        return clone;
      }
    default:
      return state
  }
}
