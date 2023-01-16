import { useEffect, useState } from "react";
import { getBooks, getBookFromItBook } from "../../../api/getBooks";
// import getUrl from "../hoc/hoc";
import BookCard from "./bookCard/bookCard";
import "./booksPage.scss";

function BooksPage({}) {
	const [books, setBooks] = useState([]);

	useEffect(() => {
		async function getBooksData() {
			try {
				const response = await getBooks();
				const books = response.data.books;
				setBooks(books.slice(0, 10));
			} catch (e) {
				// console.log(url);
			}
		}
		getBooksData();
	}, []);

	return (
		<div className="books-page">
			<p className="books-page__title">it books</p>
			<div className="books-page__row">
				{books.map((book,index) => (
					<BookCard key={index} book={book} src="" />
				))}
			</div>
		</div>
	);
}
export default BooksPage;
