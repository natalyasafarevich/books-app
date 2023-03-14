import "./Header.scss";
import React, { useState } from "react";
import { Link, redirect, useNavigate, useNavigation } from "react-router-dom";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import CloseIcon from "@mui/icons-material/Close";
import SearchIcon from "@mui/icons-material/Search";
import { info } from "../../helper/defaultInfo";
import { toggleClass } from "../../helper/events";
import { useDispatch, useSelector } from "react-redux";
import { setTopic } from "../../store/topic/actions";
import { errorOn } from "../../store/error/actions";
import { setSearchBook } from "../../store/books/search/actions";

export function Header() {
	const [value, setValue] = useState("");

	const results = useSelector((state) => state.search.searchBook);
	const { links } = info.header;

	const dispatch = useDispatch();
	const navigate = useNavigate();

	const searchClick = (e) => {
		e.preventDefault();
		const list = document.querySelector(".header__list");
		const form = document.querySelector(".header__form");
		toggleClass(list, "hidden");
		toggleClass(form, "hidden");
	};

	const preventDefaultLink = (e) => {
		e.preventDefault();
	};

	const formSubmin = (e) => {
		const value = e.target.value;
		setValue(value);
		if (e.keyCode === 13) {
			dispatch(setSearchBook(value));
			if (results.length !== 0) {
				navigate(`/search/${value}`);
				return;
			} else {
				dispatch(setTopic(1,value));
				navigate(`/search/${value}`);
			}
			// if (results.length === 0) {
			// 	dispatch(errorOn());
			// 	e.preventDefault();
			// }
		}
	};

	return (
		<header className="header">
			<div className="header__container">
				<Link to="/" className="header__logo">
					{/* Bookshop */}
				</Link>
				<div className="header__content">
					<form className="header__form form hidden">
						<input
							onKeyDown={(e) => formSubmin(e)}
							className="header__input"
							type="text"
							placeholder="Search by Title, Autor or Topic"
						/>
						<CloseIcon className="header__close" onClick={searchClick} />
					</form>
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
				<div className="header__box">
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
