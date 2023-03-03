import cloneDeep from "lodash.clonedeep";
import {ADD_FAVORITES, REMOVE_FAVORITES} from "./actions";

const initialState = {
  favoriteBooks: JSON.parse(localStorage.getItem('favorBook')) || []
}

export const favoriteBookReduser = (state = initialState, action) => {

  switch (action.type) {

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
    default:
      return state
  }
}
