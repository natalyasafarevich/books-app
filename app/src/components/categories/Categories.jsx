import { useEffect, useState } from "react";
// import { usePagination } from '@sajari/react-hooks';
import { Link } from "react-router-dom";
import { searchBook } from "../../api/getBooks";
import BookCard from "../bookCard/bookCard";
import Error from "../error/Error";
import Load from "../load/Load";
import PaginationItem from "../pagination/Pagination";
import "./Categories.scss";

export default function Categories() {
	const [books, getBooks] = useState([]);
	const [restCategory, getRestCategory] = useState({});
	const [isLoading, setIsloading] = useState(true);
	const [isError, setIsError] = useState(false);

	const getLocalStorageBook = localStorage.getItem("category");

	let category = [
		{ title: "Google", className: "category__item " },
		{ title: "Analytics ", className: "category__item" },
		{ title: "Node.js", className: "category__item" },
		{ title: "React", className: "category__item" },
		{ title: "Docker", className: "category__item" },
	];

	useEffect(() => {
		async function getData() {
			try {
				const response = await searchBook(getLocalStorageBook);
				getBooks(response.data.books.slice(0, 3));
				setIsloading(false);
			} catch (e) {
				setIsloading(false);
				setIsError(true);
			}
		}
		getData();
	}, [restCategory, getLocalStorageBook]);

	const getCategory = (e) => {
		localStorage.setItem("category", e.target.text);
		getRestCategory(localStorage.getItem("category"));
	};

	return (
		<div className="category">
			<div className="category__header">
				<p className="category__title">Top Categories</p>
				<div className="category__row">
					{category.map((category, index) => (
						<Link
							key={index}
							className={category.className}
							to="#"
							onClick={getCategory}>
							{category.title}
						</Link>
					))}
				</div>
			</div>
			{isLoading && <Load />}
			{isError && <Error />}
			{!isError && (
				<div className="category__info">
					<div className="category__content">
						{!isLoading &&
							books.map((book, index) => <BookCard book={book} key={index} />)}
					</div>
					<PaginationItem count={3} />
				</div>
			)}
		</div>
	);
}
