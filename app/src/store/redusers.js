import {combineReducers} from "redux";
import {BookReduser} from "./books/reduser";
import {favoritesReduser} from "./favorites/reducer";

export default combineReducers({favorite: favoritesReduser, books: BookReduser});
