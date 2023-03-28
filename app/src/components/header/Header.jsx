import "./Header.scss";
import React, { useState } from "react";
import { Link, redirect, useNavigate, useNavigation } from "react-router-dom";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import CloseIcon from "@mui/icons-material/Close";
import SearchIcon from "@mui/icons-material/Search";
import { info } from "../../helper/defaultInfo";
import {
	addClass,
	bookParams,
	idParams,
	removeClass,
	toggleClass,
	topicParams,
} from "../../helper/events";
import { useDispatch, useSelector } from "react-redux";
import { setTopic } from "../../store/topic/actions";
import { errorOn } from "../../store/error/actions";
import { setSearchBook } from "../../store/books/search/actions";
import Theme from "../theme/Theme";
import AdvancedSearch from "../advanced-search/AdvancedSearch";
import { getSearchBooks } from "../../store/paramsSearch/actions";
import { setCurrentBook } from "../../store/books/current/actions";
import { useEffect } from "react";
import { toNumber } from "lodash";

export function Header() {
	const dispatch = useDispatch();
	const navigate = useNavigate();

	const params_search = useSelector((state) => state.search_params);
	const paginations = useSelector((state) => state.pagination.page);
	const { links } = info.header;

	useEffect(() => {
		let main_input = document.querySelector(".header__input");
		main_input.placeholder = `Search by ${params_search.search_by}`;
		if (params_search.search_by === "id") {
			main_input.maxLength = 5;
			return;
		}
		main_input.maxLength = 9999999;
		console.log(main_input);
		main_input.removeAttribute("max-length");
	}, [params_search]);

	const searchClick = (e) => {
		e.preventDefault();
		const list = document.querySelector(".header__list");
		const form = document.querySelector(".header__form");
		// const search = document.querySelector(".advanced-search");

		toggleClass(list, "hidden");
		toggleClass(form, "hidden");
		// addClass(search, "hidden");
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
			document.querySelector(".advanced-search").classList.add("hidden");

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
		console.log(typeof e.target.value);

		if (params_search.search_by === "id") {
			e.target.value = e.target.value.replace(/[^\d]/g, "");

			if (typeof e.target.value === "string") {
				document.querySelector(".header__form").classList.add("_error");
				return;
			}
			// if (typeof  e.target. === "number"){
			document.querySelector(".header__form").classList.remove("_error");
			// }
		}
	};
	return (
		<header className="header">
			<div className="header__container">
				<Link to="/" className="header__logo"></Link>
				<div className="header__content">
					<form className="header__form form hidden">
						<input
							onKeyDown={(e) => formSubmin(e)}
							// onChange={(e) => handleChange(e)}
							className="header__input"
							type="text"
							placeholder="Search by Title or Autor "
							onKeyUp={keyUp}
							// value={'topik'}
						/>
						<CloseIcon className="header__close" onClick={searchClick} />
					</form>
					<button className="header__search-link" onClick={advancedSearch}>
						Advanced Search
					</button>
					<AdvancedSearch />
					<ul className="header__list">
						{links.map((item, index) => (
							<React.Fragment key={index}>
								<li className={item.classNameItem}>
									<a
										href={item.url}
										className={item.classNameLink}
										// onClick={preventDefaultLink}
									>
										{item.name}
									</a>
								</li>
							</React.Fragment>
						))}
					</ul>
				</div>
				<div className="header__theme">
					<Theme />{" "}
				</div>
				{/* <div className="header__login">Hi, 	Natallia</div> */}
				<div className="header__box">
					{/* <div className="header__name">Hi, 	Natallia</div> */}

					<Link to={"/favorite"} className="header__favorite">
						<FavoriteBorderIcon className="fav" />
					</Link>
					<div className="header__search" onClick={searchClick}>
						<SearchIcon className="fav " />
					</div>
				</div>
			</div>
		</header>
	);
}
