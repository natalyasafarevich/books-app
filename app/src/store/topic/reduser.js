import cloneDeep from "lodash.clonedeep";
import {SET_TOPIC, GET_TOPIC} from "./actions";

const defaultState = {
  topic: [],
  count: 1,
  allBooks: 32,
  results: 0
}


export const TopicReduser = (state = defaultState, action) => {
  switch (action.type) {
    case SET_TOPIC:
      {
        const topic = action.data.map(item => item);
        const clone = cloneDeep(state);
        clone.topic = topic;
        clone.count = action.count;
        return clone
      }
    default:
      return state
  }
}
