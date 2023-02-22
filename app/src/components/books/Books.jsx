import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setSearchBook } from "../../store/books/actions";
import BookCard from "../bookCard/bookCard";
import Error from "../error/Error";
import Label from "../label/Label";
import Load from "../load/Load";
import PaginatedItems from "../pagination/Pagination";

import "./Books.scss";

function Books() {
	const books = useSelector((state) => state.books.searchBook);
	const dispatch = useDispatch();
	const info ={
		label :"Read new",
		title: "New Arrivals",
		desc :`Reading helps you developing your
		communication skills`
	}
	useEffect(() => {
		dispatch(setSearchBook("dickens"));
	}, []);

	return (
		<div className="books-container">
			<div className="books-container__box">
				<Label info={info} />
			</div>
			<Error />
			<Load />
			<div className="books-container__row">
				
				{books.length &&
					books.slice(0,4).map((book, index) => <BookCard key={index} book={book} />)}
			</div>
		</div>
	);
}

export default Books;
