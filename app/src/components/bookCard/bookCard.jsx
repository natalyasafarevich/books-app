import { useState, useEffect } from "react";
import "./BookCard.scss";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import RemoveRedEyeOutlinedIcon from "@mui/icons-material/RemoveRedEyeOutlined";
import { addFavoriets, removeFavoriets } from "../../store/books/favorite/actions";

function BookCard({ book }) {
	const [isFavorite, setIsFavorite] = useState(false);

	const dispatch = useDispatch();
	const favorBooks = useSelector((state) => state.favorite_books.favoriteBooks);

	useEffect(() => {
		const getBooks = JSON.parse(localStorage.getItem("favorBook"));
		if (getBooks) {
			getBooks.map((item) => {
				if (item.id === book.id) {
					setIsFavorite(true);
					return;
				}
			});
		}
	}, [favorBooks]);
	useEffect(() => {
		localStorage.setItem("favorBook", JSON.stringify(favorBooks));
	}, [favorBooks]);

	const deleteFavorite = (e) => {
		dispatch(removeFavoriets(book.id));
		setIsFavorite(false);
		e.preventDefault();
	};
	const addFavorite = (e) => {
		dispatch(addFavoriets(book));
		setIsFavorite(true);
		e.preventDefault();
	};

	return (
		<div className={[`book-card`]}>
			<div className="book-card__container">
				<div className="book-card__box">
					<img
						src={book.formats["image/jpeg"]}
						className="book-card__img"
						alt="img book"
					/>
					<div className="book-card__content">
						<div className="book-card__bg"></div>
						<div className="book-card__links">
							<Link to={`/book/${book.id}`} className="book-card__link ">
								<RemoveRedEyeOutlinedIcon className="book-card__icon book-card__icon_eye" />
							</Link>

							{isFavorite && (
								<button
									className="book-card__link book-card__link_add"
									onClick={deleteFavorite}>
									<FavoriteIcon className="book-card__icon fav active" />
								</button>
							)}
							{!isFavorite && (
								<button className="book-card__link book-card__link_add" onClick={addFavorite}>
									<FavoriteBorderIcon
										className="book-card__icon fav"
										
									/>
								</button>
							)}
						</div>
					</div>
				</div>
				<div className="book-card__info">
					<div className="book-card__subject">
					</div>
					<p className="book-card__name">{book.title}</p>
					<p className="book-card__author">
						<span>by</span> {book.authors[0]?.name}
					</p>
				</div>
			</div>
		</div>
	);
}
export default BookCard;
