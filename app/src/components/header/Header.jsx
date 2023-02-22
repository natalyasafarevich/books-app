import "./Header.scss";
import React from "react";
import { Link } from "react-router-dom";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import CloseIcon from "@mui/icons-material/Close";
import SearchIcon from "@mui/icons-material/Search";
import { Search } from "@mui/icons-material";
// library.add(fab, faCheckSquare, faCoffee)
export function Header() {
	const links = [
		{
			url: "/",
			name: "Home",
			classNameLink: "header__link header__link_active",
			classNameItem: "header__item",
		},
		{
			url: "/collections",
			name: "Collections",
			classNameLink: "header__link",
			classNameItem: "header__item",
		},
		{
			url: "/articles",
			name: "Articles",
			classNameLink: "header__link",
			classNameItem: "header__item",
		},
	];
	const icons = [
		{
			urlPage: "/profile",
			class: "header__icon header__icon_profile",
		},
		{
			urlPage: "/search",
			class: "header__icon header__icon_search",
		},
		{
			urlPage: "/favorite",
			class: "header__icon header__icon_basket",
		},
	];
	const searchClick = (e) => {
		e.preventDefault();
		document.querySelector(".header__list").classList.toggle("hidden");
		document.querySelector(".header__form ").classList.toggle("hidden");
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
