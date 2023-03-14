import { Preview } from "../../components/preview/Preview";
import Books from "../../components/books/Books";
import Genres from "../../components/genres/Genres";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { info } from "../../helper/defaultInfo";
import { setBooks } from "../../store/books/all/actions";
import { setBookLanguage } from "../../store/books/language/actions";
import { useState } from "react";

export default function Main() {



	const booksdd = useSelector((state) => state.all_books)


	const books = useSelector((state) => state.all_books.books);
	const books_ru = useSelector((state) => state.language_books.languageBooks);

	const { label_arrivals, label_language } = info.main_page;
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(setBooks('1'));
		dispatch(setBookLanguage("fr"));
		
	}, []);
	return (
		<>
			<div className="wrapper">
				<div className="main">
					<Preview />
				
					<Books info={label_arrivals} books={books} />
				</div>
			</div>
			{/* <>ggg</> */}
			<Genres />
			<div className="wrapper">
				<div className="main">
					<Books info={label_language} books={books_ru} />
				</div>
			</div>
		</>
	);
}
