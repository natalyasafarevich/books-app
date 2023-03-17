import cloneDeep from "lodash.clonedeep";
import {NOTIFICATION_ADD, NOTIFICATION_REMOVE} from "./actions";

const defaultState = {
  text: '',
  hidden: true,
  remove: false
}


export const notificationReduser = (state = defaultState, action) => {
  switch (action.type) {
    case NOTIFICATION_ADD:
      {

        const clone = cloneDeep(state);
        clone.text = action.data;
        clone.hidden = false;
        clone.remove = true;
        return clone
      }
    case NOTIFICATION_REMOVE:
      {
        const clone = cloneDeep(state);
        clone.text = action.data;
        clone.hidden = true;
        clone.remove = true;
        return clone
      }

    default:
      return state
  }
}
