import cloneDeep from "lodash.clonedeep";
import {NOTIFICATION_ADD, NOTIFICATION_HIDDEN} from "./actions";

const defaultState = {
  text: '',
  hidden: true
}


export const notificationReduser = (state = defaultState, action) => {
  switch (action.type) {
    case NOTIFICATION_ADD:
      {

        const clone = cloneDeep(state);
        clone.text = action.data;
        clone.hidden = false;
        return clone
      }
    case NOTIFICATION_HIDDEN:
      {
        const clone = cloneDeep(state);
        clone.hidden = true;
        return clone
      }

    default:
      return state
  }
}
