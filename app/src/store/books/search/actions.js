import {searchBook} from "../../../API/getBooks";
import {errorOFF, errorOn} from "../../error/actions";
import {loadingOff, loadingOn} from "../../loading/actions";

export const SEARCH_BOOKS = 'search/SEARCH__BOOKS';


export function setSearchBook(name) {
  return async dispatch => {
    try {
      dispatch(loadingOn())
      const response = await searchBook(name);
      const dataBook = await response.data.results;
      if (response.data.results.length === 0) {
        dispatch(errorOn())
        return;
      }
      dispatch({type: SEARCH_BOOKS, data: dataBook})

      dispatch(loadingOff())

      dispatch(errorOFF())
    } catch (e) {
      dispatch(errorOn())
      dispatch(loadingOff())
    }
  }
}
