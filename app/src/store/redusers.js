import { combineReducers } from "redux";
import { BookReduser } from "./books/reduser";
import { errorReduser } from "./error/reduser";
import { loadingReduser } from "./loading/reduser";

export default combineReducers({
	books: BookReduser,
	loading: loadingReduser,
	error: errorReduser,
});
