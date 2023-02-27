import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import Load from "../../load/Load";
import Error from "../../error/Error";
import {
	addFavoriets,
	removeFavoriets,
	setCurrentBook,
} from "../../../store/books/actions";
import LanguageIcon from "@mui/icons-material/Language";
import SubjectIcon from "@mui/icons-material/Subject";

import "./BookDescription.scss";
import Collapse from "../../collapse/Collapse";
import FavoriteButton from "../../buttons/favorite-button/FavoriteButton";

export function BookDescription() {
	const [isFavorite, setIsFavorite] = useState();
	const params = useParams();
	const dispatch = useDispatch();

	const favorBooks = useSelector((state) => state.books.favoriteBooks);
	const book = useSelector((state) => state.books.currentBook);
	const { title, bookshelves, authors, translators, languages, subjects } = book;
	// handle clicks
	const deleteFavorite = (e) => {
		dispatch(removeFavoriets(book.id));
		setIsFavorite(false);
	};
	const addFavorite = (e) => {
		dispatch(addFavoriets(book));
		setIsFavorite(true);
	};
	useEffect(() => {
		localStorage.setItem("favorBook", JSON.stringify(favorBooks));
	}, [favorBooks]);
	useEffect(() => {
		dispatch(setCurrentBook(params.isbn));
	}, [params]);
	useEffect(() => {
		
		const getBooks = JSON.parse(localStorage.getItem("favorBook"));
		if (getBooks) {
			getBooks.map((item) => {
				if (item.id !== book.id) {
					setIsFavorite(true);
					console.log(false);
					return;
				}else{
					setIsFavorite(false);
					console.log(true);
				}
			
				
			});
		}
	}, [favorBooks, params, deleteFavorite, addFavorite]);




	if (Object.keys(book).length) {
		return (
			<div className="desc-book">
				<Load />
				<Error />

				<div className="desc-book__container">
					<div
						className="desc-book__img"
						style={{ backgroundImage: `url(${book.formats["image/jpeg"]})` }}></div>
					<div className="desc-book__info">
						<p className="desc-book__title">{title}</p>
						<div className="desc-book__autors">
							<span className="desc-book__span">By</span>
							{authors.map((item, index) => (
								<Link to="/search" key={index} className="desc-book__name">
									{item.name}
									<span className="desc-book__years">
										({item.birth_year} - {item.death_year})
									</span>
								</Link>
							))}
						</div>
						<div className="desc-book__bookshelves">
							Bookshelves:
							<div className="desc-book__box">
								{bookshelves.map((item, i) => (
									<p key={i} className="desc-book__desc">
										{item}
									</p>
								))}
							</div>
						</div>
						<div className="desc-book__translators">
							translators:
							{(translators.length &&
								translators.map((item, i) => <p key={i}>{item}</p>)) || (
								<span>absent</span>
							)}
						</div>
						<div className="desc-book__languages">
							<span>
								<LanguageIcon />
								languages:
							</span>
							{languages.map((item, i) => (
								<Link key={i} to={`search/${book.id}`}>
									{item}
								</Link>
							))}
						</div>
						<div className="desc-book__subjects">
							<span>
								<SubjectIcon />
								Subjects:
							</span>
							<div className="desc-book__subjects-info">
								{subjects.map((item, i) => (
									<p key={i} to={`search/${book.id}`}>
										{item}
									</p>
								))}
							</div>
						</div>
						<FavoriteButton
							isFavorite={isFavorite}
							deleteFavorite={deleteFavorite}
							addFavorite={addFavorite}
						/>
					</div>
				</div>
				<Collapse />
			</div>
		);
	}
}
