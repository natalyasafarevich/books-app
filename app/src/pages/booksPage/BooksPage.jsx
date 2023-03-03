import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import BookCard from "../../components/bookCard/BookCard";
import Error from "../../components/error/Error";
import Load from "../../components/load/Load";
import { setSearchBook } from "../../store/books/search/actions";

import "./BooksPage.scss";

export default function BooksPage() {
	const { title } = useParams();

	const dispatch = useDispatch();

	const books = useSelector((state) => state.books.searchBook);

	useEffect(() => {
		dispatch(setSearchBook(title));
	}, []);

	return (
		<div className="wrapper">
			<div className="main">
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
			</div>
		</div>
	);
}
