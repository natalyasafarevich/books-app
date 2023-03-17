import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import Load from "../../components/load/Load";
import Error from "../../components/error/Error";
import LanguageIcon from "@mui/icons-material/Language";
import SubjectIcon from "@mui/icons-material/Subject";

import "./BookDescription.scss";
import Collapse from "../../components/collapse/Collapse";
import FavoriteButton from "../../components/buttons/favorite-button/FavoriteButton";
import SimilarBook from "../../components/similar-book/SimilarBook";
import { useNavigate } from "react-router-dom";
import { setCurrentBook } from "../../store/books/current/actions";
import {
	addFavoriets,
	removeFavoriets,
} from "../../store/books/favorite/actions";
import { ScrollToTop } from "../../helper/ScrollToTop";
import { setNotification } from "../../store/notification/actions";
export function BookDescription() {
	const [isFavorite, setIsFavorite] = useState();
	const params = useParams();
	const dispatch = useDispatch();

	const favorBooks = useSelector((state) => state.favorite_books.favoriteBooks);
	const book = useSelector((state) => state.current_book.currentBook);

	const { title, bookshelves, authors, translators, languages, subjects } = book;

	// useEffect
	useEffect(() => {
		ScrollToTop();
		dispatch(setCurrentBook(params.isbn));
	}, [params]);

	const deleteFavorite = (e) => {
		dispatch(removeFavoriets(book.id));
		setIsFavorite(false);
	};

	const addFavorite = (e) => {
		dispatch(setNotification(book.title));
		dispatch(addFavoriets(book));
		setIsFavorite(true);
	};

	useEffect(() => {
		const getBooks = JSON.parse(localStorage.getItem("favorBook"));
		if (getBooks) {
			getBooks.map((item) => {
				if (item.id !== book.id) {
					setIsFavorite(true);
				} else {
					setIsFavorite(false);
				}
			});
		}
	}, [params, favorBooks, deleteFavorite, addFavorite]);

	useEffect(() => {
		localStorage.setItem("favorBook", JSON.stringify(favorBooks));
	}, [favorBooks]);

	if (Object.keys(book).length) {
		return (
			<div className="wrapper">
				<div className="main">
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
										<Link
											to={`/search/author/${item.name}`}
											key={index}
											className="desc-book__name">
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
										<Link key={i} to={`/search/books-languages/${item}`}>
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
					<SimilarBook />
				</div>
			</div>
		);
	}
}
