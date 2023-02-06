import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { withFavorites } from "../../hoc/withFavorites";
import { setBooks } from "../../store/books/actions";
import BookCard from "../bookCard/bookCard";
import Error from "../error/Error";
import Load from "../load/Load";

import "./Books.scss";

function Books() {
	const [isLoading, setIsloading] = useState(false);
	const [isError, setIsError] = useState(false);

	const dispatch = useDispatch();
	const books = useSelector((state) => state.books.books);

	useEffect(() => {
		dispatch(setBooks());
	}, []);

	return (
		<div className="books-page">
			<p className="books-page__title">New Releases Books</p>
			<div className="books-page__row">
				{isLoading && !isError && <Load />}
				{!isLoading && isError && <Error />}
				{!isLoading &&
					!isError &&
					books.map((book, index) => <BookCard key={index} book={book} />)}
			</div>
		</div>
	);
}

export default withFavorites(Books);
