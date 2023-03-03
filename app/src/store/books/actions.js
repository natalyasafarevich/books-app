import {getBooks, getBooksLanguage, getCurrentBook, searchBook} from "../../API/getBooks"
import {errorOFF, errorOn} from "../error/actions";
import {loadingOff, loadingOn} from "../loading/actions";

export const SET_ALLBOOKS = 'books/SET_ALLBOOKS';
export const SET_CURRENT_BOOKS = 'books/SET_CURRENT_BOOKS';
export const SEARCH_BOOKS = 'books/SEARCH__BOOKS';
export const ADD_FAVORITES = 'favorites/ADD_FAVORITES';
export const REMOVE_FAVORITES = 'favorites/REMOVE_FAVORITES';
export const SET_BOOK_LANGUAGE = 'books/SET_BOOK_LANGUAGE';


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

export function setCurrentBook(id) {
  return async dispatch => {
    try {
      dispatch(loadingOn())
      const response = await getCurrentBook(id);
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


export function setSearchBook(name) {
  return async dispatch => {
    try {
      dispatch(loadingOn())
      const response = await searchBook(name);
      const dataBook = await response.data.results;
      dispatch({type: SEARCH_BOOKS, data: dataBook})

      dispatch(loadingOff())
      if (response.data.results.length === 0) {
        dispatch(errorOn())
        return;
      }
      dispatch(errorOFF())
    } catch (e) {
      console.log(e)
      dispatch(errorOn())
      dispatch(loadingOff())
    }
  }
}

export function setBookLanguage(language) {
  return async dispatch => {
    try {
      dispatch(loadingOn())
      const response = await getBooksLanguage(language);
      const dataBook = await response.data;
      dispatch({type: SET_BOOK_LANGUAGE, data: dataBook})
      dispatch(loadingOff())
      dispatch(errorOFF())
    } catch (e) {
      dispatch(errorOn())
      dispatch(loadingOff())
    }
  }
}

export function addFavoriets(books,) {
  return {type: ADD_FAVORITES, data: {
      books
    }}
}
export function removeFavoriets(index) {
  return {type: REMOVE_FAVORITES, index}
}
