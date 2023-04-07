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
import Paginations from "../../components/pagination/Pagination";
import { useState } from "react";
import { setResetPage } from "../../store/pagination/actions";
import { getSearchBooks } from "../../store/paramsSearch/actions";
import ButtonBack from "../../components/buttons/button-back/ButtonBack";

export default function ResultsSearchPage() {
	const params = useParams();
	const dispatch = useDispatch();

	const paginations = useSelector((state) => state.pagination.page);
	const search_params = useSelector((state) => state.search_params.books);

	useEffect(() => {
		dispatch(setResetPage());
	}, [params]);

	useEffect(() => {
		if (params.name === "books") {
			dispatch(getSearchBooks(`page=${paginations}`));
			return;
		}
		if (params.lang) {
			dispatch(getSearchBooks(`page=${paginations}&languages=${params.lang}`));
			return;
		}
		if (params.topic) {
			dispatch(getSearchBooks(`page=${paginations}&topic=${params.topic}`));
			return;
		}
		dispatch(
			getSearchBooks(
				`page=${paginations}&search=${params.name || params.author_name}`
			)
		);
	}, [paginations]);

	return (
		<div className="results-search">
			<div className="results-search__title">
				<div className="result-title main">
					search by request:&nbsp;
					{(search_params?.books?.results?.length === 0 && (
						<span>
							"{params.name || params.author_name || params.topic || params.lang}"
							nothing is found
						</span>
					)) || (
						<span>
							"{params.name || params.author_name || params.topic || params.lang}"
							(sorted by popularity)
						</span>
					)}
				</div>
				<div className="mobile-results">
					<p className="mobile-results__title">
						{params.name || params.author_name || params.topic || params.lang}
					</p>
				</div>
			</div>
			<div className="wrapper">
				<div className="main results-search__main">
					<div className="results-search__flex">
						<Paginations state={search_params} />
					</div>
					<div className="results-search__container">
						<div className="results-search__row">
							<Error />
							{(search_params?.results?.length > 0 &&
								search_params.results?.map((item, i) => (
									<BookCard book={item} key={i} />
								))) || (
								<div className="not-found-box">
									<ButtonBack />
									<span className="not-found-results">
										Nothing found for your search, please try again
									</span>
								</div>
							)}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
