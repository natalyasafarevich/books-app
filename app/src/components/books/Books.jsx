import { useEffect, useState } from "react";
import { getBooks } from "../../api/getBooks";

import BookCard from "../bookCard/bookCard";
import Error from "../error/Error";
import Load from "../load/Load";

import "./Books.scss";

function Books() {
	const [books, setBooks] = useState([]);
	const [isLoading, setIsloading] = useState(true);
	const [isError, setIsError] = useState(false);

	useEffect(() => {
		async function fetchData() {
			try {
				const response = await getBooks();
				const books = response.data.books;
				setBooks(books.slice(0, 10));
				setIsloading(false);
			} catch (e) {
				setIsloading(false);
				setIsError(true);
			}
		}
		fetchData();
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
export default Books;
