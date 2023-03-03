import cloneDeep from "lodash.clonedeep";
import {SET_TOPIC} from "./actions";

const defaultState = {
  topic: {}
}


export const TopicReduser = (state = defaultState, action) => {
  switch (action.type) {
    case SET_TOPIC:
      {
        const clone = cloneDeep(state);
   
        clone.topic = action.data;
        return clone
      }

    default:
      return state
  }
}
