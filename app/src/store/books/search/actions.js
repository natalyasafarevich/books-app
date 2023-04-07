import {searchBook} from "../../../API/getBooks";
import {errorOFF, errorOn} from "../../error/actions";
import {loadingOff, loadingOn} from "../../loading/actions";

export const RESULT_SEARCH_BOOKS = 'search/RESULT_SEARCH_BOOKS';
export const SEARCH_BOOKS = 'search/SEARCH__BOOKS';

export function getPaginationNumber() {
  return {type: RESULT_SEARCH_BOOKS}
}

export function setSearchBook(name) {
  return async dispatch => {
    try {
      dispatch(loadingOn())
      const response = await searchBook(name);
      const dataBook = await response.data.results;
      const count = response.data.count;
      if (dataBook.length === 0) {
        dispatch(loadingOn())
        return;
      }
      dispatch({type: SEARCH_BOOKS, data: dataBook, count: count})
      dispatch(loadingOff())

      dispatch(errorOFF())
    } catch (e) {
      dispatch(errorOn())
      dispatch(loadingOff())
    }
  }
}
