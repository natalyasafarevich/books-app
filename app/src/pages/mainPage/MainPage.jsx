import Categories from "../../components/categories/Categories";
import { Preview } from "../../components/preview/Preview";
import Books from "../../components/books/Books";
import Genres from "../../components/genres/Genres";
import { useDispatch, useSelector } from "react-redux";
import { setBookLanguage, setBooks } from "../../store/books/actions";
import { useEffect } from "react";
import { getBooks } from "../../API/getBooks";

export default function Main() {
	const books = useSelector((state) => state.books.books);
	const books_ru = useSelector((state) => state.books.languageBooks);

	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(setBooks());
		dispatch(setBookLanguage("de"));
	}, []);

	const info = {
		label: "Read new",
		title: "New Arrivals",
		desc: `Reading helps you developing your
		communication skills`,
	};

	const infoRu = {
		label: "language",
		title: "Books in French",
		desc: `Read books in other languages`,
	};

	return (
		<>
			<div className="wrapper">
				<div className="main">
					<Preview />
					<Books info={info} books={books} />
				</div>
			</div>
			{console.log(books_ru)}
			<Genres />
			<div className="wrapper">
				<div className="main">
					<Books info={infoRu} books={books_ru} />
				</div>
			</div>
		</>
	);
}
