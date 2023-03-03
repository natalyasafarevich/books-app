import {getBooks} from "../../../API/getBooks"
import {errorOFF, errorOn} from "../../error/actions";
import {loadingOff, loadingOn} from "../../loading/actions";

export const SET_ALLBOOKS = 'books/SET_ALLBOOKS';


export function setBooks() {
  return async dispatch => {
    try {
      dispatch(loadingOn())
      const response = await getBooks();
      const dataBooks = response.data.results;
      dispatch({type: SET_ALLBOOKS, data: dataBooks})
      dispatch(loadingOff())
      dispatch(errorOFF())
    } catch (e) {
      dispatch(errorOn())
      dispatch(loadingOff())
    }
  }
}
