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
import { setResetPage } from "../../store/pagination/actions";

export default function ResultsSearchPage() {
	const params = useParams();
	const dispatch = useDispatch();

	const results = useSelector((state) => state.topic);
	const paginations = useSelector((state) => state.pagination.page);
	const sss = useSelector((state) => state)
	const searchBook = useSelector((state) => state.search.searchBook);
	const books_language = useSelector(
		(state) => state.language_books.languageBooks
	);

	useEffect(() => {
	
	}, []);

	useEffect(() => {
		dispatch(setTopic(paginations, params.name));
	}, [paginations]);

	useEffect(() => {
		dispatch(setResetPage());
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
					<Selection books={results.topic} />
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
							<Pagination state={results} />
							{params.name &&
								results.topic.length &&
								results.topic.map((item, i) => <BookCard book={item} key={i} />)}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
