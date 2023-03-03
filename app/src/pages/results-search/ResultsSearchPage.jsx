import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { setTopic } from "../../store/topic/actions";
import BookCard from "../../components/bookCard/BookCard";
import Error from "../../components/error/Error";
import Load from "../../components/load/Load";
import Selection from "../../components/selection/Selection";
import "./ResultsSearchPage.scss";
import { setBookLanguage, setSearchBook } from "../../store/books/actions";

export default function ResultsSearchPage() {
	const params = useParams();
	const dispatch = useDispatch();

	const results = useSelector((state) => state.topic.topic);
	const searchBook = useSelector((state) => state.books.searchBook);
	const books_language = useSelector((state) => state.books.languageBooks);

	const searchBosok = useSelector((state) => state.books);

	useEffect(() => {
		dispatch(setTopic(params.name));
		dispatch(setSearchBook(params.author_name));
		dispatch(setBookLanguage(params.lang));
	}, []);

	return (
		<div className="results-search">
			<div className="results-search__title">
				<div className="main">{params.name || params.author_name}</div>
			</div>

			<div className="wrapper">
				<div className="main">
					<Selection books={results} />
					<div className="results-search__container">
						<div className="results-search__row">
							<Load />

							{params.lang &&
								books_language.length &&
								books_language.map((item, i) => <BookCard book={item} key={i} />)}
							{params.author_name &&
								searchBook.length &&
								searchBook.map((item, i) => <BookCard book={item} key={i} />)}
							{params.name &&
								results.length &&
								results.map((item, i) => <BookCard book={item} key={i} />)}
							<Error />
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
