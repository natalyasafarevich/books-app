import {getCurrentBook} from "../../../API/getBooks"
import {errorOFF, errorOn} from "../../error/actions";
import {loadingOff, loadingOn} from "../../loading/actions";

export const SET_CURRENT_BOOK = 'current/SET_CURRENT_BOOK';


export function setCurrentBook(id) {
  return async dispatch => {
    try {
      dispatch(loadingOn())
      const response = await getCurrentBook(id);
      const dataBook = await response.data;
      console.log(dataBook)
      dispatch({type: SET_CURRENT_BOOK, data: dataBook})
      dispatch(loadingOff())
      dispatch(errorOFF())
    } catch (e) {
      dispatch(errorOn())
      // if(e.response.status === 404){

      // }
      // console.log(e)

      dispatch(loadingOff())
    }
  }
}
