import {searchByParameters} from "../../API/getBooks";
import {errorOFF, errorOn} from "../error/actions";
import {loadingOff, loadingOn} from "../loading/actions";


export const GET_SEARCH_PARAMS = 'params/GET_SEARCH_PARAMS';
export const SET_SEARCH_PARAMS = 'params/SET_SEARCH_PARAMS';
export const SET_CURRENT_BOOKS = 'params/SET_CURRENT_BOOKS';


export function getParams(search_by, language) {

  return {type: GET_SEARCH_PARAMS, search_by, language}
}
export function setParams() {
  return {type: SET_SEARCH_PARAMS}
}


export function getSearchBooks(params) {
  return async dispatch => {
    try {
      dispatch(loadingOn())
      const response = await searchByParameters(params);
      const dataBook = await response.data;
      dispatch({type: SET_CURRENT_BOOKS, data: dataBook})
      dispatch(loadingOff())
      dispatch(errorOFF())
    } catch (e) {
      dispatch(errorOn())
      dispatch(loadingOff())
    }
  }
}
