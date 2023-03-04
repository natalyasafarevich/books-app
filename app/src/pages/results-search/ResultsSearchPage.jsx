import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { setTopic } from "../../store/topic/actions";
import { setSearchBook } from "../../store/books/search/actions";
import { setBookLanguage } from "../../store/books/language/actions";
import BookCard from "../../components/bookCard/BookCard";
import Error from "../../components/error/Error";
import Load from "../../components/load/Load";
import Selection from "../../components/selection/Selection";

import "./ResultsSearchPage.scss";
import Pagination from "../../components/pagination/Pagination";
import { useState } from "react";

export default function ResultsSearchPage() {
	const params = useParams();
	const dispatch = useDispatch();
	const [page, setPage] = useState("5");
	const results = useSelector((state) => state.topic.topic);
	// const resuffflts = useSelector((state) => state.topic);
const paginations  = useSelector(state=>state.pagination.page)
	const searchBook = useSelector((state) => state.search.searchBook);

	const books_language = useSelector(
		(state) => state.language_books.languageBooks
	);
	useEffect(() => {

		dispatch(setTopic(paginations, params.name));
	}, [paginations]);


	useEffect(() => {
		dispatch(setTopic(page, params.name));
		dispatch(setSearchBook(params.author_name));
		dispatch(setBookLanguage(params.lang));
		console.log(paginations)
	}, []);

	return (
		<div className="results-search">
			<div className="results-search__title">
				<div className="main">{params.name || params.author_name}</div>
			</div>
			<Pagination  />
			
			<div className="wrapper">
				<div className="main">
					<Selection books={results} />
					<div className="results-search__container">
						<div className="results-search__row">
							<Load />
							<Error />
							{params.lang &&
								books_language.length &&
								books_language.map((item, i) => <BookCard book={item} key={i} />)}
							{params.author_name &&
								searchBook.length &&
								searchBook.map((item, i) => <BookCard book={item} key={i} />)}
							{params.name &&
								results.length &&
								results.map((item, i) => <BookCard book={item} key={i} />)}
							{/* {console.log( resuffflts)} */}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
