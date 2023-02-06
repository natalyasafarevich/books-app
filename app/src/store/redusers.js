import {combineReducers} from "redux";
import {BookReduser} from "./books/reduser";
import {favoritesReduser} from "./favorites/reducer";
import {loadingReduser} from "./loading/reduser";

export default combineReducers({favorite: favoritesReduser, books: BookReduser, loading: loadingReduser});
