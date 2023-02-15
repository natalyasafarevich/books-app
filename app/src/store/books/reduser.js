import cloneDeep from "lodash.clonedeep";
import {
    ADD_FAVORITES,
    SEARCH_BOOKS,
    SET_ALLBOOKS,
    SET_CURRENT_BOOKS,
    REMOVE_FAVORITES,
    SET_ISBN
} from "./actions";

const initialState = {
    books: [],
    currentBook: [],
    searchBook: [],
    favoriteBooks: JSON.parse(localStorage.getItem('favorBook')) || [],
    isbn: []

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
                clone.favoriteBooks.push(action.data.books);
                return clone;
            }
        case REMOVE_FAVORITES:
            return(() => {
                const {index} = action;
                const {favoriteBooks} = state;
                const itemIndex = favoriteBooks.findIndex(item => item.isbn13 === index);
 
                const updateArray = [
                    ...favoriteBooks.slice(0, itemIndex),
                    ...favoriteBooks.slice(itemIndex + 1),
                ]
                const clone = cloneDeep(state);
                clone.favoriteBooks = updateArray;
                return clone;
            })()
        case SET_ISBN:
            {
                const clone = cloneDeep(state);
                clone.isbn.push(action.data);
                return clone;
            }
        default:
            return state
    }
}
