import { useState, useEffect } from "react";
import "./BookCard.scss";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import RemoveRedEyeOutlinedIcon from "@mui/icons-material/RemoveRedEyeOutlined";
import {
	addFavoriets,
	removeFavoriets,
} from "../../store/books/favorite/actions";
import Notification from "../notification/Notification";
import {
	setNotificationAdd,
	setNotificationHidden,
	setNotificationRemove,
} from "../../store/notification/actions";

function BookCard({ book }) {
	const [isFavorite, setIsFavorite] = useState(false);

	const dispatch = useDispatch();
	const favorBooks = useSelector((state) => state.favorite_books?.favoriteBooks);

	useEffect(() => {
		const getBooks = JSON.parse(localStorage.getItem("favorBook"));
		if (getBooks) {
			getBooks.map((item) => {
				if (item.id === book.id) {
					return setIsFavorite(true);
				}
			});
		}
	}, [favorBooks]);
	useEffect(() => {
		localStorage.setItem("favorBook", JSON.stringify(favorBooks));
	}, [favorBooks]);


	
	const deleteFavorite = (e) => {
		dispatch(removeFavoriets(book.id));
		dispatch(setNotificationRemove(book.title))
		setIsFavorite(false);
		
		e.preventDefault();
	};
	const addFavorite = (e) => {
		dispatch(setNotificationAdd(book.title));


		dispatch(addFavoriets(book));
		setIsFavorite(true);
		e.preventDefault();
		
	};

	return (
		<>
			<Link to={`/book/${book.id}`}className={[`book-card`]}>
				<div className="book-card__container">
					<div className="book-card__box">
						{book.formats["image/jpeg"]  === undefined ? <div
							className="book-card__img book-card__img_undefined"
						/>:<div
						style={{ backgroundImage: `url(${book?.formats["image/jpeg"]})` }}
						className="book-card__img"
					
					/>}
						<div className="book-card__content">
							{/* <div className="book-card__bg"></div> */}
							{/* <div className="book-card__links"> */}
								{/* <Link to={`/book/${book.id}`} className="book-card__link ">
									<RemoveRedEyeOutlinedIcon className="book-card__icon book-card__icon_eye" />
								</Link> */}

								{/* {isFavorite && (
									<button
										className="book-card__link book-card__link_add"
										onClick={deleteFavorite}>
										<FavoriteIcon className="book-card__icon fav active" />
									</button>
								)}
								{!isFavorite && (
									<button
										className="book-card__link book-card__link_add"
										onClick={addFavorite}>
										<FavoriteBorderIcon className="book-card__icon fav" />
									</button>
								)} */}
							{/* </div> */}
						</div>
					</div>
					<div className="book-card__info">
					{isFavorite && (
									<button
										className="book-card__link book-card__link_add"
										onClick={deleteFavorite}>
											remove from
										<FavoriteIcon className="book-card__icon fav active" />
									</button>
								)}
								{!isFavorite && (
									<button
										className="book-card__link book-card__link_add"
										onClick={addFavorite}>
											add to
										<FavoriteBorderIcon className="book-card__icon fav" />
									</button>
								)}
						<div className="book-card__subject"></div>
						<p to={`/book/${book.id}`} className="book-card__name">
							{book.title}
						</p>
						<p className="book-card__author">
							<span>by</span> {book.authors[0]?.name}
						</p>
					</div>
				
				</div>
			</Link>
		</>
	);
}
export default BookCard;
