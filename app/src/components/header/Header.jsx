import "./Header.scss";
import React from "react";
import { Link } from "react-router-dom";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import CloseIcon from "@mui/icons-material/Close";
import SearchIcon from "@mui/icons-material/Search";
import { info } from "../../helper/defaultInfo";
import { toggleClass } from "../../helper/events";

export function Header() {
	const { links } = info.header;

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

	return (
		<header className="header">
			<div className="header__container">
				<Link to="/" className="header__logo">
					Bookshop
				</Link>
				<div className="header__content">
					<form className="header__form form hidden">
						<input
							className="header__input"
							type="text"
							placeholder="Search by Title, Category or ISBN"
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
										onClick={preventDefaultLink}>
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
