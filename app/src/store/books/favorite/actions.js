export const ADD_FAVORITES = 'favorites/ADD_FAVORITES';
export const REMOVE_FAVORITES = 'favorites/REMOVE_FAVORITES';

export function addFavoriets(books,) {
  return {type: ADD_FAVORITES, data: {
      books
    }}
}
export function removeFavoriets(index) {
  return {type: REMOVE_FAVORITES, index}
}
