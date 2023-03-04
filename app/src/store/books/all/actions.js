import {getBooks} from "../../../API/getBooks"
import {errorOFF, errorOn} from "../../error/actions";
import {loadingOff, loadingOn} from "../../loading/actions";

export const SET_ALLBOOKS = 'books/SET_ALLBOOKS';


export function setBooks(page) {
  return async dispatch => {
    try {
      dispatch(loadingOn())
      const response = await getBooks(page);
      const dataBooks = response.data.results;
      const count = response.data.count;
      dispatch({type: SET_ALLBOOKS, data: dataBooks, count: count})
      dispatch(loadingOff())
      dispatch(errorOFF())
    } catch (e) {
      dispatch(errorOn())
      dispatch(loadingOff())
    }
  }
}
