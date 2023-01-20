import Categories from "../../categories/Categories";
import { Preview } from "../../preview/Preview";
import BooksPage from "../booksPage/booksPage";

export default function Main() {
	return (
		<>
			<Preview />
            <Categories/>
			<BooksPage />
		</>
	);
}
