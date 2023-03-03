import cloneDeep from "lodash.clonedeep";
import {useDispatch} from "react-redux";
import {errorOn} from "../error/actions";
import {
  ADD_FAVORITES,
  SEARCH_BOOKS,
  SET_ALLBOOKS,
  SET_CURRENT_BOOKS,
  REMOVE_FAVORITES,
  SET_BOOK_LANGUAGE,
  SET_AUDIO_BOOKS
} from "./actions";

const initialState = {
  books: [],
  currentBook: {},
  searchBook: {},
  favoriteBooks: JSON.parse(localStorage.getItem('favorBook')) || [],
  languageBooks: [],
  audioBooks: []

}


export const BookReduser = (state = initialState, action) => {
  const dispatch = useDispatch();
  switch (action.type) {
    case SET_ALLBOOKS:
      {
        const newBook = action.data.map(res => {
          return res
        })
        const clone = cloneDeep(state);
        clone.books = newBook;
        return clone;
      }
    case SET_CURRENT_BOOKS:
      {
        const newBook = action.data.results.find(item => item);
        const clone = cloneDeep(state);
        clone.currentBook = newBook;
        return clone;
      }
    case SEARCH_BOOKS:
      {
        const clone = cloneDeep(state);
        clone.searchBook = action.data;
        if (action.data.length === 0) {
          dispatch(errorOn());
          return
        }
        console.log(action.data.length)
        return clone;
      }
    case ADD_FAVORITES:
      {
        const clone = cloneDeep(state);
        clone.favoriteBooks.push(action.data.books);
        return clone;
      }
    case REMOVE_FAVORITES:
      return(() => {
        const {index} = action;
        const {favoriteBooks} = state;
        const itemIndex = favoriteBooks.findIndex(item => item.id === index);

        const updateArray = [
          ...favoriteBooks.slice(0, itemIndex),
          ...favoriteBooks.slice(itemIndex + 1),
        ]
        const clone = cloneDeep(state);
        clone.favoriteBooks = updateArray;
        return clone;
      })()

    case SET_BOOK_LANGUAGE:

      const newBook = action.data.results.map(item => {
        return item
      })
      const clone = cloneDeep(state);
      clone.languageBooks = newBook;

      return clone;

    default:
      return state
  }
}
