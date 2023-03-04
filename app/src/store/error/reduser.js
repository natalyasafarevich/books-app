import cloneDeep from 'lodash.clonedeep';
import {ERROR_ON, ERROR_OFF} from './actions';

const defaultState = {
  isError: false
}

export const errorReduser = (state = defaultState, action) => {
  switch (action.type) {
    case ERROR_ON:
      {
        const clone = cloneDeep(state);
        clone.isError = true;
        return clone
      }
    case ERROR_OFF:
      {
        const clone = cloneDeep(state);
        clone.isError = false;
        return clone
      }
    default:
      return state;
  }
}
