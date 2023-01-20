import { useEffect, useState } from "react";
import { searchBook } from "../../../api/getBooks";

import BookCard from "../../bookCard/bookCard";
import Error from "../../error/Error";
import Load from "../../load/Load";

import "./booksPage.scss";

function BooksPage() {
	const [books, setBooks] = useState([]);
	const [isLoading, setIsloading] = useState(true);
	const [isError, setIsError] = useState(false);

	useEffect(() => {
		async function fetchData() {
			try {
				const response = await searchBook('angular');
				const books = response.data.books;
				setBooks(books.slice(0, 3));
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
			<p className="books-page__title">books react</p>
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
export default BooksPage;
