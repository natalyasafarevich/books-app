import { Preview } from "../../components/preview/Preview";
import Books from "../../components/books/Books";
import Genres from "../../components/genres/Genres";
import { useDispatch, useSelector } from "react-redux";
import { setBookLanguage, setBooks } from "../../store/books/actions";
import { useEffect } from "react";
import { info } from "../../helper/defaultInfo";

export default function Main() {
	const books = useSelector((state) => state.books.books);
	const books_ru = useSelector((state) => state.books.languageBooks);

	const { label_arrivals, label_language } = info.main_page;
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(setBooks());
		dispatch(setBookLanguage("fr"));
	}, []);
	return (
		<>
			<div className="wrapper">
				<div className="main">
					<Preview />
					<Books info={label_arrivals} books={books} />
				</div>
			</div>
			<Genres />
			<div className="wrapper">
				<div className="main">
					<Books info={label_language} books={books_ru} />
				</div>
			</div>
		</>
	);
}
