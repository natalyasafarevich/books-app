import cloneDeep from "lodash.clonedeep";
import {SET_TOPIC} from "./actions";

const defaultState = {
  topic: [],
  count: 1,
  allBooks: 32,
  results: 1
}


export const TopicReduser = (state = defaultState, action) => {
  switch (action.type) {
    case SET_TOPIC:
      {
        const topic = action.data.map(item=>item);
        // console.log(topic)
        const clone = cloneDeep(state);

        clone.topic =  topic;
        clone.count  = action.count;
        clone.allBooks =  topic.length;
      
        clone.results = Math.ceil(action.count / topic.length);
        return clone
      }

    default:
      return state
  }
}
