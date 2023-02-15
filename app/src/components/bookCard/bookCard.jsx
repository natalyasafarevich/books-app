import { Link } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";
import {
	addFavoriets,
	removeFavoriets,
	setIsbn,
} from "../../store/books/actions";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import "./bookCard.scss";
import { useState } from "react";
import { useEffect } from "react";

function BookCard({ book }) {
	const [isFavorite, setIsFavorite] = useState(false);

	const dispatch = useDispatch();
	const favorBooks = useSelector((state) => state.books.favoriteBooks);
	const isbns = useSelector((state) => state.books.isbn);
	useEffect(() => {
		localStorage.setItem("favorBook", JSON.stringify(favorBooks));
	}, [favorBooks]);
	const deleteFavorite = (e) => {
		dispatch(removeFavoriets(book.isbn13));
		setIsFavorite(false);
	};
	const addFavorite = (e) => {
		if (!isFavorite) {
			dispatch(addFavoriets(book));
		}
		dispatch(setIsbn(book.isbn13));
		setIsFavorite(true);
		e.preventDefault();
	};

	return (
		<div className={[`book-card`]}>
			<div className="book-card__container">
				<img src={book.image} className="book-card__img" alt="img book" />
				<div className="book-card__info">
					<p className="book-card__author"></p>
					<p className="book-card__name">{book.title}</p>
					<p className="book-card__subtitle">{book.subtitle}</p>
					<p className="book-card__price"> {book.price}</p>
					<div className="book-card__row">
						<Link
							to={`/book/${book.isbn13}`}
							className="book-card__link book-card__link_more">
							more
						</Link>
						<button className="book-card__link book-card__link_add">
							{isFavorite && (
								<FavoriteIcon className="fav active" onClick={deleteFavorite} />
							)}
							{!isFavorite && (
								<FavoriteBorderIcon className="fav" onClick={addFavorite} />
							)}
						</button>
					</div>
				</div>
			</div>
		</div>
	);
}
export default BookCard;
