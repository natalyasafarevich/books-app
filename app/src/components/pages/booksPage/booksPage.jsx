import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { searchBook } from "../../../api/getBooks";
import BookCard from "../../bookCard/bookCard";
import Error from "../../error/Error";
import Load from "../../load/Load";

import "./BooksPage.scss";

export default function BooksPage() {
	const [booksAgular, setbooksAngular] = useState([]);
	const [booksWindows, setbooksWindows] = useState([]);
	const [isLoading, setIsloading] = useState(true);
	const [isError, setIsError] = useState(false);

	const { title } = useParams();

	useEffect(() => {
		async function getBooks() {
			try {
				const response = await searchBook(title);
				setIsloading(false);
				if (title === "angular") {
					setbooksAngular(response.data.books);
					setbooksWindows([]);
					return;
				}
				if (title === "windows") {
					setbooksWindows(response.data.books);
					setbooksAngular([]);
					return;
				}
			} catch (e) {
				setIsError(true);
			}
		}
		getBooks();
	}, []);

	if (title === "angular") {
		return (
			<div className="books-item">
				<p className="books-item__title">top Angular books </p>
				<div className="books-item__row">
					{isLoading && !isError && <Load />}
					{!isLoading && isError && <Error />}
					{!isLoading &&
						!isError &&
						booksAgular.map((item, index) => <BookCard key={index} book={item} />)}
				</div>
			</div>
		);
	}
	if (title === "windows") {
		return (
			<div className="books-item">
				<p className="books-item__title">top Windows books </p>
				<div className="books-item__row">
					{isLoading && !isError && <Load />}
					{!isLoading && isError && <Error />}
					{!isLoading &&
						!isError &&
						booksWindows.map((item, index) => <BookCard key={index} book={item} />)}
				</div>
			</div>
		);
	}
}
