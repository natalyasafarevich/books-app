import {getBooksLanguage} from "../../../API/getBooks"
import {errorOFF, errorOn} from "../../error/actions";
import {loadingOff, loadingOn} from "../../loading/actions";


export const SET_BOOK_LANGUAGE = 'books/SET_BOOK_LANGUAGE';

export function setBookLanguage(language) {
  return async dispatch => {
    try {
      dispatch(loadingOn())
      const response = await getBooksLanguage(language);
      const dataBook = await response.data;
      dispatch({type: SET_BOOK_LANGUAGE, data: dataBook})
      dispatch(loadingOff())
    } catch (e) {
    }
  }
}
