import "./Header.scss";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Link as ScrollLink } from 'react-scroll'
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import CloseIcon from "@mui/icons-material/Close";
import SearchIcon from "@mui/icons-material/Search";
import { info } from "../../helper/defaultInfo";
import {
	addClass,
	bookParams,
	toggleClass,
	topicParams,
} from "../../helper/events";
import { useDispatch, useSelector } from "react-redux";
import Theme from "../theme/Theme";
import AdvancedSearch from "../advanced-search/AdvancedSearch";
import { getSearchBooks } from "../../store/paramsSearch/actions";
import MenuIcon from '@mui/icons-material/Menu';
import { setCurrentBook } from "../../store/books/current/actions";
import { useEffect } from "react";
import Switcher from "../switcher/Switcher";

export function Header() {
	const dispatch = useDispatch();
	const navigate = useNavigate();

	const params_search = useSelector((state) => state.search_params);
	const paginations = useSelector((state) => state.pagination.page);
	const faivorite = useSelector((state) => state.favorite_books.favoriteBooks.length);
	const { links } = info.header;

	useEffect(() => {
		let main_input = document.querySelector(".header__input");
		main_input.placeholder = `Search by ${params_search.search_by}`;
		if (params_search.search_by === "id") {
			main_input.maxLength = 5;
			return;
		}
		main_input.maxLength = 9999999;
		main_input.removeAttribute("max-length");
	}, [params_search]);

	const searchClick = (e) => {
		e.preventDefault();
		const list = document.querySelector(".header__list");
		const form = document.querySelector(".header__form");
		const search = document.querySelector(".advanced-search");

		toggleClass(list, "hidden");
		toggleClass(form, "hidden");
		addClass(search, "hidden");
	};

	const advancedSearch = (e) => {
		e.preventDefault();
		document.querySelector(".advanced-search").classList.remove("hidden");
	};

	// submit form
	const formSubmin = (e) => {
		const value = e.target.value;
		if (e.keyCode === 13) {
			e.preventDefault();

			e.target.value = "";
			const list = document.querySelector(".header__list");
			const form = document.querySelector(".header__form");
			const search = document.querySelector(".advanced-search");

			toggleClass(list, "hidden");
			toggleClass(form, "hidden");
			addClass(search, "hidden");

			if (params_search.search_by === "book") {
				const params = bookParams(paginations, value, params_search);
				dispatch(getSearchBooks(params));
				navigate(`/search/${value}`);
			}
			if (params_search.search_by === "topic") {
				const params = topicParams(paginations, value, params_search);
				dispatch(getSearchBooks(params));
				navigate(`/search/${value}`);
			}
			if (params_search.search_by === "id") {
				dispatch(setCurrentBook(value));
				navigate(`/book/${value}`);
			}
		}
	};

	const keyUp = (e) => {
		if (params_search.search_by === "id") {
			e.target.value = e.target.value.replace(/[^\d]/g, "");

			if (e.target.value.length >= 1) {
				document.querySelector(".header__form").classList.remove("_error");
				return;
			}
			document.querySelector(".header__form").classList.add("_error");
		}
	};
	return (
		<header className="header">
			<div className="header__container">
				<Link to="/" className="header__logo"></Link>
				<button className="header__burger">
				<Switcher/>
				</button>
				<div className="header__content">
					<div className="header__form hidden">
						<form className="form ">
							<input
								onKeyDown={(e) => formSubmin(e)}
								className="header__input"
								type="text"
								placeholder="Search by Title or Autor "
								onKeyUp={keyUp}
							/>
							<p className="text-error">enter the number</p>
							<CloseIcon className="header__close" onClick={searchClick} />
						</form>
						<button className="header__search-link" onClick={advancedSearch}>
							Advanced Search
						</button>
						<AdvancedSearch />
					</div>
					<ul className="header__list">
						{links.map((item, index) => (
							<React.Fragment key={index}>
								<li className={item.classNameItem}>
									<a href={item.url} className={item.classNameLink}>
										{item.name}
									</a>
								</li>
							</React.Fragment>
						))}
					</ul>
				</div>

				<div className="header__box">
					<div className="header__theme">
						<Theme />
					</div>
					<div className="header__btns">
						<Link to={"/favorite"} className="header__favorite" databooks={faivorite}>
							<FavoriteBorderIcon className="fav" />
						</Link>

						<div className="header__search" onClick={searchClick}>
							<SearchIcon className="fav " />
						</div>
					</div>
				</div>
			</div>
		</header>
	);
}
