import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setBooks } from "../../store/books/actions";
import BookCard from "../bookCard/BookCard";
import Error from "../error/Error";
import Label from "../label/Label";
import Load from "../load/Load";


import "./Books.scss";

function Books({books, info}) {
	// const books = useSelector((state) => state.books.books);



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
