import {searchTopic} from "../../API/getBooks";
import {errorOFF, errorOn} from "../error/actions";
import {loadingOff, loadingOn} from "../loading/actions";

export const SET_TOPIC = 'topic/SET_TOPIC';


export function setTopic(topic) {
  return async dispatch => {
    try {
      dispatch(loadingOn())
      const response = await searchTopic(topic);
      const topics = await response.data.results;
     
      dispatch({type: SET_TOPIC, data: topics})
      dispatch(loadingOff())
      dispatch(errorOFF())
    } catch (e) {
      dispatch(errorOn())
      dispatch(loadingOff())
    }
  }
}
