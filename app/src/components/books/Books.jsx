// import { useDispatch, useSelector } from "react-redux";

import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { getBooks } from "../../api/getBooks";
import { withFavorites } from "../../hoc/withFavorites";
import BookCard from "../bookCard/bookCard";
import Error from "../error/Error";
import Load from "../load/Load";

import "./Books.scss";

function Books() {

	// console.log(favorives);

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

	// function handleClick(e) {
	// 	// dispatch(inputText(e.target.value));
	// 	// document.querySelector(".book-card");
	// 	console.log(e);
	// }
	return (
		<div className="books-page">
			<p className="books-page__title">New Releases Books</p>
			<div className="books-page__row">
				{isLoading && !isError && <Load />}
				{!isLoading && isError && <Error />}
				{!isLoading &&
					!isError &&
					books.map((book, index) => (
						<BookCard key={index} book={book} />
					))}
			</div>
		</div>
	);
}

// function

export default Books;
