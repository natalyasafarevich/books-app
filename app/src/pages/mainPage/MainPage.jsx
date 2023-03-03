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
	const books_ru = useSelector((state) => state.books.searchBook);

	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(setBooks());
		dispatch(setBookLanguage("fr"));
	}, []);

	const info = {
		label: "Read new",
		title: "New Arrivals",
		desc: `Reading helps you developing your
		communication skills`,
	};

	const infoRu = {
		label: "Russian",
		title: "Listen books",
		desc: `Reading helps you developing your
		communication skills`,
	};

	return (
		<>
			<div className="wrapper">
				<div className="main">
					<Preview />
					<Books info={info} books={books} />
				</div>
			</div>
			<Genres />
			<div className="wrapper">
				<div className="main">
					<Books info={infoRu} books={books_ru} />
				</div>
			</div>
		</>
	);
}
