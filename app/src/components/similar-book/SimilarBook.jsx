import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { makeRandomArr } from "../../helper/sortArray";
import { setSearchBook } from "../../store/books/search/actions";
import BookCard from "../bookCard/BookCard";
import "./SimilarBook.scss";

export default function SimilarBook() {
	const params = useParams();
	const dispatch = useDispatch();

	const author = useSelector((state) => state.current_book.currentBook.authors[0]?.name);
	const books = useSelector((state) => state.search?.searchBook);
	const current_book = useSelector((state) => state.current_book.currentBook);

	
	useEffect(() => {
		dispatch(setSearchBook(author));
	}, [params,current_book]);

	return (
		<div className="similar-book">
			<div className="similar-book__container">
				<p className="similar-book__title h2">Books by this author </p>
				<div className="similar-book__row">
					{books.length &&
					books
							.slice(0, 4)
							.map((book, index) => <BookCard book={book} key={index} />)}
				</div>
			</div>
		</div>
	);
}
