import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { searchBook } from "../../api/getBooks";
import BookCard from "../bookCard/bookCard";
import "./Categories.scss";

export default function Categories() {
	const [books, getBooks] = useState([]);
	const [restCategory, getRestCategory] = useState({});

	const getLocakSBook = localStorage.getItem("category");
	useEffect(() => {
		async function getData() {
			const response = await searchBook(getLocakSBook);
			console.log(getLocakSBook);
			getBooks(response.data.books.slice(0, 3));
		}
		getData();
	}, [restCategory]);
	const getCategory = (e) => {
		e.target.classList.add("category__item_active");
		localStorage.setItem("category", e.target.text);
		getRestCategory(localStorage.getItem("category"));
	};

	const category = [
		{ title: "Google", className: "category__item " },
		{ title: "InDesign", className: "category__item" },
		{ title: "Node.js", className: "category__item" },
		{ title: "React", className: "category__item" },
		{ title: "Python", className: "category__item" },
	];
	return (
		<div className="category">
			<div className="category__header">
				<p className="category__title">Top Categories</p>
				<div className="category__row">

					{category.map((category, index) => (
						<Link
							className={category.className}
							to="#"
							activeClassName="selected"
							onClick={getCategory}>
							{category.title}
						</Link>
					))}
				</div>
			</div>
			<div className="category__content">
				{books.map((book, index) => (
					<BookCard book={book} key={index} />
				))}
				{/* <BookCard/> */}
			</div>
		</div>
	);
}
