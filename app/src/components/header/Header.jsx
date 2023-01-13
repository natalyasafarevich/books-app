import "./Header.scss";
import React from "react";

// library.add(fab, faCheckSquare, faCoffee)
export function Header() {
	const links = [
		{
			url: "/books",
			name: "books",
			classNameLink: "header__link header__link_active",
			classNameItem: "header__item",
		},
		{
			url: "/about",
			name: "About",
			classNameLink: "header__link",
			classNameItem: "header__item",
		},
		{
			url: "/pages",
			name: "Pages",
			classNameLink: "header__link",
			classNameItem: "header__item",
		},
		{
			url: "/contact",
			name: "Contact Us",
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
			urlPage: "/basket",
			class: "header__icon header__icon_basket",
		},
	];
	const preventDefaultLink = (e) => {
		e.preventDefault();
	};
	return (
		<header className="header">
			<div className="header__container">
				<a href="/home" onClick={preventDefaultLink} className="header__logo">
					Bookshop
				</a>
				<div className="header__content">
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
				<div className="header__icons">
					{icons.map((item, index) => (
							<React.Fragment key={index}>
							<a href={item.urlPage} className={item.class}></a>
							</React.Fragment>
						))}
					</div>
			</div>
		</header>
	);
}
