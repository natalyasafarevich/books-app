import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { setSearchBook } from "../../../store/books/actions";
import BookCard from "../../bookCard/bookCard";
import Error from "../../error/Error";
import Load from "../../load/Load";

import "./BooksPage.scss";

export default function BooksPage() {
	const { title } = useParams();

	const dispatch = useDispatch();

	const books = useSelector((state) => state.books.searchBook);
	useEffect(() => {
		dispatch(setSearchBook(title));
	}, []);

	return (
		<div className="books-item">
			<p className="books-item__title">top Angular books </p>
			<div className="books-item__row">
				<Load />
				<Error />
				{books.map((item, index) => (
					<BookCard key={index} book={item} />
				))}
			</div>
		</div>
	);
}
