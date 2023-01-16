import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { useEffect, useState } from "react";
import { Router, Routes, Route, Link, Switch } from "react-router-dom";

import "./bookCard.scss";

export default function BookCard({ book, src }) {
	// const [img, setImg] = useState({});
	useEffect(() => {}, []);

	return (
		<div className="book-card">
			<div className="book-card__container">
				{/* <div></div> */}
				<img src={book.image} className="book-card__img" />
				<div className="book-card__info">
					<p className="book-card__author"></p>
					<p className="book-card__name">{book.title}</p>
					{/* <p className="book-card__rating">rating 4/5</p> */}
					<p className="book-card__subtitle">{book.subtitle}</p>

					<p className="book-card__price"> {book.price}</p>
					<div className="book-card__row">
						<Link to={`/book/${book.isbn13}`} className="book-card__link book-card__link_more">
							more
						</Link>
						{/* <a href="/" className="book-card__link book-card__link_more">
							more
						</a> */}
						<a href="/" className="book-card__link book-card__link_add">
							<FavoriteBorderIcon className="fav" />
						</a>
					</div>
				</div>
			</div>
		</div>
	);
}
