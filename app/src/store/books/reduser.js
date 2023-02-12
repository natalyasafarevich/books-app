import cloneDeep from "lodash.clonedeep";
import {ADD_FAVORITES, SEARCH_BOOKS, SET_ALLBOOKS, SET_CURRENT_BOOKS} from "./actions";

const initialState = {
    books: [],
    currentBook: [],
    searchBook: [],
    favoriteBooks: JSON.parse(localStorage.getItem('favorBook')) || []

}

export const BookReduser = (state = initialState, action) => {
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
                const clone = cloneDeep(state);
                clone.currentBook = action.data;
                return clone;
            }
        case SEARCH_BOOKS:
            {
                const clone = cloneDeep(state);
                clone.searchBook = action.data;
                return clone;
            }
        case ADD_FAVORITES:
            {
                const clone = cloneDeep(state);
                clone.favoriteBooks.unshift(action.data.books);
                return clone;
            }
        default:
            return state
    }
}
