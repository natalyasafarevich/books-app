import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { setSearchBook } from "../../store/books/actions";
import BookCard from "../bookCard/BookCard";
import Error from "../error/Error";
import Load from "../load/Load";
import PaginationItem from "../pagination/Pagination";
import "./Categories.scss";

export default function Categories() {
	const [restCategory, getRestCategory] = useState({});
	const [titleCategory, setTitleCategory] = useState(null);

	const getLocalStorageBook = localStorage.getItem("category");

	let category = [
		{ title: "Google", className: "category__item " },
		{ title: "Analytics ", className: "category__item" },
		{ title: "Node.js", className: "category__item" },
		{ title: "React", className: "category__item" },
		{ title: "Docker", className: "category__item" },
	];
	useEffect(() => {
		function addCategory() {
			setTitleCategory(getLocalStorageBook);
			let category_item = document.querySelectorAll(".category__item");
			category_item.forEach((item) => {
				item.classList.remove("category__item_active");
				if (item.textContent === titleCategory) {
					item.classList.add("category__item_active");
				}
			});
		}
		addCategory();
	}, [titleCategory]);

	const dispatch = useDispatch();
	const books = useSelector((state) => state.books.searchBook);
	const cloneBook = books.slice(0, 3);
	useEffect(() => {
		dispatch(setSearchBook(getLocalStorageBook));
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
			<Load />
			<Error />
			<div className="category__info">
				<div className="category__content">
					{cloneBook.map((book, index) => (
						<BookCard book={book} key={index} />
					))}
				</div>
				<PaginationItem count={3} />
			</div>
		</div>
	);
}
