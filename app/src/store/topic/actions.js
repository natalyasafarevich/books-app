import {searchTopic} from "../../API/getBooks";
import {errorOFF, errorOn} from "../error/actions";
import {loadingOff, loadingOn} from "../loading/actions";

export const SET_TOPIC = 'topic/SET_TOPIC';

export function setTopic(page, topic) {
  return async dispatch => {

    try {
      dispatch(loadingOn())
      const response = await searchTopic(page, topic);
      const topics =  response.data.results;
      const count = response.data.count;
      if (topics.length === 0) {
       
        dispatch(errorOn())
        return;
      }
      dispatch({type: SET_TOPIC, data: topics, count: count})
      dispatch(loadingOff())
      dispatch(errorOFF())
    } catch (e) {
      dispatch(errorOn())
      dispatch(loadingOff())
    }
  }
}
