import {combineReducers} from "redux";
import {allBookReduser} from "./books/all/reduser";
import {currnetBookReduser} from "./books/current/reduser";
import {favoriteBookReduser} from "./books/favorite/reduser";
import {languageBookReduser} from "./books/language/reduser";
import {searchBookReduser} from "./books/search/reduser";
import {errorReduser} from "./error/reduser";
import {loadingReduser} from "./loading/reduser";
import {notificationReduser} from "./notification/reduser";
import {paginationReduser} from "./pagination/reduser";
import { ParamsReduser } from "./paramsSearch/reduser";
import {ThemeReduser} from "./theme/reduser";
import {TopicReduser} from "./topic/reduser";

export default combineReducers({

  all_books: allBookReduser,
  current_book: currnetBookReduser,
  favorite_books: favoriteBookReduser,
  language_books: languageBookReduser,
  search: searchBookReduser,
  loading: loadingReduser,
  error: errorReduser,
  topic: TopicReduser,
  pagination: paginationReduser,
  theme: ThemeReduser,
  note: notificationReduser,
  search_params: ParamsReduser
});
